import React, { useState } from "react";
import { FiArrowRight, FiChevronDown, FiMapPin } from "react-icons/fi";
import { STATES_OF_UNITED, StateOption } from "@/data/states";
import { trackSeoEvent, trackOutboundAndNavigate } from "@/lib/analytics";

export default function StateAffiliateBanner() {
  const [state, setState] = useState<StateOption | null>(null);
  const [error, setError] = useState("");

  const selectState = (slug: string) => {
    const next = STATES_OF_UNITED.find((item) => item.slug === slug) ?? null;
    setState(next);
    setError("");

    if (next) {
      trackSeoEvent("state_selected", {
        placement: "home_banner",
        state_name: next.name,
        state_slug: next.slug,
        provider: "none",
        page_type: "home",
      });
    }
  };

  const continueToProvider = () => {
    if (!state) {
      setError("Choose your state before continuing.");
      return;
    }

    const provider = state.provider_options[0];
    trackSeoEvent("cta_clicked", {
      placement: "home_banner",
      state_name: state.name,
      state_slug: state.slug,
      provider: provider.name,
      page_type: "home",
    });
    trackOutboundAndNavigate(provider.affiliate_url, {
      placement: "home_banner",
      state_name: state.name,
      state_slug: state.slug,
      provider: provider.name,
      page_type: "home",
    });
  };

  return (
    <section className="bg-brand-primary px-4 py-14 text-white-main md:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr,460px] lg:items-center">
        <div>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
            <FiMapPin size={24} />
          </span>
          <h2 className="mt-5 max-w-2xl font-poppins text-[32px] font-semibold leading-tight md:text-[44px]">
            Your state is the right place to start.
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-8 text-white/80">
            Choose your location and continue directly to the available sponsored course provider.
          </p>
        </div>

        <div className="rounded-[22px] bg-white-main p-5 text-brand-ink shadow-2xl md:p-7">
          <label htmlFor="banner-state" className="block text-[14px] font-semibold">
            Select your state
          </label>
          <div className="relative mt-2">
            <select
              id="banner-state"
              value={state?.slug ?? ""}
              onChange={(event) => selectState(event.target.value)}
              className="h-14 w-full appearance-none rounded-xl border border-brand-line bg-white-main px-4 pr-11 text-[16px] font-medium focus:border-brand-primary focus:outline-none"
              aria-describedby={error ? "banner-state-error" : undefined}
            >
              <option value="">Choose a state</option>
              {STATES_OF_UNITED.map((item) => (
                <option key={item.slug} value={item.slug}>{item.name}</option>
              ))}
            </select>
            <FiChevronDown className="pointer-events-none absolute right-4 top-[18px] text-brand-muted" size={20} />
          </div>
          {error ? <p id="banner-state-error" role="alert" className="mt-2 text-[14px] font-medium text-red-700">{error}</p> : null}
          <button type="button" onClick={continueToProvider} className="btn-primary mt-4 w-full gap-2">
            Go to course provider <FiArrowRight />
          </button>
          <p className="mt-4 text-[12px] leading-5 text-brand-muted">
            Sponsored link. We may earn a commission at no added cost to you. Confirm eligibility before enrolling.
          </p>
        </div>
      </div>
    </section>
  );
}
