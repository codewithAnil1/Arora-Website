import React, { useEffect } from "react";
import styles from "./About.module.css";
import icon1 from "../../arora assets/icon1.png";
import icon2 from "../../arora assets/icon2.png";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: "2000", delay: "500" });
  }, []);
  return (
    <div className={styles.AboutContaner} data-aos="zoom-in">
      <div>
        <h3 className={styles.Heading}>About Us</h3>
      </div>
      <img src={icon1} className={styles.TopIcon} data-aos="fade-right" />
      <div className={styles.ParagrapContener}>
        <div className={styles.para}>
          <p>
            Welcome to Arora Design and Tech Solution Plartform, where
            innovation converges with design, and transformation is not just a
            goal but a mantra. Our journey is fueled by a relentless passion for
            pushing boundaries and redefining possibilities in the dynamic
            realms of technology and design.
          </p>
          <p data-aos="fade-up">
            &emsp;&emsp; At our company, our motto-
            <span>Innovate, Design, Transform </span>-serves as our guiding
            philosophy. We are a dedicated team of visionaries committed to
            creating seamless and revolutionary solutions that bridge the gap
            between cutting-edge technology and elegant design aesthetics.
          </p>
          <p data-aos="fade-up">
            &emsp; In a world where innovation is the heartbeat of progress, we
            invite you to join us on this exciting journey. Explore a synergy of
            creativity and functionality that empowers you to not just adapt but
            thrive in an ever-evolving landscape.
          </p>
          <p className={styles.p4} data-aos="fade-up">
            &emsp;&emsp;&emsp;At Arora, we don't just offer products; we offer
            possibilities. Innovate with us, design with us, and together, let's
            transform the way you experience
            <span> technology and design. </span>
          </p>
        </div>
      </div>
      <img src={icon2} className={styles.bottomIcon} data-aos="fade-left" />
    </div>
  );
};

export default About;
