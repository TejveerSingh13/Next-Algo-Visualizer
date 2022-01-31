
import { Fragment, useEffect, useState } from 'react'
import { bubbleSort } from '../../algorithms/sorting algo/bubblesort' 
import { VisualContainer,
    RowContainer,
    ColContainer,
    BarContainer, 
    BarIndicator, 
    ValueTag
  } from './style'

const BubbleSort = ({data}) => {

  const [initialData, setinitialData] = useState([...data])
  const [dataSteps, setDataSteps] = useState(null)

  useEffect(() => {
    const newData = bubbleSort(data)
    setDataSteps(newData)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return(
    <Fragment>
        <RowContainer>
          {initialData.map((d, ind )=> {
            const high = Math.round((d/20)*100)
            return (
            <ColContainer key={Math.random()}>
              <ValueTag>{d}</ValueTag>
              <BarContainer>
                <BarIndicator height={`${high}%`} />
              </BarContainer>
              <div>{ind}</div>
            </ColContainer>
            )})}
        </RowContainer>
      </Fragment>
  )
}

export default BubbleSort