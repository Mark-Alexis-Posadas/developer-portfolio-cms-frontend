import api from "@/lib/api";

export const getProjects = async () => {
  const res = await api.get("/projects");
  return res.data;
};

export const createProject = async (data: any) => {
  const res = await api.post("/projects", data);
  return res.data;
};

export const updateProject = async (id: number, data: any) => {
  const res = await api.put(`/projects/${id}`, data);
  return res.data;
};

export const deleteProject = async (id: number) => {
  const res = await api.delete(`/projects/${id}`);
  return res.data;
};
