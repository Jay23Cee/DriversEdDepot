import React from "react";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import { GoCheck } from "react-icons/go";
import { trackSeoEvent } from "@/lib/analytics";

function WhyGoToDrivingSchool() {
  const handleEnrollClick = () => {
    trackSeoEvent("cta_clicked", {
      placement: "benefits_section",
      state_name: "all-states",
      state_slug: "all-states",
      provider: "none",
      page_type: "home",
      section: "why_go_to_driving_school",
    });

    const heroSection = document.getElementById("home");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Wrapper styles="py-10">
      <div className="w-full flex flex-col gap-4 md:gap-6 justify-center items-center">
        <p className="text-[28px] md:text-[34px] text-center uppercase font-semibold font-poppins">
          Why Go to Driving School?
        </p>
        <p className="text-[16px] md:text-[22px] font-inter font-medium text-center">
          Driving School & Defensive Driving Courses: Learn safe driving techniques and improve your skills on the road, with one of our comprehensive driving school courses!
        </p>

        {/* ====> attributes */}
        <div className="w-full flex items-start flex-col gap-2 sm:gap-3">
          {Attributes.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center gap-3"
              >
                <GoCheck className="text-brand-primary text-[20px] md:text-[26px]" />
                <p className="font-inter text-[16px] md:text-[18px] text-black-main">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
        <p className="text-[16px] md:text-left text-center md:text-[18px] font-normal font-inter">
          Our courses provide a comprehensive learning experience with interactive
          lessons and practical exercises. Whether you are a new driver or looking to
          refresh your skills, these programs help you become a safer, more confident
          driver at your own pace.
        </p>
        {/* ====> enroll now button */}
        <button
          type="button"
          onClick={handleEnrollClick}
          className="w-[170px] h-[50px] mt-4 sm:mt-8 font-medium text-[20px] text-white-main bg-brand-primary rounded-[10px] capitalize hover:opacity-80"
        >
          Enroll Now
        </button>
      </div>
    </Wrapper>
  );
}

const Attributes = [
  {
    name: "Learn safe driving techniques",
  },
  {
    name: "Improve your driving skills",
  },
  {
    name: "Satisfy a court order to attend driving school",
  },
  {
    name: "Lower your insurance premiums",
  },
  {
    name: "Qualify for a safe driver discount",
  },
  {
    name: "Meet an employer requirement for fleet driver training",
  },
  {
    name: "Prevent or remove driver record points",
  },
];

export default WhyGoToDrivingSchool;
