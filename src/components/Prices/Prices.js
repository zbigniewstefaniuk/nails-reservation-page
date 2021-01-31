import { Pricesdata } from "./PricesData"
import styles from '../../styles/prices.module.css'

function Prices() {
  return (
    <section className={styles.prices}>
      <div class="container my-5">
        <div class="text-center mb-5">
          <h1>Cennik</h1>
        </div>

        {Pricesdata.map(({ price, title, cName }, index) => {
          return (
            <div
              key={index}
              className={styles.pricesContainerService}
              style={{ borderRadius: "30px" }}>
              <div class="text-center">
                <span style={{ fontWeight: 600 }}></span>
                <h2 class="my-2 font-weight-bold">{price}</h2>
              </div>
              <div class="text-center text-uppercase text-secondary">
                <medium class="d-block" style={{ fontWeight: 600 }}>
                  {title}
                </medium>
              </div>
              <div class="text-center">
                <a
                  onClick={() => alert("Funkcja dostepna wkrótce...")}
                  href=""
                  class="btn text-white px-5 py-3"
                  style={{
                    backgroundColor: "#282c34",
                    borderRadius: "30px",
                  }}>
                  Umów się
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Prices
