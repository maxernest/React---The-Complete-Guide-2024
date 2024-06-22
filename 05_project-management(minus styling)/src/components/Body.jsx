import { useState } from "react";
import CreateProjectForm from "./CreateProjectForm";
import DefaultBody from "./DefaultBody";
import Project from "./Project";
import { useRef } from "react";

export default function Body({
  addProject,
  dashboard,
  updateDashboard,
  removeProjectname,
}) {
  const [projects, setProject] = useState({});
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function currentDashBoard() {
    if (dashboard == "default") {
      return <DefaultBody updateDashboard={updateDashboard} />;
    } else if (dashboard == "addDashboard") {
      return (
        <CreateProjectForm
          ref={{ title, description, dueDate }}
          onSubmit={handleSubmit}
          updateDashboard={updateDashboard}
        />
      );
    } else {
      return (
        <Project
          project={projects[dashboard]}
          addTask={addTask}
          removeTask={removeTask}
          removeProject={removeProject}
        />
      );
    }
  }

  function handleSubmit() {
    const titleValue = title.current.value;
    const descriptionValue = description.current.value;
    const dueDateValue = dueDate.current.value;

    setProject((project) => {
      return {
        ...project,
        [titleValue]: {
          title: titleValue,
          description: descriptionValue,
          dueDate: dueDateValue,
          tasks: [],
        },
      };
    });

    addProject(titleValue);
  }

  function addTask(title, task) {
    setProject((project) => {
      const currentProject = project[title];
      const updatedTasks = [...currentProject.tasks, task];

      return {
        ...project,
        [title]: {
          ...currentProject,
          tasks: updatedTasks,
        },
      };
    });
  }

  function removeProject(projectName) {
    setProject((project) => {
      const updatedProject = Object.assign({}, project);

      delete updatedProject[projectName];

      return updatedProject;
    });

    removeProjectname(projectName);
  }

  function removeTask(title, index) {
    setProject((project) => {
      const currentProject = project[title];
      const updatedTasks = [...currentProject.tasks];
      updatedTasks.splice(index, 1);

      return {
        ...project,
        [title]: {
          ...currentProject,
          tasks: updatedTasks,
        },
      };
    });
  }

  return (
    <div className="p-4 sm:ml-64 border-gray-200 rounded-lg dark:border-gray-700">
      {currentDashBoard()}
    </div>
  );
}
