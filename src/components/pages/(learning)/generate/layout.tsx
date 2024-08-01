interface DashboardLayoutProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  bottom?: React.ReactNode;
}

export function AITestGeneratorLayout({
  left = "",
  right = "",
}: DashboardLayoutProps) {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-wrap gap-8">
        <div className="flex-1 text-nowrap rounded-lg border-2 p-4">{left}</div>
        <div className="h-[664px] flex-1 text-nowrap rounded-lg border-2 p-4">
          {right}
        </div>
      </div>
    </div>
  );
}
