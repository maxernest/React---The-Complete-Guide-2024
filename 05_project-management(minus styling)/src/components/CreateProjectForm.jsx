import { forwardRef } from "react";

const CreateProjectForm = forwardRef(function CreateProjectForm(props, ref) {
  const { title, description, dueDate } = ref;
  return (
    <div className="mt-28 flex justify-center items-center">
      <form className="w-4/6">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="title"
          >
            TITLE
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            ref={title}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="description"
          >
            DESCRIPTION
          </label>
          <textarea
            id="description"
            rows="2"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ref={description}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="date"
          >
            DUE DATE
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            ref={dueDate}
          />
        </div>
        <div className="flex items-center justify-start">
          <button
            className="mt-4 me-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => props.onSubmit()}
          >
            Save
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            onClick={() => props.updateDashboard("default")}
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
});

export default CreateProjectForm;
