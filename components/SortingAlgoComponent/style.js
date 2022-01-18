import styled from "styled-components";
import Image from 'next/image'

export const VisualContainer = styled.div`
display: flex;
flex-direction: column;
border: 3px solid #ceceeb;
border-radius: 16px;
padding: 16px;
`
export const RowContainer = styled.div`
display: flex;
justify-content: space-evenly;
margin-bottom: 8px;
`
export const ColContainer = styled.div`
display: flex;
flex-direction: column;
min-width: 30px;
align-items: center;
`
export const ValueTag = styled.div`
  margin-bottom: 8px;
`
export const BarContainer = styled.div`
height: 136px;
width: 70%;
display: flex;
flex-direction: column-reverse;
`
export const BarIndicator = styled.div`
background-color: lightcoral;
height: ${props => props?.height}
`
export const ControlWrapper = styled.div`
  display:flex;
  justify-content: space-evenly;
`
export const IconContainer = styled(Image)`
    width: 16px;
    height: 16px;
    margin-top: 4px;
    transform: ${props => props.back ?? 'rotate(180deg)'}
`
export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const CurrentStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
export const ControlButton = styled.button`
  margin: 8px;
  border-radius: 12px;
`
export const CurrentStepTitle = styled.div`
  font-size: 22px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`
export const CurrentStepValue = styled.div`
  font-size: 26px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`