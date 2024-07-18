import { UserComponent } from "./user";
import { User } from "@prisma/client";
import Link from "next/link";

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  const hasNoUsersFound =
    users === null || (Array.isArray(users) && users.length === 0);
  if (hasNoUsersFound) {
    return <div>No users found</div>;
  }
  return (
    <div>
      <ul className="space-y-4">
        {users.map((user) => {
          return (
            <li
              key={user.id as string}
              className="rounded-lg border p-4 hover:bg-accent"
            >
              <Link href={`/admin/users/${user.id}`}>
                <UserComponent {...{ user }} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
