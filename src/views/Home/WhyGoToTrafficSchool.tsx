import React from "react";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import { GoCheck } from "react-icons/go";

function WhyGoToDriversEd() {
  return (
    <Wrapper styles="py-10">
      <div className="w-full flex flex-col gap-4 md:gap-6 justify-center items-center">
        <p className="text-[28px] md:text-[34px] text-center uppercase font-semibold font-poppins">
          Why Go to Drivers Ed?
        </p>
        <p className="text-[16px] md:text-[22px] font-inter font-medium text-center">
          Discover the Benefits of Drivers Ed:
        </p>
        <p className="text-[16px] md:text-left text-center md:text-[18px] font-normal font-inter">
          Drivers Education can be a valuable resource for improving your driving skills, maintaining low insurance rates, and meeting certain court requirements. At DriversEdDepot, we provide information and resources to help you explore Drivers Ed options in your area. Whether you need to satisfy a court order, reduce insurance premiums, or enhance your driving knowledge, Drivers Ed can help you achieve your goals.
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
          By enrolling in Drivers Ed, you can gain valuable knowledge, improve your driving record, and potentially enjoy benefits such as insurance discounts. Take the first step towards a safer and more responsible driving experience by exploring Drivers Ed options today!
        </p>
        {/* ====> enroll now button */}
        <button className="w-[170px] h-[50px] mt-4 sm:mt-8 font-medium text-[20px] text-white-main bg-brand-primary rounded-[10px] capitalize hover:opacity-80">
          Explore Now
        </button>
      </div>
    </Wrapper>
  );
}

const Attributes = [
  {
    name: "Mask a moving violation",
  },
  {
    name: "Satisfy a court order to attend Drivers Ed",
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

export default WhyGoToDriversEd;
