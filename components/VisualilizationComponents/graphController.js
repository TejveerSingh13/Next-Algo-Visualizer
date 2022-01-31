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

  const data = useContext(GraphControllerContext)
  console.log('here', data);

  return(
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
        <ControlButton><IconContainer back='true' src={leftIcon} /> Prev</ControlButton>
        <ControlButton>Next <IconContainer src={leftIcon}/></ControlButton>
      </StepsContainer>
    </ControlWrapper>
  )
}

export default GraphController