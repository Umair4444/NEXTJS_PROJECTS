"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2, Briefcase } from "lucide-react"
import type { ResumeData } from "@/app/page"

interface ExperienceFormProps {
  data: ResumeData["experience"]
  onChange: (data: ResumeData["experience"]) => void
}

export function ExperienceForm({ data, onChange }: ExperienceFormProps) {
  const addExperience = () => {
    const newExperience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    }
    onChange([...data, newExperience])
  }

  const removeExperience = (id: string) => {
    onChange(data.filter((exp) => exp.id !== id))
  }

  const updateExperience = (id: string, field: string, value: any) => {
    onChange(data.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)))
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2 animate-slide-in-left">
          <Briefcase className="h-5 w-5" />
          Work Experience
        </h3>
        <Button onClick={addExperience} size="sm" className="button-enhanced hover-glow">
          <Plus className="h-4 w-4 mr-2" />
          Add Experience
        </Button>
      </div>

      {data.length === 0 ? (
        <Card className="border-dashed hover-lift">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Briefcase className="h-12 w-12 text-muted-foreground mb-4 animate-float" />
            <p className="text-muted-foreground text-center animate-fade-in">
              No work experience added yet. Click "Add Experience" to get started.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {data.map((experience, index) => (
            <Card
              key={experience.id}
              className="hover-lift stagger-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-base">
                  Experience #{index + 1}
                  <Button
                    onClick={() => removeExperience(experience.id)}
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive hover-scale"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Company Name *</Label>
                    <Input
                      value={experience.company}
                      onChange={(e) => updateExperience(experience.id, "company", e.target.value)}
                      placeholder="Company Inc."
                      className="form-transition hover-glow"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Position *</Label>
                    <Input
                      value={experience.position}
                      onChange={(e) => updateExperience(experience.id, "position", e.target.value)}
                      placeholder="Software Engineer"
                      className="form-transition hover-glow"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Start Date *</Label>
                    <Input
                      type="month"
                      value={experience.startDate}
                      onChange={(e) => updateExperience(experience.id, "startDate", e.target.value)}
                      className="form-transition hover-glow"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Input
                      type="month"
                      value={experience.endDate}
                      onChange={(e) => updateExperience(experience.id, "endDate", e.target.value)}
                      disabled={experience.current}
                      className="form-transition hover-glow"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`current-${experience.id}`}
                    checked={experience.current}
                    onCheckedChange={(checked) => {
                      updateExperience(experience.id, "current", checked)
                      if (checked) {
                        updateExperience(experience.id, "endDate", "")
                      }
                    }}
                    className="hover-scale"
                  />
                  <Label htmlFor={`current-${experience.id}`}>I currently work here</Label>
                </div>

                <div className="space-y-2">
                  <Label>Job Description</Label>
                  <Textarea
                    value={experience.description}
                    onChange={(e) => updateExperience(experience.id, "description", e.target.value)}
                    placeholder="• Developed and maintained web applications using React and Node.js&#10;• Collaborated with cross-functional teams to deliver high-quality software&#10;• Improved application performance by 30% through code optimization"
                    rows={4}
                    className="form-transition hover-glow resize-none"
                  />
                  <p className="text-sm text-muted-foreground animate-fade-in">
                    Use bullet points to describe your key achievements and responsibilities
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
