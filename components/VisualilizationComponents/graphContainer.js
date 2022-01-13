import { Container, AlgoTitle, VisualContainer, RowContainer, ColContainer, BarContainer, BarIndicator } from './style'

const GraphContainer = (props) => {
  const data = [6, 15, 30, 40,25,14,23,2,11,16,27,38]
  // const data = [6, 15, 300, 4]
  return(
    <Container>
      <AlgoTitle>Bubble Sort</AlgoTitle>  
      <VisualContainer>
        <RowContainer>
          {data.map((d, ind )=> {
            const high = Math.round((d/40)*100)
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
      </VisualContainer>
      {props.children}
    </Container>
  )
}
export default GraphContainer