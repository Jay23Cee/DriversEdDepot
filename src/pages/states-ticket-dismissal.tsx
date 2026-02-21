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
        description="Find ticket-dismissal oriented online driving course guidance by state with fast links to state pages."
        path="/states-ticket-dismissal"
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "Ticket Dismissal States", item: BASE_URL + "/states-ticket-dismissal" },
          ],
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
        .
      </p>
    </div>
  );
}

export default StatesTicketDismissalPage;
