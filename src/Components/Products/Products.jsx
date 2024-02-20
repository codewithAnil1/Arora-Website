import React from "react";
import produtImg from "../../arora assets/web page.jpg";
import styles from "./Product.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Products = () => {
  useEffect(() => {
    AOS.init({ duration: "3000", delay: "500" });
  }, []);
  return (
    <div>
      <div
        className={styles.TextContaner}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div>
          <h1>Website Design</h1>
          <div>
            &emsp; &emsp;<span>All-In-One</span>
            &ensp;<span>In ARORA</span>
          </div>
        </div>

        <p> Experience total control over your website creation process</p>
      </div>
      <div>
        <img
          src={produtImg}
          style={{ width: "100%", height: "auto         " }}
        />
      </div>
    </div>
  );
};

export default Products;
