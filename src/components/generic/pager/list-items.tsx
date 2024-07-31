import { Item } from "./item";
import { SearchParamProps } from "@/types";

interface UserListProps extends SearchParamProps {
  tests: any[];
  renderItem: ({ test, searchParams }: any) => React.ReactNode;
}

export default function ItemList({
  tests,
  searchParams,
  renderItem,
}: UserListProps) {
  //

  const hasNoneFound =
    tests === null || (Array.isArray(tests) && tests.length === 0);

  if (hasNoneFound) {
    return <div>No tests found</div>;
  }

  return (
    <ul className="space-y-2">
      {tests.map((test) => {
        return (
          <Item key={test.id} {...{ testId: test.id, searchParams }}>
            {renderItem({ test, searchParams })}
          </Item>
        );
      })}
    </ul>
  );

  //
}
