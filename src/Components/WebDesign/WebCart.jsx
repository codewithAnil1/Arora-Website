import React, { useEffect } from "react";
import styles from "./WebCart.module.css";
// import tumb1 from "../../arora assets/Design assets/image-1.png";
// import tumb2 from "../../arora assets/Design assets/image-1.png";
// import tumb3 from "../../arora assets/Design assets/image-1.png";
// import tumb4 from "../../arora assets/Design assets/image-1.png";
// import tumb5 from "../../arora assets/Design assets/image-1.png";
// import tumb6 from "../../arora assets/Design assets/image-2.png";
import tumb1 from "../../arora assets/Design assets/Image-1.png";
import tumb2 from "../../arora assets/Design assets/Image-2.png";
import tumb3 from "../../arora assets/Design assets/Image-3.png";
import tumb4 from "../../arora assets/Design assets/Image-4.png";
import tumb5 from "../../arora assets/Design assets/Image-5.png";
import tumb6 from "../../arora assets/Design assets/Image-6.png";
import AOS from "aos";
import "aos/dist/aos.css";
const WebCart = () => {
  useEffect(() => {
    AOS.init({ duration: "2000", delay: "500" });
  }, []);
  return (
    <div className={styles.mainContainer}>
      <div
        className={styles.cardContaner}
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <img src={tumb1} className={styles.thumb1} />

        <h2 className={styles.head2}>Pre-built website</h2>
        <p className={styles.parag}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis unde
          eveniet, officiis minima dolor molestiae, possimus sapiente totam sit
          officia dicta harum?
        </p>
      </div>
      <div
        className={styles.cardContaner}
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-delay="1000"
      >
        <img src={tumb2} className={styles.thumb1} />

        <h2 className={styles.head2}>Design Element</h2>
        <p className={styles.parag}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis unde
          eveniet, officiis minima dolor molestiae, possimus sapiente totam sit
          officia dicta harum?
        </p>
      </div>
      <div
        className={styles.cardContaner}
        data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-delay="1500"
      >
        <img src={tumb3} className={styles.thumb1} />

        <h2 className={styles.head2}>Built For Performance</h2>
        <p className={styles.parag}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis unde
          eveniet, officiis minima dolor molestiae, possimus sapiente totam sit
          officia dicta harum?
        </p>
      </div>
      <div
        className={styles.cardContaner}
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <img src={tumb4} className={styles.thumb1} />

        <h2 className={styles.head2}>Mobile friedly</h2>
        <p className={styles.parag}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis unde
          eveniet, officiis minima dolor molestiae, possimus sapiente totam sit
          officia dicta harum?
        </p>
      </div>
      <div
        className={styles.cardContaner}
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-delay="1000"
      >
        <img src={tumb5} className={styles.thumb1} />

        <h2 className={styles.head2}>Dynamic Content</h2>
        <p className={styles.parag}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis unde
          eveniet, officiis minima dolor molestiae, possimus sapiente totam sit
          officia dicta harum?
        </p>
      </div>
      <div
        className={styles.cardContaner}
        data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-delay="1500"
      >
        <img src={tumb6} className={styles.thumb1} />

        <h2 className={styles.head2}>Online Store Builder</h2>
        <p className={styles.parag}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis unde
          eveniet, officiis minima dolor molestiae, possimus sapiente totam sit
          officia dicta harum?
        </p>
      </div>
    </div>
  );
};

export default WebCart;
