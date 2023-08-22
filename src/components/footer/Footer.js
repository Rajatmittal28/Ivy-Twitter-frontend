import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <h5 style={{ textAlign: "center", marginBottom:5 }}>
          2019-2023 &copy; All Copyrights Are Reserved By TwitCom
        </h5>
        <div className="footerContainer">
          <div className="footerLeft">
            <h1 style={{ textAlign: "start", marginBottom:5 }}>Contact Us</h1>
            <div>
              <div className="Contacts">
                <p>Rajat Mittal</p>
                <a href="tel:6378407433">
                  <i className="fas fa-phone"></i> 12345-67890
                </a>
                <br />
                <a href="mailto:keshavyadav200018@gmail.com">
                  <i className="fas fa-envelope"></i> xyz@gmail.com
                </a>
              </div>
            </div>
          </div>


          <div className="footerCenter">
            <h1 style={{ textAlign: "center", marginBottom:5 }}>Visit Us</h1>
            <div>
              <div className="visit">
                <a href="#">
                  <i className="fa-brands fa-twitter" style={{transform: 'translateX(-.3rem)'}}></i>
                </a><p>Twitter</p>
              </div>
              <div className="visit">
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a><p>LinkedIn</p>
              </div>
            </div>
          </div>

          
        </div>
      </footer>
    </>
  );
}

export default Footer;
