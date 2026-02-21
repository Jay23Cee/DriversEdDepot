import React from "react";
import Link from "next/link";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";
import StateHubList from "@/components/State/StateHubList";
import { STATES_OF_UNITED } from "@/data/states";

const BASE_URL = "https://driverseddepot.com";

function StatesOnlineDriversEdPage() {
  return (
    <div className="w-full max-w-[1100px] m-auto px-4 md:px-8 py-10 md:py-14">
      <SeoHead
        title="Online Drivers Ed by State | DriversEdDepot"
        description="Browse all U.S. state pages for online drivers ed requirements, keyword-focused guidance, and provider links."
        path="/states-online-drivers-ed"
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "States Online Drivers Ed", item: BASE_URL + "/states-online-drivers-ed" },
          ],
        }}
      />

      <h1 className="text-[30px] md:text-[44px] leading-tight font-semibold font-poppins text-black-main">
        Online Drivers Ed by State
      </h1>
      <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
        Use this hub to jump directly to state-intent pages optimized for online drivers
        education searches and conversion-focused provider routing.
      </p>

      <div className="mt-8">
        <StateHubList states={STATES_OF_UNITED} />
      </div>

      <div className="mt-8 rounded-[16px] bg-white-cool p-6">
        <h2 className="text-[22px] md:text-[28px] font-semibold font-poppins text-black-main">
          Explore Related State Hubs
        </h2>
        <ul className="mt-3 list-disc pl-6 text-[16px] md:text-[18px] text-[#374151] font-inter space-y-2">
          <li>
            <Link href="/states-ticket-dismissal" className="text-brand-primary underline">
              Ticket Dismissal State Hub
            </Link>
          </li>
          <li>
            <Link href="/states-insurance-discount" className="text-brand-primary underline">
              Insurance Discount State Hub
            </Link>
          </li>
          <li>
            <Link href="/state-requirements" className="text-brand-primary underline">
              State Requirement Matrix
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StatesOnlineDriversEdPage;
