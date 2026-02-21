import React from "react";
import Home from "@/views/Home/Home";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";

const BASE_URL = "https://driverseddepot.com";

export default function HomePage() {
  return (
    <React.Fragment>
      <SeoHead
        title="Online Drivers Ed by State | DriversEdDepot.com"
        description="Compare trusted online drivers education options by state and get matched to a licensed course in minutes."
        path="/"
      />
      <StructuredData
        organization={{
          name: "DriversEdDepot.com",
          url: BASE_URL,
          logo: BASE_URL + "/assets/logo.png",
          description:
            "Affiliate resource for state-intent online drivers education course discovery.",
        }}
        website={{
          name: "DriversEdDepot.com",
          url: BASE_URL,
          description:
            "Compare online drivers education options by state with disclosure-forward affiliate routing.",
        }}
      />
      <Home />
    </React.Fragment>
  );
}
