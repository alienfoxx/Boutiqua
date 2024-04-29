import React from "react";
import Navbar from "../componenet/Navbar";
import Anounecment from "../componenet/Anouncement";
import Slider from "../componenet/Slider";
import Categories from "../componenet/Categories";
import Products from "../componenet/Products";
import Newsletter from "../componenet/Newsletter";

const Home = () => {
  return (
    <div>
    <Anounecment/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>

    </div>
  );
};

export default Home;