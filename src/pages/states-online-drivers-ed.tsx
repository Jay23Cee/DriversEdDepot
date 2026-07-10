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
        title="Online Drivers Ed by State | Budget Traffic School Hub"
        description="Browse online drivers ed, budget traffic school, defensive driving, and provider guidance for every U.S. state."
        path="/states-online-drivers-ed"
        keywords={[
          "online drivers ed by state",
          "budget traffic school by state",
          "state drivers ed requirements",
          "online defensive driving by state",
        ]}
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "States Online Drivers Ed", item: BASE_URL + "/states-online-drivers-ed" },
          ],
        }}
        itemList={{
          name: "Online drivers ed by state",
          items: STATES_OF_UNITED.map((state) => ({
            name: `${state.name} online drivers ed`,
            url: BASE_URL + `/states/${state.slug}`,
          })),
        }}
      />

      <h1 className="text-[30px] md:text-[44px] leading-tight font-semibold font-poppins text-black-main">
        Online Drivers Ed and Traffic School by State
      </h1>
      <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
        Use this hub to jump directly to state pages for online drivers ed, budget traffic
        school, defensive driving, ticket dismissal, and insurance-discount research.
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
            <Link href="/budget-drivers-ed-school" className="text-brand-primary underline">
              Budget Drivers Ed School Guide
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
