export default async function Page({
  params,
}: {
  params: Promise<{ projects: string }>;
}) {
  const { projects } = await params;
  console.log(params);
  return (
    <div>
      <div>My Post: {projects}</div>
    </div>
  );
}
