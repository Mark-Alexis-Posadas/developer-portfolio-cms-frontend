"use client";

import { useEffect, useState } from "react";
import { getSkills, createSkill, deleteSkill } from "./api";

export default function SkillsPage() {
  const [skills, setSkills] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [level, setLevel] = useState(1);
  const [category, setCategory] = useState("frontend");

  const fetchSkills = async () => {
    const data = await getSkills();
    setSkills(data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleAdd = async () => {
    if (!name.trim()) return;

    // I-clamp ang level sa pagitan ng 1 at 5 para siguradong hindi masisira ang progress bar
    const sanitizedLevel = Math.max(1, Math.min(5, level));

    await createSkill({
      name,
      level: sanitizedLevel,
      category,
    });

    setName("");
    setLevel(1);
    fetchSkills();
  };

  const handleDelete = async (id: number) => {
    if (confirm("Remove this skill badge?")) {
      await deleteSkill(id);
      fetchSkills();
    }
  };

  // Helper function para sa magandang category badges
  const getCategoryStyles = (cat: string) => {
    switch (cat) {
      case "frontend":
        return "bg-blue-50 text-blue-700 border-blue-100";
      case "backend":
        return "bg-purple-50 text-purple-700 border-purple-100";
      default:
        return "bg-amber-50 text-amber-700 border-amber-100";
    }
  };

  return (
    <div className="space-y-8">
      {/* HEADER SECTION */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          Skills Manager
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Review, expand, and structure your professional core tech stack
          indicators.
        </p>
      </div>

      {/* INPUT FORM CONTAINER */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs max-w-3xl">
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-900">
            Add Tech Stack Component
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Skill Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-700">
              Skill Name
            </label>
            <input
              type="text"
              className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 block p-2.5 transition-all placeholder:text-gray-400 outline-hidden"
              placeholder="e.g., React, Node.js, Zustand"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Skill Level */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-700">
              Expertise Level (1-5)
            </label>
            <input
              type="number"
              min="1"
              max="5"
              className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 block p-2.5 transition-all outline-hidden"
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
            />
          </div>

          {/* Category Dropdown */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-700">
              Category Group
            </label>
            <select
              className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 block p-2.5 transition-all outline-hidden appearance-none cursor-pointer"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="tools">Tools / Others</option>
            </select>
          </div>
        </div>

        {/* Form CTA Button */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleAdd}
            className="inline-flex items-center justify-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 shadow-sm rounded-xl px-4 py-2.5 transition-all duration-200 gap-2 cursor-pointer w-full sm:w-auto"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add Skill
          </button>
        </div>
      </div>

      {/* SKILLS CARDS DISPLAY GRID */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-1">
          Active Stack Badges ({skills.length})
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Title & Category Pill */}
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-bold text-lg text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </h2>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border capitalize select-none ${getCategoryStyles(skill.category)}`}
                  >
                    {skill.category}
                  </span>
                </div>

                {/* Level Text Info */}
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-gray-400 font-medium">Proficiency</span>
                  <span className="font-bold text-gray-700">
                    {skill.level} / 5
                  </span>
                </div>

                {/* Upgraded Progress Bar */}
                <div className="mt-1.5 w-full bg-gray-100 h-2 rounded-full overflow-hidden border border-gray-50">
                  <div
                    className="h-full bg-linear-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level * 20}%` }}
                  />
                </div>
              </div>

              {/* Action Area */}
              <div className="mt-5 pt-3 border-t border-gray-50 flex justify-end">
                <button
                  onClick={() => handleDelete(skill.id)}
                  className="inline-flex items-center text-xs font-medium text-gray-400 hover:text-red-500 hover:bg-red-50 px-2.5 py-1.5 rounded-lg transition"
                  title="Remove Skill"
                >
                  <svg
                    className="w-3.5 h-3.5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-1.5 14.5a2.25 2.25 0 01-2.244 2.077H8.244A2.25 2.25 0 016 22.75L4.5 8.25m15 0a48.536 48.536 0 00-3 0m3 0a48.552 48.552 0 01-3.5-.37m-9.038.37a48.506 48.506 0 01-3 0m3 0c.885-.066 1.778-.132 2.67-.194m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
