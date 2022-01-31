import { useState } from 'react'
import { GraphControllerContext } from '../../context/Context'
import BubbleSort from '../SortingAlgoComponent/bubblesorting'
import GraphController from './graphController'
import { 
  Container, 
  AlgoTitle, 
  VisualContainer
 } from './style'

const GraphContainer = () => {
  // const data = [6, 15, 30, 40,25,14,23,2,11,16,27,38]
  const [controlData, setControlData] = useState({
     inputData: [20, 15, 7, 4],
     start: false,
     stepCount: 0,
     currentStep: 0
  })

  const data = [20, 15, 7, 4]
  return(
    <GraphControllerContext.Provider value={{...controlData, setControlData}}>
      <Container>
        <AlgoTitle>Bubble Sort</AlgoTitle>  
        <VisualContainer>
          <BubbleSort data={data}/>
          <GraphController />
        </VisualContainer>
      </Container>
    </GraphControllerContext.Provider>
  )
}
export default GraphContainer