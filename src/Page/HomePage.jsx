import React from "react";
import Header from "../Components/Header/Header";
import CarouselFadeExample from "../Components/Carousel/Carousel";
import About from "../Components/About/About";
import Products from "../Components/Products/Products";

function HomePage() {
  return (
    <div>
      <Header />
      <CarouselFadeExample />
      <About />
      <Products />
    </div>
  );
}

export default HomePage;
