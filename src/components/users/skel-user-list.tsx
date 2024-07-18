import { SkeletonUser } from "./skel-user";

export default function SkeletonUserList() {
  return (
    <ul className="space-y-4">
      {[...Array(8)].map((user, index) => (
        <li key={index} className="relative animate-pulse">
          <div className="h-[72px] w-full overflow-hidden rounded-lg border bg-gray-400 p-4">
            <SkeletonUser />
          </div>
        </li>
      ))}
    </ul>
  );
}
