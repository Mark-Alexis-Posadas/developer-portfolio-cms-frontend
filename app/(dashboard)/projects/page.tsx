"use client";

import { useEffect, useState } from "react";
import { getProjects, createProject, deleteProject } from "./api";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);

  // form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [github, setGithub] = useState("");
  const [live, setLive] = useState("");
  const [tech, setTech] = useState("");

  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreate = async () => {
    await createProject({
      title,
      description,
      image,
      github_url: github,
      live_url: live,
      technologies: tech,
      status: "published",
    });

    setTitle("");
    setDescription("");
    setImage("");
    setGithub("");
    setLive("");
    setTech("");

    fetchProjects();
  };

  const handleDelete = async (id: number) => {
    await deleteProject(id);
    fetchProjects();
  };

  return (
    <div>
      {/* HEADER */}
      <h1 className="text-2xl font-semibold">Projects Manager</h1>

      <p className="text-gray-500 mt-1">Manage your portfolio projects</p>

      {/* FORM */}
      <div className="mt-6 bg-white border rounded-2xl p-6 shadow-sm">
        <div className="grid grid-cols-2 gap-4">
          <input
            className="border p-2 rounded-lg"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="border p-2 rounded-lg"
            placeholder="Image URL (/uploads/xxx.jpg)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <input
            className="border p-2 rounded-lg"
            placeholder="GitHub URL"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />

          <input
            className="border p-2 rounded-lg"
            placeholder="Live URL"
            value={live}
            onChange={(e) => setLive(e.target.value)}
          />

          <input
            className="border p-2 rounded-lg col-span-2"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            className="border p-2 rounded-lg col-span-2"
            placeholder="Technologies (React, Node, MySQL)"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
          />
        </div>

        <button
          onClick={handleCreate}
          className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          Add Project
        </button>
      </div>

      {/* LIST */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {p.image && (
              <img
                src={`http://localhost:5000${p.image}`}
                className="h-40 w-full object-cover"
              />
            )}

            <div className="p-4">
              <h2 className="font-semibold text-lg">{p.title}</h2>

              <p className="text-sm text-gray-500 mt-1">{p.description}</p>

              <p className="text-xs text-gray-400 mt-2">{p.technologies}</p>

              <div className="flex gap-2 mt-4">
                <a
                  href={p.github_url}
                  target="_blank"
                  className="text-xs text-blue-500"
                >
                  GitHub
                </a>

                <a
                  href={p.live_url}
                  target="_blank"
                  className="text-xs text-green-500"
                >
                  Live
                </a>
              </div>

              <button
                onClick={() => handleDelete(p.id)}
                className="mt-4 text-sm text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
