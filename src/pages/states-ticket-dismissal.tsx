import React from "react";
import Link from "next/link";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";
import StateHubList from "@/components/State/StateHubList";
import { STATES_OF_UNITED } from "@/data/states";

const BASE_URL = "https://driverseddepot.com";

function StatesTicketDismissalPage() {
  return (
    <div className="w-full max-w-[1100px] m-auto px-4 md:px-8 py-10 md:py-14">
      <SeoHead
        title="Ticket Dismissal Driving Course by State | DriversEdDepot"
        description="Find online traffic school and defensive driving guidance for ticket dismissal by state, with fast links to state course pages."
        path="/states-ticket-dismissal"
        keywords={[
          "ticket dismissal course by state",
          "online traffic school by state",
          "defensive driving ticket dismissal",
          "budget traffic school",
        ]}
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "Ticket Dismissal States", item: BASE_URL + "/states-ticket-dismissal" },
          ],
        }}
        itemList={{
          name: "Ticket dismissal driving course by state",
          items: STATES_OF_UNITED.map((state) => ({
            name: `${state.name} ticket dismissal driving course`,
            url: BASE_URL + `/states/${state.slug}`,
          })),
        }}
      />

      <h1 className="text-[30px] md:text-[44px] leading-tight font-semibold font-poppins text-black-main">
        Ticket Dismissal Driving Course by State
      </h1>
      <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
        Court requirements vary. Start from your state page, then confirm local court rules
        before enrollment.
      </p>

      <div className="mt-8">
        <StateHubList states={STATES_OF_UNITED} />
      </div>

      <p className="mt-8 text-[16px] md:text-[18px] text-[#374151] font-inter">
        Need comparison data? Use the{" "}
        <Link href="/state-requirements" className="text-brand-primary underline">
          state requirement matrix
        </Link>{" "}
        and the{" "}
        <Link href="/guides" className="text-brand-primary underline">
          supporting guide hub
        </Link>
        . For price-focused comparisons, start with the{" "}
        <Link href="/budget-drivers-ed-school" className="text-brand-primary underline">
          budget drivers ed school guide
        </Link>
        .
      </p>
    </div>
  );
}

export default StatesTicketDismissalPage;
