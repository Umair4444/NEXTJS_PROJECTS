"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ComingSoon = ({ message }: any) => {
  return (
    <div className="bg-brand-gray-50 rounded-2xl p-12 mb-8">
      <p className="text-brand-gray-600 mb-4">
        This page is coming soon!{message}
      </p>
      <Button
        onClick={() => window.history.back()}
        className="bg-brand-blue hover:bg-brand-blue/90"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Go Back
      </Button>
    </div>
  );
};

export default ComingSoon;
