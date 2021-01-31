import { Pricesdata } from "./PricesData"

function Prices() {
  return (
    <>
      <div class="container my-5">
        <div class="text-center mb-5">
          <h1 class="text-capitalize font-weight-bold">Cennik</h1>
        </div>

        {Pricesdata.map(({ price, title, cName }, index) => {
          return (
            <div
              key={index}
              class="my-5 py-4 px-5 bg-light d-sm-flex align-items-center justify-content-between"
              style={{ borderRadius: "30px" }}>
              <div class="text-center">
                <span style={{ fontWeight: 600 }}></span>
                <h1 class="my-2 font-weight-bold">{price}</h1>
              </div>
              <div class="text-center text-uppercase text-secondary">
                <medium class="d-block" style={{ fontWeight: 600 }}>
                  {title}
                </medium>
              </div>
              <div class="text-center">
                <a
                  onClick={() => alert("Funkcja dostepna wkrótce...")}
                  href="#"
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
    </>
  )
}

export default Prices
