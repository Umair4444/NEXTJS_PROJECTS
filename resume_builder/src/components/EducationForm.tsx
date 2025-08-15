"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2, GraduationCap } from "lucide-react"
import type { ResumeData } from "@/app/page"

interface EducationFormProps {
  data: ResumeData["education"]
  onChange: (data: ResumeData["education"]) => void
}

export function EducationForm({ data, onChange }: EducationFormProps) {
  const addEducation = () => {
    const newEducation = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      gpa: "",
    }
    onChange([...data, newEducation])
  }

  const removeEducation = (id: string) => {
    onChange(data.filter((edu) => edu.id !== id))
  }

  const updateEducation = (id: string, field: string, value: string) => {
    onChange(data.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)))
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          Education
        </h3>
        <Button onClick={addEducation} size="sm" className="animate-bounce-in">
          <Plus className="h-4 w-4 mr-2" />
          Add Education
        </Button>
      </div>

      {data.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <GraduationCap className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-center">
              No education added yet. Click "Add Education" to get started.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {data.map((education, index) => (
            <Card key={education.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-base">
                  Education #{index + 1}
                  <Button
                    onClick={() => removeEducation(education.id)}
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Institution *</Label>
                    <Input
                      value={education.institution}
                      onChange={(e) => updateEducation(education.id, "institution", e.target.value)}
                      placeholder="University of Technology"
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Degree *</Label>
                    <Input
                      value={education.degree}
                      onChange={(e) => updateEducation(education.id, "degree", e.target.value)}
                      placeholder="Bachelor of Science"
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Field of Study *</Label>
                  <Input
                    value={education.field}
                    onChange={(e) => updateEducation(education.id, "field", e.target.value)}
                    placeholder="Computer Science"
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Input
                      type="month"
                      value={education.startDate}
                      onChange={(e) => updateEducation(education.id, "startDate", e.target.value)}
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Input
                      type="month"
                      value={education.endDate}
                      onChange={(e) => updateEducation(education.id, "endDate", e.target.value)}
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>GPA (Optional)</Label>
                    <Input
                      value={education.gpa || ""}
                      onChange={(e) => updateEducation(education.id, "gpa", e.target.value)}
                      placeholder="3.8"
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
