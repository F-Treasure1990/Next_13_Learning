export default function LayoutFile({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}): JSX.Element {
  return (
    <div className="p-5 bg-red-300 h-min">
      <h2 className="pb-2">{route} Layout</h2>
      {children}
    </div>
  );
}
