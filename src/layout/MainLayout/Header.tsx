import React, { useState } from "react";
import Wrapper from "../../components/Shared/ComponentWrapper/Wrapper";
import Link from "next/link";
import { Data } from "../../../Data/JSON";
import { FiMenu, FiX } from "react-icons/fi";
import BrandLogo from "../../components/Shared/BrandLogo/BrandLogo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white-main/95 backdrop-blur">
      <Wrapper>
        <div className="flex h-[76px] items-center justify-between gap-6">
          <Link href="/" onClick={closeMenu} aria-label="Driver's Ed Depot homepage" className="shrink-0">
            <BrandLogo priority />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {Data.Navibar.map((item) => (
              <Link href={item.path} key={item.path} className="font-inter text-[15px] font-semibold text-brand-ink hover:text-brand-primary">
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Link href="/#find-course" className="btn-primary">Find my course</Link>
          </div>
          <button type="button" className="grid h-11 w-11 place-items-center rounded-xl border border-brand-line text-brand-navy lg:hidden" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
            {isOpen ? <FiX size={25} /> : <FiMenu size={25} />}
          </button>
        </div>
        {isOpen ? (
          <nav className="border-t border-brand-line py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {Data.Navibar.map((item) => (
                <Link href={item.path} key={item.path} onClick={closeMenu} className="rounded-lg px-3 py-3 font-semibold text-brand-ink hover:bg-brand-surface hover:text-brand-primary">{item.name}</Link>
              ))}
              <Link href="/#find-course" onClick={closeMenu} className="btn-primary mt-3">Find my course</Link>
            </div>
          </nav>
        ) : null}
      </Wrapper>
    </header>
  );
}

export default Header;
