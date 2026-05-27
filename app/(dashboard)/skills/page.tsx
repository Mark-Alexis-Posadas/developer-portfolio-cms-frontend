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
    await createSkill({
      name,
      level,
      category,
    });

    setName("");
    setLevel(1);

    fetchSkills();
  };

  const handleDelete = async (id: number) => {
    await deleteSkill(id);
    fetchSkills();
  };

  return (
    <div>
      {/* HEADER */}
      <h1 className="text-2xl font-semibold">Skills Manager</h1>

      <p className="text-gray-500 mt-1">Manage your tech stack</p>

      {/* FORM */}
      <div className="mt-6 bg-white border rounded-2xl p-6 shadow-sm">
        <div className="grid grid-cols-3 gap-4">
          <input
            className="border rounded-lg p-2"
            placeholder="Skill name (React)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            className="border rounded-lg p-2"
            placeholder="Level (1-5)"
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
          />

          <select
            className="border rounded-lg p-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="tools">Tools</option>
          </select>
        </div>

        <button
          onClick={handleAdd}
          className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Add Skill
        </button>
      </div>

      {/* LIST */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="font-semibold text-lg">{skill.name}</h2>

            <p className="text-sm text-gray-500">{skill.category}</p>

            {/* progress bar style */}
            <div className="mt-3 w-full bg-gray-200 h-2 rounded-full">
              <div
                className="h-2 bg-black rounded-full"
                style={{ width: `${skill.level * 20}%` }}
              />
            </div>

            <button
              onClick={() => handleDelete(skill.id)}
              className="mt-4 text-sm text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
