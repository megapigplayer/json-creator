# Stress Test: Apify Store Pay-Per-Event Actors as the Primary $50/Month Method

**Date:** 2026-09-28. **Method under test:** building and publishing small pay-per-event (PPE) Actors on the Apify Store, built and kept alive by an AI coding agent (e.g. Claude Code on scheduled jobs), with only one-time human setup steps.

**Sources.** This document is a red-team pass over three prior research notes in this folder — `software_api_marketplaces.md` (primary evidence on Apify's mechanics, fees, base rates), `ai_agent_case_studies.md` (design rules distilled from real AI-agent-earns-money experiments), and `ai_services_microsaas.md` (base rates for small digital products generally, used as a cross-check). I do not re-derive their citations; where I use a fact from them I name the note. I also made **exactly one WebSearch call** this session (query on Apify's PPE commission formula), which succeeded and resolved one open ambiguity — flagged explicitly below as *"confirmed this session."* Anything else not in the three notes is marked **[unverified background knowledge]**.

---

## Executive verdict (read this first)

The method **survives** the stress test as the best available no-capital option, but it is a **probabilistic bet with real, identifiable failure modes**, not a reliable income stream. My own estimate, independent of but broadly consistent with the source notes:

- **P(≥$50/month NET) at 3 months ≈ 12–20%**
- **P(≥$50/month NET) at 6 months ≈ 30–45%**, central estimate **~35%**
- Both numbers are **conditional on one hard gate passing first**: PayPal or bank-wire payout must actually work for receiving money in the user's country. If it doesn't, the probability is ~0% regardless of everything else. **Check this before writing a single line of code.**
- No failure mode below is fatal *on its own* — each has a working mitigation. But three mitigations are not optional polish, they are load-bearing: (1) a hard legal/niche allow-list, (2) an independent watchdog on the maintenance pipeline, (3) a deterministic-first, cost-capped maintenance design. Skip any of these and a manageable risk becomes a likely-fatal one.

---

## 1. Attack the method: failure-mode register

