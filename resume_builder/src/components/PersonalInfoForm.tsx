"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { ResumeData } from "@/app/page"

interface PersonalInfoFormProps {
  data: ResumeData["personalInfo"]
  onChange: (data: ResumeData["personalInfo"]) => void
}

export function PersonalInfoForm({ data, onChange }: PersonalInfoFormProps) {
  const handleChange = (field: keyof ResumeData["personalInfo"], value: string) => {
    onChange({
      ...data,
      [field]: value,
    })
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2 stagger-item">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            value={data.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="John Doe"
            className="form-transition hover-glow"
          />
        </div>

        <div className="space-y-2 stagger-item">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="john.doe@email.com"
            className="form-transition hover-glow"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2 stagger-item">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+1 (555) 123-4567"
            className="form-transition hover-glow"
          />
        </div>

        <div className="space-y-2 stagger-item">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={data.location}
            onChange={(e) => handleChange("location", e.target.value)}
            placeholder="New York, NY"
            className="form-transition hover-glow"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2 stagger-item">
          <Label htmlFor="linkedin">LinkedIn Profile</Label>
          <Input
            id="linkedin"
            value={data.linkedin}
            onChange={(e) => handleChange("linkedin", e.target.value)}
            placeholder="linkedin.com/in/johndoe"
            className="form-transition hover-glow"
          />
        </div>

        <div className="space-y-2 stagger-item">
          <Label htmlFor="website">Website/Portfolio</Label>
          <Input
            id="website"
            value={data.website}
            onChange={(e) => handleChange("website", e.target.value)}
            placeholder="johndoe.com"
            className="form-transition hover-glow"
          />
        </div>
      </div>

      <div className="space-y-2 stagger-item">
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea
          id="summary"
          value={data.summary}
          onChange={(e) => handleChange("summary", e.target.value)}
          placeholder="Write a brief professional summary highlighting your key skills and experience..."
          rows={4}
          className="form-transition hover-glow resize-none"
        />
        <p className="text-sm text-muted-foreground animate-fade-in">
          2-3 sentences highlighting your key qualifications and career objectives
        </p>
      </div>
    </div>
  )
}
