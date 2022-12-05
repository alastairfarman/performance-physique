import Graph from "../calc-pages/Graph";

export default function DeficitGraph() {
  return (
    <>
      <div className="large dark" id="content-graph">
        <Graph dark={true} />
      </div>
    </>
  );
}
