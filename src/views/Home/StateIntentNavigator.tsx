import React from "react";
import Link from "next/link";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import { STATES_OF_UNITED } from "@/data/states";

const FEATURED_STATES = ["california", "texas", "florida", "new-york", "illinois", "pennsylvania"];

function StateIntentNavigator() {
  const featured = STATES_OF_UNITED.filter((state) => FEATURED_STATES.includes(state.slug));

  return (
    <Wrapper styles="bg-brand-surface py-16 md:py-24">
      <div className="w-full rounded-[24px] border border-brand-line bg-white-main p-6 shadow-sm md:p-10">
        <h2 className="text-[30px] md:text-[40px] text-center font-semibold font-poppins text-brand-navy">
          Start With State-Intent Pages
        </h2>
        <p className="mt-3 text-center text-[16px] md:text-[18px] text-brand-muted font-inter">
          Browse the highest-intent entry points, then drill into your state requirements.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/states-online-drivers-ed" className="btn-secondary">
            Online Drivers Ed by State
          </Link>
          <Link href="/states-ticket-dismissal" className="btn-secondary">
            Ticket Dismissal Hub
          </Link>
          <Link href="/states-insurance-discount" className="btn-secondary">
            Insurance Discount Hub
          </Link>
          <Link href="/state-requirements" className="btn-secondary">
            Requirement Matrix
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
          {featured.map((state) => (
            <Link
              key={state.slug}
              href={`/states/${state.slug}`}
              className="rounded-[10px] border border-brand-line bg-brand-surface px-3 py-2 text-[15px] font-medium hover:border-brand-primary hover:text-brand-primary md:text-[16px]"
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
