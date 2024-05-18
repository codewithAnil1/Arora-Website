import React from "react";
import Header from "../Components/Header/Header";
import CarouselFadeExample from "../Components/Carousel/Carousel";
import About from "../Components/About/About";
import Products from "../Components/Products/Products";
import FoodCards from "../Components/foodCards/FoodCards";

import Box from "../Components/MutimediaBox/Box";
import Dropdownn from "../Components/Header/Dropdown/Dropdown";
import Backdrop from "../Components/Header/Backdrop/Backdrop";
import WebDesign from "../Components/MutimediaBox/webArt/WebDesign";
import WebCart from "../Components/WebDesign/WebCart";
import ImageGallery from "../Components/Image gallery/ImageGallery";
function HomePage() {
  return (
    <div>
      <Header />

      <CarouselFadeExample />
      <About />
      <Products />
      <FoodCards />
      <WebCart />
      <Box />
      {/* <CarouselComponent />
      <Carousel2 /> */}
      <ImageGallery />
    </div>
  );
}

export default HomePage;
