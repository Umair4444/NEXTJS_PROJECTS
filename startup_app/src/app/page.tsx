import { HeroSection } from "@/components/hero-section";
import { WorkflowSection } from "@/components/workflow-section";
import { RewardsSection } from "@/components/rewards-section";
import { CTASection } from "@/components/cta-section";
import { PricingSection } from "@/components/pricing-section";
import { AuthorsSection } from "@/components/authors-section";
import { JoinSection } from "@/components/join-section";

export default function Home() {
  const workflowData = {
    earlyStage: [
      {
        title: "MVP Validation Framework",
        description:
          "Build and test your minimum viable product in 48 hours using automation",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        rating: 5,
        reviews: 12,
        creator: {
          name: "Sarah Chen",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        },
        stats: {
          views: 142,
          likes: 8,
        },
        badge: "10:32",
      },
      {
        title: "Customer Interview Automation",
        description:
          "Build automated customer interview scheduling and analysis",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        rating: 5,
        reviews: 8,
        creator: {
          name: "Marcus Hartwell",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
        },
        stats: {
          views: 89,
          likes: 5,
        },
        badge: "14:22",
      },
      {
        title: "Market Research in Minutes",
        description:
          "Gather competitive intelligence and market data automatically",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        rating: 5,
        reviews: 15,
        creator: {
          name: "Lisa Steinborn",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
        },
        stats: {
          views: 203,
          likes: 12,
        },
        badge: "08:45",
      },
    ],
    leadGeneration: [
      {
        title: "LinkedIn Lead Magnet",
        description:
          "Automated LinkedIn outreach and lead qualification system",
        image:
          "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&h=600&fit=crop",
        rating: 5,
        reviews: 18,
        creator: {
          name: "David Park",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        },
        stats: {
          views: 256,
          likes: 14,
        },
        badge: "12:15",
      },
      {
        title: "Cold Email Sequences",
        description:
          "Build automated cold email campaigns with follow-up sequences",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
        rating: 4,
        reviews: 10,
        creator: {
          name: "Emma Rodriguez",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
        },
        stats: {
          views: 178,
          likes: 9,
        },
        badge: "16:30",
      },
      {
        title: "Content Marketing Automation",
        description:
          "Automate your content distribution across multiple channels",
        image:
          "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop",
        rating: 5,
        reviews: 22,
        creator: {
          name: "Alex Thompson",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        },
        stats: {
          views: 312,
          likes: 18,
        },
        badge: "11:20",
      },
    ],
    scaleUp: [
      {
        title: "Sales Pipeline Automation",
        description: "Automate your entire sales process from lead to close",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        rating: 5,
        reviews: 25,
        creator: {
          name: "Michael Chang",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
        },
        stats: {
          views: 445,
          likes: 28,
        },
        badge: "18:45",
      },
      {
        title: "Customer Onboarding Flow",
        description:
          "Automated customer onboarding with personalized touchpoints",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
        rating: 5,
        reviews: 19,
        creator: {
          name: "Sophie Anderson",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
        },
        stats: {
          views: 334,
          likes: 21,
        },
        badge: "14:55",
      },
      {
        title: "Revenue Analytics Dashboard",
        description: "Real-time revenue tracking and forecasting automation",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        rating: 5,
        reviews: 16,
        creator: {
          name: "James Wilson",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
        },
        stats: {
          views: 289,
          likes: 17,
        },
        badge: "13:10",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=1080&fit=crop&q=80')] bg-fixed bg-cover bg-center">
      <div className="min-h-screen bg-background/95 backdrop-blur-sm">
        <div className="pt-20">
          <HeroSection />

          <WorkflowSection
            title="Early-Stage Idea Validation Automations"
            icon="🚀"
            count="5 curated workflows"
            workflows={workflowData.earlyStage}
          />

          <WorkflowSection
            title="Proven Lead Generation Systems"
            icon="🎯"
            count="8 curated workflows"
            workflows={workflowData.leadGeneration}
          />

          <WorkflowSection
            title="Battle-Tested Scale-Up Automations"
            icon="🚀"
            count="9 curated workflows"
            workflows={workflowData.scaleUp}
          />

          <RewardsSection />
          <PricingSection />
          <AuthorsSection />
          <JoinSection />
          <CTASection />
        </div>
      </div>
    </main>
  );
}
