export type Project = {
  id: string | number;
  image: string;
  title: string;
  description: string;
  technologies: string;
  github_url: string;
  live_url: string;
};

export interface ProjectListProps {
  initialProjects: Project[];
  onEdit: (project: Project) => void;
  handleDelete: (id: string | number) => void;
}
