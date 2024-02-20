import React from "react";
import Styles from "./Header.module.css";
import logo from "../../arora assets/ARORA-LOGO-3.png";
function Header() {
  return (
    <main>
      <section>
        <div className={Styles.MainContaner}>
          <div>
            <img src={logo} alt="logo" className={Styles.Logo} />
          </div>
          <div className={Styles.ListDiv}>
            <ul>
              <li>HOME</li>
              <li>About</li>
              <li>Our Specilize</li>
              <li>Whats new</li>
              <li>Happy clints</li>
              <li>Our course</li>
            </ul>
          </div>

          <div>
            <button className={Styles.ContactBtn}>Contact us</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Header;
