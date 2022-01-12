import { Fragment } from "react";
import NavigationBar from "../components/navbar";
import { bubbleSort } from "../algorithms/sorting algo/bubblesort";
import { Button } from "react-bootstrap";
import GraphContainer from "../components/VisualilizationComponents/graphContainer";

export default function Home() {

  const array = [6, 15, 3, 4]
  const sortFunction = () => bubbleSort(array)

  return (
    <Fragment>
      <NavigationBar />
      <GraphContainer> 
        {/* <Button onClick={sortFunction} size="sm">Click to Execute</Button> */}
      </GraphContainer>
    </Fragment>
  )
}
