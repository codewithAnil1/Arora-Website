import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import styles from "./ComparetionSlider.module.css";
import com1 from "../../arora assets/Transform.png";
import com2 from "../../arora assets/Design.png";
import { useState, useEffect } from "react";

const ComaretionSlider = () => {
  const [viwe, setViwe] = useState(false);

  return (
    <div
      className={styles.ComCont}
      onMouseEnter={() => setViwe(false)}
      onMouseLeave={() => setViwe(true)}
    >
      <div>
        <div className={styles.Slider}>
          {viwe && (
            <div>
              <div className={styles.beforeD}>Before</div>
              <div className={styles.afterD}>After</div>
            </div>
          )}

          <ReactCompareSlider
            ref={{
              current: "[Circular]",
            }}
            boundsPadding={0}
            itemOne={
              <ReactCompareSliderImage
                alt="Image one"
                src="https://raw.githubusercontent.com/nerdyman/stuff/main/libs/react-compare-slider/demo-images/lady-1.png"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                alt="Image two"
                src="https://raw.githubusercontent.com/nerdyman/stuff/main/libs/react-compare-slider/demo-images/lady-2.png"
                style={{
                  backgroundColor: "white",
                  backgroundImage:
                    "\n linear-gradient(45deg, #ccc 25%, transparent 25%),\n linear-gradient(-45deg, #ccc 25%, transparent 25%),\n linear-gradient(45deg, transparent 75%, #ccc 75%),\n linear-gradient(-45deg, transparent 75%, #ccc 75%)",
                  backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                  backgroundSize: "20px 20px",
                }}
              />
            }
            keyboardIncrement="5%"
            position={50}
            style={{
              height: "80vh",
              width: "70vw",
              borderRadious: "20px",
              "@media screen and (max-width: 1000px)": {
                height: "50vh",
                width: "90vw",
              },
            }}
            transition=".75s ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default ComaretionSlider;
