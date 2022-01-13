import BubbleSort from '../SortingAlgoComponent/bubblesorting'
import { Container, AlgoTitle } from './style'

const GraphContainer = () => {
  // const data = [6, 15, 30, 40,25,14,23,2,11,16,27,38]
  const data = [16, 15, 5, 4]
  return(
    <Container>
      <AlgoTitle>Bubble Sort</AlgoTitle>  
      <BubbleSort data={data}/>
    </Container>
  )
}
export default GraphContainer