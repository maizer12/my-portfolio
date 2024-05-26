import { HTag } from '@/common';

type Props = {
  id: string;
};

const ProjectPage = ({ id }: Props) => {
  return (
    <section className="py-24 bg-main justify-center items-center h-screen">
      <div className="max-w-[1200px] w-full mx-auto banner">
        <h1>Project ID: {id}</h1>
        <HTag tag="h1">DevFlow:</HTag>
      </div>
    </section>
  );
};

export default ProjectPage;
