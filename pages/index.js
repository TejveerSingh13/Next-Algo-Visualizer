import { Fragment } from "react";
import NavigationBar from "../components/navbar";
import GraphContainer from "../components/VisualilizationComponents/graphContainer";

export default function Home() {

  return (
    <Fragment>
      <NavigationBar />
      <GraphContainer /> 
    </Fragment>
  )
}
