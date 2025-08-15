"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PersonalInfoForm } from "@/components/PersonalInfoForm";
import { ExperienceForm } from "@/components/ExperienceForm";
import { EducationForm } from "@/components/EducationForm";
import { SkillsForm } from "@/components/SkillsForm";
import { ResumePreview } from "@/components/ResumePreview";
import { FileText, Download, Eye, Sparkles } from "lucide-react";
import { exportToPDF, exportToJPG, exportToWord } from "@/lib/export-utils";
import { useToast } from "@/hooks/use-toast";

export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    website: string;
    summary: string;
  };
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    gpa?: string;
  }>;
  skills: {
    technical: string[];
    soft: string[];
    languages: string[];
  };
}

const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    website: "",
    summary: "",
  },
  experience: [],
  education: [],
  skills: {
    technical: [],
    soft: [],
    languages: [],
  },
};

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [activeTab, setActiveTab] = useState("personal");
  const [showPreview, setShowPreview] = useState(false);
  const [exportLoading, setExportLoading] = useState<string | null>(null);
  const { toast } = useToast();

  const updateResumeData = (section: keyof ResumeData, data: any) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const handleExport = async (type: "pdf" | "jpg" | "word") => {
    if (!resumeData.personalInfo.fullName) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least your name before exporting.",
        variant: "destructive",
      });
      return;
    }

    setExportLoading(type);
    try {
      const filename = `${resumeData.personalInfo.fullName.replace(
        /\s+/g,
        "_"
      )}_resume`;

      switch (type) {
        case "pdf":
          await exportToPDF("resume-preview", `${filename}.pdf`);
          toast({
            title: "Success",
            description: "Resume exported as PDF successfully!",
          });
          break;
        case "jpg":
          await exportToJPG("resume-preview", `${filename}.jpg`);
          toast({
            title: "Success",
            description: "Resume exported as JPG successfully!",
          });
          break;
        case "word":
          await exportToWord(resumeData, `${filename}.docx`);
          toast({
            title: "Success",
            description: "Resume exported as Word document successfully!",
          });
          break;
      }
    } catch (error) {
      console.error("Export error:", error);
      toast({
        title: "Export Failed",
        description: `Failed to export resume as ${type.toUpperCase()}. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setExportLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 animate-float">
            <Sparkles className="h-8 w-8 text-blue-600 animate-pulse-glow" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-white animate-gradient">
              Professional Resume Builder
            </h1>
            <Sparkles className="h-8 w-8 text-purple-600 animate-pulse-glow" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 animate-slide-up">
            Create ATS-friendly resumes with professional designs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="animate-slide-in-left hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Resume Information
                </CardTitle>
                <CardDescription>
                  Fill in your details to create a professional resume
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4 hover-glow">
                    <TabsTrigger value="personal" className="hover-scale">
                      Personal
                    </TabsTrigger>
                    <TabsTrigger value="experience" className="hover-scale">
                      Experience
                    </TabsTrigger>
                    <TabsTrigger value="education" className="hover-scale">
                      Education
                    </TabsTrigger>
                    <TabsTrigger value="skills" className="hover-scale">
                      Skills
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent
                    value="personal"
                    className="mt-6 tab-content-enter-active"
                  >
                    <PersonalInfoForm
                      data={resumeData.personalInfo}
                      onChange={(data) =>
                        updateResumeData("personalInfo", data)
                      }
                    />
                  </TabsContent>

                  <TabsContent
                    value="experience"
                    className="mt-6 tab-content-enter-active"
                  >
                    <ExperienceForm
                      data={resumeData.experience}
                      onChange={(data) => updateResumeData("experience", data)}
                    />
                  </TabsContent>

                  <TabsContent
                    value="education"
                    className="mt-6 tab-content-enter-active"
                  >
                    <EducationForm
                      data={resumeData.education}
                      onChange={(data) => updateResumeData("education", data)}
                    />
                  </TabsContent>

                  <TabsContent
                    value="skills"
                    className="mt-6 tab-content-enter-active"
                  >
                    <SkillsForm
                      data={resumeData.skills}
                      onChange={(data) => updateResumeData("skills", data)}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Preview Section */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 animate-slide-in-right hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Preview & Export
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={() => setShowPreview(!showPreview)}
                  variant="outline"
                  className="w-full button-enhanced hover-glow"
                >
                  {showPreview ? "Hide Preview" : "Show Preview"}
                </Button>

                <div className="space-y-2">
                  <Button
                    className="w-full button-enhanced bg-black text-white hover:bg-black/80"
                    onClick={() => handleExport("pdf")}
                    disabled={exportLoading !== null}
                  >
                    {exportLoading === "pdf" ? (
                      <div className="flex items-center">
                        <div className="spinner-enhanced w-4 h-4 mr-2"></div>
                        Generating PDF...
                      </div>
                    ) : (
                      <>
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent button-enhanced hover-glow"
                    onClick={() => handleExport("jpg")}
                    disabled={exportLoading !== null}
                  >
                    {exportLoading === "jpg" ? (
                      <div className="flex items-center">
                        <div className="spinner-enhanced w-4 h-4 mr-2"></div>
                        Generating JPG...
                      </div>
                    ) : (
                      <>
                        <Download className="h-4 w-4 mr-2" />
                        Download JPG
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent button-enhanced hover-glow"
                    onClick={() => handleExport("word")}
                    disabled={exportLoading !== null}
                  >
                    {exportLoading === "word" ? (
                      <div className="flex items-center">
                        <div className="spinner-enhanced w-4 h-4 mr-2"></div>
                        Generating Word...
                      </div>
                    ) : (
                      <>
                        <Download className="h-4 w-4 mr-2" />
                        Download Word
                      </>
                    )}
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center animate-fade-in">
                  Fill in your information and click preview to export your
                  resume
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Preview Modal/Section */}
        {showPreview && (
          <div className="mt-8 preview-enter-active">
            <div id="resume-preview">
              <ResumePreview data={resumeData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
