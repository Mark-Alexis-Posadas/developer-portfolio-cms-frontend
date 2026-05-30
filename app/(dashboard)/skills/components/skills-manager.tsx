import { useState } from "react";

export default function SkillsManager() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(1);
  const [category, setCategory] = useState("frontend");

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
  return <div>SkillsManager</div>;
}
