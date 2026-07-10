declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
import { assertMyImprovAffiliateUrl } from "@/data/myimprovPaths";

type EventParams = Record<string, string | number | boolean | undefined>;

export type SeoEventName =
  | "state_selected"
  | "cta_clicked"
  | "affiliate_outbound_clicked";

export type SeoEventParams = EventParams & {
  placement: string;
  state_name: string;
  state_slug: string;
  provider: string;
  page_type: string;
};

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const isAnalyticsEnabled = GA_MEASUREMENT_ID.length > 0;

export const trackEvent = (eventName: string, params: EventParams = {}) => {
  if (
    !isAnalyticsEnabled ||
    typeof window === "undefined" ||
    typeof window.gtag !== "function"
  ) {
    return;
  }

  window.gtag("event", eventName, params);
};

export const trackSeoEvent = (eventName: SeoEventName, params: SeoEventParams) => {
  trackEvent(eventName, params);
};

export const trackPageView = (url: string) => {
  if (
    !isAnalyticsEnabled ||
    typeof window === "undefined" ||
    typeof window.gtag !== "function"
  ) {
    return;
  }

  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
};

export const trackOutboundAndNavigate = (
  url: string,
  params: SeoEventParams,
  timeoutMs = 700
) => {
  if (typeof window === "undefined") {
    return;
  }

  const safeUrl = url.includes("myimprov.com") ? assertMyImprovAffiliateUrl(url) : url;
  let navigated = false;

  const navigate = () => {
    if (navigated) {
      return;
    }

    navigated = true;
    window.location.assign(safeUrl);
  };

  if (!isAnalyticsEnabled || typeof window.gtag !== "function") {
    navigate();
    return;
  }

  window.gtag("event", "affiliate_outbound_clicked", {
    ...params,
    transport_type: "beacon",
    event_callback: navigate,
  });

  window.setTimeout(navigate, timeoutMs);
};
