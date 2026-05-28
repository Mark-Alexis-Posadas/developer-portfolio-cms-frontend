import { getProjects } from "./api";

import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
export default async function ProjectsPage() {
  const projects = await getProjects();

  console.log(projects);
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
          Projects Manager
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage and publish your portfolio projects
        </p>
      </div>
      <ProjectForm />
      <ProjectList initialProjects={projects} />
    </div>
  );
}
