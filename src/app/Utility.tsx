export default function Utility({
  name,
  value,
  icon,
}: {
  name: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <>
      <div className="flex gap-32 p-2 items-center justify-between">
        <div className="text-teal-200">{name}</div>
        <div className="flex flex-row items-center gap-2">
          {value}
          {icon}
        </div>
      </div>
    </>
  );
}
