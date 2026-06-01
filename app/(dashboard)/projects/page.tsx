import { getProjects } from "./api";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-8">
      <ProjectClient projects={projects} />
    </div>
  );
}
