"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { ResumeData } from "@/app/page";
import { Mail, Phone, MapPin, Linkedin, Layout, Palette } from "lucide-react";

interface ResumePreviewProps {
  data: ResumeData;
}

type ResumeTemplate = "modern" | "classic" | "minimal";

export function ResumePreview({ data }: ResumePreviewProps) {
  const [selectedTemplate, setSelectedTemplate] =
    useState<ResumeTemplate>("modern");

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString + "-01");
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const templates = [
    { id: "modern" as const, name: "Modern", icon: Layout },
    { id: "classic" as const, name: "Classic", icon: Palette },
    { id: "minimal" as const, name: "Minimal", icon: Layout },
  ];

  const ModernTemplate = () => (
    <div className="bg-white text-gray-900 p-8 shadow-lg">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 -m-8 mb-8 rounded-t-lg">
        <h1 className="text-3xl font-bold mb-2">
          {data.personalInfo.fullName || "Your Name"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm opacity-90">
          {data.personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {data.personalInfo.email}
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {data.personalInfo.phone}
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {data.personalInfo.location}
            </div>
          )}
          {data.personalInfo.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              {data.personalInfo.linkedin}
            </div>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {data.personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-blue-800 mb-3 border-b-2 border-blue-200 pb-1">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {data.personalInfo.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-1">
            PROFESSIONAL EXPERIENCE
          </h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4 last:mb-0">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-gray-900">{exp.position}</h3>
                  <p className="text-blue-700 font-semibold">{exp.company}</p>
                </div>
                <div className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                  {formatDate(exp.startDate)} -{" "}
                  {exp.current ? "Present" : formatDate(exp.endDate)}
                </div>
              </div>
              {exp.description && (
                <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line ml-4 border-l-2 border-blue-200 pl-3">
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-1">
            EDUCATION
          </h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3 last:mb-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-blue-700 font-semibold">
                    {edu.institution}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                  )}
                </div>
                <div className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 ||
        data.skills.soft.length > 0 ||
        data.skills.languages.length > 0) && (
        <section>
          <h2 className="text-lg font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-1">
            SKILLS
          </h2>
          <div className="space-y-3">
            {data.skills.technical.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.technical.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {data.skills.soft.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.soft.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-green-100 text-green-800 hover:bg-green-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {data.skills.languages.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.languages.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-purple-100 text-purple-800 hover:bg-purple-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );

  const ClassicTemplate = () => (
    <div className="bg-white text-gray-900 p-8 shadow-lg font-serif">
      {/* Header */}
      <div className="text-center mb-8 pb-4 border-b-2 border-gray-800">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {data.personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
          {data.personalInfo.email && (
            <span className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              {data.personalInfo.email}
            </span>
          )}
          {data.personalInfo.phone && (
            <span className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              {data.personalInfo.phone}
            </span>
          )}
          {data.personalInfo.location && (
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {data.personalInfo.location}
            </span>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {data.personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 text-center border-b border-gray-400 pb-1">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed text-center italic">
            {data.personalInfo.summary}
          </p>
        </section>
      )}

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Experience */}
          {data.experience.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-4 text-center border-b border-gray-400 pb-1">
                EXPERIENCE
              </h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-4 last:mb-0">
                  <div className="mb-2">
                    <h3 className="font-bold text-gray-900">{exp.position}</h3>
                    <p className="font-semibold text-gray-700">{exp.company}</p>
                    <p className="text-sm text-gray-600 italic">
                      {formatDate(exp.startDate)} -{" "}
                      {exp.current ? "Present" : formatDate(exp.endDate)}
                    </p>
                  </div>
                  {exp.description && (
                    <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </div>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-4 text-center border-b border-gray-400 pb-1">
                EDUCATION
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-3 last:mb-0">
                  <h3 className="font-bold text-gray-900">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="font-semibold text-gray-700">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    {edu.gpa && ` • GPA: ${edu.gpa}`}
                  </p>
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Right Column - Skills */}
        <div className="space-y-6">
          {(data.skills.technical.length > 0 ||
            data.skills.soft.length > 0 ||
            data.skills.languages.length > 0) && (
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-4 text-center border-b border-gray-400 pb-1">
                SKILLS
              </h2>
              <div className="space-y-4">
                {data.skills.technical.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Technical
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {data.skills.technical.map((skill) => (
                        <li key={skill}>• {skill}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {data.skills.soft.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Soft Skills
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {data.skills.soft.map((skill) => (
                        <li key={skill}>• {skill}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {data.skills.languages.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Languages
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {data.skills.languages.map((skill) => (
                        <li key={skill}>• {skill}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );

  const MinimalTemplate = () => (
    <div className="bg-white text-gray-900 p-8 shadow-lg">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-light text-gray-900 mb-2">
          {data.personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && (
            <span>{data.personalInfo.location}</span>
          )}
          {data.personalInfo.linkedin && (
            <span>{data.personalInfo.linkedin}</span>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {data.personalInfo.summary && (
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed text-lg font-light">
            {data.personalInfo.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-light text-gray-900 mb-6 uppercase tracking-wider">
            Experience
          </h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-6 last:mb-0">
              <div className="flex justify-between items-baseline mb-2">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {exp.position}
                  </h3>
                  <p className="text-gray-700">{exp.company}</p>
                </div>
                <div className="text-sm text-gray-500">
                  {formatDate(exp.startDate)} -{" "}
                  {exp.current ? "Present" : formatDate(exp.endDate)}
                </div>
              </div>
              {exp.description && (
                <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line pl-4 border-l border-gray-200">
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-light text-gray-900 mb-6 uppercase tracking-wider">
            Education
          </h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-4 last:mb-0">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-gray-700">{edu.institution}</p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 ||
        data.skills.soft.length > 0 ||
        data.skills.languages.length > 0) && (
        <section>
          <h2 className="text-xl font-light text-gray-900 mb-6 uppercase tracking-wider">
            Skills
          </h2>
          <div className="space-y-4">
            {data.skills.technical.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Technical Skills
                </h3>
                <p className="text-gray-700 text-sm">
                  {data.skills.technical.join(" • ")}
                </p>
              </div>
            )}
            {data.skills.soft.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Soft Skills</h3>
                <p className="text-gray-700 text-sm">
                  {data.skills.soft.join(" • ")}
                </p>
              </div>
            )}
            {data.skills.languages.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Languages</h3>
                <p className="text-gray-700 text-sm">
                  {data.skills.languages.join(" • ")}
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "modern":
        return <ModernTemplate />;
      case "classic":
        return <ClassicTemplate />;
      case "minimal":
        return <MinimalTemplate />;
      default:
        return <ModernTemplate />;
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Choose Template</h3>
          <div className="flex gap-2">
            {templates.map((template) => {
              const Icon = template.icon;
              return (
                <Button
                  key={template.id}
                  variant={
                    selectedTemplate === template.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedTemplate(template.id)}
                  className={
                    selectedTemplate === template.id
                      ? "flex items-center gap-2 bg-black text-white hover:bg-black/70 "
                      : ""
                  }
                >
                  <Icon className="h-4 w-4" />
                  {template.name}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden bg-white print:border-0 print:rounded-none">
          {!data.personalInfo.fullName &&
          data.experience.length === 0 &&
          data.education.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p>Fill in your information to see the resume preview</p>
            </div>
          ) : (
            renderTemplate()
          )}
        </div>
      </CardContent>
    </Card>
  );
}
