import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
} from "docx";
import type { ResumeData } from "@/app/page";

export const exportToPDF = async (
  elementId: string,
  filename = "resume.pdf"
) => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error("Resume element not found");
  }

  try {
    // Temporarily adjust element's CSS to ensure full visibility
    const originalStyle = element.style.cssText;
    element.style.width = "210mm"; // A4 width
    element.style.padding = "2mm"; // Add padding for margins
    element.style.boxSizing = "border-box"; // Include padding in width
    element.style.overflow = "visible"; // Prevent content clipping

    // Capture the element with html2canvas
    const canvas = await html2canvas(element, {
      scale: 2.0, // Reduced scale for better performance
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      windowWidth: element.scrollWidth, // Ensure full width is captured
      windowHeight: element.scrollHeight, // Ensure full height is captured
    });

    // Restore original styles
    element.style.cssText = originalStyle;

    // Initialize jsPDF
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // A4 dimensions
    const pageWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const margin = 2; // 10mm margins
    const imgWidth = pageWidth - 2 * margin; // Width with margins
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

    let heightLeft = imgHeight;
    let position = 0;
    let pageNumber = 1;

    // Add first page
    pdf.addImage(
      canvas.toDataURL("image/png"),
      "PNG",
      margin,
      margin,
      imgWidth,
      imgHeight
    );
    heightLeft -= pageHeight - 2 * margin;

    // Handle additional pages
    while (heightLeft > 0) {
      pdf.addPage();
      pageNumber++;
      // Calculate the portion of the image to show on the new page
      const offsetY =
        (pageNumber - 1) *
        (pageHeight - 2 * margin) *
        (canvas.width / imgWidth);
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const ctx = tempCanvas.getContext("2d");
      if (ctx) {
        // Crop the image for the current page
        ctx.drawImage(
          canvas,
          0,
          offsetY,
          canvas.width,
          canvas.height,
          0,
          0,
          canvas.width,
          canvas.height
        );
        pdf.addImage(
          tempCanvas.toDataURL("image/png"),
          "PNG",
          margin,
          margin,
          imgWidth,
          imgHeight
        );
      }
      heightLeft -= pageHeight - 2 * margin;
    }

    // Save the PDF
    pdf.save(filename);
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF");
  }
};

export const exportToJPG = async (
  elementId: string,
  filename = "resume.jpg",
  margins = {
    left: 2, // Left margin in mm
    right: 2, // Right margin in mm
    top: 2, // Top margin in mm
    bottom: 2, // Bottom margin in mm
  }
) => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error("Resume element not found");
  }

  try {
    // Temporarily adjust element's CSS to ensure full visibility
    const originalStyle = element.style.cssText;
    element.style.width = "fit-content"; // Allow natural width
    element.style.overflow = "visible"; // Prevent content clipping

    // Capture the element with html2canvas
    const canvas = await html2canvas(element, {
      scale: 2, // High resolution
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    });

    // Restore original styles
    element.style.cssText = originalStyle;

    // Convert mm to pixels (1 mm = 3.78 pixels at 96 DPI, adjusted for scale: 2)
    const scale = 2;
    const mmToPixels = 3.78 * scale;
    const leftMarginPx = margins.left * mmToPixels;
    const rightMarginPx = margins.right * mmToPixels;
    const topMarginPx = margins.top * mmToPixels;
    const bottomMarginPx = margins.bottom * mmToPixels;

    // Create a new canvas with margins
    const newCanvas = document.createElement("canvas");
    newCanvas.width = canvas.width + leftMarginPx + rightMarginPx;
    newCanvas.height = canvas.height + topMarginPx + bottomMarginPx;
    const ctx = newCanvas.getContext("2d");

    if (!ctx) {
      throw new Error("Failed to get 2D context for new canvas");
    }

    // Fill background with white
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);

    // Draw the original canvas onto the new canvas with margins
    ctx.drawImage(canvas, leftMarginPx, topMarginPx, canvas.width, canvas.height);

    // Export to JPG
    newCanvas.toBlob(
      (blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
      },
      "image/jpeg",
      0.95
    );
  } catch (error) {
    console.error("Error generating JPG:", error);
    throw new Error("Failed to generate JPG");
  }
};

