import React from "react";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import Image from "next/image";

function BenefitsOfOnlineTrafficSchool() {
  return (
    <Wrapper styles="bg-white-cool py-10">
      <div className="w-full grid gap-8 grid-cols-1 lg:grid-cols-[1.7fr,2fr]">
        {/* ==> left portion */}
        <div className="w-full h-[260px] xl:h-[320px] shadow-2xl relative rounded-[20px]">
          <Image
            src="/assets/driving.jpeg"
            fill
            className="object-cover rounded-[20px]"
            alt="Driving Image"
          />
        </div>
        {/* ====> right portion */}
        <div className="w-full flex flex-col gap-8">
          {/*  */}
          <div className="w-full flex flex-col gap-2">
            <p className="text-black-main text-[28px] leading-8 text-center font-semibold font-inter capitalize">
              Online Traffic School Course On Any Device, Any Time
            </p>
            <p className="text-[16px] font-inter text-center text-[#6c757d]">
              In the digital age, where almost every service is available at our
              fingertips, why should traffic school be any different? Explore the
              convenience of online traffic school, a flexible and efficient
              method for improving safe driving skills, highlighted by Drivers Ed Depot.
            </p>
          </div>
          {/*  */}
          <div className="w-full flex flex-col gap-2">
            <p className="text-black-main text-[28px] leading-8 text-center font-semibold font-inter capitalize">
              What is an Online Traffic School?
            </p>
            <p className="text-[16px] font-inter text-center text-[#6c757d]">
              Drivers Ed Depot introduces the concept of online traffic school: a digital platform 
              for learning defensive driving, traffic rules, and driver safety. These courses, suitable 
              for those dealing with traffic violations, desiring to reduce points on their license, or 
              simply refreshing their driving knowledge, provide a flexible and accessible way to learn, 
              accessible from any location with internet connectivity.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default BenefitsOfOnlineTrafficSchool;
