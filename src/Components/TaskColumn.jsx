import TaskCard from "./TaskCard";

const TaskColumn = ({ icon, colName, tasks, checkStatus, handleDelete }) => {
  const Icon = icon;

  return (
    <section className="text-2xl w-[300px] lg:w-[350px] flex flex-col gap-3 items-center ">
      <div className="flex gap-2 ">
        <Icon className="text-3xl text-yellow-600" />
        {colName}
      </div>
      {tasks.map((t, index) =>
        t.status === checkStatus ? (
          <TaskCard
            key={index}
            index={index}
            task={t.task}
            tags={t.tags}
            handleDelete={handleDelete}
          />
        ) : null
      )}
    </section>
  );
};

export default TaskColumn;
