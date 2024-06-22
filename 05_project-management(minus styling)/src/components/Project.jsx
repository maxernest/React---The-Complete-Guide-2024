import { useRef } from "react";

export default function Project({
  project,
  addTask,
  removeTask,
  removeProject,
}) {
  const { title, description, dueDate, tasks } = project;
  const newTask = useRef();

  return (
    <div className="m-14">
      <div className="flex space-x-96">
        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-500 md:text-xl lg:text-3xl dark:text-white">
          {title}
        </h1>
        <a
          className="mb-6 text-lg font-normal text-red-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 hover:text-red-800"
          onClick={() => removeProject(title)}
        >
          Delete
        </a>
      </div>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        {dueDate}
      </p>
      <pre className="mb-6 text-2xl text-gray-900 dark:text-white">
        {description}
      </pre>

      <hr className="h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <h2 className="mb-4 text-m font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">
        Tasks
      </h2>

      <form className="w-3/6 mb-10">
        <label
          for="Description"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Description
        </label>
        <div className="relative">
          <input
            type="search"
            id="Description"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description"
            required
            ref={newTask}
          />
          <button
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              addTask(title, newTask.current.value);
            }}
          >
            Add Task
          </button>
        </div>
      </form>

      <ul className="max-w-2xl divide-y divide-gray-200 dark:divide-gray-700 ">
        {tasks.map((task, index) => (
          <li key={index} className="bg-gray-100 p-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {task}
                </p>
              </div>
              <a
                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white hover:text-red-500"
                onClick={() => removeTask(title, index)}
              >
                Clear
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
