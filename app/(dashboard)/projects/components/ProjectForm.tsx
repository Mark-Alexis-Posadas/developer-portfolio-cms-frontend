"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProject } from "../api";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { getProjectInputFields } from "../constant/inputFields";

export default function ProjectForm({ setOpen }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [github, setGithub] = useState("");
  const [live, setLive] = useState("");
  const [tech, setTech] = useState("");

  const inputFields = getProjectInputFields(
    title,
    setTitle,
    image,
    setImage,
    github,
    setGithub,
    live,
    setLive,
    tech,
    setTech,
  );

  const handleCreate = async () => {
    if (!title) return;

    setLoading(true);

    try {
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

      router.refresh();
    } catch (error) {
      console.error("Failed to create project:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-3xl bg-white border border-gray-200/80 rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
              Create New Project
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Fill in the details below to add a new project to your portfolio.
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {inputFields.map((field) => (
              <Input
                key={field.label}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                value={field.value}
                onChange={field.onChange}
                className={field.className}
              />
            ))}

            <Textarea
              label="Description"
              placeholder="Provide a brief overview..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="md:col-span-2"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-3 bg-gray-50/50">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={handleCreate}
            disabled={loading}
            className="inline-flex items-center justify-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 shadow-sm rounded-xl px-5 py-2.5 transition-all disabled:opacity-50 cursor-pointer gap-2"
          >
            {loading ? "Adding..." : "Add Project"}
          </button>
        </div>
      </div>
    </div>
  );
}
