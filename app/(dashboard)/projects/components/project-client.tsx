"use client";
import { useState } from "react";

import ProjectList from "./project-list";
import ProjectForm from "./project-form";
import AddProjectButton from "./add-project-button";
export default function ProjectClient({ initialProjects }) {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleEdit = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleCreate = () => {
    setSelectedProject(null);
    setOpen(true);
  };
  return (
    <>
      <AddProjectButton onClick={handleCreate} />
      <ProjectList initialProjects={initialProjects} onEdit={handleEdit} />
      {open && (
        <ProjectForm
          setOpen={setOpen}
          project={selectedProject}
          isEdit={!!selectedProject}
        />
      )}
    </>
  );
}
