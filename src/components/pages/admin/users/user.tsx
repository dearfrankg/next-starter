import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { timeAgo } from "@/lib/utils";
import { User } from "@prisma/client";

interface UserProps {
  user: User;
  memberSince?: boolean;
}

export function UserComponent({ user, memberSince = false }: UserProps) {
  if (!user) {
    return <div> No user found</div>;
  }

  const { image, name, email, role, createdAt } = user;

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="rounded-full border-2">
        <Avatar>
          <AvatarImage
            src={image || "/avatar_placeholder.png"}
            alt={`pic of ${name}`}
          />
          <AvatarFallback>
            <AvatarImage
              src={"/avatar_placeholder.png"}
              alt="placeholder pic"
            />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-auto space-y-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-accent-foreground">{email}</p>
      </div>
      <div className="flex flex-col items-end">
        <div>{role === "admin" && <Badge>Admin</Badge>}</div>
        {memberSince && (
          <div className="text-sm">
            Member since: {timeAgo(createdAt.toString())}
          </div>
        )}
      </div>
    </div>
  );
}
