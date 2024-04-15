import headerImg from "../assets/react-core-concepts.png";
import { REACT_DESCRIPTIONS } from "../data";

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description =
    REACT_DESCRIPTIONS[genRandomInt(REACT_DESCRIPTIONS.length - 1)];

  return (
    <header>
      <img src={headerImg} />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
