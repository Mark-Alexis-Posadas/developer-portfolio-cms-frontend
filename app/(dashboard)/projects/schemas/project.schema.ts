import { z } from "zod";

export const createProjectSchema = z.object({
  title: z.string().min(3, "Project title must be at least 3 characters"),

  description: z.string().min(10, "Description must be at least 10 characters"),

  image: z.string().optional(),

  github_url: z
    .string()
    .url("Please enter a valid GitHub URL")
    .or(z.literal("")),

  live_url: z.string().url("Please enter a valid Live URL").or(z.literal("")),

  technologies: z.string().min(2, "Technologies field is required"),
});

export type CreateProjectFormData = z.infer<typeof createProjectSchema>;
