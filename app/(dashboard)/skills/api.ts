import api from "@/lib/api";

export const getSkills = async () => {
  const res = await api.get("/skills");
  return res.data;
};

export const createSkill = async (data: any) => {
  const res = await api.post("/skills", data);
  return res.data;
};

export const deleteSkill = async (id: number) => {
  const res = await api.delete(`/skills/${id}`);
  return res.data;
};
