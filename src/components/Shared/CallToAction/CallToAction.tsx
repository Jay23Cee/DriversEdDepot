import React, { useEffect, useState } from "react";
import Wrapper from "../ComponentWrapper/Wrapper";
import OutSideClick from "@/hooks/OutSideClick";
import { GoLocation } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";


type StateType = {
  name: string;
  affiliateLink: string;
};

function CallToAction() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("");

  
  const [selectedState, setSelectedState] = useState<StateType | null>(null);
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight / 1;

      setIsSticky(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleStateSelect = (state:any) => {
    setLocation(state.name);
    setSelectedState(state);
    setIsOpen(false);
  };

  const handleGetStarted = () => {
    if (selectedState ) {
      window.location.href = selectedState.affiliateLink;
    }
  };

  return (
    <Wrapper
      styles={`bg-brand-primary py-6 flex justify-center items-center duration-700 z-100 ${
        isSticky ? "sticky opacity-100" : "hideen opacity-0"
      } bottom-0`}
    >
      <div className="w-full h-full flex md:flex-row flex-col gap-4 md:gap-0 justify-between items-center">
        <p className="text-white-main text-center font-inter text-[20px] leading-6 lg:text-[24px] capitalize font-medium">
          start your online traffic school today
        </p>
        <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
          {/* ===> select location */}
          <div className="w-full max-w-[210px] flex flex-col justify-center items-center relative ">
            <div className="w-full flex justify-between items-center">
              <input
                onClick={() => setIsOpen(true)}
                className="w-full h-[55px] border-[3px] placeholder:text-[18px] placeholder:font-medium text-[18px] font-inter font-medium px-2 rounded-[10px] focus:outline-none border-brand-primary"
                type="text"
                id="select-state"
                defaultValue={location}
                placeholder="Select State"
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
                {StatesOfUnited.map((state, index) => (
                  <div key={index} className="flex flex-col mb-3">
                    <div
                      className={`cursor-pointer flex justify-start hover:text-brand-primary items-center gap-2 ${
                        location === state.name
                          ? "text-brand-primary"
                          : "text-black-main"
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
                    {index + 1 < StatesOfUnited.length && (
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
            get started
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export const StatesOfUnited = [
  {
    name: "Alabama",
    affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Alaska",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Arizona",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Arkansas",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "California",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Colorado",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Connecticut",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Delaware",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Florida",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Georgia",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Hawaii",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Idaho",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },

  {
    name: "Illinois",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Indiana",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Iowa",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Kansas",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Kentucky",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Louisiana",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Maine",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Maryland",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Massachusetts",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Michigan",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Minnesota",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Mississippi",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Missouri",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },

  {
    name: "Montana",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Nebraska",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Nevada",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "New Hampshire",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "New Jersey",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "New Mexico",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "New York",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "North Carolina",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "North Dakota",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Ohio",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Oklahoma",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Oregon",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Pennsylvania",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Rhode Island",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "South Carolina",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "South Dakota",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Tennessee",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Texas",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Utah",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Vermont",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Virginia",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Washington",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "West Virginia",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Wisconsin",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
  {
    name: "Wyoming",
     affiliateLink: "https://www.myimprov.com/?a_aid=66a4143c07172",
  },
];

export default CallToAction;
