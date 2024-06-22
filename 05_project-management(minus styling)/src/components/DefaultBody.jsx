import logo from "../assets/no-Projects.png";

export default function DefaultBody({ updateDashboard }) {
  return (
    <div className="content-center mt-40 text-center">
      <img src={logo} className="w-1/12 mx-auto mb-4" />
      <h1 className="my-4 text-m font-bold leading-none tracking-tight text-gray-800 md:text-xl lg:text-3xl dark:text-white">
        No Project Selected
      </h1>
      <p className="my-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Select a Project or get started with a new one
      </p>
      <button
        type="button"
        className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => updateDashboard("addDashboard")}
      >
        Create new project
      </button>
    </div>
  );
}
