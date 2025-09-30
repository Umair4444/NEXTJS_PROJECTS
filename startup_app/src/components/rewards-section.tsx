"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export function RewardsSection() {
  const rewards = [
    {
      title: "What Gets Rewarded",
      items: [
        "Share Your Feedback & Learnings",
        "Share Growth Numbers",
        "Create Best Community Automations",
      ],
    },
    {
      title: "Monthly Rewards",
      items: [
        "Free Automation Expert Hours",
        "Private Dream to Reality Community",
        "Fast Track Veritas Studio Qualification",
        "Fast Track to Qualify for Funding",
      ],
    },
  ];

  return (
    <section id="community" className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Monthly Community{" "}
              <span className="text-primary">Rewards Program</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Startups that actively contribute to our community get exclusive
            rewards every month
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {rewards.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {idx === 0 ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <Trophy className="w-5 h-5 text-primary" />
                    )}
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-sm text-muted-foreground max-w-3xl mx-auto"
        >
          <p>
            Winner&apos;s selected monthly based on community activity, sales and
            contributor profile. Active participation in sharing real numbers
            and community focused.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