| # | Failure mode | Likelihood | Impact | Fatal? | Mitigation |
|---|---|---|---|---|---|
| 1 | **Portfolio lottery** — most individual Actors earn $0 (54,000–70,000+ listings vs. ~3,000 paid developers, `software_api_marketplaces.md` §2) | High (near-certain for any single Actor) | High if betting on 1–2 Actors; low if run as a portfolio | **Fatal to a single-Actor strategy. Not fatal to a 25–40-Actor portfolio strategy** (see §4). | Never treat one Actor as "the plan." Build the portfolio math (§4) into the plan from day one. |
| 2 | **Compute cost eats the PPE margin**, especially in scraping-heavy or proxy-dependent niches | Medium, niche-dependent | High for compute-heavy niches — there is a **hard ceiling at compute = 80% of revenue**, above which the confirmed formula (§2) pays the developer **exactly $0 forever, at any volume** | Fatal *for that specific Actor* if mispriced; not fatal to the method | Restrict to light utility/API-wrapper niches (§3); price events to keep compute comfortably under 20% of revenue; track per-Actor margin monthly and re-price or retire outliers. |
| 3 | **"Paid-plan-only" profit rule dilutes visible revenue** — confirmed this session: only revenue *and* cost from Apify customers on paid plans count toward the developer's profit calculation; free-plan usage counts toward neither side | Medium (share of Store traffic on free plans is unknown) | Medium — billed PPE revenue can overstate real payout | Not fatal | Track the *actual* Apify payout-dashboard figure as the real KPI, never the headline "$X per event × runs" arithmetic alone. |
| 4 | **Daily automated test failure → "under maintenance" (day 3) → deprecation (day ~17)** (`software_api_marketplaces.md` §3) | Medium per Actor per year | Medium (temporary rank loss) to High (deprecation = total loss of that Actor) | Not fatal if the agent's nightly check beats Apify's 3-day clock | Nightly automated status poll + auto-patch-and-redeploy pipeline (§5) that resolves failures inside 24–48h; tiny, stable, login-free default inputs so the daily test itself never fails on auth. |
| 5 | **Upstream source/API changes or disappears** | Medium–high per Actor over months–years | Medium per Actor; low at portfolio level if diversified | Not fatal if sources are diversified and chosen for stability | Prefer official/government sources with a track record (§3 criteria); spread the portfolio across independent sources so one break doesn't cascade. |
| 6 | **Legal/ToS scope creep** — chasing a "better" niche that scrapes logins, personal data, or breaks a target's terms once compliant niches underperform | Medium (temptation rises exactly when early niches disappoint) | **High — a ToS violation risks account-wide suspension, not just one Actor's loss, plus real legal exposure** | **This is the single highest-blast-radius risk in the whole plan** — not fatal to the *concept*, but potentially fatal to the *entire account* if it happens | Hard-coded niche allow-list (§3); a logged "source-compliance check" the agent must pass before publishing any new Actor; never login-gated or personal-data sources, full stop, no exceptions for a promising-looking niche. |
| 7 | **Apify changes its own monetization rules** — precedent: rental pricing retired 1 Apr–1 Oct 2026 (`software_api_marketplaces.md` §1, §4) | Medium within 12 months (it already happened once in 2026) | Medium–high, directly changes unit economics | Not fatal (PPE has already absorbed one such transition), but **the largest systemic risk with no full hedge** | Agent auto-summarizes Apify's changelog/developer emails monthly; keep core Actor logic reasonably portable so a forced pivot doesn't require a full rebuild; never treat a reached $50/month as permanent. |
| 8 | **AI-generated-Actor supply flood** — this exact playbook (AI agent auto-builds Store Actors) is already a documented public strategy (Godberry Studios, AgentByline, both cited in `software_api_marketplaces.md` §1) | High and rising | Medium–high — shrinks expected revenue per Actor over time; the notes' best case study (98 Actors, Nov 2025–Apr 2026) predates the current wave and may not generalize to late-2026 launches | Not fatal, but a real headwind the source notes' base rates don't fully price in | Move fast; favor differentiated/underserved niches (language- or country-specific) over the most generic categories; build genuinely more robust Actors (real error handling, wider schema coverage) than likely low-effort competitors. |
| 9 | **The agent-maintenance loop itself silently breaks** — expired API token, lapsed CI quota, an agent-introduced regression, a rotated credential nobody updates | Medium–high over 6–12 months (three separate account systems: CI/GitHub, Apify, Anthropic) | **High — this failure is invisible by design**, since the entire premise is near-zero human oversight; months of silent zero-revenue drift look identical to "the method doesn't work" | **Effectively fatal to the "near-zero work" premise if no watchdog exists** | An independent watchdog job that alerts the human if the main pipeline hasn't reported success in >48h (§5); every auto-redeploy gated by tests before push; keep one light but non-zero recurring human touchpoint (skim a weekly digest). |
| 10 | **Anthropic API / Claude Code maintenance costs exceed revenue** | Low with a deterministic-first design; **Medium–high if a full agentic session runs nightly on every Actor regardless of status** | Low (cents/month) if well designed; **potentially devastating — modeled at $375–$1,125+/month in the badly-designed case (§2.4)** — if not | **Fatal to profitability, but only under one specific, avoidable implementation mistake** (unconditional LLM invocation instead of gating behind a cheap deterministic check) | Gate all LLM calls behind a free/cheap deterministic status check (§2.4, §5); default to Haiku-tier + Batch API; best mitigation — run Claude Code against an existing flat-rate subscription rather than metered API, making marginal cost ≈$0. |
| 11 | **Payout unavailable or restricted in the user's country** | **Unknown — the user's country is unspecified in the brief** | Total, if neither PayPal nor bank wire can receive there | **YES — the one genuine binary go/no-go gate in this entire plan** | Verify PayPal (or bank-wire-to-$100-threshold) receiving capability in the user's actual country as literally the first action, before any agent build time is spent. |
| 12 | **Tax/reporting creeps beyond "one-time"** | Medium, highly country-dependent | Low–medium — admin burden, not existential, but could violate the "one-time steps only" framing if a country requires ongoing filings | Not fatal | One-time professional tax consult in the user's actual country; treat any recurring filing as a known, budgeted exception, not a plan failure. |
| 13 | **Payout lumpiness misread as failure** — balances under $20 (PayPal) / $100 (wire) roll over (`software_api_marketplaces.md` §1) | High during months 1–3 ramp-up | Low (perception only), but could trigger a premature kill decision | Not fatal | Evaluate KILL criteria (§5) against *accrued/earned* revenue in the Apify dashboard, not deposited PayPal amounts. |
| 14 | **Store discoverability** — any one Actor is 1 of 54,000–70,000+ | High (structural) | High for time-to-first-dollar | Not fatal — this is exactly what the portfolio-math model in §4 is built to absorb | Optimize listing SEO; mirror as an Apify-hosted MCP tool for a second discovery surface; rely on volume, not hope, for any single listing to rank. |
| 15 | **Store "Issues"/support replies** — whether these are API-automatable is an explicit gap in `software_api_marketplaces.md` §3 | Medium (will happen at any real usage level) | Low–medium — mostly a ranking/reputation factor at this income scale | Not fatal | Defensive input validation to minimize issues filed in the first place; agent drafts replies for a human one-click approval as fallback; treat as a ~10-min monthly review, not a continuous obligation. |

