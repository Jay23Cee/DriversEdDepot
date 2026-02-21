import React from "react";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";

const BASE_URL = "https://driverseddepot.com";

function PrivacyPolicy() {
  return (
    <div className="w-full max-w-[1100px] m-auto px-4 md:px-8 py-10 md:py-14 font-inter">
      <SeoHead
        title="Privacy Policy | DriversEdDepot.com"
        description="Read the DriversEdDepot.com privacy policy and learn how we collect, use, and protect visitor data."
        path="/privacy-policy"
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "Privacy Policy", item: BASE_URL + "/privacy-policy" },
          ],
        }}
      />

      <h1 className="text-[30px] md:text-[40px] font-semibold font-poppins text-black-main">
        Privacy Policy
      </h1>
      <p className="mt-4 text-[16px] md:text-[18px] text-[#374151]">
        Effective date: February 21, 2026.
      </p>

      <div className="mt-8 space-y-6 text-[16px] md:text-[18px] text-[#374151]">
        <section>
          <h2 className="text-[22px] font-semibold text-black-main">Information We Collect</h2>
          <p className="mt-2">
            We may collect analytics data such as pages visited, clicks, referring URLs,
            device/browser data, and general location data.
          </p>
        </section>

        <section>
          <h2 className="text-[22px] font-semibold text-black-main">How We Use Information</h2>
          <p className="mt-2">
            We use information to improve site performance, understand user behavior, and
            optimize affiliate matching and conversion flow.
          </p>
        </section>

        <section>
          <h2 className="text-[22px] font-semibold text-black-main">Cookies and Analytics</h2>
          <p className="mt-2">
            We use analytics tools that may place cookies or similar technologies to measure
            traffic and outbound affiliate interactions.
          </p>
        </section>

        <section>
          <h2 className="text-[22px] font-semibold text-black-main">Third-Party Links</h2>
          <p className="mt-2">
            When you click affiliate links, you are redirected to third-party provider
            websites that operate under their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-[22px] font-semibold text-black-main">Contact</h2>
          <p className="mt-2">
            For privacy questions, contact us through the contact details listed on this website.
          </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
