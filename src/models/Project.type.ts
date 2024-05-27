export interface IProject {
  id: number;
  title: string;
  desc: string;
  technologies: string[];
  icons: {
    icon: string[];
    fill: string;
  }[];
}
