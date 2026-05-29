// add-project-button.tsx
"use client";

import { useState } from "react";
import ProjectForm from "./ProjectForm";

export default function AddProjectButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Add Project</button>
      {open && <ProjectForm setOpen={setOpen} />}
    </>
  );
}
