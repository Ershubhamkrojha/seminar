import React from "react";
import About from "../Components/About";
import Contact from "../Components/Contact";
import CoOrdiantor from "../Components/CoOrdiantor";
import Intro from "../Components/Intro";
import SeminarHall from "../Components/SeminarHall";
const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <SeminarHall />
      <CoOrdiantor />
      <Contact />
    </>
  );
};

export default Home;
