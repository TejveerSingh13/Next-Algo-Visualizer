import styled from "styled-components";
import Image from 'next/image'

export const Container = styled.div`
  margin: 24px;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    margin: 32px;
  }
`
export const AlgoTitle = styled.div`
  font-size: 32px;
  line-height: 24px;
  margin-bottom: 24px;
`
export const VisualContainer = styled.div`
display: flex;
flex-direction: column;
border: 3px solid #ceceeb;
border-radius: 16px;
padding: 16px;
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