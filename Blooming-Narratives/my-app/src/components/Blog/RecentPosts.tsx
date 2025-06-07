import React from "react";
import { Blog } from "./BlogCard";
import { SidebarSection } from "./SidebarSection";

export function RecentPosts({ blogs }: { blogs: Blog[] }) {
  return (
    <SidebarSection title="Recent Posts">
      {blogs.slice(0, 5).map((b) => (
        <div key={b.id} className="hover:text-primary cursor-pointer truncate">
          {b.title}
        </div>
      ))}
    </SidebarSection>
  );
}
