import React from "react";
import Image from "next/image";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";

function DriversEducation() {
  return (
    <Wrapper styles="bg-white-off py-10">
      <div className="w-full grid gap-8 grid-cols-1 lg:grid-cols-[2fr,1.7fr]">
        {/* ====> left portion */}
        <div className="w-full flex flex-col gap-8">
          {/*  */}
          <div className="w-full flex flex-col gap-2">
            <p className="text-black-main text-[28px] leading-8 text-center font-semibold font-inter capitalize">
              Drivers Education: Enhancing Road Safety and Reducing Violations
            </p>
            <p className="text-[16px] font-inter text-center text-[#6c757d]">
              Drivers Education courses offer invaluable instruction aimed at improving driving skills, promoting road safety, and helping drivers to dismiss traffic tickets. Enrolling in a Drivers Ed course can lead to many benefits, including possible insurance discounts and a better understanding of traffic laws and procedures.
            </p>
            <p className="text-[16px] font-inter text-center text-[#6c757d]">
              To discover high-quality, affordable Drivers Ed courses, visit <a href="https://lowbudget-trafficschool.vercel.app/" rel="noopener noreferrer" className="text-brand-secondary">Low Budget Drivers Education</a>.
            </p>
          </div>
        </div>
        {/* ==> right portion */}
        <div className="w-full h-[260px] xl:h-[320px] shadow-2xl relative rounded-[20px]">
          <Image
            src="/assets/driver1.jpeg"
            fill
            className="object-cover rounded-[20px]"
            alt="Drivers Education"
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default DriversEducation;
