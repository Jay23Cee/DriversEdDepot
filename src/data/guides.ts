import { getStateBySlug } from "./states";

export type GuideTopic =
  | "how-online-drivers-ed-works"
  | "ticket-dismissal-eligibility"
  | "insurance-discount-rules";

export type GuideArticle = {
  slug: string;
  state_slug: string;
  state_name: string;
  topic: GuideTopic;
  title: string;
  h1: string;
  description: string;
  primary_keyword: string;
  secondary_keywords: string[];
  last_verified_at: string;
};

const LAST_VERIFIED = "2026-02-21";
const TARGET_STATES = ["california", "texas", "florida", "new-york"] as const;

const topicToTitle = (stateName: string, topic: GuideTopic) => {
  switch (topic) {
    case "how-online-drivers-ed-works":
      return `How Online Drivers Ed Works in ${stateName}`;
    case "ticket-dismissal-eligibility":
      return `Ticket Dismissal Eligibility in ${stateName}`;
    case "insurance-discount-rules":
      return `Insurance Discount Rules for Drivers Ed in ${stateName}`;
    default:
      return `${stateName} Drivers Ed Guide`;
  }
};

const topicToDescription = (stateName: string, topic: GuideTopic) => {
  switch (topic) {
    case "how-online-drivers-ed-works":
      return `Understand the course flow, timelines, and completion steps for online drivers ed in ${stateName}.`;
    case "ticket-dismissal-eligibility":
      return `Learn the key factors that can affect ticket dismissal course eligibility in ${stateName}.`;
    case "insurance-discount-rules":
      return `Review how drivers education may support insurance discount eligibility in ${stateName}.`;
    default:
      return `State-specific drivers education guidance for ${stateName}.`;
  }
};

const topicToKeyword = (stateName: string, topic: GuideTopic) => {
  switch (topic) {
    case "how-online-drivers-ed-works":
      return `${stateName} online drivers ed guide`;
    case "ticket-dismissal-eligibility":
      return `${stateName} ticket dismissal driving course eligibility`;
    case "insurance-discount-rules":
      return `${stateName} insurance discount driving course`;
    default:
      return `${stateName} online drivers ed`;
  }
};

const TOPICS: GuideTopic[] = [
  "how-online-drivers-ed-works",
  "ticket-dismissal-eligibility",
  "insurance-discount-rules",
];

const createGuide = (stateSlug: string, topic: GuideTopic): GuideArticle | null => {
  const state = getStateBySlug(stateSlug);
  if (!state) {
    return null;
  }

  const title = topicToTitle(state.name, topic);
  const slug = `${state.slug}-${topic}`;

  return {
    slug,
    state_slug: state.slug,
    state_name: state.name,
    topic,
    title,
    h1: title,
    description: topicToDescription(state.name, topic),
    primary_keyword: topicToKeyword(state.name, topic),
    secondary_keywords: state.secondary_keywords.slice(0, 4),
    last_verified_at: LAST_VERIFIED,
  };
};

export const GUIDE_ARTICLES: GuideArticle[] = TARGET_STATES.flatMap((stateSlug) =>
  TOPICS.map((topic) => createGuide(stateSlug, topic)).filter(
    (item): item is GuideArticle => item !== null
  )
);

export const getGuideBySlug = (slug: string) =>
  GUIDE_ARTICLES.find((guide) => guide.slug === slug);
