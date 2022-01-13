import styled from "styled-components";

export const Container = styled.div`
  color: blue;
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