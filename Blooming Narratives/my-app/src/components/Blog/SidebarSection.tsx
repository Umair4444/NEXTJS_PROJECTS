import React from "react";

export function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background dark:bg-gray-900 rounded-2xl shadow p-4 mb-6">
      <h3 className="text-lg font-semibold text-foreground dark:text-white mb-3">
        {title}
      </h3>
      <div className="space-y-2 text-muted-foreground dark:text-gray-300 text-sm">
        {children}
      </div>
    </div>
  );
}
