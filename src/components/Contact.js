import Feed from "react-instagram-authless-feed"

function Footer() {
  return (
    <div>
      <h1>Kontakt</h1>
      <h2>joannafajto95@gmail.com</h2>
      <h2>+48 512 602 455</h2>
      <div className='insta-photos'>
          <h1>Instagram</h1>
        {/* <Feed
          userName="fajtojoanna"
          className="Feed"
          classNameLoading="Loading"
          limit="3"
        /> */}
      </div>
    </div>
  )
}

export default Footer
