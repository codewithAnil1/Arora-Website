import React from "react";
import Styles from "./Header.module.css";
import logo from "../../arora assets/ARORA-LOGO-3.png";
import HomePage from "../.././Page/HomePage";
import bgvideo from "../../arora assets/small/g1 up.mp4";
import { navItems } from "./NavItems";
import { useState } from "react";
import Dropdownn from "./Dropdown/Dropdown";
import { RiArrowDropDownLine, RiArrowUpSLine } from "react-icons/ri";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };
  return (
    <main>
      <section>
        <div className={Styles.MainContaner}>
          <div className={Styles.menuIcon} onClick={clickHandler}>
            {clicked ? (
              <IoCloseSharp className={Styles.ham} />
            ) : (
              <IoMenu className={Styles.close} />
            )}
          </div>
          <div>
            <img src={logo} alt="logo" className={Styles.Logo} />
          </div>

          <div className={clicked ? Styles.ListDivA : Styles.ListDiv}>
            <ul>
              {/* {navItems.map((item) => (
                <li key={item.id} className={item.cName}>{item.title}</li>
              ))} */}
              <li>HOME</li>
              <li
                onClick={() =>
                  window.scrollTo({ top: 750, behavior: "smooth" })
                }
              >
                About
              </li>
              <li>Our Specilize</li>

              <li>Whats new</li>
              <li>Happy clints</li>
              <li
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                Our course {dropdown ? <FaAngleUp /> : <FaAngleDown />}
                {/* <RiArrowDropDownLine /><RiArrowUpSLine /> */}
                {dropdown && <Dropdownn />}
              </li>
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
