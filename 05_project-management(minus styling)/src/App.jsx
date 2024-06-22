import { useState } from "react";
import Body from "./components/Body";
import Sidebar from "./components/sidebar";

function App() {
  const [projectName, setProjectName] = useState([]);
  const [curentDashboard, setCurrentDashboard] = useState("default");

  function addProject(newPrjectName) {
    setProjectName((projectName) => {
      return [...projectName, newPrjectName];
    });
  }

  function updateDashboard(value) {
    setCurrentDashboard(value);
  }

  function removeProjectname(deleteName) {
    setProjectName((projectName) => {
      return projectName.filter((name) => name !== deleteName);
    });
    updateDashboard("default");
  }

  return (
    <>
      <Sidebar projectNames={projectName} updateDashboard={updateDashboard} />
      <Body
        addProject={addProject}
        dashboard={curentDashboard}
        updateDashboard={updateDashboard}
        removeProjectname={removeProjectname}
      />
    </>
  );
}

export default App;
