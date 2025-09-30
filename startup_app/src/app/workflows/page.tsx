"use client"

import { WorkflowCard } from "@/components/workflow-card"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function WorkflowsPage() {
  const allWorkflows = [
    // Early-Stage Idea Validation
    {
      title: "Lead Magnet Automation",
      description: "Capture and nurture leads automatically with smart email sequences",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 124,
      creator: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      },
      stats: {
        views: 2500,
        likes: 189,
      },
      badge: "Popular",
    },
    {
      title: "Customer Feedback Loop",
      description: "Collect and analyze customer feedback to validate your product ideas",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 98,
      creator: {
        name: "Mike Johnson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      },
      stats: {
        views: 1800,
        likes: 156,
      },
    },
    {
      title: "MVP Launch Checklist",
      description: "Automated workflow to ensure you don't miss critical launch steps",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 87,
      creator: {
        name: "Alex Rivera",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      },
      stats: {
        views: 1500,
        likes: 134,
      },
    },
    // Proven Lead Generation
    {
      title: "LinkedIn Outreach System",
      description: "Automate personalized LinkedIn outreach to generate quality B2B leads",
      image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 156,
      creator: {
        name: "Emma Davis",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      },
      stats: {
        views: 3200,
        likes: 245,
      },
      badge: "Trending",
    },
    {
      title: "Content Marketing Pipeline",
      description: "Streamline content creation, distribution, and lead capture",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 142,
      creator: {
        name: "James Wilson",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      },
      stats: {
        views: 2800,
        likes: 198,
      },
    },
    {
      title: "Webinar Funnel Automation",
      description: "Complete automation for webinar registration, reminders, and follow-ups",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 119,
      creator: {
        name: "Lisa Anderson",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      },
      stats: {
        views: 2100,
        likes: 167,
      },
    },
    // Battle-Tested Scale-Up
    {
      title: "Customer Onboarding Flow",
      description: "Automated onboarding sequences that reduce churn and increase activation",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 203,
      creator: {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop",
      },
      stats: {
        views: 4100,
        likes: 312,
      },
      badge: "Top Rated",
    },
    {
      title: "Revenue Analytics Dashboard",
      description: "Real-time revenue tracking and automated reporting for stakeholders",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 178,
      creator: {
        name: "Rachel Green",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      },
      stats: {
        views: 3500,
        likes: 267,
      },
    },
    {
      title: "Team Collaboration System",
      description: "Streamline team communication and project management workflows",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 145,
      creator: {
        name: "Tom Harris",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      },
      stats: {
        views: 2900,
        likes: 221,
      },
    },
    // Additional workflows
    {
      title: "Email Drip Campaign Builder",
      description: "Create sophisticated email sequences that convert leads into customers",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 167,
      creator: {
        name: "Nina Patel",
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
      },
      stats: {
        views: 2700,
        likes: 203,
      },
    },
    {
      title: "Social Media Scheduler",
      description: "Plan, schedule, and analyze social media content across all platforms",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      rating: 4.6,
      reviews: 134,
      creator: {
        name: "Chris Martinez",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop",
      },
      stats: {
        views: 2300,
        likes: 178,
      },
    },
    {
      title: "Customer Support Ticketing",
      description: "Automate customer support workflows and improve response times",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 156,
      creator: {
        name: "Sophie Turner",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
      },
      stats: {
        views: 2600,
        likes: 195,
      },
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All <span className="text-primary">Workflows</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore our complete collection of automation workflows designed for startups at every stage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allWorkflows.map((workflow, index) => (
            <WorkflowCard key={index} {...workflow} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
