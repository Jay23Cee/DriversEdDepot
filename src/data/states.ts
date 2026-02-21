import {
  buildDefaultMyImprovAffiliateUrl,
  buildMyImprovAffiliateUrl,
} from "./myimprovPaths";

export type ProviderRel = "sponsored noopener noreferrer";

export type StateFaqItem = {
  question: string;
  answer: string;
};

export type ProviderOption = {
  name: string;
  affiliate_url: string;
  rel: ProviderRel;
};

export type StateOption = {
  name: string;
  slug: string;
  affiliateLink: string;
  primary_keyword: string;
  secondary_keywords: string[];
  eligibility_summary: string;
  dmv_source_url: string;
  last_verified_at: string;
  faq_items: StateFaqItem[];
  provider_options: ProviderOption[];
};

export const DEFAULT_AFFILIATE_LINK = buildDefaultMyImprovAffiliateUrl();

const SOURCE_DIRECTORY_URL = "https://www.usa.gov/state-motor-vehicle-services";
const LAST_VERIFIED_DEFAULT = "2026-02-21";

const US_STATE_NAMES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
] as const;

const toSlug = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

const DMV_SOURCE_OVERRIDES: Partial<Record<string, string>> = {
  California: "https://www.dmv.ca.gov/portal/",
  Florida: "https://www.flhsmv.gov/",
  NewYork: "https://dmv.ny.gov/",
  Texas: "https://www.dps.texas.gov/section/driver-license",
};

const getDmvSource = (stateName: string) => {
  const condensedStateKey = stateName.replace(/\s/g, "");
  return DMV_SOURCE_OVERRIDES[condensedStateKey] ?? SOURCE_DIRECTORY_URL;
};

const getAffiliateUrl = (stateName: string) =>
  buildMyImprovAffiliateUrl(stateName) ?? DEFAULT_AFFILIATE_LINK;

const buildSecondaryKeywords = (stateName: string) => [
  `${stateName} defensive driving online`,
  `${stateName} traffic school online`,
  `${stateName} ticket dismissal course`,
  `${stateName} insurance discount driving course`,
  `${stateName} online drivers ed requirements`,
];

const buildFaqItems = (stateName: string): StateFaqItem[] => [
  {
    question: `Who should take an online drivers ed course in ${stateName}?`,
    answer:
      `Students, ticketed drivers, and policyholders seeking safe-driver discounts in ${stateName} can benefit, depending on eligibility requirements.`,
  },
  {
    question: `How long does online drivers ed usually take in ${stateName}?`,
    answer:
      `Course length varies by provider and state requirements. Always verify required seat time and completion rules before enrollment.`,
  },
  {
    question: `Can I use online drivers ed for ticket dismissal in ${stateName}?`,
    answer:
      `Some drivers may qualify for ticket dismissal use cases in ${stateName}, but local court and provider approval rules apply.`,
  },
];

const buildProviders = (stateName: string): ProviderOption[] => [
  {
    name: `MyImprov (${stateName})`,
    affiliate_url: getAffiliateUrl(stateName),
    rel: "sponsored noopener noreferrer",
  },
];

export const STATES_OF_UNITED: StateOption[] = US_STATE_NAMES.map((stateName) => {
  const slug = toSlug(stateName);
  const provider_options = buildProviders(stateName);

  return {
    name: stateName,
    slug,
    affiliateLink: provider_options[0].affiliate_url,
    primary_keyword: `${stateName} online drivers ed`,
    secondary_keywords: buildSecondaryKeywords(stateName),
    eligibility_summary: `${stateName} eligibility varies by court requirements, licensing stage, and insurer program rules.`,
    dmv_source_url: getDmvSource(stateName),
    last_verified_at: LAST_VERIFIED_DEFAULT,
    faq_items: buildFaqItems(stateName),
    provider_options,
  };
});

export const getStateBySlug = (slug: string) =>
  STATES_OF_UNITED.find((state) => state.slug === slug);
