import { useState } from "react";

export default function SingleChallenge({ title, time }) {
  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    console.log("clicked");
    setTimeout(() => {
      setIsRunning(false);
    }, time * 1000);

    setIsRunning(true);
  }

  return (
    <div className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {time + " " + (time > 1 ? "seconds" : "second")}
      </p>
      <button onClick={handleStart}>
        {(isRunning ? "Stop" : "Start") + " Challenge"}
      </button>
      <p className={isRunning ? "active" : ""}>
        {"Timer " + (isRunning ? "is running..." : "Inactive")}
      </p>
    </div>
  );
}
