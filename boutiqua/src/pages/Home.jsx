import React from "react";
import Navbar from "../componenet/Navbar";
import Anounecment from "../componenet/Anouncement";
import Slider from "../componenet/Slider";
import Categories from "../componenet/Categories";

const Home = () => {
  return (
    <div>
    <Anounecment/>
      <Navbar/>
      <Slider/>
      <Categories/>

    </div>
  );
};

export default Home;