const TaskColumn = ({ icon, col }) => {
  const Icon = icon;
  return (
    <section className="text-2xl bg-gray-300 w-[240px] p-3 flex  justify-center gap-3 items-center ">
      <Icon className="text-3xl text-yellow-600" />
      {col}
    </section>
  );
};

export default TaskColumn;
