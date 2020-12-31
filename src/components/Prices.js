import React from "react"

function Prices() {
  return (
    <div>
      <h1>Manicure</h1>
      <table className="price-table">
        <tr>
          <th>Usługa</th>
          <th>Cena</th>
        </tr>
        <tr>
          <td>Manicure hybrydowy</td>
          <td>50 zł</td>
        </tr>
        <tr>
          <td>Manicure żelowy</td>
          <td>70 zł</td>
        </tr>
        <tr>
          <td>Przedłużanie paznokci metodą żelową</td>
          <td>80 zł</td>
        </tr>
        <tr>
          <td>Manicure hybrydowy z bazą proteinową</td>
          <td>60 zł</td>
        </tr>
        <tr>
          <td>Uzupełnianie paznokci hybrydowych</td>
          <td>60 zł</td>
        </tr>
        <tr>
          <td>Uzupełnianie paznokci żelowych</td>
          <td>50 zł</td>
        </tr>
      </table>
    </div>
  )
}

export default Prices
