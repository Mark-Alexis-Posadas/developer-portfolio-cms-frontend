// add-project-button.tsx
"use client";

import { useState } from "react";
import ProjectForm from "./ProjectForm";

export default function AddProjectButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 shadow-xs rounded-lg px-3 py-2 transition"
      >
        Add Project
      </button>
      {open && <ProjectForm setOpen={setOpen} />}
    </>
  );
}
