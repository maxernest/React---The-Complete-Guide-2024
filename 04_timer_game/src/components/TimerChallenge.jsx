import SingleChallenge from "./SingleChallenge";

export default function TimerChallenge() {
  return (
    <div id="challenges">
      <SingleChallenge title="easy" time={1} />
      <SingleChallenge title="not easy" time={5} />
      <SingleChallenge title="getting tough" time={10} />
      <SingleChallenge title="pros only" time={15} />
    </div>
  );
}
