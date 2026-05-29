import ProjectList from "./ProjectList";

export default function ProjectClient({ projects }) {
  return (
    <>
      <ProjectList initialProjects={projects} />
    </>
  );
}
