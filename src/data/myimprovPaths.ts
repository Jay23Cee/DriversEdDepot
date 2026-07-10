export const MYIMPROV_BASE_URL = "https://www.myimprov.com";

export const MYIMPROV_AFFILIATE_QUERY = {
  a_aid: "66a4143c07172",
  a_bid: "091e1333",
  a_cid: "0882c38f",
} as const;

const appendAffiliateQuery = (url: URL) => {
  Object.entries(MYIMPROV_AFFILIATE_QUERY).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
};

export const hasValidMyImprovAffiliateTracking = (value: string) => {
  try {
    const url = new URL(value);
    if (url.hostname !== "www.myimprov.com" && url.hostname !== "myimprov.com") return false;
    return Object.entries(MYIMPROV_AFFILIATE_QUERY).every(([key, expected]) => url.searchParams.get(key) === expected);
  } catch { return false; }
};

export const assertMyImprovAffiliateUrl = (value: string) => {
  if (!hasValidMyImprovAffiliateTracking(value)) throw new Error("MyImprov affiliate URL is missing required tracking identifiers.");
  return value;
};

const toAbsolutePath = (path: string) => (path.startsWith("/") ? path : `/${path}`);

export const MYIMPROV_STATE_PATHS: Partial<Record<string, string>> = {
  Alabama: "/defensive-driving/alabama/",
  Alaska: "/defensive-driving/alaska/",
  Arizona: "/defensive-driving/arizona/",
  Arkansas: "/defensive-driving/arkansas/",
  California: "/traffic-school/california/",
  Colorado: "/defensive-driving/colorado/",
  Connecticut: "/defensive-driving/connecticut/",
  Delaware: "/defensive-driving/delaware/",
  Florida: "/traffic-school/florida/",
  Georgia: "/defensive-driving/georgia/",
  Hawaii: "/defensive-driving/hawaii/",
  Idaho: "/defensive-driving/idaho/",
  Illinois: "/defensive-driving/illinois/",
  Indiana: "/defensive-driving/indiana/",
  Iowa: "/defensive-driving/iowa/",
  Kansas: "/defensive-driving/kansas/",
  Kentucky: "/traffic-school/kentucky/",
  Louisiana: "/defensive-driving/louisiana/",
  Maine: "/defensive-driving/maine/",
  Maryland: "/defensive-driving/maryland/",
  Massachusetts: "/defensive-driving/massachusetts/",
  Michigan: "/defensive-driving/michigan/",
  Minnesota: "/defensive-driving/minnesota/",
  Mississippi: "/defensive-driving/mississippi/",
  Missouri: "/defensive-driving/missouri/",
  Montana: "/defensive-driving/montana/",
  Nebraska: "/defensive-driving/nebraska/",
  Nevada: "/defensive-driving/nevada/",
  "New Hampshire": "/defensive-driving/new-hampshire/",
  "New Jersey": "/defensive-driving/new-jersey/",
  "New Mexico": "/defensive-driving/new-mexico/",
  "New York": "/defensive-driving/new-york/",
  "North Carolina": "/defensive-driving/north-carolina/",
  "North Dakota": "/defensive-driving/north-dakota/",
  Ohio: "/defensive-driving/ohio/",
  Oklahoma: "/defensive-driving/oklahoma/",
  Oregon: "/defensive-driving/oregon/",
  Pennsylvania: "/defensive-driving/pennsylvania/",
  "Rhode Island": "/defensive-driving/rhode-island/",
  "South Carolina": "/defensive-driving/south-carolina/",
  "South Dakota": "/defensive-driving/south-dakota/",
  Tennessee: "/traffic-school/tennessee/",
  Texas: "/defensive-driving/texas/tx-online-course/",
  Utah: "/defensive-driving/utah/",
  Vermont: "/defensive-driving/vermont/",
  Virginia: "/defensive-driving/virginia/",
  Washington: "/defensive-driving/washington/",
  "West Virginia": "/defensive-driving/west-virginia/",
  Wisconsin: "/defensive-driving/wisconsin/",
  Wyoming: "/defensive-driving/wyoming/",
};

export const buildMyImprovAffiliateUrl = (stateName: string) => {
  const statePath = MYIMPROV_STATE_PATHS[stateName];
  if (!statePath) {
    return null;
  }

  const url = new URL(toAbsolutePath(statePath), MYIMPROV_BASE_URL);
  appendAffiliateQuery(url);
  return assertMyImprovAffiliateUrl(url.toString());
};

export const buildDefaultMyImprovAffiliateUrl = () => {
  const url = new URL("/", MYIMPROV_BASE_URL);
  appendAffiliateQuery(url);
  return assertMyImprovAffiliateUrl(url.toString());
};
