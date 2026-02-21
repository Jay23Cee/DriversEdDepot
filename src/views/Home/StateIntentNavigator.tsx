import React from "react";
import Link from "next/link";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import { STATES_OF_UNITED } from "@/data/states";

const FEATURED_STATES = ["california", "texas", "florida", "new-york", "illinois", "pennsylvania"];

function StateIntentNavigator() {
  const featured = STATES_OF_UNITED.filter((state) => FEATURED_STATES.includes(state.slug));

  return (
    <Wrapper styles="py-10">
      <div className="w-full rounded-[16px] bg-white-cool p-6 md:p-8">
        <h2 className="text-[28px] md:text-[34px] text-center font-semibold font-poppins text-black-main">
          Start With State-Intent Pages
        </h2>
        <p className="mt-3 text-center text-[16px] md:text-[18px] text-[#374151] font-inter">
          Browse the highest-intent entry points, then drill into your state requirements.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/states-online-drivers-ed" className="px-4 py-2 rounded-[10px] border border-[#e5e7eb] hover:border-brand-primary hover:text-brand-primary">
            Online Drivers Ed by State
          </Link>
          <Link href="/states-ticket-dismissal" className="px-4 py-2 rounded-[10px] border border-[#e5e7eb] hover:border-brand-primary hover:text-brand-primary">
            Ticket Dismissal Hub
          </Link>
          <Link href="/states-insurance-discount" className="px-4 py-2 rounded-[10px] border border-[#e5e7eb] hover:border-brand-primary hover:text-brand-primary">
            Insurance Discount Hub
          </Link>
          <Link href="/state-requirements" className="px-4 py-2 rounded-[10px] border border-[#e5e7eb] hover:border-brand-primary hover:text-brand-primary">
            Requirement Matrix
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
          {featured.map((state) => (
            <Link
              key={state.slug}
              href={`/states/${state.slug}`}
              className="rounded-[10px] border border-[#e5e7eb] px-3 py-2 hover:border-brand-primary hover:text-brand-primary text-[15px] md:text-[16px]"
            >
              {state.name} online drivers ed
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default StateIntentNavigator;
