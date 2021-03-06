import DSC_0062 from "../images/DSC_0062.JPG"
import DSC_5935 from "../images/IMG_5935.jpg"
import DSC_0080 from "../images/DSC_0080.JPG"
import IMG_5695 from '../images/IMG_5695.JPG'
import pazur1 from "../images/pazur(1).jpg"
import pazur2 from "../images/pazur(2).jpg"
import pazur3 from "../images/pazur(3).jpg"
import pazur4 from "../images/pazur(4).jpg"
import pazur5 from "../images/pazur(5).jpg"

function Images() {
  return (
    <>
      <ImageDiv img={DSC_5935} />
      <ImageDiv img={DSC_0062} />
      <ImageDiv img={IMG_5695} />
      <ImageDiv img={DSC_0080} />
      <ImageDiv img={pazur1} />
      <ImageDiv img={pazur3} />
      <ImageDiv img={pazur4} />
      <ImageDiv img={pazur5} />
      <ImageDiv img={pazur2} />
    </>
  )
}

function ImageDiv({ img }) {
  return (
    <div>
      <img src={img} alt="pazur_1" />
    </div>
  )
}

export default Images
