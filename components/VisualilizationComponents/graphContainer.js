import styles from './style.module.css'

const GraphContainer = (props) => {
  const data = [6, 15, 30, 40,25,14,23,2,11,16,27,38]
  // const data = [6, 15, 300, 4]
  return(
    <div className={styles.container}>
      <div className={styles.algoTitle}>Bubble Sort</div>  
      <div className={styles.visualContainer}>
        <div className={styles.rowContainer}>
          {data.map((d, ind )=> {
            const high = Math.round((d/40)*100)
            console.log('here',high)
            return (
            <div className={styles.colContainer} key={Math.random()}>
              <div>{d}</div>
              <div className={styles.barContainer}>
                <div className={styles.barIndicator} style={{height: `${high}%`}} />
              </div>
              <div>{ind}</div>
              {/* <div>i/j</div> */}
            </div>
            )})}
        </div>
      </div>
      {props.children}
    </div>
  )
}
export default GraphContainer