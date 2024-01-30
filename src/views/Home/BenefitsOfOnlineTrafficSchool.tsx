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
            alt=""
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
              fingertips, why should traffic school be any different? Welcome to
              the world of online traffic school, a convenient and effective
              platform that allows you to brush up on safe driving techniques
              without stepping out of your comfort zone.
            </p>
          </div>
          {/*  */}
          <div className="w-full flex flex-col gap-2">
  <p className="text-black-main text-[28px] leading-8 text-center font-semibold font-inter capitalize">
    What is an Online Traffic School?
  </p>
  <p className="text-[16px] font-inter text-center text-[#6c757d]">
    Online traffic school, as offered through Drivers Ed Depot, is a virtual platform 
    providing comprehensive courses in defensive driving, traffic rules, and driver safety. 
    These courses, curated by our experts at Drivers Ed Depot, can be completed from the comfort of 
    your home or any location with internet access. Ideal for those who have received a traffic violation, 
    are looking to reduce points on their license, or simply wish to refresh their driving knowledge, Drivers Ed Depot's online traffic school offers a flexible and convenient learning experience.
  </p>
</div>

        </div>
      </div>
    </Wrapper>
  );
}

export default BenefitsOfOnlineTrafficSchool;