**Cross-check against the design rules in `ai_agent_case_studies.md` §7:** the method passes all ten rules distilled from real AI-money-experiments (sells into existing demand, fixed code-enforced prices with no agent discretion, deterministic digital delivery, LLM as a bounded component if built that way, assumes adversarial policy change, counts net cash only, never submits into others' incentive queues, avoids zero-sum markets, doesn't pose as human, and plans for rare human exceptions). That is *why* both source notes independently rank it #1 — this stress test does not overturn that ranking, but it does show the ranking depends on discipline that is easy to skip under time pressure (rows 6, 9, and 10 above).

**Plain statement on fatality:** nothing here is fatal by nature of the method. Row 11 (country payout) is the one true precondition — check it first. Rows 6, 9, and 10 are "fatal if you skip the fix, cheap to avoid if you don't." Everything else degrades the odds computed in §4/§6 without being an outright kill.

---

## 2. Unit economics: a worked example

### 2.0 Explicit assumptions
- Portfolio of **N Actors** in compliant niches (§3), priced with pay-per-event.
- Two pricing archetypes: **(A) per-job utility** (e.g., $0.05–$0.30 per document/file processed) and **(B) per-result bulk data** (e.g., the $3/1,000 results example already used in `software_api_marketplaces.md` §5).
- Compute cost is modeled as a **fraction of revenue (f)**, following the source note's own inference ("compute is about 10–15% of revenue" for typical lightweight Actors, near-zero for the lightest ones) — I do not have a sourced $/CU-hour figure for 2026, so I avoid inventing one and work from the revenue-fraction framing instead.
- AI maintenance job = a scheduled CI job (e.g., GitHub Actions, free tier: 2,000 min/month private repos, unlimited public — **[unverified background knowledge]**) that by default runs a cheap deterministic status check, and only invokes an LLM when a check fails.

### 2.1 The fee-formula ambiguity — resolved this session

`software_api_marketplaces.md` §1 flagged two candidate wordings from Apify's own help pages: profit = 0.8×revenue − cost, or profit = 0.8×(revenue − cost). **Confirmed via one WebSearch this session** (Apify Documentation, "Pay per event" / "Pay-per-event pricing model," docs.apify.com — search-engine summary, not a direct fetch, so treat as corroborated-but-not-directly-read): the formula is **profit = 0.8 × revenue − platform costs**, i.e. the developer bears compute cost in full, *after* the 80% cut is taken, not before. The same source also confirms **Actor profit floors at $0 and never goes negative for the developer** — if PPE price doesn't cover platform usage cost in a given month, Apify sets that Actor's developer profit to $0 rather than billing the developer.

These two formulas diverge sharply as compute rises (illustrated at R = $100):

| Compute cost C | f = C/R | **F1 = 0.8R − C (confirmed formula)** | F2 = 0.8×(R − C) | F2 is more generous by |
|---|---|---|---|---|
| $0 | 0% | $80.00 | $80.00 | $0.00 |
| $10 | 10% | $70.00 | $72.00 | $2.00 |
| $25 | 25% | $55.00 | $60.00 | $5.00 |
| $40 | 40% | $40.00 | $48.00 | $8.00 |
| $60 | 60% | $20.00 | $32.00 | $12.00 |
| $80 | 80% | **$0.00** | $16.00 | $16.00 |
| $100 | 100% | $0.00 (floored) | $0.00 | $0.00 |

Algebraically, F2 − F1 = 0.2×C always: under the confirmed formula the developer effectively bears 100% of compute cost, versus only 80% under the friendlier (incorrect) reading. **Practical consequence: at C ≥ 80% of revenue, the confirmed formula pays the developer exactly $0 no matter how much volume the Actor does.** This is a hard structural ceiling, not a soft risk — it is why compute-heavy niches (scraping with residential proxies, headless browsers, expensive per-run LLM calls) are excluded from the candidate list in §3.

### 2.2 Revenue needed for $50/month net, by compute fraction

