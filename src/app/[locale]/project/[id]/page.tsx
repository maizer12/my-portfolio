type Props = {
  id: string;
};

const ProjectPage = ({ id }: Props) => {
  return (
    <div className="mt-10">
      <h1>Project ID: {id}</h1>
      {/* Render project details here */}
    </div>
  );
};

export default ProjectPage;
