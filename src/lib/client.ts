interface CreateNewSearchParamsProps {
  searchParams: { [key: string]: string };
  name: string;
  value: string;
}

export const createNewSearchParams = ({
  searchParams,
  name,
  value,
}: CreateNewSearchParamsProps) => {
  const newSearchParams = new URLSearchParams(searchParams);
  newSearchParams.set(name, value);
  return newSearchParams.toString();
};
