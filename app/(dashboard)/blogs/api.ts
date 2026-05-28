import api from "@/lib/api";

export const getBlogs = async () => {
  const res = await api.get("/blogs");
  return res.data;
};

export const createBlog = async (data: any) => {
  const res = await api.post("/blogs", data);
  return res.data;
};

export const deleteBlog = async (id: number) => {
  const res = await api.delete(`/blogs/${id}`);
  return res.data;
};
