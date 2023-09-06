interface Todo {
  useId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function wait(ms: number): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(resolve, ms);
    } catch (error) {
      reject(error);
    }
  });
}

async function getData(): Promise<Todo[]> {
  const res: Response = await fetch(
    'https://jsonplaceholder.typicode.com/todos'
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  // will delay get request for (ms) to allow for suspense loading fallback.
  await wait(2000);
  return res.json() as Promise<Todo[]>;
}

export default async function Loading(): Promise<JSX.Element> {
  const data: Todo[] = await getData();
  return (
    <section className="bg-purple-200 p-4">
      <h3 className="font-bold">Loading Routes</h3>
      {data.map((todo: Todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </section>
  );
}
