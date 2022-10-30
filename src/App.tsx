import { DOMAttributes } from "react";
import { Link } from "react-router-dom";
import "./App.css";


// https://javascript.info/custom-elements
function App() {
  return (
    <div className="App">
      This is text
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/graph">Graph</Link>
      </nav>
    </div>
  );
}

export default App;

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["directed-acyclic-graph-component"]: CustomElement<DAGcomponent>;
    }
  }
}

class DAGcomponent extends HTMLElement {
  dagSpec?: Object;
  ref: any;
}