export const exportToWord = async (
  data: ResumeData,
  filename = "resume.docx"
) => {
  try {
    const doc = new Document({
      sections: [
        {
          children: [
            // Header
            new Paragraph({
              children: [
                new TextRun({
                  text: data.personalInfo.fullName || "Your Name",
                  bold: true,
                  size: 32,
                }),
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 200 },
            }),

            // Contact Info
            new Paragraph({
              children: [
                new TextRun({
                  text: [
                    data.personalInfo.email,
                    data.personalInfo.phone,
                    data.personalInfo.location,
                    data.personalInfo.linkedin,
                  ]
                    .filter(Boolean)
                    .join(" | "),
                }),
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 400 },
            }),

            // Professional Summary
            ...(data.personalInfo.summary
              ? [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "PROFESSIONAL SUMMARY",
                        bold: true,
                        size: 24,
                      }),
                    ],
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 200, after: 200 },
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: data.personalInfo.summary }),
                    ],
                    spacing: { after: 400 },
                  }),
                ]
              : []),

            // Experience
            ...(data.experience.length > 0
              ? [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "PROFESSIONAL EXPERIENCE",
                        bold: true,
                        size: 24,
                      }),
                    ],
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 200, after: 200 },
                  }),
                  ...data.experience.flatMap((exp) => [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: exp.position,
                          bold: true,
                          size: 22,
                        }),
                        new TextRun({
                          text: ` | ${exp.company}`,
                          size: 22,
                        }),
                      ],
                      spacing: { before: 200, after: 100 },
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `${formatDateForWord(exp.startDate)} - ${
                            exp.current
                              ? "Present"
                              : formatDateForWord(exp.endDate)
                          }`,
                          italics: true,
                        }),
                      ],
                      spacing: { after: 100 },
                    }),
                    ...(exp.description
                      ? [
                          new Paragraph({
                            children: [new TextRun({ text: exp.description })],
                            spacing: { after: 200 },
                          }),
                        ]
                      : []),
                  ]),
                ]
              : []),

            // Education
            ...(data.education.length > 0
              ? [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "EDUCATION",
                        bold: true,
                        size: 24,
                      }),
                    ],
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 200, after: 200 },
                  }),
                  ...data.education.flatMap((edu) => [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `${edu.degree} in ${edu.field}`,
                          bold: true,
                          size: 22,
                        }),
                        new TextRun({
                          text: ` | ${edu.institution}`,
                          size: 22,
                        }),
                      ],
                      spacing: { before: 200, after: 100 },
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `${formatDateForWord(
                            edu.startDate
                          )} - ${formatDateForWord(edu.endDate)}${
                            edu.gpa ? ` | GPA: ${edu.gpa}` : ""
                          }`,
                          italics: true,
                        }),
                      ],
                      spacing: { after: 200 },
                    }),
                  ]),
                ]
              : []),

            // Skills
            ...(data.skills.technical.length > 0 ||
            data.skills.soft.length > 0 ||
            data.skills.languages.length > 0
              ? [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "SKILLS",
                        bold: true,
                        size: 24,
                      }),
                    ],
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 200, after: 200 },
                  }),
                  ...(data.skills.technical.length > 0
                    ? [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Technical Skills: ",
                              bold: true,
                            }),
                            new TextRun({
                              text: data.skills.technical.join(", "),
                            }),
                          ],
                          spacing: { after: 100 },
                        }),
                      ]
                    : []),
                  ...(data.skills.soft.length > 0
                    ? [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Soft Skills: ",
                              bold: true,
                            }),
                            new TextRun({
                              text: data.skills.soft.join(", "),
                            }),
                          ],
                          spacing: { after: 100 },
                        }),
                      ]
                    : []),
                  ...(data.skills.languages.length > 0
                    ? [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Languages: ",
                              bold: true,
                            }),
                            new TextRun({
                              text: data.skills.languages.join(", "),
                            }),
                          ],
                          spacing: { after: 100 },
                        }),
                      ]
                    : []),
                ]
              : []),
          ],
        },
      ],
    });

    const buffer = await Packer.toBuffer(doc);
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error generating Word document:", error);
    throw new Error("Failed to generate Word document");
  }
};

const formatDateForWord = (dateString: string) => {
  if (!dateString) return "";
  const date = new Date(dateString + "-01");
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};
