import React from "react";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import Faq from "react-faq-component";

const faqData = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "How does DriversEdDepot.com work?",
      content:
        "Select your state, review your options, and we will route you to a course provider that supports your location.",
    },
    {
      title: "Is DriversEdDepot.com a course provider?",
      content:
        "No. DriversEdDepot.com is an affiliate website that connects users to third-party drivers education providers.",
    },
    {
      title: "Do I pay more by using this site?",
      content:
        "No. Using our site does not add extra cost. We may earn an affiliate commission when a qualifying action is completed.",
    },
    {
      title: "Are these courses available online?",
      content:
        "Yes. The providers we feature offer online course options and self-paced access on most devices.",
    },
    {
      title: "Can I use these courses for ticket dismissal or insurance discounts?",
      content:
        "Eligibility depends on your state and provider rules. Always verify approval and requirements before enrolling.",
    },
  ],
};

function Faqs() {
  return (
    <Wrapper styles="py-10">
      <div id="faqs" className="w-full">
        <Faq data={faqData} />
      </div>
    </Wrapper>
  );
}

export default Faqs;
