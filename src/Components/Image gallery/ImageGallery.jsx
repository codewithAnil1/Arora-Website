import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./imagegallery.module.css";
import { FaStar } from "react-icons/fa";
const ImageGallery = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/collections?page=1&query=3d&client_id=K7_W2HiqoClYSBFqLPeI427uoLRdxEbkIsYt5KZLKC0"
      )

      .then((res) => {
        setImages(res.data.results);
      });
  }, []);
  console.log(images);
  return (
    <div>
      <div className={styles.cardContaner}>
        {images.map((item) => {
          return (
            <div key={item.id} className={styles.imageCart}>
              <img
                src={item.cover_photo.urls.small}
                className={styles.imagess}
              />
              <div className={styles.textDiv}>
                <h4>{item.title}</h4>
                <div>
                  {" "}
                  <h6>Rating :</h6>
                  <span>4.5</span>
                  <FaStar />
                </div>
              </div>
              {/* <div>
                <button>Contact US</button>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
