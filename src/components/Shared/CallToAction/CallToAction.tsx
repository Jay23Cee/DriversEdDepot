import React, { useEffect, useState } from "react";
import Wrapper from "../ComponentWrapper/Wrapper";
import OutSideClick from "@/hooks/OutSideClick";
import { GoLocation } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { STATES_OF_UNITED, StateOption } from "@/data/states";
import { trackSeoEvent, trackOutboundAndNavigate } from "@/lib/analytics";

function CallToAction() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [selectedState, setSelectedState] = useState<StateOption | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;

      setIsSticky(scrollPosition > windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleStateSelect = (state: StateOption) => {
    setLocation(state.name);
    setSelectedState(state);
    setIsOpen(false);
    setErrorMessage("");

    trackSeoEvent("state_selected", {
      placement: "sticky_cta",
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
      placement: "sticky_cta",
      state_name: selectedState.name,
      state_slug: selectedState.slug,
      provider: providerName,
      page_type: "home",
    });

    trackOutboundAndNavigate(selectedState.provider_options[0]?.affiliate_url ?? selectedState.affiliateLink, {
      placement: "sticky_cta",
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
      placement: "sticky_text_link",
      state_name: selectedState.name,
      state_slug: selectedState.slug,
      provider: selectedState.provider_options[0]?.name ?? "myimprov",
      page_type: "home",
    });
  };

  return (
    <Wrapper
      styles={`bg-brand-primary py-6 flex justify-center items-center duration-700 z-50 ${
        isSticky ? "sticky opacity-100" : "hidden opacity-0"
      } bottom-0`}
    >
      <div className="w-full h-full flex md:flex-row flex-col gap-4 md:gap-0 justify-between items-center">
        <p className="text-white-main text-center font-inter text-[20px] leading-6 lg:text-[24px] capitalize font-medium">
          Start your online Drivers Education today
        </p>
        <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
          <div className="w-full max-w-[210px] flex flex-col justify-center items-center relative">
            <div className="w-full flex justify-between items-center">
              <input
                onClick={() => setIsOpen(true)}
                onFocus={() => setIsOpen(true)}
                className="w-full h-[55px] border-[3px] placeholder:text-[18px] placeholder:font-medium text-[18px] font-inter font-medium px-2 rounded-[10px] focus:outline-none border-brand-primary"
                type="text"
                id="sticky-select-state"
                value={location}
                placeholder="Select State"
                readOnly
                aria-label="Select your state"
              />
              <FiChevronDown className="text-[28px] text-[#afb4be] absolute right-3" />
            </div>
            {isOpen && (
              <OutSideClick
                style="w-full max-h-[500px] srollBar overflow-auto bg-white-main border-[2px] border-solid border-brand-main rounded-[8px] p-3 absolute -top-[20rem] z-30"
                Event={() => {
                  setIsOpen(false);
                }}
              >
                {STATES_OF_UNITED.map((state, index) => (
                  <div key={state.slug} className="flex flex-col mb-3">
                    <div
                      className={`cursor-pointer flex justify-start hover:text-brand-primary items-center gap-2 ${
                        location === state.name ? "text-brand-primary" : "text-black-main"
                      } font-sans text-[16px] font-normal`}
                      onClick={() => handleStateSelect(state)}
                    >
                      <GoLocation
                        className={`text-[22px] ${
                          location === state.name && "fill-brand-primary"
                        }`}
                      />
                      {state.name}
                    </div>
                    {index + 1 < STATES_OF_UNITED.length && (
                      <div className="w-[90%] border-b-[2px] border-solid border-brand-primary my-3"></div>
                    )}
                  </div>
                ))}
              </OutSideClick>
            )}
          </div>
          <button
            className="w-[180px] h-[45px] bg-white-main rounded-[10px] hover:opacity-90 text-black-main capitalize text-[18px] font-medium"
            onClick={handleGetStarted}
          >
            Get started
          </button>
        </div>
        {selectedState ? (
          <Link
            href={`/states/${selectedState.slug}`}
            className="text-white-main underline text-[14px] font-inter"
          >
            View {selectedState.name} details
          </Link>
        ) : null}
        {selectedState ? (
          <a
            href={selectedState.provider_options[0]?.affiliate_url ?? selectedState.affiliateLink}
            rel={selectedState.provider_options[0]?.rel ?? "sponsored noopener noreferrer"}
            target="_blank"
            onClick={handleSponsoredLinkClick}
            className="text-white-main underline text-[14px] font-inter"
          >
            Open sponsored provider link
          </a>
        ) : null}
      </div>
      {errorMessage ? (
        <p className="text-white-main text-[14px] font-inter text-center mt-2">{errorMessage}</p>
      ) : null}
      <p className="text-white-main text-[12px] font-inter text-center mt-1">
        We may earn a commission from partner enrollments.
      </p>
    </Wrapper>
  );
}

export default CallToAction;
