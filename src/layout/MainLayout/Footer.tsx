import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";

const currentYear = new Date().getFullYear();

const groups = [
  {
    title: "Explore",
    links: [
      ["State courses", "/states-online-drivers-ed"],
      ["Budget drivers ed", "/budget-drivers-ed-school"],
      ["Requirements", "/state-requirements"],
      ["Guides", "/guides"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Editorial policy", "/editorial-policy"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Affiliate disclosure", "/affiliate-disclosure"],
      ["Privacy", "/privacy-policy"],
      ["Terms", "/terms"],
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-brand-navy text-white-main">
      <Wrapper styles="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr,2fr]">
          <div>
            <div className="relative h-[72px] w-[210px] rounded-xl bg-white-main px-3">
              <Image
                src="/assets/logo.png"
                fill
                sizes="210px"
                className="object-contain"
                alt="DriversEdDepot"
              />
            </div>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-white/70">
              Independent state-by-state guidance that helps drivers understand online course
              options and reach third-party providers with confidence.
            </p>
            <p className="mt-4 max-w-md text-[13px] leading-6 text-white/60">
              We may earn a commission from qualifying partner enrollments. Eligibility and
              approval depend on your state, court, insurer, and provider.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="font-poppins text-[15px] font-semibold text-white-main">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className="text-[14px] text-white/70 hover:text-brand-cyan">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-[13px] text-white/55">
          &copy; {currentYear} DriversEdDepot.com. All rights reserved.
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
