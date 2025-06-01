import TaskCard from "./TaskCard";

const TaskColumn = ({ icon, col }) => {
  const Icon = icon;
  return (
    <section className="text-2xl  w[240px] flex flex-col gap-3 items-center ">
      <div className="flex gap-2 ">
        <Icon className="text-3xl text-yellow-600" />
        {col}
      </div>
      <TaskCard />
    </section>
  );
};

export default TaskColumn;
