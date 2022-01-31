import styled from "styled-components";

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