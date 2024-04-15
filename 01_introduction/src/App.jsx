import CoreConcept from "./components/CoreConcept";
import Examples from "./components/Examples";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <CoreConcept />
        <Examples />
      </main>
    </div>
  );
}

export default App;
