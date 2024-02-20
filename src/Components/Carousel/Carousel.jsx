import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img2 from "../../arora assets/front page1.jpg";
import img3 from "../../arora assets/front page2.jpg";
import img4 from "../../arora assets/front page3.jpg";
import "./Carousel.css";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
      <Carousel.Item>
        <img src={img2} className="image2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} className="image2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img4} className="image2" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
