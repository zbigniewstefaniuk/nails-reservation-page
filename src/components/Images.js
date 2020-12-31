import DSC_0062 from "../images/DSC_0062.JPG"
import DSC_5935 from "../images/IMG_5935.jpg"
import DSC_0080 from "../images/DSC_0080.JPG"
import IMG_5695 from '../images/IMG_5695.JPG'

function Images() {
  return (
    <div className="main-images-container">
      <ImageDiv img={DSC_5935} />
      <ImageDiv img={DSC_0062} />
      <ImageDiv img={IMG_5695} />
    </div>
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
