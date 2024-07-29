import { SkeletonUser } from "./skel-user";

export default function SkeletonUserList() {
  return (
    <ul className="space-y-2">
      {[...Array(8)].map((user, index) => (
        <li key={index} className="relative animate-pulse">
          <div className="w-full overflow-hidden rounded-lg border bg-gray-400 p-2">
            <SkeletonUser />
          </div>
        </li>
      ))}
    </ul>
  );
}
