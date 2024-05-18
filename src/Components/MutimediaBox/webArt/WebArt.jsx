import React from "react";
import webart from "../../../arora assets/middle page/web-banner.jpg";
import styles from "./WebArt.module.css";
const WebArt = () => {
  return (
    <div>
      <img src={webart} className={styles.webart} />
    </div>
  );
};

export default WebArt;
