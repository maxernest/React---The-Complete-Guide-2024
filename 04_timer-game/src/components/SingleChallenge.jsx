import { useState, useRef, useEffect } from "react";
import ResultModal from "./ResultModal";

export default function SingleChallenge({ title, time }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(time * 1000);
  let theTimer = useRef();
  let remainingTime = useRef();

  if (timeRemaining <= 0) {
    handleStop();
  }

  function handleStart() {
    setIsOpen(false);
    setIsRunning(true);
    theTimer.current = setInterval(() => {
      setTimeRemaining((prefTime) => {
        return prefTime - 10;
      });
    }, 10);
  }

  function handleStop() {
    clearInterval(theTimer.current);
    remainingTime.current = timeRemaining;
    setTimeRemaining(time * 1000);
    setIsRunning(false);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="challenge">
      <h2>{title}</h2>
      <ResultModal
        isOpen={isOpen}
        time={time}
        remainingTime={remainingTime.current}
        closeModal={closeModal}
      />
      <p className="challenge-time">
        {time + " " + (time > 1 ? "seconds" : "second")}
      </p>
      <button onClick={isRunning ? handleStop : handleStart}>
        {(isRunning ? "Stop" : "Start") + " Challenge"}
      </button>
      <p className={isRunning ? "active" : ""}>
        {"Timer " + (isRunning ? "is running..." : "Inactive")}
      </p>
    </div>
  );
}
