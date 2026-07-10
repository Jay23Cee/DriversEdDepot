import React from "react";
import Image from "next/image";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";

const BASE_URL = "https://driverseddepot.com";

function AboutPage() {
  return (
    <div className="page-shell">
      <SeoHead
        title="About DriversEdDepot.com | Trusted Drivers Ed Resource"
        description="Learn how DriversEdDepot.com helps users compare online drivers education options by state and connect with trusted providers."
        path="/about"
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "About", item: BASE_URL + "/about" },
          ],
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="section-kicker">Independent course guidance</p><h1 className="mt-3 text-[34px] md:text-[46px] leading-tight font-semibold font-poppins text-brand-navy">
            About DriversEdDepot.com
          </h1>
          <p className="text-[17px] md:text-[19px] text-[#4b5563] font-inter">
            DriversEdDepot.com is a U.S.-focused affiliate marketing site built to help
            visitors compare online drivers education pathways by state. We prioritize
            transparent disclosures, state-specific guidance, and direct routing to course
            providers.
          </p>
          <p className="text-[17px] md:text-[19px] text-[#4b5563] font-inter">
            We do not issue certificates ourselves. If you click a partner link and enroll,
            we may earn a commission at no additional cost to you.
          </p>
        </div>
        <div className="w-full relative aspect-[16/10] rounded-[16px] overflow-hidden shadow-xl">
          <Image
            src="/assets/welcome-to-driverseddepot-header.png"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={72}
            className="object-cover"
            alt="DriversEdDepot online drivers education guidance"
          />
        </div>
      </div>

      <div className="mt-10 card-surface p-6 md:p-8">
        <h2 className="text-[24px] md:text-[30px] font-semibold font-poppins text-black-main">
          Our Editorial Focus
        </h2>
        <ul className="mt-4 space-y-3 text-[16px] md:text-[18px] text-[#374151] font-inter list-disc pl-6">
          <li>State-intent pages with relevant keywords and user-focused guidance.</li>
          <li>Requirement snapshots with official source links and refresh dates.</li>
          <li>Clear affiliate disclosures before outbound provider actions.</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
