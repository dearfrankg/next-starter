interface StudyLayoutProps {
  center?: React.ReactNode;
}

export function StudyLayout({ center = "" }: StudyLayoutProps) {
  return (
    <div className="mx-auto w-1/2 min-w-[450px]">
      <div className="flex flex-wrap gap-8">
        <div className="h-[710px] flex-1 text-nowrap rounded-lg border-2 p-4">
          {center}
        </div>
      </div>
    </div>
  );
}
