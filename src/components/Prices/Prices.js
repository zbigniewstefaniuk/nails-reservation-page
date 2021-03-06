import { Pricesdata } from "./PricesData"
import styles from '../../styles/prices.module.css'

function Prices() {
  return (
    <section className={styles.prices} id="prices">
      <div class="container my-5">
        <div className={styles.headerText}>
          <h1>Cennik</h1>
        </div>

        {Pricesdata.map(({ price, title, cName }, index) => {
          return (
            <section
              key={index}
              className={styles.rowWrapper}>

              <div
                className={styles.pricesContainerService}>
                <div class="text-center text-uppercase text-secondary">
                  <medium class="d-block" style={{ fontWeight: 600 }}>
                    {title}
                  </medium>
                </div>
                <div className={styles.serviceContainer}>
                  <h2 class="my-2 font-weight-bold">{price}</h2>
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </section>
  )
}

export default Prices
