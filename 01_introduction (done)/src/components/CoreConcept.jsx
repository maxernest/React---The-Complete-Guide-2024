import { CORE_CONCEPTS } from "../data";

function CoreConceptItems({ image, title, description }) {
  return (
    <li>
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
function CoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((data) => {
          return <CoreConceptItems {...data} />;
        })}
      </ul>
    </section>
  );
}

export default CoreConcept;
