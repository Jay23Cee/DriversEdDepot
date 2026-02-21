import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import OutSideClick from "@/hooks/OutSideClick";
import { GoLocation } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";
import { STATES_OF_UNITED, StateOption } from "@/data/states";
import { trackSeoEvent, trackOutboundAndNavigate } from "@/lib/analytics";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [selectedState, setSelectedState] = useState<StateOption | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleStateSelect = (state: StateOption) => {
    setLocation(state.name);
    setSelectedState(state);
    setIsOpen(false);
    setErrorMessage("");
    trackSeoEvent("state_selected", {
      placement: "hero",
      state_name: state.name,
      state_slug: state.slug,
      provider: "none",
      page_type: "home",
    });
  };

  const handleGetStarted = () => {
    if (!selectedState) {
      setErrorMessage("Select your state to continue.");
      return;
    }

    const providerName = selectedState.provider_options[0]?.name ?? "myimprov";

    trackSeoEvent("cta_clicked", {
      placement: "hero",
      state_name: selectedState.name,
      state_slug: selectedState.slug,
      provider: providerName,
      page_type: "home",
    });

    trackOutboundAndNavigate(selectedState.provider_options[0]?.affiliate_url ?? selectedState.affiliateLink, {
      placement: "hero",
      state_name: selectedState.name,
      state_slug: selectedState.slug,
      provider: providerName,
      page_type: "home",
    });
  };

  const handleSponsoredLinkClick = () => {
    if (!selectedState) {
      return;
    }

    trackSeoEvent("affiliate_outbound_clicked", {
      placement: "hero_text_link",
      state_name: selectedState.name,
      state_slug: selectedState.slug,
      provider: selectedState.provider_options[0]?.name ?? "myimprov",
      page_type: "home",
    });
  };

  return (
    <div id="home" className="w-full h-screen md:h-[calc(100vh-136px)] relative bg-[url('/assets/heroBg.jpeg')] bg-no-repeat bg-cover">
      {/* ====> overlay on image */}
      <div className="w-full h-full absolute left-0 top-0 bg-black-main/60"></div>
      {/* ====> */}
      <div className="w-full h-full absolute flex flex-col gap-8 justify-center items-center md:px-8 px-4">
        <p className="uppercase text-white-main text-[30px] text-center leading-10 sm:text-[36px] md:text-[40px] lg:text-[50px] font-semibold font-poppins">
          online Drivers Education
        </p>
        {/* ====> some attributes */}
        <div className="flex flex-col gap-2 sm:gap-3">
          {Attributes.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-start items-center gap-3 sm:gap-4"
              >
                <FaCheck className="text-brand-primary text-[30px] sm:text-[32px] lg:text-[38px]" />
                <p className="text-[20px] sm:text-[22px] lg:text-[26px] font-inter capitalize text-white-main font-normal">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
        {/* ====> select location + get started button */}
        <div className="w-full flex md:flex-row flex-col justify-center items-center gap-4">
          {/* ===> select location */}
          <div className="w-full max-w-[240px] flex flex-col justify-center items-center relative">
            <div className="w-full flex justify-between items-center">
              <input
                onClick={() => setIsOpen(true)}
                onFocus={() => setIsOpen(true)}
                className="w-full h-[55px] border-[3px] placeholder:text-[18px] placeholder:font-medium text-[18px] font-inter font-medium px-2 rounded-[10px] focus:outline-none border-brand-primary"
                type="text"
                id="hero-select-state"
                value={location}
                placeholder="Select State"
                readOnly
                aria-label="Select your state"
              />
              <FiChevronDown className="text-[28px] text-[#afb4be] absolute right-3" />
            </div>
            {isOpen && (
              <OutSideClick
                style="w-full max-h-[500px] srollBar overflow-auto bg-white-main border-[2px] border-solid border-brand-main rounded-[8px] p-3 absolute -top-[240px] z-30"
                Event={() => {
                  setIsOpen(false);
                }}
              >
                {STATES_OF_UNITED.map((option, index) => (
                  <div key={option.slug} className="flex flex-col mb-3">
                    <div
                      className={`cursor-pointer flex justify-start hover:text-brand-primary items-center gap-2 ${
                        location === option.name
                          ? "text-brand-primary"
                          : "text-black-main"
                      } font-sans text-[16px] font-normal`}
                      onClick={() => handleStateSelect(option)}
                    >
                      <GoLocation
                        className={`text-[22px] ${
                          location === option.name && "fill-brand-primary"
                        }`}
                      />
                      {option.name}
                    </div>
                    {index + 1 < STATES_OF_UNITED.length && (
                      <div className="w-[90%] border-b-[2px] border-solid border-brand-primary my-3"></div>
                    )}
                  </div>
                ))}
              </OutSideClick>
            )}
          </div>
          {/* ===> get started button */}
          <button
            className="w-full max-w-[240px] h-[55px] rounded-[10px] hover:opacity-70 bg-brand-primary"
            onClick={handleGetStarted}
          >
            <p className="text-[26px] font-inter capitalize text-white-main">
              get started
            </p>
          </button>
        </div>
        {selectedState ? (
          <Link
            href={`/states/${selectedState.slug}`}
            className="text-white-main underline text-[15px] sm:text-[16px] font-inter"
          >
            View {selectedState.name} course details
          </Link>
        ) : null}
        {selectedState ? (
          <a
            href={selectedState.provider_options[0]?.affiliate_url ?? selectedState.affiliateLink}
            rel={selectedState.provider_options[0]?.rel ?? "sponsored noopener noreferrer"}
            target="_blank"
            onClick={handleSponsoredLinkClick}
            className="text-white-main underline text-[15px] sm:text-[16px] font-inter"
          >
            Open {selectedState.provider_options[0]?.name ?? "provider"} in a new tab
          </a>
        ) : null}
        <p className="text-white-main/90 text-[13px] sm:text-[14px] text-center font-inter max-w-[560px]">
          Affiliate disclosure: We may earn a commission when you enroll through partner links.
        </p>
        {errorMessage ? (
          <p className="text-white-main text-[14px] sm:text-[16px] font-inter bg-black-main/40 px-3 py-1 rounded-md">
            {errorMessage}
          </p>
        ) : null}
        {/* ===> */}
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
}

const Attributes = [
  {
    name: "for traffic tickets",
  },
  {
    name: "auto insurance discounts",
  },
  {
    name: "100% online",
  },
  {
    name: "state licensed courses",
  },
];

export default Hero;
