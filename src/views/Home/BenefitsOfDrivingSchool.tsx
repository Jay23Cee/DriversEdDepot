import React from "react";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import Image from "next/image";

function BenefitsOfDrivingSchool() {
  return (
    <Wrapper styles="bg-white-cool py-10">
      <div className="w-full grid gap-8 grid-cols-1 lg:grid-cols-[1.7fr,2fr]">
        {/* ==> left portion */}
        <div className="w-full h-[260px] xl:h-[320px] shadow-2xl relative rounded-[20px]">
          <Image
            src="/assets/driving.jpeg"
            fill
            className="object-cover rounded-[20px]"
            alt="Find the Best Traffic Schools with Drivers Ed Depot"
          />
        </div>
        {/* ====> right portion */}
        <div className="w-full flex flex-col gap-8">
          {/*  */}
          <div className="w-full flex flex-col gap-2">
            <p className="text-black-main text-[28px] leading-8 text-center font-semibold font-inter capitalize">
              Find the Best Online Driving School at Your Convenience with Drivers Ed Depot
            </p>
            <p className="text-[16px] font-inter text-center text-[#6c757d]">
              Drivers Ed Depot specializes in guiding you to the most affordable and reliable online driving schools. In today's digital age, we believe you deserve the best educational resources without overstretching your budget. Let us help you navigate through the choices, connecting you with courses that suit your needs perfectly.
            </p>
          </div>
          {/*  */}
          <div className="w-full flex flex-col gap-2">
            <p className="text-black-main text-[28px] leading-8 text-center font-semibold font-inter capitalize">
              How Drivers Ed Depot Helps You Choose the Right Online Driving School
            </p>
            <p className="text-[16px] font-inter text-center text-[#6c757d]">
              At Drivers Ed Depot, we understand the importance of quality education in driving. That's why we do the research for you, finding online driving schools that offer comprehensive courses in defensive driving, traffic rules, and driver safety, all at an affordable price. Whether you're a beginner or looking to refresh your skills, trust us to point you in the right direction.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default BenefitsOfDrivingSchool;
