import { Button } from 'react-bootstrap'
import { bubbleSort } from '../../algorithms/sorting algo/bubblesort' 
import { VisualContainer, RowContainer, ColContainer, BarContainer, BarIndicator } from './style'

const BubbleSort = ({data}) => {

  const sortFunction = () => bubbleSort(data)

  return(
    <VisualContainer>
        <RowContainer>
          {data.map((d, ind )=> {
            const high = Math.round((d/15)*100)
            return (
            <ColContainer key={Math.random()}>
              <div>{d}</div>
              <BarContainer>
                <BarIndicator height={`${high}%`} />
              </BarContainer>
              <div>{ind}</div>
              {/* <div>i/j</div> */}
            </ColContainer>
            )})}
        </RowContainer>
        <Button onClick={sortFunction}>herre</Button>
      </VisualContainer>
  )
}

export default BubbleSort