import { useEffect, useRef } from "react";
import { DagSpec, RawDagNodeSkeleton } from "./types";

const node: RawDagNodeSkeleton = {
  id: "id1",
  type: "execution",
};
const dagspec: DagSpec = {
  skeleton: [node],
};

export interface CustomGraphProps {}

export function CustomGraph(props: CustomGraphProps) {
  let elem = document.createElement("directed-acyclic-graph-component");
  Object.assign(elem, { dagSpec: dagspec });

  const dag_ref = useRef({});

  useEffect(() => {
    Object.assign(dag_ref.current, { dagSpec: dagspec });
  }, [dag_ref]);

  return (
    <directed-acyclic-graph-component
      ref={dag_ref}
    ></directed-acyclic-graph-component>
  );
}
