import { H2 } from "../heading";
import { Button } from "@/components/ui/button";
import {
  ChevronRightIcon,
  EnvelopeOpenIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function ShadButtons() {
  return (
    <div className="space-y-8 rounded-xl border-4 p-8">
      <H2>shadcn-ui</H2>

      <div className="flex flex-wrap gap-8">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      <div className="flex flex-wrap gap-8">
        <Button variant="outline" size="icon">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        <Button>
          <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
        </Button>{" "}
        <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>{" "}
        <Button asChild>
          <Link href="#">Login</Link>
        </Button>{" "}
      </div>
    </div>
  );
}
