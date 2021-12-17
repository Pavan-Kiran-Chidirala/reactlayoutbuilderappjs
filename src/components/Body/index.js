/* eslint-disable react/no-unescaped-entities */
// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <div className="body-container">
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <>
            {showLeftNavbar ? (
              <div className="left-nav-container">
                <h1 className="nav-bar-heading">Left Navbar Menu</h1>
                <ul className="ul-list">
                  <li className="li-item">Item 1</li>
                  <li className="li-item">Item 2</li>
                  <li className="li-item">Item 3</li>
                  <li className="li-item">Item 4</li>
                </ul>
              </div>
            ) : null}
            {showContent ? (
              <div className="content-container">
                <h1 className="content-heading">Content</h1>
                <p className="content-para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            ) : null}
            {showRightNavbar ? (
              <div className="right-nav-container">
                <h1 className="nav-bar-heading">Right Navbar</h1>
                <div className="ul-list">
                  <p className="li-item2">Ad 1</p>
                  <p className="li-item2">Ad 2</p>
                </div>
              </div>
            ) : null}
          </>
        )
      }}
    </ConfigurationContext.Consumer>
  </div>
)

export default Body
