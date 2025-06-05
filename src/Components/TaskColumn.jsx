import TaskCard from "./TaskCard";

const TaskColumn = ({ icon, col, tasks, checkStatus }) => {
  const Icon = icon;
  return (
    <section className="text-2xl flex flex-col gap-3 items-center ">
      <div className="flex gap-2 ">
        <Icon className="text-3xl text-yellow-600" />
        {col}
      </div>
      {tasks.map((t, index) =>
        t.status === checkStatus ? <TaskCard key={index} /> : null
      )}
    </section>
  );
};

export default TaskColumn;
