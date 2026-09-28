# Building a Real Fifty-Dollar Monthly Income

After building and then attacking roughly 110 distinct ways an AI agent might generate money with almost no ongoing human work — across software marketplaces, AI-built micro-tools, digital-content platforms, creator-payout programs, capital and hardware rental, and bounty or prediction markets — exactly one no-capital method survives as a genuine, buildable bet: an AI coding agent builds and quietly maintains a portfolio of 20–40 small pay-per-event tools ("Actors") on Apify Store, a marketplace that already supplies its own paying customers. Throughout this report, "$50/month" means one specific thing — money that lands in your account after the platform's own fees and any running costs, but **before** your personal income tax, since that depends on a country this research doesn't know. Under that definition, the Apify plan has roughly a 12–20% chance of clearing $50/month by month 3 and 30–45% (central estimate ~35%) by month 6, and that number only applies once you've confirmed PayPal or bank-wire payouts actually work where you live — check that before writing a line of code. No method surveyed for someone starting from zero capital reaches even 50% confidence within six months; renting a high-end gaming GPU is the next-best bet at roughly 25–35% by month 6, and unusually, those odds get worse with time, not better. The only near-certain route is capital: park about $14,300 pre-tax (about $18,300 after a 22% tax) in a top US savings account, government money-market fund, or Treasury-bill ladder, and $50/month arrives with 90–95% reliability — but at 2026 rates that income barely outruns inflation, so it is capital preservation with a monthly disbursement, not free money. What follows is the actual build plan: a decision path for your situation, who does what, a 90-day timeline with checkpoints, and the exact numbers that should make you stop or change course.

## Start here (your first 30–60 minutes)

1. Check that PayPal or a bank wire actually works for receiving money in your country — the one hard gate on everything below.
2. Find your row in the decision table further down (how much capital you have, whether you own a high-end GPU) to confirm the Apify plan is the right move for you.
3. Create an Apify account, add your payout details, accept the Store Publishing Terms, and generate an API token.
4. Give the agent somewhere to run with real network access to `apify.com` and `api.apify.com` — either allow those domains in your cloud environment's network settings, or use a GitHub repository with a scheduled GitHub Actions job and the Apify token stored as a secret.
5. Set a hard monthly spend cap on any metered AI API key the agent will use.
6. Tell the agent to "build wave 1." From here on, the agent does the work — the rest of this report is what it's doing and how to check on it.

## How sure can you really be?

Two things anchor every number below: what "$50/month" measures, and how confident you should be that a given path delivers it. Every dollar figure here is **net of platform fees and running costs — electricity, API bills, listing fees — but gross of personal income tax**, since tax depends entirely on where you live, which this research doesn't know. The underlying notes weren't consistent on this: the Apify research reported pre-tax figures throughout, while the cash-yield research led with numbers already reduced by an assumed 22% US tax. This report picks the pre-tax convention and applies it everywhere, so some familiar-looking numbers below (like the capital a savings account needs) are smaller than you may have seen elsewhere in the underlying research, because the tax has been added back.

