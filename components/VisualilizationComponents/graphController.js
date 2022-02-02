import { useContext } from 'react'
import { GraphControllerContext } from '../../context/Context'
import {
  ControlWrapper, 
  IconContainer, 
  StepsContainer,
  ControlButton,
  CurrentStepContainer,
  CurrentStepTitle,
  CurrentStepValue
 } from './style'
 
 const leftIcon = require('../../public/icons/back.png')

const GraphController = () => {

  const {controlData, setControlData} = useContext(GraphControllerContext)
  let {start, stepCount, currentStep} = controlData

  const onPlay = () => {
    setControlData({...controlData, start:!start})
  }
  const onNext = (event) => {
    currentStep++
    if(currentStep < stepCount){
      setControlData({...controlData, currentStep:currentStep})
    }
  }
  const onPrev = (event) => {
    if(currentStep > 0) {
      currentStep--
      setControlData({...controlData, currentStep:currentStep})
    }
  }

  return(
    <ControlWrapper>
      <StepsContainer>
        <ControlButton onClick={onPlay} disabled={start}>Play</ControlButton>
        <ControlButton onClick={onPlay} disabled={!start}>Stop</ControlButton>
      </StepsContainer>
      <CurrentStepContainer>
        <CurrentStepTitle>Step</CurrentStepTitle>
        <CurrentStepValue>{currentStep + 1}/5</CurrentStepValue>
      </CurrentStepContainer>
      <StepsContainer>
        <ControlButton onClick={onPrev} disabled={start}><IconContainer back='true' src={leftIcon} /> Prev</ControlButton>
        <ControlButton onClick={onNext} disabled={start}>Next <IconContainer src={leftIcon}/></ControlButton>
      </StepsContainer>
    </ControlWrapper>
  )
}

export default GraphController