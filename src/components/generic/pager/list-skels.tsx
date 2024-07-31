export default function ListSkels({ renderSkel }: { renderSkel: any }) {
  //

  return (
    <ul className="space-y-2">
      {[...Array(8)].map((user, index) => (
        <li key={index} className="relative animate-pulse">
          <div className="w-full overflow-hidden rounded-lg border bg-gray-400 p-2">
            {renderSkel()}
          </div>
        </li>
      ))}
    </ul>
  );

  //
}
