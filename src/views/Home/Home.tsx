import React, { useEffect } from "react";
import Hero from "./Hero";
import Attributes from "./Attributes";
import WhyGoToDriversEd from "./WhyGoToTrafficSchool";
import BenefitsOfOnlineTrafficSchool from "./BenefitsOfOnlineTrafficSchool";
import Faqs from "./Faqs";
import BenefitsOfDrivingSchool from "./BenefitsOfDrivingSchool";

function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://www.myimprov.com/?a_aid=66a4143c07172&a_bid=091e1333&a_cid=0882c38f";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <Hero />
      <Attributes />
      <WhyGoToDriversEd />
      <BenefitsOfDrivingSchool />
      <Faqs />
    </React.Fragment>
  );
}

export default Home;
