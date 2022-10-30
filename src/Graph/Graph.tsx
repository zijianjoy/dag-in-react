import { useEffect, useRef } from "react";
import dagspec from "./dag_demo.json";

export interface GraphProps {}


export function Graph(props: GraphProps) {
  console.log(dagspec);
  let elem = document.createElement('directed-acyclic-graph-component')
  Object.assign(elem, {dagSpec: dagspec});

  const dag_ref = useRef({});

  useEffect(() => {
    Object.assign(dag_ref.current, {dagSpec: dagspec});
   
  }, [dag_ref]);

  return <directed-acyclic-graph-component
   // lifecycle hook
   // render
   // get the DAG component
   // set the attribute inside.
   // reference

   // Attribute can only be string.
   // Property can be object.
   ref={dag_ref} 
  >
  </directed-acyclic-graph-component>
  
}