import React from "react";
import Hero from "./Hero";
import Attributes from "./Attributes";
import WhyGoToDriversEd from "./WhyGoToTrafficSchool";
import BenefitsOfOnlineTrafficSchool from "./BenefitsOfOnlineTrafficSchool";
import Faqs from "./Faqs";
import BenefitsOfDrivingSchool from "./BenefitsOfDrivingSchool";
import StateIntentNavigator from "./StateIntentNavigator";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Attributes />
      <StateIntentNavigator />
      <WhyGoToDriversEd />
      <BenefitsOfOnlineTrafficSchool />
      <BenefitsOfDrivingSchool />
      <Faqs />
    </React.Fragment>
  );
}

export default Home;
