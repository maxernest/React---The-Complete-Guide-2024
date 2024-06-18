export default function Body() {
  return (
    <div className="p-4 sm:ml-64 border-gray-200 rounded-lg dark:border-gray-700">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-6xl dark:text-white">
        Learning React
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Dec 29, 2024
      </p>
      <pre className="mb-6 text-2xl text-gray-900 dark:text-white">
        Learn React from the group up Start with the basics
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
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Task
          </button>
        </div>
      </form>

      <ul className="max-w-2xl divide-y divide-gray-200 dark:divide-gray-700 ">
        <li className="bg-gray-100 p-4">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Neil Sims
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              Clear
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
