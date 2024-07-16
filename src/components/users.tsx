import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface UsersProps {
  users: any;
}

export default async function Users({ users }: UsersProps) {
  return (
    <Card className={cn("mx-auto w-[600px] p-4")}>
      <CardContent className="p-0">
        <ul className="list-none space-y-4">
          {users.map((user: any) => (
            <li key={user.id} className="rounded-lg border p-2 hover:bg-accent">
              <Link href={`/user/${user.id}`}>
                <div className="flex items-center gap-4">
                  <div className="rounded-full border-2 border-slate-400 p-[1px]">
                    <Avatar>
                      <AvatarImage
                        src={user.image}
                        alt={`pic of ${user.name}`}
                      />
                      <AvatarFallback>
                        <AvatarImage
                          src={"/avatar_placeholder.png"}
                          alt="placeholder pic"
                        />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.name}
                    </p>
                    <p className="text-sm text-accent-foreground">
                      {user.email}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