Now the honesty part. For a reader with no capital, **no method examined in this entire research project — not one of roughly 110 checked — reaches even a 50% chance of hitting $50/month within six months.** The best available bet, by a wide margin, is the Apify Actor portfolio this report builds toward. Everything else either fails outright on legality or platform terms, needs a human doing real ongoing work (breaking the "near-zero effort" goal), or is simply too improbable to be worth the build time. The one highly reliable path needs capital you may not have: put roughly $14,300–$20,600 into a top-yielding, government-backed cash vehicle and $50/month arrives with 90–95% confidence. But at September 2026 US rates (~4.2% on a top savings account) and 3.4% inflation, the **real, inflation-adjusted return after tax works out to roughly zero — sometimes slightly negative** ([US CPI, August 2026](https://www.usinflationcalculator.com/inflation/us-cpi-august-2026/100073342/); [CNBC, 11 Sep 2026](https://www.cnbc.com/2026/09/11/cpi-inflation-report-august-2026.html)). You aren't growing wealth; you're converting a static pile of savings into a monthly cash trickle while its purchasing power erodes at almost the same rate. Still the most reliable $50/month in this report — just don't mistake it for profit.

The table below recomputes exactly how much capital each cash vehicle needs, on both bases, using rates observed in late September 2026 (these move — recheck before funding anything):

| Vehicle | Yield | Capital needed, pre-tax | Capital needed, after 22% tax |
|---|---|---|---|
| 6-month US Treasury bill | 4.33% | $13,857 | $17,765 |
| Top no-fee savings account (e.g., Newtek) | 4.20% | $14,286 | $18,315 |
| Government money-market fund (VMFXX) | 3.74% | $16,043 | $20,568 |

*(Formula: capital = $600 ÷ yield. [Rates as of 25 Sep 2026](https://www.forbes.com/advisor/investing/treasury-rates/); [savings rates](https://www.nerdwallet.com/banking/best/high-yield-online-savings-accounts).)*

The same care applies to renting out a high-end GPU. A single RTX 4090 or 5090 left running around the clock on a platform like Salad brings in roughly $90–150/month in gross rental payments at typical US electricity prices; after subtracting electricity (~$43–67/month) you're left with **$23–101/month before personal tax**, with a naive midpoint around $55–65 ([Salad, Sept 2026 rate change](https://blog.salad.com/earning-rate-changes-september-2026/); [US electricity prices](https://www.electricchoice.com/electricity-prices-by-state/)). That headline number omits one real running cost the underlying notes flag but don't price into the headline: hardware wear from sustained near-100% load, worth roughly $7–13/month in accelerated depreciation — and a card running this hot adds real air-conditioning load in summer, which can push effective power costs up 40–50% for part of the year in a hot climate. Net of wear, a more honest pre-tax range sits close to **$40–58/month**, squarely on the $50 line — a coin flip, not the confident "probably yes" the plain gross-minus-electricity math suggests. Use roughly **30–40% at 3 months and 25–35% at 6 months** (still falling over time, not rising) — a higher range than the 25–35% / 20–30% in the underlying stress-test note, because that note's figures were computed *after* an assumed 22–35% personal income tax; under this report's before-tax convention, that haircut doesn't apply.

## Find your row: a decision path by capital and hardware

Your best move depends almost entirely on two things: how much cash you can set aside, and whether you own a high-end gaming GPU. Find your row.

| Your situation | What to actually do | Odds of ≥$50/month by month 6 |
|---|---|---|
| $0 capital, no high-end GPU | Build the Apify Actor portfolio below — it is the whole plan | ~30–45%, central ~35% |
| $0–5k capital, no GPU | Same Actor portfolio, and park whatever cash you have in a top savings account or T-bill from day one, sweeping every dollar of Actor income into it | Actor portfolio carries nearly all the odds; the cash floor at this size is only $0–17.50/month pre-tax, even at a good 4.2% rate |
| $5k–~$14.3k capital | Max out the savings/T-bill account now — every dollar locks in a rising, near-certain slice of the $50 pre-tax at 4.2% ($17.50/month at $5k, $35/month at $10k, the full $50 once you reach ~$14.3k) — and let the Actor portfolio cover only the remaining gap, a much easier bar than the full $50 | Rises fast with capital: roughly 45% around $5k, 60–75% around $10k, climbing toward 90% as you approach $14.3k |
| ≥~$14.3k capital | Skip the build. Put $14,300–$20,600 (the pre-tax threshold at 4.2%–3.74% yields; hold a buffer above the minimum against a future rate cut) into a 6-rung Treasury-bill ladder, a top savings account, or a government money-market fund | 90–95% |
| You own an RTX 4090 or 5090 and pay under roughly $0.20/kWh for power | Run it on Salad (simplest) or Vast.ai (more setup, can pay more) *in addition to* whatever else your capital tier suggests — this is a genuinely separate bet, not a variation on the software plan | ~30–40% at 3 months, ~25–35% at 6 months, and falling over time, not rising |
| You own only a mid-range GPU (RTX 3060–4070) | Skip GPU rental. The electricity math rarely clears zero, and it's worse in the UK or EU | Not recommended |

Two things worth being honest about when combining rows. If you have both a GPU and are building the Actor portfolio, these are close to independent bets — different platform, mechanism, and failure mode — so the chance that *at least one* clears $50 is meaningfully better than either alone (a rough ceiling, treating them as independent, lands in the mid-50s percent; treat that as an upper bound, not a promise, since both still depend on your own follow-through). But if you instead stack several *software* methods together — the Actor portfolio plus a tool-hub website plus an Etsy shop — resist the temptation to multiply their solo odds. They share the same builder, the same time budget, and often the same demand signal (the tool hub is explicitly built *from* Actors that already show traction), so they are correlated, not independent. A realistic combined estimate for that stack by month 6 sits only modestly above the Actor portfolio's own 30–45% — call it the high 30s to perhaps 45% at the top, not a coin-flip-or-better outcome.

## The primary plan: an AI-run Apify Actor portfolio

**Stop and check this first, before any build time is spent:** does PayPal, or a bank wire once your balance clears $100, actually work for receiving money in your country? This is the one true go/no-go gate in the entire plan. If it fails, every other number in this section collapses toward zero, so verify it on day one, not after weeks of building.

Apify Store is a marketplace where developers publish small hosted tools ("Actors") and get paid every time a paying customer's tool does something — a model called **pay-per-event (PPE)**. Apify supplies the buyers; you never have to find customers yourself, which matters, because "the agent had to find its own customers" is the single most common reason every AI-run business experiment in this research failed to make real money (Anthropic's own Claudius shopkeeper experiment needed "a great deal of human support" even in its improved second version, and an AI-agent merch-store contest cleared only about $200 in total sales, mostly from spam — [Anthropic, Project Vend phase 2](https://www.anthropic.com/research/project-vend-2); [AI Village 2025 retrospective](https://theaidigest.org/village/blog/what-we-learned-2025)). You, the developer, keep about **80% of pay-per-event revenue after Apify's own compute costs** — confirmed as *profit = 0.8 × revenue − Apify's platform compute cost, floored at $0* — and Apify pays out automatically via PayPal from a $20 balance or bank wire from $100, with invoices approved on the 14th of each month and payment on the 21st–25th ([Apify Help: developer payouts](https://help.apify.com/en/articles/10057167-how-developer-payouts-work); [Apify Help: monetizing Actors](https://help.apify.com/en/articles/8684010-make-money-publishing-your-actors-on-apify-store)). Apify itself pays roughly $1.4M a month across about 3,000 paid developers — an average of about $470 — and one documented developer who published 98 Actors over six months reached "meaningful but inconsistent" revenue by months 3–4 and a self-reinforcing "catalog effect" by months 5–6 ([Apify blog, 98 Actors in 6 months](https://blog.apify.com/building-98-actors-on-apify-store/)).

**Important correction if any Actor calls an outside AI model:** the 0.8×revenue−cost formula only nets out Apify's own compute. If your tool calls an external LLM (say, to extract data from a messy PDF), that API bill is a separate cost on top, and your final take-home is (0.8 × revenue − Apify's compute) minus whatever you paid the model provider — so price the event high enough to comfortably cover both, not just Apify's cut.

**Pick the niches deliberately.** Apify tests every Actor's default input daily; an Actor that fails at least 2 of its last 3 daily tests gets flagged "under maintenance" (worse search ranking), and 28 days of continued failure gets it deprecated entirely ([Apify Help](https://help.apify.com/en/articles/10057123-why-is-my-actor-marked-as-under-maintenance)). That's why every good candidate niche shares five traits: it uses an official API or open/government data within its terms (never a login-walled or personal-data source, which permanently fails that daily test and carries real legal risk); it needs a tiny, fast, login-free default input; it runs cheaply (no GPU, no residential proxies); and it has a plausible recurring business user, since one company running a scheduled daily job can outweigh dozens of casual one-off users. Six starting candidates, ranked by that logic:

| Niche | Why it fits |
|---|---|
| **Sanctions-list checker** — screens company, vessel, and other entity names (not individuals) against public sanctions lists (e.g., OFAC's SDN list, the EU/UN consolidated lists) | Strong recurring compliance demand from fintech and marketplace users; **do not extend this to PEP or personal-data screening** — that crosses into privacy-sensitive territory the notes flag as risky, and the tool's output must carry a visible "not a compliance guarantee, verify independently" disclaimer |
| Invoice/receipt → structured JSON or CSV extractor | Classic recurring back-office workflow on the user's own uploaded files; if it calls an LLM per page, price the event to cover that cost too |
| IBAN / VAT / business-registry ID validator | Built on public checksum rules and free official registries (e.g., VIES); very low maintenance |
| Universal document/format converter (PDF/DOCX/HTML/Markdown) | No external dependency to break; broad, if somewhat one-off, demand |
| Public tenders/procurement-notice monitor for one country or language | Genuine "watch for new listings" recurring business use |
| Dependency manifest / SBOM / license checker | No external target to scrape at all; a natural fit to also expose as a tool other AI coding agents can call |

Build toward roughly 30–40 Actors, weighted toward this "safe core" plus two or three higher-variance, country- or language-specific bets. The reason for that number, not two or three "winners," is arithmetic: treat each mature Actor as a coin flip with roughly a 5–20% chance of becoming a real earner worth about $15/month, and you need about four such earners to clear $50. With a 10% base-case hit rate, a 20-Actor portfolio reaches that bar about 14% of the time, a 30-Actor portfolio about 35%, and a 40-Actor portfolio about 57% — because an AI agent can build additional Actors at near-zero marginal cost, the portfolio itself *is* the strategy, not a fallback from picking winners wrong. On the pricing side, a typical light Actor with modest compute needs about $77 a month in gross event revenue to clear $50 net — for example, about 26,000 billed results a month at $3 per 1,000, a volume one repeat business user running a daily scheduled job could supply on their own.

## Who does what: your hours, and the agent's

The whole point of this plan is that almost none of the ongoing work is yours. Here is the exact split.

| Who | Task |
|---|---|
| **You, once** (2–4 hours total) | Confirm PayPal or bank-wire payouts work in your country — do this first, before anything else |
| You, once | Create the Apify account, add payout details, and accept the Store Publishing Terms |
| You, once | Optionally buy the $1/month Creator Plan (six months prepaid, bundling $500 of build/test compute) ([Apify Creator Plan](https://apify.com/pricing/creator-plan)) |
| You, once | Create an Apify API token and an Anthropic API key (or confirm an existing Claude subscription covers the agent's work), and hand both to your automation system's secret store |
| You, once | Turn on the scheduled maintenance job — the agent scaffolds it, you click approve |
| You, once | Set a hard monthly spend cap on the Anthropic API key |
| You, once | Set up an independent watchdog alert (see below) that emails you if maintenance hasn't reported success in 48 hours |
| You, once | Get a one-time read on how your home country taxes this kind of foreign marketplace income |
| **The agent, build phase** | Mine Apify Store data to sanity-check demand, then scaffold each Actor (input schema, README, event pricing, a tiny login-free default input), write tests, deploy, and publish with an SEO-friendly listing |
| The agent, build phase | Price every event to cover both Apify's compute cost and, where relevant, any outside LLM cost |
| The agent, nightly | Poll Apify's own daily-test result for each Actor if Apify's API exposes it; otherwise the agent runs its own tiny smoke test per Actor on the default input (costs a little platform compute, still no AI model unless a test fails) |
| The agent, nightly | Only on a detected failure: pull logs, diagnose the issue with an AI model against a narrow context, patch, re-run the tests, redeploy, and confirm the "under maintenance" flag clears within 24–48 hours |
| The agent, weekly | Pull revenue and usage from Apify's API, compute margin per Actor, flag anything idle for 14–30 days as a retirement candidate, and email you a one-page digest |
| The agent, monthly | Log the auto-approved payout, summarize any Apify policy emails, draft replies to Store issues or reviews for your one-click approval, check the kill criteria below, and build 1–3 new Actors informed by what's already showing traction |
| **You, monthly** (~10–15 minutes) | Skim the digest, approve any drafted replies, glance at the payout confirmation |
| You, a few times a year (~30–60 minutes each) | Respond to a genuine Apify policy-change email that needs a human decision (this already happened once in 2026, when Apify retired its old flat-fee pricing model); file annual taxes |
| You, reactive (aim for under once a quarter) | Unblock the pipeline if the watchdog alerts you — usually a token needing refreshing or a card needing updating |

## Ninety days, four checkpoints

| Days | What happens |
|---|---|
| 1–3 | You finish one-time setup, including the country-payout check; the agent scaffolds the repository and automation pipeline |
| 4–14 | The agent mines Apify Store data, checks candidate niches against the selection rules above, and picks the first 8–10 |
| 15–35 | Build wave 1: roughly 10–15 Actors published, about one every 1–2 days, each gated by its own tests before it ships |
| **Day 30 — checkpoint** | GO signal: at least one Actor has at least one real, non-test paid run. If usage is genuinely $0 across 10+ published Actors, treat it as an early warning and escalate monitoring — don't kill the plan yet, since Store search indexing can lag |
| 36–42 | Stabilize: fix any early "under maintenance" flags, tune titles and pricing, publish eligible Actors as callable AI-agent tools too |
| **Day 45 — checkpoint** | The first payout-invoice cycle should have happened once any balance clears $20; compare what's accrued in the dashboard against what's actually been paid |
| 43–60 | Build wave 2: the portfolio grows toward 25–40 Actors total, weighted toward whichever wave-1 niches show early traction |
| **Day 60 — checkpoint** | Review the cumulative run-rate. "Single-digit weekly runs" in months 1–2 is the documented pattern from the one detailed case study, not a failure signal on its own |
| **Day 90 — checkpoint** | First hard review against the kill criteria below. Revised odds put a ≥$50/month portfolio at only 12–20% by this point, so most portfolios that are actually on track will still be under $50 here — judge the trajectory, not the absolute number |

## When to stop or pivot

| Trigger | What to do |
|---|---|
| PayPal or bank-wire payout doesn't work in your country at all | Stop before building anything — the whole plan collapses toward 0% regardless of everything else. This is a day-zero check, not a day-90 one |
| A single Actor has $0 real usage and zero Store profile views 45 days after going live | Retire it and replace it with the next-ranked niche idea. This is expected to happen to some Actors — it's the premise of the portfolio strategy, not a failure |
| Day 90: total portfolio revenue under $10/month, and fewer than 3 of 20+ published Actors show any real usage | Do a full niche-strategy review before continuing — is this a discoverability problem, a missed country-payout issue, or execution? |
| Day 180 (month 6): total revenue under $25/month despite a full 30–40-Actor portfolio live 3+ months | This specific execution isn't converting. Fall back to the next-ranked bet — graduate a validated Actor into a small tool-hub website (roughly 12–22% by month 6, but only once a tool already shows real demand as an Actor) or an Etsy shop of AI-assisted digital downloads (roughly 8–15%, only with non-personalized listings, a capped catalog, and accepted message-reply time) — while leaving the low-cost Actor portfolio running passively in the background |
| Any sign of legal or platform risk — a takedown notice, a Store Publishing Terms warning, a data-source cease-and-desist | Unpublish the affected Actor(s) immediately, regardless of schedule |
| AI-maintenance cost exceeds 50% of gross accrued revenue for 2 consecutive months | Redesign the maintenance pipeline — confirm the deterministic-first gate below is actually working — before continuing |

## Keeping the agent honest: network access, watchdogs, spend caps

Four operational details separate a plan that works quietly from one that fails invisibly — critical here since the whole design assumes near-zero human oversight.

**Network access.** The agent needs to actually reach `apify.com` and `api.apify.com` — worth naming plainly, since the cloud environment used to research this very report blocked those domains outright. Two fixes: allow those domains in your environment's network settings, or — often simpler — run the nightly maintenance job inside GitHub Actions instead, a free scheduled-task runner with unrestricted outbound access by default, with the Apify API token stored as an encrypted GitHub secret rather than in code.

**An independent watchdog.** Build a second, genuinely separate job — on a different schedule, ideally a different service — whose only task is to check whether the main maintenance job has reported success within the last 48 hours, and to alert you (email or push notification) if it hasn't. This matters because the failure mode to worry about isn't a loud crash; it's a silently expired API token or a disabled scheduled job that leaves months of zero revenue looking identical to "the method doesn't work," with nothing about the near-zero-oversight design likely to catch it otherwise.

**Hard spend caps.** Set a hard monthly limit on any metered AI API key the agent uses. This is not a hypothetical risk: a well-designed maintenance pipeline costs pennies a month, but the same underlying AI model run carelessly — a full agentic session firing on every Actor every single night regardless of status — can plausibly run $375–1,125 a month, several times the entire revenue target, using the exact same technology, purely as a design choice.

**Deterministic-first maintenance.** The nightly job's default path should be a plain, free API read of Apify's own daily-test result for each Actor, if Apify's API exposes it; otherwise the agent runs its own tiny smoke test per Actor on the default input — either way, no AI model involved unless the check actually fails. Only on a real failure should the pipeline invoke an AI model, and even then on a narrow slice of context (just that Actor's logs and code), gated by an automated test suite before anything redeploys. Done this way, a healthy month costs roughly nothing; done carelessly, the AI-maintenance bill alone can turn a real $50 profit into a loss.

## The elimination tournament: almost everything gets eliminated

The following is close to the full list of methods examined across this research, grouped by category, with the verdict and the one-line reason each survived or didn't. Where a later, more adversarial review revised an earlier verdict, the revised one is shown.

**Software, APIs, and AI-agent-run tools**

| Method | Verdict | Why |
|---|---|---|
| **Apify Store pay-per-event Actors** (public-data/utility niches) | **KEEP — primary plan** | Only channel with published evidence of thousands of small developers getting paid monthly, an automated quality gate, and a documented zero-touch payout cycle ([Apify](https://help.apify.com/en/articles/10057167-how-developer-payouts-work)) |
| Apify Actors that scrape logins, social platforms, or personal data | ELIMINATE | Breaks terms of service and privacy law; also permanently fails Apify's login-free daily test |
| Apify "rental" (flat monthly fee) pricing | ELIMINATE | Being retired by Apify itself on 1 Oct 2026 ([Apify blog](https://blog.apify.com/migrating-to-pay-per-event-pricing/)) |
| RapidAPI (Nokia-owned) | ELIMINATE as main channel | Fee raised to 25% in Nov 2025, PayPal-only payouts, new owner refocused on telecom |
| Zyla API Hub | MAYBE — free cross-listing only | Fair 80/20 split but no evidence of independent buyer traffic; costs nothing to also list an Actor's backend here |
| APILayer and similar minor API marketplaces | ELIMINATE | No usable evidence on terms or buyer traffic |
| x402 pay-per-call agent micropayments | ELIMINATE (watchlist) | Real ecosystem-wide volume is ~$28k/day, much of it gamed test traffic, not genuine small-seller demand |
| Standalone MCP-server marketplaces | ELIMINATE | Fewer than 5% of 20,000+ listed servers earn a single dollar; expose tools via Apify's own hosting instead |
| Stripe agentic payment rails (MPP, ACP, Link Agents) | ELIMINATE | Payment infrastructure, not a marketplace — brings no buyers of its own |
| Browser extension + ExtensionPay | MAYBE — weak fallback | Real indie portfolios land at $22–31 monthly revenue after months of work |
| WordPress plugin + Freemius | ELIMINATE | Mature, saturated market expecting ongoing user support |
| Shopify App Store | ELIMINATE | Generous fees but real merchant support is expected — not near-zero effort |
| Figma Community paid plugins | ELIMINATE | Figma has stopped approving new paid-plugin sellers |
| Canva Premium Apps | MAYBE — low, if accepted | Pays on usage, but acceptance criteria and payout data are unknown |
| Raycast / Obsidian / VS Code extensions | ELIMINATE | No in-store payment mechanism exists |
| Telegram bots (Stars) | ELIMINATE | Crypto-adjacent cash-out, weak discovery, unverified terms |
| Discord Premium Apps | ELIMINATE | Limited to a handful of countries, needs real community traction |
| Slack apps | ELIMINATE | Marketplace itself doesn't process payment |
| GPT Store revenue program | ELIMINATE | US-only, invite-only pilot that never broadly launched |
| ChatGPT Apps SDK | ELIMINATE for now | In-app checkout is limited to physical goods |
| Poe price-per-message bots | MAYBE — low, country-dependent | Sourced pages disagree on whether this is US-only or open in 23 regions |
| GitHub Sponsors | ELIMINATE | Donation-based, slow, unreliable |
| npm packages | ELIMINATE | No built-in monetization mechanism |
| n8n / Make / Zapier template marketplaces | ELIMINATE | No confirmed paid-template marketplace with payouts |

**AI micro-tools and productized services (a possible phase-2, not a starting point)**

| Method | Verdict | Why |
|---|---|---|
| **AI "tool hub" website** (3–5 text/file tools, credit packs, a payments provider) | **KEEP — phase 2 only** | No built-in customer base of its own; only worth the separate setup cost once a tool has already shown paid demand as an Apify Actor |
| Standalone subscription micro-SaaS in one niche | MAYBE — fold into the tool hub | One niche is one shot; a small portfolio under one domain does better |
| AI headshot generator | ELIMINATE | Proven demand, but saturated with funded competitors, and payment processors restrict AI images of real people |
| AI pet portraits (own site) | ELIMINATE | No discovery channel besides slow search-engine traffic |
| Custom AI songs (Suno-based) | ELIMINATE | No public API; reselling outputs commercially breaks Suno's terms |
| Personalized kids' storybooks | ELIMINATE | The photo-of-child variant hits the same real-person restrictions as headshots |
| Standalone AI SEO-audit tool | ELIMINATE | The natural growth channel is cold outreach, which is spam |
| Ad-monetized free tools (no paywall) | MAYBE — low, as a funnel only | Needs thousands of monthly visitors just to clear a few dollars |
| Fiverr AI-fulfilled gigs | ELIMINATE | Every order needs buyer communication and real customization — not automatable |
| Upwork AI-fulfilled work | ELIMINATE | Proposals, interviews, and client management are fully manual |

**Digital products and creative-asset marketplaces**

| Method | Verdict | Why |
|---|---|---|
| Etsy AI-designed digital downloads (official API) | MAYBE — conditional | Only with non-personalized instant downloads, a catalog capped near 50–75 listings, and acceptance of ~30–60 minutes a month replying to buyer messages |
| Adobe Stock (AI images/video) | ELIMINATE (revised) | Requires a real, indefinite weekly 10–20 minute portal submission forever, plus 1,300–3,500 accepted files against unpublished weekly caps as low as 22–100 |
| Freepik (same files, standalone) | ELIMINATE | Pays roughly a sixth of Adobe's rate for identical files; only a free add-on to a channel that no longer survives |
| Dreamstime / 123RF | ELIMINATE | No current evidence; policy pages are years out of date |
| Wirestock | ELIMINATE | Fees eat what little a tiny portfolio would earn |
| Shutterstock | ELIMINATE | Refuses AI-generated contributor content outright |
| Gumroad (direct or Discover) | ELIMINATE | Just a checkout page — no buyer traffic of its own |
| Payhip / Lemon Squeezy (standalone) | ELIMINATE | Same problem — checkout tools, not demand sources |
| Creative Market | ELIMINATE | A curated marketplace actively pushing back against generic AI |
| Canva Creators / Notion template marketplace | ELIMINATE | Manual template-building, no earnings evidence found |
| Redbubble | ELIMINATE | New sellers start at a 50% platform-fee tier |
| TeePublic / Spreadshirt | ELIMINATE | Manual uploads only, thin per-sale margins |
| Amazon Merch on Demand | ELIMINATE | Royalties roughly halved for organic sellers since June 2026; gated tier system |
| Print-on-demand + Etsy | ELIMINATE | Physical goods bring real customer-service and shipping problems |
| Amazon KDP (AI books) | ELIMINATE | Capped at 2 new titles per format per week since 21 Sep 2026; no publishing API |
| Other ebook stores | ELIMINATE | No evidence unknown AI authors get discovered |
| AI music via a distributor to Spotify | ELIMINATE | Royalties gated behind 1,000 streams/track/year; AI tracks are roughly half of uploads but only 1–3% of streams |
| Royalty-free music libraries | ELIMINATE | AI-acceptance policies unverified |
| itch.io game assets | ELIMINATE | Mandatory AI tagging in a buyer base that actively avoids tagged AI assets |
| Unity Asset Store | ELIMINATE | No usable evidence |
| PromptBase / prompt marketplaces | ELIMINATE | 310,000+ listings; generic prompts are commoditized to near-zero |
| Fonts, 3D models, LUTs, wallpapers | ELIMINATE | No evidence, and AI generation of usable assets in these formats is still immature |

**Content, traffic, and creator-payout platforms**

| Method | Verdict | Why |
|---|---|---|
| Pinterest → affiliate/display niche site | ELIMINATE standalone (revised) | No shared infrastructure with anything else; fold into a tool-hub's content engine if pursued at all |
| Long-form faceless YouTube (AI-assisted) | ELIMINATE, hard (revised) | Google's cluster-termination system reportedly pulled ~130,000 channels in six months with under 1% successful appeals — the worst tail risk found anywhere in this research |
| YouTube Shorts | ELIMINATE | From Feb 2027, a channel earns $0 in any month it falls under 10 million Shorts views in the trailing 90 days |
| TikTok Creator Rewards | ELIMINATE | Limited to about 8 eligible countries; AI visuals get flagged "unoriginal" |
| Facebook / Instagram monetization | ELIMINATE | Invite-only, can't be applied for |
| X (Twitter) revenue sharing | ELIMINATE | Program is being replaced; needs a paid subscription plus 5 million impressions a quarter |
| Snapchat monetization | ELIMINATE | Needs 50,000 followers just to qualify |
| Programmatic SEO / mass AI pages | ELIMINATE | Directly matches what Google's 2025–26 spam updates were built to catch |
| Amazon-affiliate niche site (standalone) | ELIMINATE standalone | Account auto-closes without 3 sales in 180 days; most commissions are 1–4.5% |
| AI blog with display ads (standalone) | ELIMINATE | New-domain search traffic is slow and shrinking as AI search summaries spread |
| Medium Partner Program | ELIMINATE | AI-written stories are explicitly barred from the paywall |
| Newsletters (beehiiv, Substack) | ELIMINATE standalone | Content can be automated; subscriber growth cannot be, without spam |
| AI podcasts (Spotify) | ELIMINATE | The one working large-scale example needed 5,000+ shows and direct ad deals, not a solo-operator model |
| Reddit Contributor Program | ELIMINATE | Income depends entirely on other humans giving gold awards |
| Quora | ELIMINATE | Ad revenue sharing ended in November 2024 |

**Capital and hardware**

| Method | Verdict | Why |
|---|---|---|
| **US T-bills / top savings account / government money-market fund** | **KEEP — the near-certain path** | 90–95% reliable if the capital is there; see the decision path above for exact amounts |
| UK / Eurozone / Israel savings equivalents | KEEP, capital-dependent | Same mechanism, different local rates — needs country-specific rate-checking |
| Dividend ETFs (SCHD, VYM) | MAYBE — long-horizon only | Quarterly, not monthly, payouts, plus 20–50% equity-drawdown risk a savings account doesn't carry |
| Short-Treasury ETF (SGOV-type) | MAYBE | A practical T-bill substitute for non-US investors buying through a broker |
| Intermediate bond ETF (BND/AGG) | ELIMINATE | Loses principal value exactly while rates are rising, the current environment |
| Stablecoin (USDC) rewards | ELIMINATE | Pays less than a plain savings account once its subscription fee is counted, isn't deposit-insured, and faces a pending US ban on passive yield |
| ETH / SOL staking | ELIMINATE | Income and principal both denominated in a token that can drop 20–30% in weeks |
| Securities lending (broker programs) | MAYBE — free add-on only | Near-zero income on ordinary holdings; not a standalone source |
| **RTX 4090/5090 GPU rental** (Salad, or Vast.ai for technical users) | MAYBE — coin-flip | See the recomputed GPU numbers above; odds fall from month 3 to month 6, not rise |
| Mid-range GPU rental (RTX 3060–4070) | ELIMINATE | Typically nets $0 to slightly negative after electricity |
| Other GPU/compute networks (io.net, Nosana, Clore, Akash, RunPod) | ELIMINATE | Oversupplied, or pay in a volatile token |
| Bandwidth-sharing apps (residential-proxy apps) | ELIMINATE | Google disrupted two major proxy networks built on exactly these apps in 2026 and warned consumers to be "extremely wary" of them ([Google Cloud Threat Intelligence](https://cloud.google.com/blog/topics/threat-intelligence/disrupting-largest-residential-proxy-network)); most home internet providers also prohibit bandwidth resale |
| Storage sharing (Storj, Sia, Filecoin) | ELIMINATE | Would need roughly 33 terabytes of your own data actually stored and paid for; the network is only half-utilized |
| Helium IoT / Mobile hotspots | ELIMINATE | Cents to a few dollars a month for a typical home |
| Hivemapper | ELIMINATE | Requires actually driving around — not passive |
| WeatherXM | ELIMINATE | Unproven, paid only in a token |

**Tasks, bounties, and prediction markets**

| Method | Verdict | Why |
|---|---|---|
| Autonomous AI bug-bounty agent | ELIMINATE | Major platforms now explicitly reject unverified AI-generated reports; curl shut its entire bounty program over "AI slop" |
| AI-assisted but human-verified bug hunting | ELIMINATE for this goal | Legitimate, but needs an actual skilled human working regularly — the opposite of near-zero effort |
| Open-source bounty pull requests by an AI agent | ELIMINATE | 2026 saw a wave of maintainers banning or auto-closing AI-generated contributions |
| Paid-issue bounties via a freelance platform | ELIMINATE | Human-reviewed proposals, and the maintainer's own automated tools get priority |
| Kaggle competition prizes | ELIMINATE | A lottery for a handful of top places, now also contested by strong AI agents |
| Data-labeling / "AI trainer" work, automated | ELIMINATE | These platforms exist specifically to buy human judgment; automating the answers is misrepresentation |
| Numerai (automated model + crypto stake) | MAYBE — speculative | Needs roughly $3,000–10,000 staked in a token that can lose up to 5% per round, plus price risk |
| Directional AI forecasting bot (prediction markets) | ELIMINATE | About 84% of wallets on the largest studied platform lose money; profits concentrate in under 1% of accounts |
| Prediction-market arbitrage bot | ELIMINATE | Real arbitrage profit already concentrates in a handful of professional high-frequency accounts |
| Passive maker-only market-making bot | MAYBE — speculative | Needs $2,000–5,000 at risk for a thin, well-documented edge that its own reference implementation warns "can lose money" |
| Sports-betting exchange or bookmaker bots | ELIMINATE | Little evidence of small-bot profit, and bookmaker terms generally prohibit automated betting |
| Exchange arbitrage / MEV bots | ELIMINATE | Requires the speed and capital only professional operations have |
| Exchange grid/DCA bots | ELIMINATE | Returns just track the underlying asset's price, not a genuine edge |
| Matched betting / bonus hunting | ELIMINATE | Needs a new human sign-up and identity check at every bookmaker |
| Bank/brokerage sign-up bonuses | ELIMINATE for zero-touch | Real money for a human willing to apply repeatedly — recurring work, not passive |
| Cashback portals | ELIMINATE | A discount on your own spending, not income |
| Referral-link automation | ELIMINATE | Automated posting is spam; self-referrals are fraud |
| Surveys / "get-paid-to" sites via bot | ELIMINATE | The product being sold is a real human's opinion — bot answers are misrepresentation |
| Research microtask sites via bot | ELIMINATE | Corrupts the research data being bought; a plausible fraud case |
| Ad-watching / paid-to-click sites | ELIMINATE | Automating "views" is ad fraud |
| Play-to-earn game bots | ELIMINATE | Games ban bots and multi-accounting; token rewards have collapsed since 2021–22 |
| Airdrop / quest farming | ELIMINATE | Multi-account farming is exactly what these programs screen for and block |
| AI-run physical shop (vending-style) | ELIMINATE | Anthropic's own real-money experiment needed constant human restocking and "a great deal of human support" even in its improved second phase ([Anthropic, Project Vend phase 2](https://www.anthropic.com/research/project-vend-2)) |
| AI-agent crypto tokens / memecoins | ELIMINATE | What looks like "AI earned millions" is almost always an unrealized, highly volatile token balance, not cash revenue |

## What we couldn't verify, and what to check first

Be clear-eyed about how this research was built: the research environment's network policy blocked full-page fetching for almost every site involved, including Apify's own pages, and the shared web-search budget ran out partway through several passes. Most citations above rest on search-engine *summaries*, not the pages themselves. A follow-up fact-check pass on 28 September 2026 re-confirmed the load-bearing numbers below through fresh search summaries — real corroboration, but still not a page anyone opened; the one attempt to fetch a primary source directly, the Federal Reserve's press release, was blocked by that same policy. Consistently corroborated: Apify's exact pay-per-event formula and its per-Actor $0 floor; the $20 PayPal / $100 wire minimums and the invoice-11th / approve-14th / pay-21st–25th schedule; the rental-pricing retirement on 1 October 2026; the Creator Plan's $500 usage bonus; roughly $1.4M/month paid to about 3,000 developers (one lower-confidence source suggests this may have since risen toward $1.5M — worth a direct check, not a contradiction); and the savings-account, T-bill, and Salad GPU-rental rates used throughout.

Genuinely still open, worth checking before building or as the agent's first task on day one: (1) that PayPal or bank-wire payout actually works in your country — Apify publishes no country list of its own; payouts ride entirely on PayPal's network (which flags currency-conversion or withdrawal restrictions in some countries, including Argentina, Brazil, and Malaysia) or bank wire, and this is the single hard gate on the whole plan; (2) whether Apify's API actually exposes each Actor's daily-test/"under maintenance" status in a way this design can rely on — the maintenance design above already includes a fallback (the agent's own smoke test) in case it doesn't; (3) the current text of Apify's Store Publishing Terms, never read in full, which any compliance-adjacent Actor (like the sanctions checker) should be checked against; and (4), only if you pursue the Etsy or Adobe Stock fallbacks mentioned in the tournament above, Etsy's policy on off-site generator links for "instant" personalized products, and whether Adobe's file-transfer submission path genuinely bypasses its weekly manual portal click. One more, lower-stakes: the Fed's 16 September 2026 rate hike is consistent across search results but rests entirely on secondary reporting — no dollar figure here depends on it, since they use observed market yields directly, so it's a curiosity-check, not a blocking one.

## Conclusion

The clearest finding across this research isn't any single method — it's the shape of the whole landscape. Nearly every plausible-sounding "AI makes passive income" idea fails for one of three reasons: it needs the agent to find its own customers (which the evidence shows agents are bad at, and which tends to degrade into spam), it needs a human doing real ongoing work the framing doesn't count, or it depends on a platform actively working to detect and shut down exactly this kind of automated, low-effort activity. The methods that survive — an Apify Actor portfolio riding someone else's marketplace demand, or capital sitting in a government-backed account — share the opposite traits: someone else supplies the customers, the price is fixed in code rather than left to agent discretion, and delivery is fully digital and verifiable. That's a narrow needle to thread, which is why even the strongest no-capital bet here tops out at roughly a one-in-three chance by month 6, not a guarantee. Build it anyway: the true cost of trying is small — a few hours of one-time setup and, done right, cents to a few dollars a month in running costs — so a one-in-three shot at $50/month for that price is a good bet, as long as it's sold to you, and by you to yourself, as exactly that: a bet with a known, small downside, not a plan that reliably works.
