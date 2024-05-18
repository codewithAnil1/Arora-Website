import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img2 from "../../arora assets/innovate.png";
import img3 from "../../arora assets/Design.png";
import img4 from "../../arora assets/Transform.png";
import Typewriter from "typewriter-effect";
import bgvideo from "../../arora assets/small/g1 up.mp4";
import styles from "./Carousel.module.css";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
      {/* <video src={bgvideo} autoPlay muted loop /> */}
      <Carousel.Item>
        <div className={styles.caraContaner}>
          <div className={styles.textCon}>
            <div>
              <h1 className={styles.h1S}>
                <span>innovate </span>the future Where idea sparks
                {/* <Typewriter
                  options={{
                    strings: ["Where idea sparks"],
                    autoStart: true,
                    loop: true,
                  }}
                /> */}
              </h1>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Nesciunt, porro!
            </p>
            <div>
              <button className={styles.conbtn}>Contct us</button>
            </div>
          </div>
          <div className={styles.imageContener}>
            <img src={img2} className={styles.image1} />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.caraContaner}>
          <div className={styles.textCon}>
            <div>
              <h1 className={styles.h1S}>
                <Typewriter
                  options={{
                    strings: ["Designing"],
                    autoStart: true,
                    loop: true,
                  }}
                />
                Dreams Creating realities
              </h1>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Nesciunt, porro!
            </p>
            <div>
              <button className={styles.conbtn}>Contact us</button>
            </div>
          </div>
          <div className={styles.imageContener}>
            <img src={img3} className={styles.image2} />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.caraContaner}>
          <div className={styles.textCon}>
            <div>
              <h1 className={styles.h1S}>
                change the game
                <Typewriter
                  options={{
                    strings: ["Transfoming "],
                    autoStart: true,
                    loop: true,
                  }}
                  lives
                />
              </h1>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Nesciunt, porro!
            </p>
            <div>
              <button className={styles.conbtn}>Contact us</button>
            </div>
          </div>
          <div className={styles.imageContener}>
            <img src={img4} className={styles.image3} />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
