import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiCompass, FiFileText, FiMonitor, FiShield } from "react-icons/fi";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import Hero from "./Hero";
import StateAffiliateBanner from "./StateAffiliateBanner";
import Faqs from "./Faqs";

const benefits = [
  {
    icon: FiCompass,
    title: "State-first direction",
    body: "Start with location-specific information instead of sorting through generic course listings.",
  },
  {
    icon: FiShield,
    title: "Compliance reminders",
    body: "See clear prompts to verify approval with the state, court, insurer, or licensing authority.",
  },
  {
    icon: FiMonitor,
    title: "Online convenience",
    body: "Explore provider options designed for flexible access across common devices.",
  },
  {
    icon: FiFileText,
    title: "Transparent routing",
    body: "Understand when a link is sponsored before leaving DriversEdDepot.",
  },
];

const uses = [
  ["Driver education", "Explore online education pathways for new and student drivers."],
  [
    "Budget drivers ed",
    "Compare budget-conscious online course options before you leave for a provider.",
  ],
  ["Ticket dismissal", "Review court-dependent defensive-driving options and deadlines."],
];

export default function Home() {
  return (
    <>
      <Hero />

      <Wrapper styles="py-12 md:py-24">
        <div className="text-center">
          <p className="section-kicker">Designed to reduce guesswork</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-poppins text-[28px] font-semibold leading-tight text-brand-navy md:text-[44px]">
            A clearer path from research to enrollment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-brand-muted md:text-[17px] md:leading-8">
            Useful guidance, visible trust cues, and a direct next step without implying
            that every course fits every requirement.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, body }) => (
            <article className="card-surface p-5 md:p-6" key={title}>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-brand-primary">
                <Icon size={23} />
              </span>
              <h3 className="mt-5 font-poppins text-[19px] font-semibold text-brand-ink">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-7 text-brand-muted">{body}</p>
            </article>
          ))}
        </div>
      </Wrapper>

      <Wrapper styles="bg-brand-surface py-12 md:py-24">
        <div className="text-center">
          <p className="section-kicker">Three simple steps</p>
          <h2 className="mt-3 font-poppins text-[28px] font-semibold leading-tight text-brand-navy md:text-[42px]">
            From state selection to course provider
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3 md:gap-5">
          {[
            ["01", "Choose your state", "Start with the rules and options most relevant to your location."],
            ["02", "Review the details", "Check the intended use, eligibility notes, and official source links."],
            ["03", "Continue securely", "Open the sponsored provider link with required tracking preserved."],
          ].map(([number, title, body]) => (
            <article key={number} className="card-surface p-5 md:p-7">
              <span className="font-poppins text-[14px] font-bold text-brand-primary">
                STEP {number}
              </span>
              <h3 className="mt-3 font-poppins text-[21px] font-semibold">{title}</h3>
              <p className="mt-2 leading-7 text-brand-muted">{body}</p>
            </article>
          ))}
        </div>
      </Wrapper>

      <Wrapper styles="py-12 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[.9fr,1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">Built around your goal</p>
            <h2 className="mt-3 font-poppins text-[28px] font-semibold leading-tight text-brand-navy md:text-[42px]">
              Find the right starting point
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-brand-muted md:text-[17px] md:leading-8">
              Start with the reason you need a course, then confirm the requirements that
              apply in your state or court before paying.
            </p>
            <p className="mt-3 text-[16px] leading-7 text-brand-muted">
              Looking mainly for price-conscious options? Start with the{" "}
              <Link
                href="/budget-drivers-ed-school"
                className="font-semibold text-brand-primary underline"
              >
                budget drivers ed school guide
              </Link>
              .
            </p>
            <div className="mt-7 space-y-4">
              {uses.map(([title, body]) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-brand-line p-5">
                  <FiCheckCircle className="mt-1 shrink-0 text-brand-cyan" size={22} />
                  <div>
                    <h3 className="font-poppins font-semibold">{title}</h3>
                    <p className="mt-1 text-[15px] leading-6 text-brand-muted">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[24px] shadow-2xl sm:min-h-[390px] md:min-h-[500px]">
            <Image
              src="/assets/state-comparison-2026.png"
              alt="Student comparing online driver education options at home"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-brand-navy/90 p-5 text-white-main backdrop-blur-sm md:inset-x-7 md:bottom-7">
              <p className="font-poppins text-[19px] font-semibold">
                Compare. Confirm. Continue.
              </p>
              <p className="mt-1 text-[14px] leading-6 text-white/75">
                A focused route from research to the provider that serves your state.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper styles="py-12 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-surface p-6 md:p-9">
            <p className="section-kicker">What learners value</p>
            <h2 className="mt-3 font-poppins text-[28px] font-semibold text-brand-navy">
              Confidence before checkout
            </h2>
            <p className="mt-4 leading-8 text-brand-muted">
              People comparing driving courses consistently need clarity about eligibility,
              deadlines, device access, and proof of completion. The redesigned experience
              keeps those questions visible throughout the journey.
            </p>
          </div>
          <div className="rounded-[20px] border border-amber-200 bg-amber-50 p-6 md:p-9">
            <p className="section-kicker text-amber-700">Pricing and approval</p>
            <h2 className="mt-3 font-poppins text-[28px] font-semibold text-brand-navy">
              Provider terms control
            </h2>
            <p className="mt-4 leading-8 text-brand-muted">
              Prices, promotions, course length, and acceptance can change. Review the
              provider terms and confirm approval with the relevant authority before
              enrolling.
            </p>
          </div>
        </div>
      </Wrapper>

      <Faqs />
      <StateAffiliateBanner />
    </>
  );
}