Using the confirmed formula, R = 50 / (0.8 − f):

| Compute fraction (f) | Gross PPE revenue needed for $50 net |
|---|---|
| 0% (near-zero-compute utility) | $62.50 |
| 5% | $66.67 |
| 10% | $71.43 |
| 15% (base case for a typical light Actor) | $76.92 |
| 25% | $90.91 |
| 40% | $125.00 |
| 60% | $250.00 |
| 80% | **∞ — never reachable at any volume** |

### 2.3 Concrete worked example

At f = 15% (R ≈ $76.92 needed), translated into monthly volume:

- **Archetype A — per-document utility at $0.08/document:** ≈ 962 documents/month across the whole portfolio (≈32/day). Spread across 20 Actors that's under 2 documents/Actor/day on average — but in practice this will be sharply skewed (§4), so realistically a handful of Actors carry nearly all of it.
- **Archetype B — per-result bulk data at $3.00/1,000 results:** ≈ 25,640 results/month (≈854/day). This sounds large, but **one single repeat business user running one scheduled daily job pulling ~1,000 rows/day would alone generate ~30,000 results/month** — enough by itself to clear the whole portfolio's target. **Strategic implication: Actor types with plausible recurring/scheduled use by a small number of business users (compliance checks, daily data pulls) are worth more than Actor types needing many one-off casual users** — this directly informs the niche ranking in §3.

### 2.4 Cost of the AI maintenance job

| Scenario | What runs | Estimated monthly cost |
|---|---|---|
| **Healthy month** (default path) | Nightly job reads Apify's own daily-test status via API; no LLM invoked except one cheap weekly human-digest write-up (Haiku 4.5, ~5K in/1K out tokens ≈ $0.01) | **≈$0–0.05** |
| **Normal maintenance month** | 3–5 Actors need a real fix; each diagnosis+patch invokes Haiku/Sonnet on a narrow context (logs + failing code only), ≈$0.03–0.06/incident per the per-job cost math already used in `ai_services_microsaas.md` §4 | **≈$0.10–0.30** |
| **Bad month** | 15 of N Actors break at once (e.g., a shared dependency update), or fuller agentic sessions (more tool calls, more context) are used per fix | **≈$7.50–50** |
| **Badly designed** (no deterministic-first gate — a full agentic Claude Code session runs nightly on every Actor regardless of status, Sonnet-tier, large context) | 25 Actors × 30 nights × ~$0.50–1.50/session | **≈$375–1,125** — this alone would multiply the entire $50 revenue target several times over |
| **Flat-rate subscription** | Claude Code driven by the user's existing Claude Pro/Max subscription rather than metered API, kept within its usage limits **[unverified background knowledge on exact 2026 limits]** | **≈$0 marginal cost** |

The "Anthropic API costs exceeding revenue" failure mode (row 10, §1) is real but **entirely a design choice** — the gap between the healthy-month and badly-designed rows is roughly four orders of magnitude, both technically achievable with the same underlying model.

### 2.5 Bottom-line reconciliation

