import React from "react";
import Navbar from "../componenet/Navbar";
import Anounecment from "../componenet/Anouncement";
import Slider from "../componenet/Slider";
import Categories from "../componenet/Categories";
import Products from "../componenet/Products";
import Newsletter from "../componenet/Newsletter";
import Footer from "../componenet/Footer";

const Home = () => {
  return (
    <div>
   
      <Navbar/>
      <Anounecment/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>

    </div>
  );
};

export default Home;