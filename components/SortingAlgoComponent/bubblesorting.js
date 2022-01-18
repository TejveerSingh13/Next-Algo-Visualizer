
import { useEffect, useState } from 'react'
import { bubbleSort } from '../../algorithms/sorting algo/bubblesort' 
import { VisualContainer,
    RowContainer,
    ColContainer,
    BarContainer, 
    BarIndicator, 
    ValueTag, 
    ControlWrapper, 
    IconContainer, 
    StepsContainer,
    ControlButton,
    CurrentStepContainer,
    CurrentStepTitle,
    CurrentStepValue
  } from './style'
const leftIcon = require('../../public/icons/back.png')
const playIcon = require('../../public/icons/icons8-play-64.png')
const stopIcon = require('../../public/icons/icons8-stop-64.png')

const BubbleSort = ({data}) => {

  const [initialData, setinitialData] = useState([...data])
  const [dataSteps, setDataSteps] = useState(null)

  useEffect(() => {
    const newData = bubbleSort(data)
    setDataSteps(newData)
  },[])

  return(
    <VisualContainer>
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
              {/* <div>i/j</div> */}
            </ColContainer>
            )})}
        </RowContainer>
        <ControlWrapper>
          <StepsContainer>
            <ControlButton>Play</ControlButton>
            <ControlButton>Stop</ControlButton>
          </StepsContainer>
          <CurrentStepContainer>
            <CurrentStepTitle>Step</CurrentStepTitle>
            <CurrentStepValue>1/5</CurrentStepValue>
          </CurrentStepContainer>
          <StepsContainer>
            <ControlButton><IconContainer back src={leftIcon} /> Prev</ControlButton>
            <ControlButton>Next <IconContainer src={leftIcon}/></ControlButton>
          </StepsContainer>
        </ControlWrapper>
      </VisualContainer>
  )
}

export default BubbleSort