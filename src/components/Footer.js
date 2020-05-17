import React from 'react'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import web from '../img/social/web.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="social">
          <a href="https://facebook.com">
            <img src={facebook} alt="Facebook" />
          </a>
          {/* <a href="https://twitter.com">
            <img src={twitter} alt="Twitter" />
          </a> */}
          <a href="https://instagram.com">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
        <a href="https://hotelclassicbegur.com" className="website">hotelclassicbegur.com</a>
      </footer>
    )
  }
}

export default Footer
