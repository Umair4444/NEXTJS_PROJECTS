import React from "react";
import { SidebarSection } from "./SidebarSection";

export function Comments() {
  return (
    <SidebarSection title="Comments">
      <p>“Great blog! Learned a lot.” – User1</p>
      <div className="flex items-center space-x-2">
        <span className="text-yellow-400">⭐⭐⭐⭐☆</span>
        <span>(4.0/5 based on 120 ratings)</span>
      </div>
    </SidebarSection>
  );
}
