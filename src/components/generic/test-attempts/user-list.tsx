import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatToLocal } from "@/lib/time";

interface UserListProps {
  items: any[];
}

export default function TestAttemptList({ items }: UserListProps) {
  const hasNoneFound =
    items === null || (Array.isArray(items) && items.length === 0);
  if (hasNoneFound) {
    return <div>No tests attempts found</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Datetime</TableHead>
          <TableHead>User</TableHead>
          <TableHead>Test</TableHead>
          <TableHead className="text-right">Total</TableHead>
          <TableHead className="text-right">Correct</TableHead>
          <TableHead className="text-right">Percentage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => {
          return (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                {formatToLocal({
                  utcDate: item.startedAt,
                  variant: "datetime",
                })}
              </TableCell>
              <TableCell>{item.user.name}</TableCell>
              <TableCell>{item.test.topic}</TableCell>
              <TableCell className="text-right">{item.totalCount}</TableCell>
              <TableCell className="text-right">{item.correctCount}</TableCell>
              <TableCell className="text-right">
                {Number(item.percentage).toFixed(2)}%
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
