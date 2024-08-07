import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface CourseCardProp {
  title: string;
  author?: string;
  description: string;
  cover: string;
}

export function CourseCard({
  title,
  author,
  description,
  cover,
}: CourseCardProp) {
  const imagePath = `/images/course-covers/${cover}`;
  return (
    <Card className="h-[450px] w-[350px]">
      <CardHeader className="p-4">
        <div className="relative aspect-[5/3] w-full">
          <Image src={imagePath} alt={title} className="object-cover" fill />
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <div className="text-sm font-medium leading-5">{title}</div>
          {author && (
            <div className="text-xs font-medium leading-4 text-muted-foreground">
              {author}
            </div>
          )}
        </div>
        <div className="mt-2 text-xs text-muted-foreground">{description}</div>
      </CardContent>
    </Card>
  );
}
