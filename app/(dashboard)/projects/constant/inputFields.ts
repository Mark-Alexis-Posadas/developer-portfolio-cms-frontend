import { Dispatch, SetStateAction } from "react";

export interface InputField {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const getProjectInputFields = (
  title: string,
  setTitle: Dispatch<SetStateAction<string>>,
  image: string,
  setImage: Dispatch<SetStateAction<string>>,
  github: string,
  setGithub: Dispatch<SetStateAction<string>>,
  live: string,
  setLive: Dispatch<SetStateAction<string>>,
  tech: string,
  setTech: Dispatch<SetStateAction<string>>,
): InputField[] => [
  {
    label: "Project Title",
    placeholder: "e.g., VetConnect, E-commerce App",
    value: title,
    onChange: (e) => setTitle(e.target.value),
  },
  {
    label: "Image Path / URL",
    placeholder: "e.g., /uploads/image-1.jpg",
    value: image,
    onChange: (e) => setImage(e.target.value),
  },
  {
    label: "GitHub Repository URL",
    type: "url",
    placeholder: "https://github.com/...",
    value: github,
    onChange: (e) => setGithub(e.target.value),
  },
  {
    label: "Live Demo URL",
    type: "url",
    placeholder: "https://yourdomain.com",
    value: live,
    onChange: (e) => setLive(e.target.value),
  },
  {
    label: "Technologies",
    placeholder: "React, Tailwind CSS, Zustand",
    value: tech,
    onChange: (e) => setTech(e.target.value),
    className: "md:col-span-2",
  },
];
