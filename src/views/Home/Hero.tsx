import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiCheckCircle, FiChevronDown, FiShield } from "react-icons/fi";
import { STATES_OF_UNITED, StateOption } from "@/data/states";
import { trackSeoEvent, trackOutboundAndNavigate } from "@/lib/analytics";

function Hero() {
  const [state, setState] = useState<StateOption | null>(null);
  const [error, setError] = useState("");

  const selectState = (slug: string) => {
    const next = STATES_OF_UNITED.find((item) => item.slug === slug) ?? null;
    setState(next); setError("");
    if (next) trackSeoEvent("state_selected", { placement: "hero", state_name: next.name, state_slug: next.slug, provider: "none", page_type: "home" });
  };
  const start = () => {
    if (!state) { setError("Choose your state before continuing."); return; }
    const provider = state.provider_options[0];
    trackSeoEvent("cta_clicked", { placement: "hero", state_name: state.name, state_slug: state.slug, provider: provider.name, page_type: "home" });
    trackOutboundAndNavigate(provider.affiliate_url, { placement: "hero", state_name: state.name, state_slug: state.slug, provider: provider.name, page_type: "home" });
  };

  return (
    <section id="find-course" className="relative overflow-hidden bg-brand-navy text-white-main">
      <Image
        src="/assets/drivers-ed-hero-2026.png"
        alt="Teen learner receiving guidance from a driving instructor on a coastal road"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center] lg:object-center"
      />
      <div className="absolute inset-0 bg-brand-navy/80 lg:bg-gradient-to-r lg:from-brand-navy lg:via-brand-navy/90 lg:to-brand-navy/25" />
      <div className="relative mx-auto grid max-w-[1280px] gap-8 px-4 py-10 sm:py-12 md:px-8 md:py-20 lg:grid-cols-[1.15fr,.85fr] lg:items-center lg:gap-12 lg:py-24">
        <div>
          <p className="section-kicker text-[13px] text-brand-cyan sm:text-[14px]">Your road starts here</p>
          <h1 className="mt-3 max-w-3xl font-poppins text-[32px] font-semibold leading-[1.08] sm:text-[38px] md:text-[58px]">Find online drivers ed and budget traffic school options by state.</h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-white/80 sm:mt-5 sm:text-[17px] sm:leading-8 md:mt-6 md:text-[20px]">Compare state-focused drivers ed, traffic school, ticket dismissal, and insurance-discount paths before you choose a provider.</p>
          <ul className="mt-6 hidden gap-3 text-[15px] text-white/85 sm:grid sm:grid-cols-2">
            {["State-focused guidance", "Budget-conscious course comparison", "Clear affiliate disclosure", "Eligibility reminders before enrollment"].map((item) => <li key={item} className="flex items-center gap-3"><FiCheckCircle className="shrink-0 text-brand-cyan" size={20}/>{item}</li>)}
          </ul>
        </div>
        <div className="rounded-[20px] border border-white/15 bg-white-main p-5 text-brand-ink shadow-2xl sm:rounded-[24px] sm:p-6 md:p-8">
          <div className="flex items-center gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-brand-primary sm:h-11 sm:w-11"><FiShield size={22}/></span><div><p className="font-poppins text-[18px] font-semibold sm:text-[20px]">Start with your state</p><p className="text-[13px] text-brand-muted sm:text-[14px]">We match the route to your location.</p></div></div>
          <label htmlFor="hero-state" className="mt-5 block text-[14px] font-semibold sm:mt-6">State</label>
          <div className="relative mt-2"><select id="hero-state" value={state?.slug ?? ""} onChange={(e) => selectState(e.target.value)} className="h-12 w-full appearance-none rounded-xl border border-brand-line bg-white-main px-4 pr-11 text-[16px] font-medium focus:border-brand-primary focus:outline-none sm:h-14" aria-describedby={error ? "hero-error" : undefined}><option value="">Select your state</option>{STATES_OF_UNITED.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select><FiChevronDown className="pointer-events-none absolute right-4 top-[14px] text-brand-muted sm:top-[18px]" size={20}/></div>
          {error ? <p id="hero-error" role="alert" className="mt-2 text-[14px] font-medium text-red-700">{error}</p> : null}
          <button type="button" onClick={start} className="btn-primary mt-4 w-full">View provider option</button>
          {state ? <Link href={`/states/${state.slug}`} className="mt-4 block text-center text-[14px] font-semibold text-brand-primary hover:underline">Review {state.name} details first</Link> : null}
          <p className="mt-4 border-t border-brand-line pt-4 text-[12px] leading-5 text-brand-muted sm:mt-5">Sponsored-link disclosure: We may earn a commission if you enroll through a partner link, at no added cost to you.</p>
        </div>
      </div>
    </section>
  );
}
export default Hero;
