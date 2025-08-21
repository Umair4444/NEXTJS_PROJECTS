import { faqs } from "@/lib/mockDataContacts";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
            FAQ
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our products, services, and
            policies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <h3 className="font-bold text-foreground text-lg mb-4 group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Button variant="outline" size="lg" className="shadow-lg">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
