import WebArt from "./webArt/WebArt";
import WebDesign from "./webArt/WebDesign";
import ComaretionSlider from "../ComparetionSlider/ComaretionSlider";
import { useState } from "react";
import mIcon from "../../arora assets/middle page/Graphic design.png";
import mIcon1 from "../../arora assets/middle page/code.png";
import mIcon2 from "../../arora assets/middle page/web-design.png";
import styles from "./Box.module.css";
import { GoArrowRight } from "react-icons/go";
import { IoMdArrowRoundDown } from "react-icons/io";
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
const Box = () => {
  const [selectedComponent, setSelectedComponent] = useState("com");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <div className={styles.multimedia}>
      <div className={styles.mbox_container}>
        <h1>Design anything ,build anything</h1>
        <h5>
          Design and launch your website fast &no code knowledge is required .
        </h5>
      </div>
      <div className={styles.box_container}>
        <div className={styles.sidebar}>
          <div
            onClick={() => setSelectedComponent("com")}
            className={styles.titels}
          >
            <img src={mIcon} className="" />
            <h2>Web Devlopment</h2>
            <div onClick={() => setShow(!show)}>
              {show ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
            </div>
          </div>
          {show && (
            <div className={styles.details}>
              <ul>
                <li>webdata</li>
                <li> web data</li>
                <li>web animation</li>
              </ul>
            </div>
          )}
          <div
            onClick={() => setSelectedComponent("art")}
            className={styles.titels}
          >
            {" "}
            <img src={mIcon1} />
            <h2>Web Art </h2>
            <div onClick={() => setShow2(!show2)}>
              {show2 ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
            </div>
          </div>
          {show2 && (
            <div className={styles.details}>
              <ul>
                <li>webdata</li>
                <li> web data</li>
                <li>web animation</li>
              </ul>
            </div>
          )}
          <div
            onClick={() => setSelectedComponent("design")}
            className={styles.titels}
          >
            <img src={mIcon2} />
            <h2>Web Design</h2>
            <div onClick={() => setShow3(!show3)}>
              {show3 ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
            </div>
          </div>
          {show3 && (
            <div className={styles.details}>
              <ul>
                <li>webdata</li>
                <li> web data</li>
                <li>web animation</li>
              </ul>
            </div>
          )}
          {/* <div onClick={() => setShow(!show)}>
            <h5 className="detail">
              Show more {show ? <IoIosArrowDropdown /> : <IoMdArrowRoundDown />}
            </h5>
          </div> */}
        </div>
        <div className={styles.display_section}>
          {selectedComponent === "com" && <ComaretionSlider />}
          {selectedComponent === "art" && <WebArt />}
          {selectedComponent === "design" && <WebDesign />}
        </div>
      </div>
      <div className={styles.footerText}>
        <h1>
          Discover more <GoArrowRight />{" "}
        </h1>
      </div>
    </div>
  );
};

export default Box;
