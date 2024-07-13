import React from "react";

interface PageWithNavProps {
  children: React.ReactNode;
}

export default function PageWithNav({ children }: PageWithNavProps) {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-start space-y-8 p-8 pt-20">
      {children}
    </main>
  );
}
