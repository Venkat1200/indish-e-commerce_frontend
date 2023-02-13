import paypal from "./images/paypal.png";
import { Link } from "react-router-dom";

import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <center>
          <div className="footer">
            <div className="footer-logo">
              <Link to="/">
                <h3>INDISH</h3>
              </Link>
            </div>
            <h4 className="footer-text">
              copyright © INDISH all rights reserved. "INDISH" is a registered
              brandname of India
            </h4>
            <img className="footer-logos" src={paypal} />
          </div>
        </center>
      </div>
    </>
  );
}
