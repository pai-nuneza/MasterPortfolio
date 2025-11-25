export interface Project {
  id: string;
  title: string;
  text: string;
  description: string;
  buttonText: string;
  link: string;
  tech: string;
  technologies: string[];
  category: string;
  date: string;
  imgLink: string;
  images: string[];
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  githubLink?: string;
  liveLink?: string;
  testCredentials?: {
    username: string;
    password: string;
    otp?: string;
    instructions?: string;
  };
  gallery?: string[];
  isPrivate?: boolean;
  clientName?: string;
}
