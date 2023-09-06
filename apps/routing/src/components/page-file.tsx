export default function PageFile({ route }: { route: string }): JSX.Element {
  return <div className="bg-blue-300 p-4">{route} Page</div>;
}
