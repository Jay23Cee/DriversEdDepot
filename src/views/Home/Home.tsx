import React from "react";
import Hero from "./Hero";
import Attributes from "./Attributes";
import WhyGoToTrafficSchool from "./WhyGoToDrivingSchool";
import BenefitsOfDrivingSchool from "./BenefitsOfDrivingSchool";
import Faqs from "./Faqs";
import TrafficSchool from "../TrafficSchool";


function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Attributes/>
      <WhyGoToTrafficSchool/>
      <BenefitsOfDrivingSchool/>
      <Faqs/>
      <TrafficSchool/>
    </React.Fragment>
  );
}

export default Home;
