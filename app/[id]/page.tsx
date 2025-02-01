import ProjectPage from "./ProjectPage";

export async function generateStaticParams() {
  return [
    { id: "4647ad1f-19c8-4a09-b787-73e704af5dc2" },
    { id: "fc4363db-22db-42ca-a057-394e2bccdf3d" },
    { id: "0da27dcc-f652-4bf8-b0d8-e95e87731b4f" },
    { id: "266d338a-3733-4340-a4d2-711a09ae6021" },
    { id: "8a0ef416-9b2e-43dc-9f8e-2c07a574699e" },
    { id: "b1146589-8dbd-4597-b31f-edbb202d69a0" },
    { id: "4a580097-0836-45c0-a775-21febf408e3e" },
    { id: "d4014401-78d0-40df-b8d9-27fa9f1a41c0" },
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <ProjectPage params={params} />;
}
