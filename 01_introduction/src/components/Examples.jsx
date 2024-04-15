import { useState } from "react";
import { EXAMPLES } from "../data";

function TabContent({ title, description, code }) {
  return (
    <div id="tab-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function MenuButton({ name, handleClick, clickedTitle }) {
  return (
    <li>
      <button
        className={name == clickedTitle && "active"}
        onClick={() => handleClick(name)}
      >
        {name.toUpperCase()}
      </button>
    </li>
  );
}

export default function Examples() {
  const [title, setTitle] = useState();

  function handleClick(name) {
    setTitle(name);
  }

  return (
    <div id="examples">
      <h2>Examples</h2>
      <menu>
        {Object.keys(EXAMPLES).map((name) => (
          <MenuButton
            name={name}
            handleClick={handleClick}
            clickedTitle={title}
          />
        ))}
      </menu>
      {!title ? "Please select a topic" : <TabContent {...EXAMPLES[title]} />}
    </div>
  );
}
