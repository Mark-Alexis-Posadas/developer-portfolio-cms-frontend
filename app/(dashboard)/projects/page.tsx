import PageHeader from "@/components/PageHeader";
import { getProjects } from "./api";
import ProjectClient from "./components/ProjectClient";
import AddProjectButton from "./components/add-project-button";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Projects Manager"
        description="Manage and publish your portfolio projects"
      >
        <AddProjectButton />
      </PageHeader>
      <ProjectClient projects={projects} />
    </div>
  );
}