| Item | Low estimate | Base case | Risk case |
|---|---|---|---|
| Gross PPE revenue (at f=15%) | $76.92 | $76.92 | $76.92 |
| → Apify's cut + compute (0.8R − C) | nets to $50.00 | $50.00 | $50.00 |
| − AI maintenance cost | ~$0.05 | ~$0.30 | $50–1,125 (see §2.4) |
| − Payout fee (Apify's own PayPal fee to the developer is **unconfirmed** — a genuine gap in `software_api_marketplaces.md` §1; assume 0–2% as a placeholder, or ~$15–35 flat if forced onto bank wire) | $0.00 | $0.50 | $1.00–35 |
| − CI/hosting | $0 (GitHub Actions free tier) | $0 | $0 |
| **= True take-home** | **≈$49.90–50.00** | **≈$49.20** | **could be strongly negative** |

**Takeaway:** in a well-designed implementation, the gap between "gross PPE profit" and "cash in the user's account" is small — under $2/month. In a carelessly-implemented one, the AI-maintenance job alone can turn a nominal $50 into a loss. This is the single most controllable variable in the whole plan.

---

## 3. Niche selection: criteria and ranked candidates

### 3.1 Selection criteria (all must be satisfied)
1. **Legal basis**: official public API used within its published terms, OR open/government data with an explicit reuse license (CC0, Open Government License, public-domain statute), OR a pure utility that only processes data the paying user supplies.
2. **No login required** to fetch source data — Apify's daily default-input test cannot use authenticated inputs without permanently failing (`software_api_marketplaces.md` §3).
3. **No personal data of identifiable third parties** processed, unless it is the paying user's own supplied data about themselves.
4. **Stable source**: a track record of years of stability, versioning, or a changelog — not a scrappy consumer site likely to redesign or an API likely to shut down.
5. **Tiny, fast (<5 min), login-free default/prefill input** that reliably passes Apify's daily test.
6. **Low compute per run** — ideally no headless browser, no GPU, kept comfortably under 20% of revenue (§2.2).
7. **Plausible demand signal**: either an existing paid comparable Actor proves willingness to pay while a specific gap remains (language, completeness, speed), or a clear recurring professional workflow (the "one scheduled repeat user" logic from §2.3).
8. **Not already saturated** by thousands of near-identical listings.
9. Bonus: **MCP-exposable** via Apify's MCP hosting for a second discovery surface.

### 3.2 Ranked candidates

| Rank | Actor idea | Legal safety | Demand signal | Low maintenance | Recurring-use potential | Notes |
|---|---|---|---|---|---|---|
| 1 | **Public sanctions/PEP list checker** (OFAC SDN, EU sanctions list — explicitly public, built for programmatic compliance use) | 5 | 4 | 3 | 5 | Strong recurring fintech/marketplace compliance demand; freshness of the list matters more than most, so build a reliable daily-refresh check. |
| 2 | **Invoice/receipt → structured JSON/CSV extractor** (user-supplied files) | 5 | 4 | 3 | 5 | Pure utility on user data; classic recurring back-office batch workflow; may use a cheap LLM call per page (Haiku-tier, negligible cost per §2.4). |
| 3 | **IBAN / VAT number / business-registration-ID validator & formatter** (published checksum algorithms + official free registries like VIES) | 5 | 3 | 5 | 4 | Extremely low maintenance, but partly commoditized by free libraries — win on packaging/reliability, not novelty. |
| 4 | **Universal document/format converter** (PDF/DOCX/HTML/Markdown ↔ each other; PDF → structured table) | 5 | 4 | 4 | 3 | Zero external dependency, very stable; broad but somewhat one-off demand. |
| 5 | **Public tenders/procurement notice monitor** for a specific country/language | 4 | 4 | 3 | 5 | Public-interest data by design; strong recurring "watch for new tenders" business use; some maintenance if the source site's structure changes. |
| 6 | **Dependency manifest / SBOM / license checker** (package.json, requirements.txt, pom.xml) | 5 | 2 | 5 | 4 | No external target at all; niche dev audience but CI-triggered recurring use, and a natural fit as an **MCP tool other coding agents call** — matches the notes' flagged "agent-friendly wrapper" gap. |
| 7 | **Currency/units/timezone bulk converter for structured files**, using an official free rate source (e.g. ECB reference rates) within its terms | 4 | 3 | 4 | 4 | Verify the specific rate source's reuse terms before building. |
| 8 | **JSON/CSV/XML/YAML schema validator & linter** | 5 | 2 | 5 | 2 | Lowest-risk, lowest-maintenance "filler" pick; thin pricing power since free alternatives are everywhere. |
| 9 | **Technical SEO/site auditor** for a URL the user supplies (their own site) | 4 | 3 | 3 | 4 | User-directed, not bulk scraping someone else's property; agencies plausibly re-run monthly. |
| 10 | **Country-specific open-data/registry wrapper** (a company registry, statistics office, or court-records public index) in an underserved language | 4 | 3 (unverified hypothesis) | 3 | 3 | Flagged by `software_api_marketplaces.md` §5 as a plausibly underserved category. **Higher uncertainty, higher upside** — worth 2–3 portfolio slots as a bet, not the whole portfolio. Verify the specific portal's reuse license per country before building. |
| 11 | **URL → clean readable text/Markdown extractor**, single-URL, user-directed, robots.txt-respecting | 3 | 4 | 3 | 3 | Keep strictly single-URL-per-run and robots-respecting to stay on the safe side of "utility" vs. "scraper." |
| 12 | **DOI/citation/academic metadata resolver** (CrossRef, DataCite, ORCID public APIs) | 5 | 2 | 4 | 2 | Small but stable niche audience; official APIs with generous reuse terms. |

**Portfolio construction advice:** weight the top 6 (high demand-signal + low-maintenance combination) as the "safe" core of the first build wave, and treat #10 and 1–2 similar country/language-specific bets as deliberate higher-variance shots — consistent with the portfolio-math logic in §4, which favors more independent shots over concentrating on a smaller number of "sure things" that don't actually exist in this evidence base.

---

## 4. Portfolio math: how many Actors, and why

### 4.1 The model

Treat each published Actor, once mature (~month 4–6, per the case-study ramp in `software_api_marketplaces.md` §5), as an independent Bernoulli trial: it either becomes a **"hit"** (generates non-trivial recurring revenue, here defined as ≥$5/month) with probability **p**, or it doesn't. Assume a hit contributes on average **$15/month** (a modest niche-utility estimate; sensitivity below). To reach $50/month you need roughly **k = ⌈50/15⌉ = 4 simultaneous hits**. With N Actors, hits X ~ Binomial(N, p), and the quantity of interest is P(X ≥ 4).

**Where p comes from:** `software_api_marketplaces.md` §2 gives ~3,000 paid developers against 54,000–70,000+ listed Actors — a crude, mismatched-unit floor of **~4.8%** if treated as "fraction of listings that generate real money." A deliberately niche-selected, low-maintenance, non-scraping Actor built to the criteria in §3 should plausibly beat the average listing (most of which are abandoned experiments or unmaintained duplicates) by roughly 2–4×. I model **p = 0.05 (pessimistic, ≈ raw base rate), p = 0.10 (base case), p = 0.20 (optimistic)** — these are judgment estimates, not measured data, exactly as the source notes flag their own probabilities as judgment calls.

### 4.2 Results (Poisson approximation to the binomial; adequate for planning, not exact at p=0.20)

**P(portfolio reaches ≥$50/month net) by portfolio size N and hit-rate p:**

| N (Actors) | p = 0.05 | p = 0.10 | p = 0.20 |
|---|---|---|---|
| 10 | 0.2% | 1.9% | 12% |
| 20 | 1.9% | 14% | ~57%* |
| 30 | 6.6% | 35% | ~85%* |
| 40 | 14% | 57% | ~96%* |

*\*Less precise at p=0.20 since the Poisson approximation degrades as p rises; treat as order-of-magnitude.*

**Reading this table:** at the base-case p=0.10, roughly **30 Actors** gets you to ~35% odds of hitting the target, and 40 gets you to ~57%. This independently reproduces the source note's own judgment-based P6 range of 35–50% for "a portfolio of 20–40 small Actors" (`software_api_marketplaces.md` §6) — a useful consistency check, since it was derived from a different, more mechanistic angle rather than copied.

**Sensitivity to the $15/hit assumption:** if the average hit is worth $25/month instead (plausible for the higher-value niches ranked #1–2, #5 in §3), only k=2 hits are needed, which roughly halves the portfolio size needed for similar odds. If the average hit is a thinner $10/month, k=5 and proportionally more N is needed. The $15 figure is a mid-point planning assumption, not a measured number.

### 4.3 Honest limitations of this model
- **Hits are not really independent.** The 98-Actor case study describes a positive "catalog effect" — later Actors benefit from the developer's growing Store reputation and cross-discovery. Real-world outcomes are probably more bimodal than a clean binomial predicts: whole portfolios that catch on, and whole portfolios that don't, more than the model's smooth middle suggests.
- **Revenue-per-hit is long-tailed, not a fixed $15** — a full model would draw each hit from a skewed distribution (log-normal/Pareto-like) and simulate; the fixed-average approach here is a transparent, auditable simplification, not a claim of precision.
- **p is a judgment estimate**, bounded on one side by a crude platform-wide base rate and on the other by an assumed execution multiplier — there is no per-Actor success-rate dataset in the evidence base.
- **Strategic implication that survives all these caveats:** because an AI agent can build additional Actors at near-zero marginal cost (unlike a human indie developer), **N should default high (30–40) rather than trying to hand-pick 2–3 "winners" in advance** — picking winners in advance is exactly what the base-rate evidence (most Actors earn $0) says is unreliable. The portfolio *is* the strategy, not a fallback.

---

## 5. Automation blueprint

### 5.1 What the AI agent does

**Build phase (once per Actor):**
- Mine Store categories and competitor data (via existing Store-intelligence Actors/API, per `software_api_marketplaces.md` §5) to sanity-check demand before building.
- Scaffold the Actor via Apify CLI/SDK (JS or Python) from a shared template: input schema, README, PPE event definitions, tiny login-free default input.
- Write fixture tests (expected output schema + non-empty row count).
- Implement PPE pricing per the §2 economics (event(s) priced to keep compute comfortably under 20% of revenue).
- Deploy via `apify push` / Apify API; publish to Store with SEO-optimized title/description.
- Optionally mirror the same logic as an Apify-hosted MCP tool.

**Nightly (cheap, mostly deterministic):**
- Poll the Apify API for each Actor's last-run status and "under maintenance" flag — reading Apify's *own* daily-test result rather than re-running every Actor at the developer's own compute expense.
- On a detected failure: pull logs, diff against last-known-good, attempt an automated fix (updated selector, dependency bump, new API error-code handling) on a narrow context (that Actor's code + logs only, not the whole repo, to keep token cost low per §2.4), run fixture tests locally, redeploy, and confirm the "under maintenance" flag clears within 24–48h — inside Apify's own 3-day grace window (§1, row 4).

**Weekly:**
- Pull portfolio-wide revenue/usage from Apify's payout/analytics API; compute margin per Actor; flag Actors with zero runs in 14–30 days as retirement/pivot candidates; email a one-page human digest.

**Monthly:**
- Log the auto-approved payout invoice (no action needed — approval is automatic on the 14th unless disputed).
- Summarize any Apify policy/pricing/ToS emails and Anthropic model-deprecation notices for the human.
- Check Store "Issues"/reviews if API-accessible; draft responses for optional human one-click approval.
- Evaluate the portfolio against KILL criteria (§5.3); build 1–3 new Actors informed by which niches are showing traction.

**Hard-coded guardrails (code, not agent judgment — per the design-rule cross-check in §1):**
- Price floors an agent cannot autonomously drop to $0.
- A spend cap on any metered Anthropic API key, and a documented preference for a flat-rate subscription instead.
- Every auto-redeploy gated by the fixture-test suite before it reaches the Store — no untested code ships.
- **An independent watchdog**, separate from the main pipeline, that alerts the human if the nightly job hasn't reported success in >48 hours — this is the direct mitigation for §1 row 9 (silent pipeline failure) and is not optional.
- A single human-settable kill switch that pauses all auto-deploys.

### 5.2 What the human does

**One-time (~2–4 hours total):**
1. **Verify PayPal or bank-wire receiving capability in the user's actual country — first, before anything else** (§1 row 11).
2. Create the Apify account; add payout details (PayPal preferred — its $20 floor clears monthly, versus $100 for wire, which pays roughly every two months).
3. Accept the Apify Store Publishing Terms.
4. Optionally buy the Creator Plan (~$1/month × 6, bundles $500 of platform usage for the agent's own build/test compute).
5. Create an Apify API token and an Anthropic API key (or confirm an existing Claude subscription covers Claude Code usage); hand both to the CI system's secrets store.
6. Enable the scheduled CI job (agent scaffolds it; human clicks "approve").
7. One-time consult on home-country tax treatment of foreign marketplace income.

**Ongoing (the actual "near-zero" part):**
- **~10–15 min/month:** skim the weekly/monthly digest, approve any drafted issue responses, glance at the payout confirmation.
- **~30–60 min, a few times a year:** respond to a genuine Apify policy-change email that needs a human decision (accept new terms, re-KYC, migrate a pricing model — this already happened once in 2026 with the rental retirement); annual tax filing.
- **Reactive, aim for <once/quarter:** unblock the pipeline if the watchdog alerts (e.g., a token needs refreshing, a card needs updating) — this is the one variable-time item that cannot be fully zeroed out.

### 5.3 90-day timeline

| Days | Phase | Milestone / check |
|---|---|---|
| 1–3 | Setup | Human completes one-time steps (incl. the country-payout check); agent scaffolds repo + CI. |
| 4–14 | Research & niche selection | Agent mines Store data, validates §3 criteria, selects first 8–10 niches. |
| 15–35 | Build wave 1 | ~10–15 Actors published (roughly one every 1–2 days), each gated by fixture tests. |
| 36–42 | Stabilize | Fix any early "under maintenance" flags; tune titles/pricing; publish eligible Actors as MCP tools. |
| 43–60 | Build wave 2 | Portfolio grows toward 25–40 total, weighted toward whichever wave-1 niches show early traction. |
| **Day 30** | **Checkpoint 1** | GO signal: ≥1 Actor has ≥1 real (non-test) paid run. If literally $0 real usage across 10+ published Actors, treat as an early warning (Store indexing can lag) but escalate monitoring, don't kill yet. |
| **Day 45** | Checkpoint 2 | First payout-invoice cycle should have occurred once any balance clears $20; compare accrued vs. actually paid. |
| **Day 60** | Checkpoint 3 | Review cumulative run-rate. Per the case study, "single-digit weekly runs" in months 1–2 is *expected*, not a failure signal. |
| **Day 90** | **Checkpoint 4 / first hard review** | See KILL criteria below. The source notes' own P3 is only 15–25% — month 3 is *expected* to often still be under $50; judge trajectory, not the absolute number. |

### 5.4 KILL criteria

- **Niche-level (re-niche, don't abandon the method):** an individual Actor with $0 real usage *and* zero Store profile views/clicks after 45 days live and indexed → retire and replace with the next-ranked idea from §3. Expected to happen to *some* Actors — this is the portfolio model's premise, not a failure signal.
- **Method-level review @ Day 90:** total portfolio accrued revenue <$10/month *and* fewer than 3 of 20+ published Actors show any non-zero real usage → do a full niche-strategy review (discoverability failure? a structural blocker like row 11? bad execution?) before deciding whether to continue.
- **Method-level kill @ Day 180 (month 6):** total accrued revenue <$25/month (half the target) despite a full 30–40-Actor portfolio live for 3+ months → the evidence at this point suggests this specific execution isn't converting; fall back to the next-ranked survivor in the broader research (ExtensionPay browser extension, or the "AI tool hub" micro-SaaS site from `ai_services_microsaas.md` §8) while leaving the low-maintenance-cost Apify portfolio running passively as a side channel.
- **Hard, immediate kill regardless of revenue:** any sign of legal/ToS risk (a takedown notice, an Apify Store Publishing Terms warning, a data-source cease-and-desist) → unpublish the offending Actor(s) immediately, don't wait for a scheduled review.
- **Cost-based kill:** if AI-maintenance costs exceed 50% of gross accrued PPE revenue for 2 consecutive months → redesign the maintenance pipeline (§2.4) before continuing; this is an implementation fix, not a niche pivot.

---

## 6. Final verdict

**Does it survive as the primary no-capital method? Yes — conditionally.** Both source notes independently rank it #1 among roughly 24 (`software_api_marketplaces.md`) and 11 (`ai_services_microsaas.md`) evaluated channels, and it is the only approach in either note that passes every design rule distilled from real AI-agent-earns-money experiments (`ai_agent_case_studies.md` §7) — existing demand, code-enforced fixed pricing, deterministic delivery, no physical steps, no zero-sum market. This stress test does not overturn that conclusion. What it adds is: the margin for error is thinner than a first read suggests, because three of the mitigations above (legal-scope discipline, a maintenance watchdog, a cost-capped AI-maintenance design) are easy to skip and, if skipped, turn a merely-hard bet into a likely-losing one.

**My own probability estimates**, conditional on the country-payout gate (§1 row 11) clearing and the load-bearing mitigations being actually built (not just described):

- **P(≥$50/month NET) at 3 months: ~12–20%.** Slightly below the source note's 15–25%, because §4's portfolio math shows the "hits" need to already be accruing well before day 90 for a 25–40-Actor build-out, and the ~4–8 week lag between first real sales and confirmed payout (§1 row 13) compresses the effective 3-month window further.
- **P(≥$50/month NET) at 6 months: ~30–45%, central estimate ~35%.** Roughly matching but slightly narrowing the source note's 35–50%, reflecting the AI-generated-Actor supply flood (§1 row 8) as a genuine headwind on the historical base rates, which mostly predate the current wave of people running exactly this playbook.
- **If the country-payout gate fails, both collapse toward ~0%** until resolved — this is a binary precondition, not something the probability estimates above already discount, so it must be checked first, separately, before any of the above numbers apply.

**Honest framing for the user:** even at the central 6-month estimate, the method is *more likely than not to still be below $50/month* at that point on my numbers. That is consistent with the evidence throughout all three source notes — most digital micro-products, on every platform examined, earn little or nothing, and Apify is simply the least-bad channel found, not a reliable one. What makes it worth attempting anyway is that the real cost of trying is small: near-zero capital, a few hours of one-time human setup, and (if built per §2.4) cents to low dollars a month in ongoing AI-maintenance cost. Given the stated goal (near-zero capital, near-zero ongoing human work), a ~35% chance at $50/month for that cost is a good expected-value bet — but it should be sold to the user as exactly that: a bet with a specified downside (a portfolio that plateaus below target, at near-zero further cost), not a plan that reliably produces $50/month.
