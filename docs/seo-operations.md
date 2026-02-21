# SEO Operations Playbook (90-Day Execution)

## Baseline Setup (Week 1)
- Export Google Search Console performance reports:
- `Queries` (last 28 days and last 3 months)
- `Pages` (impressions/clicks/avg position/CTR)
- `Country` (focus: United States)
- `Device` (mobile first)
- Record KPI baseline in `docs/search-console-baseline-template.csv`.

## Weekly Cadence (Starting Week 2)
- Check top movers by impressions and position change.
- Flag pages in position 11-20 as quick-win candidates.
- Review coverage/indexing in Search Console.
- Check for crawl/index errors and fix immediately.
- Refresh title/meta on high-impression, low-CTR pages.

## Monthly Cadence
- Refresh top 20 pages by impressions.
- Update `last_verified_at` fields in `src/data/states.ts` where changes are confirmed.
- Review and update requirement matrix citations in `src/pages/state-requirements.tsx`.
- Publish at least 2 new support guides if gaps are found.

## Content QA Checklist
- Page includes one clear primary keyword and 3-5 secondary terms.
- H1 matches user intent and state/topic.
- Canonical URL is self-referential.
- Internal links point to state pages, hubs, and requirement matrix.
- Affiliate links include `rel="sponsored noopener noreferrer"`.
- Source citations are present and link to official resources.

## Performance QA Checklist
- Mobile-first check in Lighthouse:
- LCP <= 2.5s
- INP <= 200ms
- CLS <= 0.1
- Confirm large images are optimized with `sizes` and reasonable quality settings.

## Iteration Rules
- If Day-45 milestone misses by >30%, pause publishing and focus on quality updates.
- If Day-90 milestone misses by >30%, prioritize authority and link acquisition efforts.
- Keep update notes in commit messages and track changed pages per sprint.
