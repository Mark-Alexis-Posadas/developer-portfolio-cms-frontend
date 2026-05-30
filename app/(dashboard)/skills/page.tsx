"use client";

import { useEffect, useState } from "react";
import { getSkills, createSkill, deleteSkill } from "./api";

export default function SkillsPage() {
  const [skills, setSkills] = useState<any[]>([]);

  const fetchSkills = async () => {
    const data = await getSkills();
    setSkills(data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

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
