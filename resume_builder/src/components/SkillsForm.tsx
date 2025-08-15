"use client"
import { Plus, X, Code, Users, Globe } from "lucide-react"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import type { ResumeData } from "@/app/page"

type SkillCategory = keyof ResumeData["skills"]

type SkillsWithDraft = ResumeData["skills"] & {
  draft?: Partial<Record<SkillCategory, string>>
}

interface SkillsFormProps {
  data: SkillsWithDraft
  onChange: (data: SkillsWithDraft) => void
}

export function SkillsForm({ data, onChange }: SkillsFormProps) {
  const handleDraftChange = (category: SkillCategory, value: string) => {
    onChange({
      ...data,
      draft: { ...data.draft, [category]: value },
    })
  }

  const addSkill = (category: SkillCategory) => {
    const skill = data.draft?.[category]?.trim() || ""
    if (skill && !data[category].includes(skill)) {
      onChange({
        ...data,
        [category]: [...data[category], skill],
        draft: { ...data.draft, [category]: "" },
      })
    }
  }

  const removeSkill = (category: SkillCategory, skillToRemove: string) => {
    onChange({
      ...data,
      [category]: data[category].filter((s) => s !== skillToRemove),
    })
  }

  const handleKeyPress = (e: React.KeyboardEvent, category: SkillCategory) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill(category)
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {[
        {
          title: "Technical Skills",
          icon: Code,
          category: "technical" as SkillCategory,
          placeholder: "e.g., JavaScript, React, Python, AWS",
        },
        {
          title: "Soft Skills",
          icon: Users,
          category: "soft" as SkillCategory,
          placeholder: "e.g., Leadership, Communication, Problem Solving",
        },
        {
          title: "Languages",
          icon: Globe,
          category: "languages" as SkillCategory,
          placeholder: "e.g., English (Native), Spanish (Fluent)",
        },
      ].map(({ title, category, placeholder, icon: Icon }) => (
        <div key={category} className="space-y-3">
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <Icon className="h-4 w-4" />
            {title}
          </h3>

          <div className="flex gap-2">
            <Input
              value={data.draft?.[category] || ""}
              onChange={(e) => handleDraftChange(category, e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, category)}
              placeholder={placeholder}
              className="transition-all duration-200 focus:scale-105"
            />
            <Button onClick={() => addSkill(category)} size="sm" className="shrink-0">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex gap-2 flex-wrap">
            {data[category].map((skill, index) => (
              <Badge
                key={skill}
                onClick={() => removeSkill(category, skill)}
                className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
                <X className="h-3 w-3 ml-1" />
              </Badge>
            ))}
          </div>

          {data[category].length === 0 && (
            <p className="text-sm text-muted-foreground">
              No {title.toLowerCase()} added yet. Type and press Enter or click + to add.
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
