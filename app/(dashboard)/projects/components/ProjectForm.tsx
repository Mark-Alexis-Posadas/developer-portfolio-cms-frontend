"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProject } from "../api";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { getProjectInputFields } from "../constant/inputFields";

export default function ProjectForm() {
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
    <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs max-w-2xl mx-auto">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
          Create New Project
        </h3>

        <p className="text-sm text-gray-500">
          Fill in the details below to add a new project to your portfolio.
        </p>
      </div>

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

      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
        <button
          onClick={handleCreate}
          disabled={loading}
          className="inline-flex items-center justify-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 shadow-sm rounded-xl px-5 py-3 transition-all disabled:opacity-50 cursor-pointer gap-2"
        >
          {loading ? "Adding..." : "Add Project"}
        </button>
      </div>
    </div>
  );
}
