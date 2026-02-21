import React from "react";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import Link from "next/link";
import Image from "next/image";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <Wrapper styles="py-10 bg-white-cool">
      <div className="w-full flex flex-col gap-5 justify-center items-center">
        <div className="w-[180px] sm:w-[240px] h-[120px] relative">
          <Image
            src="/assets/logo.png"
            fill
            sizes="240px"
            quality={80}
            className="object-contain"
            alt="DriversEdDepot logo"
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 text-[15px] md:text-[16px] font-inter text-black-main">
          <Link href="/about" className="hover:text-brand-primary">
            About
          </Link>
          <Link href="/states-online-drivers-ed" className="hover:text-brand-primary">
            State Hub
          </Link>
          <Link href="/state-requirements" className="hover:text-brand-primary">
            Requirement Matrix
          </Link>
          <Link href="/guides" className="hover:text-brand-primary">
            Guides
          </Link>
          <Link href="/editorial-policy" className="hover:text-brand-primary">
            Editorial Policy
          </Link>
          <Link href="/contact" className="hover:text-brand-primary">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-brand-primary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-brand-primary">
            Terms
          </Link>
          <Link href="/affiliate-disclosure" className="hover:text-brand-primary">
            Affiliate Disclosure
          </Link>
        </div>

        <p className="text-[15px] md:text-[16px] text-center font-medium font-inter text-black-main">
          © {currentYear} DriversEdDepot.com. All rights reserved.
        </p>
      </div>
    </Wrapper>
  );
}

export default Footer;
