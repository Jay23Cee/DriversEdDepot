export type FaqItem = {
  question: string;
  answer: string;
};

export const HOMEPAGE_FAQS: FaqItem[] = [
  {
    question: "How does DriversEdDepot work?",
    answer:
      "Choose your state, review the available guidance, and continue to a third-party course provider when you are ready.",
  },
  {
    question: "Is DriversEdDepot a course provider?",
    answer:
      "No. We are an independent affiliate resource and do not teach courses or issue completion certificates.",
  },
  {
    question: "Does using this site cost more?",
    answer:
      "We do not add a fee. We may receive a commission when a qualifying enrollment is completed through a sponsored link.",
  },
  {
    question: "Is an online course guaranteed to satisfy my requirement?",
    answer:
      "No. Acceptance depends on state, licensing, court, insurer, and provider rules. Verify eligibility with the relevant authority before enrolling.",
  },
  {
    question: "Can I study on a phone or tablet?",
    answer:
      "Featured providers generally offer device-friendly online access, but confirm technical requirements on the provider website.",
  },
];
