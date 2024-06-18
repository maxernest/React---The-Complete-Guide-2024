export default function ResultModal({
  isOpen,
  time,
  remainingTime,
  closeModal,
}) {
  function countScore() {
    return (((time - remainingTime / 1000) / time) * 100).toFixed(2);
  }

  function handleKeyPressed(e) {
    if (e.keyCode == 27) {
      closeModal();
      isOpen = false;
    }
  }

  return (
    <dialog className="result-modal" open={isOpen} onKeyDown={handleKeyPressed}>
      {remainingTime == 0 ? (
        <h2>YOU LOST!</h2>
      ) : (
        <h2>YOUR SCORE: {countScore()}</h2>
      )}
      <p>
        the target time was <strong>{time} seconds</strong>
      </p>
      <p>
        You stopped the timer with
        <strong>{" " + remainingTime / 1000} seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
