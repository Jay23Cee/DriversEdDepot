import React from "react";
import Home from "@/views/Home/Home";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";
import { HOMEPAGE_FAQS } from "@/data/faqs";

const BASE_URL = "https://driverseddepot.com";

export default function HomePage() {
  return (
    <React.Fragment>
      <SeoHead
        title="Online Drivers Ed & Budget Traffic School | DriversEdDepot"
        description="Compare online drivers ed, budget drivers ed school options, traffic school, ticket dismissal, and insurance-discount paths by state."
        path="/"
        imagePath="/assets/drivers-ed-hero-v2.png"
        imageAlt="Learner driver preparing for an online drivers ed course"
        keywords={[
          "online drivers ed",
          "budget drivers ed school",
          "drivers ed by state",
          "online traffic school",
          "defensive driving course",
        ]}
      />
      <StructuredData
        organization={{
          name: "DriversEdDepot.com",
          url: BASE_URL,
          logo: BASE_URL + "/assets/logo.png",
          description:
            "Affiliate resource for online drivers education, traffic school, defensive driving, and state course discovery.",
        }}
        website={{
          name: "DriversEdDepot.com",
          url: BASE_URL,
          description:
            "Compare drivers ed and traffic school options by state, then continue to available online course providers with clear affiliate disclosure.",
        }}
        faqPage={{
          items: HOMEPAGE_FAQS,
        }}
      />
      <Home />
    </React.Fragment>
  );
}
