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
  featured: boolean;
  isLargeCard?: boolean;
  status: 'released' | 'in-progress' | 'planned';
  projectType?: 'Professional' | 'Personal';
  githubLink?: string;
  liveLink?: string | null;
  testCredentials?: {
    username: string;
    password: string;
    otp?: string;
    instructions?: string;
  };
  isPrivate?: boolean;
  clientName?: string;
  coreFeatures?: string[];
}
