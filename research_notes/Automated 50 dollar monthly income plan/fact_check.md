# Fact-Check: "Building a Real Fifty-Dollar Monthly Income" report

Checked against: `/home/user/json-creator/reports/Automated 50 dollar monthly income plan.md`
Fact-check date: 2026-09-28 | Method: WebSearch (15 searches used) + 1 WebFetch attempt (blocked)
**This file only records findings. The report file itself was not edited.**

## Methodology / limitations (read before trusting the table)

- WebFetch was attempted once, on the Federal Reserve's own Sept 16, 2026 press release (`federalreserve.gov`). It failed with `EGRESS_BLOCKED` (network egress proxy denies that domain), confirming the environment note in the report itself (§"What we couldn't verify"). Per instructions, no further WebFetch attempts were made.
- Every finding below therefore rests on **WebSearch result summaries** (Claude's own AI-generated digest of search snippets), not on directly-fetched primary-source pages. These summaries quote/paraphrase Apify's help center, Apify's docs, and news outlets, but I could not open the underlying pages myself to confirm exact wording. Treat "VERIFIED" below as "consistently and specifically corroborated across multiple independent search results," not as "personally read on the primary source."
- Where multiple searches converged on identical, specific numbers (e.g., payout dates, Creator Plan price, Salad rate deltas), confidence is high. Where only one soft/aggregator source existed (e.g., the $1.5M/month update), confidence is marked lower.

## Summary table

| # | Claim | Status | Correction |
|---|---|---|---|
| 1 | PPE profit = 0.8×revenue − Apify compute cost, floored at $0 | **VERIFIED** | None. Formula and per-Actor $0 floor both confirmed. |
| 2 | PayPal min $20 / wire min $100; invoice ~11th, auto-approved ~14th, paid 21st–25th | **VERIFIED** | None. All five specifics matched exactly. |
| 3 | Rental pricing: new listings stopped ~Apr 2026, full retirement ~1 Oct 2026 | **VERIFIED** | None (deadline is precisely Sept 30 → auto-conversion effective Oct 1, same thing the report says). |
| 4a | ~3 consecutive failing days → "under maintenance"; continued failure → deprecation | **CONTRADICTED** (mechanism nuance) | Apify's own rule is **"fails at least 2 of the last 3 daily tests"** (not necessarily 3 *consecutive* days). Deprecation timeline: 2nd warning at 14 days flagged, full deprecation at 28 days. |
| 4b | Is the test/maintenance status exposed via the API? | **VERIFIED** | Yes — the public `Get Actor` endpoint exposes a top-level `notice` field (values seen: `UNDER_MAINTENANCE`, `NONE`), queryable for public Actors even without a token. This directly supports the report's "plain, free API read" design. |
| 5 | Creator Plan ~$1/month (6 months prepaid) incl. ~$500 usage | **VERIFIED** | None. Confirmed as $6 charged once for 6 months, bundling a one-time $500 usage bonus. |
| 6 | Apify pays ~$1.4M/month to ~3,000 developers (~$470 avg) | **VERIFIED**, with a freshness flag | Figure is real and widely repeated, but one (lower-confidence, single-source) result suggests a **newer ~$1.5M/month figure as of August 2026**. Could not confirm the $1.5M number against a clear primary source in this pass — treat as UNCLEAR/worth a direct check, not as a refutation of $1.4M. |
| 7 | Which countries can receive Apify payouts / PayPal restrictions | **UNCLEAR** | No Apify-specific country allow/block-list was found. Payouts ride on PayPal's general network (156+ countries, 23+ currencies) plus bank wire; PayPal itself flags currency-conversion restrictions for Argentina, Brazil, and Malaysia. KYC identity verification is required before any payout. The report's own advice — check personally, day one — is the correct response to this gap. |
| 8a | Top US savings ≈4.1–4.2% APY, late Sept 2026 | **VERIFIED** | None. Top rates ~4.20–4.21% (Axos ONE 4.21%, Newtek 4.20%), some listings show up to 4.50% at specialty/promo accounts. |
| 8b | 6-month T-bill ≈4.3%, late Sept 2026 | **VERIFIED** | None. 4.33% as of Sept 25, 2026 (matches report's own cited figure exactly). |
| 8c | Did the Fed raise rates on 16 Sept 2026? | **VERIFIED** (via search-summary only — see caveat) | Yes per multiple search results: FOMC raised the federal funds rate 25bp to a 3.75%–4.00% target range on Sept 16, 2026, described as the first hike since 2023. **Primary-source confirmation (federalreserve.gov) was attempted and blocked** — this rests on secondary summaries (CNBC, Fox Business, Advisor Perspectives) only. Given how consequential/surprising this is, treat as high-but-not-certain confidence. |
| 9 | Salad Sept 2026: RTX 4090/5090 up, mid-range down | **VERIFIED** | None. Effective Sept 12, 2026: RTX 5090 High-priority $0.450→$0.500/hr, RTX 4090 High-priority $0.300→$0.330/hr; ~15 other GPU classes cut at High/Medium/Low tiers; CPU (vCPU) rate also rose $0.004→$0.005/hr. |

---

## Detailed findings

### 1. PPE profit formula (VERIFIED)
Apify's own docs describe the formula as **Profit = (0.8 × Revenue) − Platform Costs**, where "platform costs" are Apify's own compute/data-traffic/API-operation usage generated by paying customers running the Actor (free-plan usage doesn't count). A separate search targeting the floor specifically confirmed: *"if an Actor's price does not cover its platform usage costs for a month, Apify sets that Actor's profit to $0 for the month"* and *"a single Actor's loss does not reduce your total payout"* — i.e., the floor is per-Actor and doesn't let one loss-making tool drag down others.
- Source: docs.apify.com/platform/actors/publishing/monetize/pay-per-event (via search summary, Sept 2026 crawl)
- **Side note (not one of the 9 claims, but found while verifying #1):** the report's own prose at the top of §"The primary plan" reads *"Apify keeps about 80% of pay-per-event revenue after its own compute costs"*. Grammatically this says **Apify** retains 80%, which is backwards — the formula immediately after it (and every external source found) confirms it's the **developer** who keeps 80% and Apify's own cut is the remainder plus cost recovery. The formula stated is correct; only that one lead-in sentence is worded ambiguously/incorrectly. Worth a wording fix even though this note doesn't touch the report file.

### 2. Payout thresholds and schedule (VERIFIED)
- PayPal minimum: $20. Bank/wire minimum: $100.
- *"Day 11: Apify issues payout invoices to community developers. Days 11-14: You review and approve your invoice. If you take no action, the invoice is automatically approved... Days 21-25: Apify releases payments."*
- Source: help.apify.com/en/articles/10057167-how-developer-payouts-work (via search summary)

### 3. Rental pricing retirement (VERIFIED)
- New rental Actor listings / rental repricing stopped **April 1, 2026**.
- Full retirement: Actors still on rental with no new pricing configured by **Sept 30, 2026** auto-convert to pay-per-usage (effectively $0 for the developer) starting **Oct 1, 2026**. Both framings ("Sept 30 deadline" / "Oct 1 retirement") describe the same cutover and match the report's "1 Oct 2026."
- Sources: blog.apify.com/migrating-to-pay-per-event-pricing/, docs.apify.com/actors/publishing/monetize/rental (via search summaries)

### 4. Automated daily tests, maintenance flag, deprecation, API exposure
**4a — CONTRADICTED (mechanism nuance).** The specific, help-center-documented trigger is: *"If an Actor does not pass these automated tests at least twice in the last three days, it is automatically placed Under maintenance."* That's a **2-failures-in-a-trailing-3-day window** rule, not strictly "3 consecutive days failing" (a fail/pass/fail pattern would also trigger it). One lower-quality secondary source did describe it as "three consecutive days," but the Apify help-center article itself (the more authoritative result) gives the 2-of-3 framing — so the claim as stated should be corrected to that.
Deprecation timeline confirmed: a second warning at 14 days under maintenance, full deprecation at **28 days** of continued failure.
- Sources: help.apify.com/en/articles/9716923 ("what to do when under maintenance"), help.apify.com/en/articles/10057123 ("why marked under maintenance") (via search summaries)

**4b — VERIFIED.** The Actor object exposed by Apify's public API carries a top-level **`notice`** field with observed values `UNDER_MAINTENANCE` and `NONE`; this is queryable via the `Get Actor` endpoint for public Actors, without needing an API token. A separate, always-present `isDeprecated` boolean field also exists on the Actor object. Together these confirm the report's design assumption (line ~75: "a plain, free API read, no AI model involved") is technically sound — a nightly script really can poll actor status without any AI call.
- Sources: docs.apify.com/api/v2/act-get, and community tooling built explicitly around this ("Actor Deprecation Monitor," "Apify Actor Health Monitor") that assumes the field is queryable (via search summaries)

### 5. Creator Plan (VERIFIED)
*"The Creator Plan costs $1/month plus pay-as-you-go and includes a one-time $500 prepaid-usage bonus you can spend within 6 months... paid as $6 for six months."* Capped at 10GB residential proxy / 10,000 SERPs per month, limited to Apify's own universal Actors.
- Source: apify.com/pricing/creator-plan (via search summary)

### 6. $1.4M/month, ~3,000 developers (VERIFIED, with a freshness flag)
The $1.4M/~3,000 developers/~$470 average figure is repeated consistently enough across secondary sources to trust as a real, previously-published Apify figure, but I could not pin it to one specific dated primary URL in this pass (the report itself cites no direct URL for this number either — its footnote link is for the separate "98 Actors" case study). One search additionally surfaced an unconfirmed, single-source claim of **~$1.5M/month "as of August 2026"** — plausibly a real update (payouts trending up matches the Store's general growth narrative) but not corroborated elsewhere in this pass. Recommend a direct check of Apify's own blog/press page before treating $1.4M as the current number, given today is Sept 28, 2026.

### 7. Payout-eligible countries (UNCLEAR)
No Apify-published country allow-list or block-list turned up. What's confirmed: payouts go through PayPal (payouts supported in 150+ countries / 23+ currencies, with specific currency-conversion restrictions flagged for **Argentina, Brazil, and Malaysia**) or bank wire, and Apify requires **KYC identity verification** before releasing any payout. This is consistent with — and supports — the report's framing of "check PayPal/wire availability in your own country" as the correct day-zero gate, since no single authoritative list exists to check instead.
- Source: developer.paypal.com/payouts/supported-features, help.apify.com payout article (via search summaries)

### 8. Cash-yield environment, late September 2026
- **Savings (VERIFIED):** Top nationally-advertised no-fee rates cluster at 4.20–4.21% APY (Axos ONE 4.21%, Newtek 4.20%) as of Sept 22–25, 2026; some listings headline up to 4.50% (likely a promotional/specialty product, not the broad "top no-fee" tier the report describes). Matches the report's 4.20% Newtek figure exactly.
  - Sources: cnbc.com/select/best-high-yield-savings-accounts, fortune.com "Top high-yield savings rates Sept. 25, 2026," nerdwallet.com (via search summaries)
- **6-month T-bill (VERIFIED):** 4.33% as of Sept 25, 2026 — matches the report's own already-cited figure exactly.
  - Source: forbes.com/advisor/investing/treasury-rates (via search summary)
- **Fed decision, Sept 16 2026 (VERIFIED, low-confidence caveat):** Multiple search results describe a **25bp hike to a 3.75%–4.00% target range**, called the first hike since 2023, voted 12-0, attributed to inflation pressure from oil prices. URLs returned included `cnbc.com/2026/09/16/fed-rate-decision-september-2026.html` and `federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm` itself. **I attempted to fetch the Federal Reserve URL directly to confirm and it was blocked by network egress policy** (`EGRESS_BLOCKED`), so this rests entirely on search-engine summaries, never on a page I actually read. Because a hike here is a genuinely consequential, somewhat surprising fact (it reverses what had been a cutting cycle) and because I can't independently confirm the primary source, I'd flag this as the one finding in the whole set worth a manual double-check on federalreserve.gov before relying on it — though nothing in this research contradicts it, and it doesn't change any of the report's dollar figures (which use observed market yields directly, not a rate-decision forecast).

### 9. Salad.com September 2026 rate changes (VERIFIED)
Effective **Sept 12, 2026**: RTX 5090 and RTX 4090 rates rose at High/Medium/Low priority (demand for those cards was outrunning supply) — e.g., High priority RTX 5090 $0.450→$0.500/hr, RTX 4090 $0.300→$0.330/hr — while **~15 other GPU classes were cut** at the same tiers (Lowest priority essentially unchanged except RTX 5080). CPU-only (vCPU) pricing also rose, $0.004→$0.005/hr. This exactly matches the report's own citation and the "4090/5090 up, mid-range down" framing in the claim.
- Source: blog.salad.com/earning-rate-changes-september-2026/ (via search summary)
