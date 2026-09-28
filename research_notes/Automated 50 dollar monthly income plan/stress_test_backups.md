# Stress Test: Backup Methods B1–B4 (vs. the Apify Store Primary)

*Red-team review, 2026-09-28. Country unknown. Target: ~$50/month NET, near-zero ongoing human work, AI-agent-run, legal/ToS-compliant.*

> **Method note.** Read in full: `ai_services_microsaas.md`, `digital_products_marketplaces.md`, `content_traffic_automation.md`, `ai_agent_case_studies.md`. I also pulled the primary-method sections of `software_api_marketplaces.md` (Apify Store) from this same research folder — Task 2 (synergy) is meaningless without knowing what the primary actually looks like, and it wasn't in the assigned four. One `WebSearch` on Apify's Pay-Per-Event (PPE) split was attempted per instructions; it succeeded once and is used below (it corroborated, not contradicted, the notes). No other search or fetch was attempted. Anything not traceable to a note file or that search is marked **[unverified background knowledge]**.
>
> **Why the primary matters to this review.** `software_api_marketplaces.md` scores Apify Store PPE Actors at **P3 15–25% / P6 35–50%** for ≥$50/month net — roughly 2–4x higher than any backup below. That comparison is the spine of this report: a backup only earns its place if it beats "spend the same hour building one more Actor" on risk-adjusted terms, not just in isolation.

---

## 0. The primary, in one table (context for everything below)

| | Apify Store PPE Actors (primary) |
|---|---|
| Take rate | Developer keeps **~80% of PPE revenue minus platform compute** (Apify Help; independently corroborated by my one WebSearch) |
| Demand source | Apify Store itself supplies buyers (developers/businesses searching the store) — the agent never markets |
| Payout | PayPal from $20, wire from $100; invoice auto-approves day 14, pays day 21–25. **The only channel in the whole research corpus with a documented zero-touch payout cycle.** |
| Quality gate | Apify runs a daily automated test per Actor; failures self-flag "under maintenance" (day 3) then deprecate (day ~17) — an automatable, agent-patchable loop |
| Evidence | ~$1.4M/month paid across ~3,000 developers (~$470 average); one documented 98-Actor portfolio took 3–4 months to become "meaningful" |
| P3 / P6 | **15–25% / 35–50%** |
| Recurring human work | Near-zero once payout details are on file; occasional policy-migration events (rental→PPE forced a deadline in 2026) |

Every backup below is judged against this bar, not just against "would this ever work for someone."

---

## 1. Verdict summary (read this first)

| # | Method | Synergy w/ primary | P3 (revised) | P6 (revised) | P6 in your round-1 brief | Recurring human/month | Verdict |
|---|---|---|---|---|---|---|---|
| B1 | AI tool hub website | **Medium** | 3–7% | 12–22% | 15–30% | ~15–30 min | **INCLUDE, conditional (phased)** |
| B2 | Etsy AI digital downloads (API) | **Low/none** | 3–6% | 8–15% | 15–20% | ~30–60 min | **INCLUDE only if condition X** |
| B3 | Adobe Stock AI images/video | **None** | <1% | 4–8% | 10–15% | ~45–85 min, *forever* | **ELIMINATE** (narrow reopen test) |
| B4a | Pinterest → affiliate niche site | **None** (low if merged into B1) | 1–3% | 3–7% | 5–10% (bundled) | ~15–20 min | **ELIMINATE** (fold into B1 if anything) |
| B4b | Faceless YouTube | **None** | ~0% | 1–3% | 5–10% (bundled) | ~10–15 min + policy risk | **ELIMINATE, hard** |

Combined: if you run **both** B1 and B2, P(at least one clears $50/mo net by month 6) ≈ **25–30%** (independence-assumed: 1−(1−0.17)(1−0.115)). That's the realistic ceiling for this whole category — below the primary's own 35–50% solo.

**Bottom line up front:** every backup here is worse, on a risk-adjusted basis, than simply shipping more Apify Actors. None of them is free of hidden recurring labor. Two (B1, B2) are defensible anyway — not because they beat the primary, but because they diversify away from Apify-specific platform risk (Apify already retired one pricing model in 2026) at a low enough marginal cost. B3 and B4 don't clear that bar either way.

---

## 2. B1 — AI tool hub website (3–5 narrow tools, credit packs, MoR checkout)

### Attack

**Failure modes**
- **No built-in demand — this is the central defect.** Unlike every marketplace-type backup, B1 has *no* buyer-supplying storefront. Traffic must come from SEO on a brand-new domain (slow, and organic CTR on informational queries is down 41–61% from AI Overviews per the notes) or one-time directory spikes. `ai_agent_case_studies.md`'s own design rule #1 — "never make the agent responsible for finding customers" — is exactly what B1 violates. The AI Village case study made ~$200 total precisely because the agent had to self-generate an audience.
- Chargeback tail risk at low volume: a single dispute (~$15–20 fee + lost sale, ~$26–37 total) wipes out 2.5–3.5 sales' worth of profit in a month where only 4–6 sales are needed. One hostile buyer can flip a "successful" month negative.
- Free-tier / API-cost abuse: uncapped Haiku calls behind a free daily-run tier are a real, unquantified cost-blowout risk if a bot or a forum finds it.
- MoR platform risk mid-build: Lemon Squeezy is actively migrating to Stripe Managed Payments in 2026; Paddle rejects products "without explanation" (one developer reported 3 rejections). Picking the wrong MoR first can cost a re-onboarding cycle.
- New-domain SEO sandbox + scaled-content-abuse enforcement (Jan 2025, Mar/Jun/Aug 2026 updates) means even *legitimate* small tool pages can get caught if the agent scales page count carelessly.

**Hidden human work**
- One-time: MoR KYC (1–2h), API-provider card + spend cap (15–30 min), domain + hosting (30–60 min), approving agent-drafted legal pages (30–60 min), optional directory listing forms (30–60 min).
- Skip Product Hunt: it needs synchronous launch-day human presence, which breaks the async/scheduled-agent pattern for a marginal 1–3% conversion spike. Not worth it for a *backup*.
- Recurring: reading a weekly/monthly agent digest (~15–30 min/month); rare re-KYC if the MoR changes terms; rare chargeback-evidence approval if the MoR requires the account holder.

**Costs**

| Item | Amount |
|---|---|
| Domain | ~$10–20/yr (~$1–1.5/mo amortized) |
| Hosting | $0–10/mo |
| Product API cost (Haiku, per $12 pack of ~20 jobs) | $0.30–0.60 |
| MoR fee (Stripe Managed Payments / Lemon Squeezy / Polar Starter) | 5% + $0.50/sale |
| Agent-ops overhead (weekly monitoring/digest/refund-draft LLM calls — **not counted in the source notes' unit economics**) | ~$0.50–3/mo |
| Optional directory listing (TAAFT) | $49 one-time (skip the $347 "priority") |

**Policy risk:** Low–moderate. Text/file-output tools clear MoR review as "AI as a feature." Risk is on the SEO side (scaled-content-abuse), not the payment side.

### Unit economics, recomputed (net of ALL costs, not just MoR fees)

The source notes calculate "5 sales × $12 pack = $54.50 net of MoR fees" as clearing $50. That's **net of MoR fees only**. Add hosting/domain/API:

- 5 × $12 = $60 gross → −$5.50 MoR fees → −$1.50–3.00 API → −$2–7 hosting/domain (amortized) ≈ **$44.50–51 true net.**
- **Real breakeven is ~6 sales/month at $12, or ~4 at $19**, not 5 and 3 as the headline figures imply. This is a modest but real tightening — call it "one more sale than you thought."
- At this volume (4–6 transactions/month), one chargeback is existential to that month's number — see above.

### Synergy with primary

**Medium — the best of the four, but not because of shared infrastructure.** Payment rails, domain/hosting, and demand generation are all separate from Apify. What *is* shared: the underlying tool logic. "Tailor my resume to this job ad" or "translate this .srt keeping timings" is the same prompt/code whether it's wrapped as an Apify Actor (PPE, marketplace-supplied demand, 80% take) or a standalone web tool (MoR, self-generated demand, ~95% take). **The synergy move is sequencing, not parallel-building**: ship the tool as an Apify Actor first (near-zero incremental cost on top of the primary, built-in demand, 80/20 split beats a 5%+$0.50 MoR fee in expectation once you count the demand-generation cost). Only pay B1's separate setup cost (domain, MoR, SEO) for a specific tool once it's already showing organic PPE run-volume as an Actor — i.e., use Apify Store as a free market-validation layer before building the expensive part of B1.

### Verdict

**INCLUDE, conditional.** Condition: build B1 as a phase-2 extension of validated Apify Actors, not a parallel from-scratch project. Do not build the website for a tool with zero prior signal.
**P3 3–7%, P6 12–22%** (down from the round-1 15–30%: true-net-of-all-costs tightens the breakeven, and as a *backup* it gets less agent/human iteration than a primary would).

---

## 3. B2 — Etsy AI-designed digital downloads (official API, disclosed AI, original designs)

### Attack

**Failure modes**
- **Cold-start problem**: a brand-new shop with zero reviews/sales history ranks poorly in Etsy search for weeks-to-months — a real, under-quantified drag the notes don't size.
- Saturation: anecdotal order declines up to ~80% for existing digital sellers cited in the notes; popular printable/planner categories are already crowded with AI output.
- Enforcement direction: mandatory AI disclosure + "Designed by a seller" + no third-party templates since June 2025; one unverified secondary claim of 12,000 listings removed in a quarter for disclosure mistakes. Whether the AI agent auto-publishing many similar templated listings itself trips Etsy's anti-mass-listing detection is an open question the notes never resolved for Etsy specifically (it's documented for Redbubble/Spotify/KDP — treat as a live risk by analogy, not confirmed for Etsy).
- Reputation spiral: 1-star reviews citing "AI slop" quality can tank search placement in a way that's hard for an agent to recover from without human judgment.

**Hidden human work (the real gap vs. B1)**
- One-time: shop creation + ID verification + bank link + 2FA (1–2h), $15–29 setup fee, Etsy developer-app OAuth approval (30–60 min), approving agent-drafted shop policies (15–30 min).
- **Recurring, and NOT codeable away like B1's refunds**: buyer messages. Etsy has no revealed auto-refund API in the notes (unlike an MoR dashboard/API). Even "instant download only" listings draw pre-sale questions, "file won't open," and refund asks. At ~11 sales/month, expect roughly 1–3 messages needing a reply — call it 10–30 min/month at that volume, but this **scales with sales**, unlike B1 where refund policy is fully coded. If a listing goes viral or draws a negative review, this can spike well past "near-zero" in a single week.
- Recurring: monitoring for policy takedowns; each removed listing needs a human decision on whether to appeal or replace.

**Costs**

| Item | Amount |
|---|---|
| Setup fee | $15–29 one-time |
| Per listing | $0.20 (charged again on sale **and** on ~4-month auto-renewal) |
| Transaction fee | 6.5% |
| Payment processing (US) | 3% + $0.25 |
| Image/LLM generation per item | Few cents (calc) |
| Catalog upkeep (fixed, independent of sales) | ~75 listings × $0.20 / 4mo ≈ **$3.75/mo minimum**, even at zero sales |
| Agent-ops overhead | ~$0.50–2/mo |

### Unit economics, recomputed

Using the more realistic $6 item (competitive Etsy digital-printable pricing, not the $9–19 B1 range): net per sale ≈ **$4.98** (6.5% + 3%+$0.25 + $0.20 renewal, per the source notes' own calc).
- (50 + 3.75 catalog upkeep) / 4.98 ≈ **10.8 → round to 11 sales/month**, not the "12–13" or "7" figures quoted loosely elsewhere — this lands in between depending on price point; **use 11 sales/month at $6, or 7–8 at $9–12** as the working target.
- At 11 sales/month, ~1–3 will generate a support message — this is the number to hold the human to when scoping "minutes/month."

### Synergy with primary

**Low/none.** Different medium entirely (visual design vs. automation code), different skill (image-prompt engineering + marketplace SEO vs. scraping/API logic), Etsy's own payment system (not an MoR, no shared plumbing with B1 or Apify), zero shared demand. The only thing B2 shares with the primary is the human doing the same tax return at year-end. **This is exactly why it's worth considering anyway**: if the actual goal of having a backup is hedging against Apify-specific platform risk (real — Apify already forced a pricing-model migration in 2026), B2's total independence from Apify's infrastructure, policies, and buyer base is a feature, not a bug. Don't evaluate B2 on synergy; evaluate it on "is this genuinely a different basket."

### Verdict

**INCLUDE only if**: (1) products are non-personalized, instant-download-only (no message-based file delivery — keeps recurring labor bounded), (2) catalog capped at ~50–75 listings (not 150+) to limit renewal-fee bleed and avoid mass-listing-velocity risk, (3) the human explicitly accepts ~30–60 min/month of message triage as genuine, non-zero recurring work. If the human won't accept #3, **ELIMINATE** — there's no way to code around Etsy buyer messaging the way B1 codes around refunds.
**P3 3–6%, P6 8–15%** (down from round-1 15–20%: cold-start and catalog-upkeep effects weren't priced in).

---

## 4. B3 — Adobe Stock AI images/video

### Attack

**Failure modes — this is the weakest backup on pure mechanics, not just probability**
- **The weekly submission cap makes the required portfolio size unreachable inside the stated window.** Target math from the notes: ~65–70 downloads/month needed, requiring an estimated 1,300–3,500 accepted files (at an assumed 0.02–0.05 downloads/file/month). Weekly caps for *new* accounts are unpublished but reported as low as 22–100/week for ordinary accounts (higher limits go to established, high-acceptance accounts — not where a new entrant starts). **Even at a generous 30/week accepted, reaching 1,300 files takes ~43 weeks (~10 months) of submission alone** — before the files have had time to accumulate any download history. This is not a probability problem, it's an arithmetic problem: the volume math and the 3–6-month window are close to mutually exclusive for a new account.
- Rising "similar content" rejections as AI supply floods the platform (~48% of Adobe Stock's image catalog was AI by April 2025) — wastes quota on a batch that scaling temptation naturally produces.
- Realized-cash risk: royalties accrue in Adobe's dashboard, but nothing reaches a bank account below the $25 payout threshold — with thin download volume, "earned" can sit un-cashed for months. The user asked for NET income realized, not paper credit.

**Hidden human work — the disqualifying one**
- **A recurring, indefinite, weekly 10–20 min portal submission with the AI-checkbox ticked** (the notes could not confirm automated FTP/CSV submission bypasses this; it's an open gap, not a confirmed fact). This is categorically different from B1's or B2's "rare, occasional" touch: it is **~45–85 minutes every single month, forever**, the largest standing recurring-labor line item of any backup examined. "Near-zero ongoing human work" is not compatible with a mandatory weekly click that never goes away.

**Costs**

| Item | Amount |
|---|---|
| Platform fee | $0 |
| Royalty split | Contributor keeps only **33%** (35% video) — Adobe keeps 65–67%, the worst take-rate of anything examined (worse than Etsy's ~11%, worse than Apify's 20%) |
| Generation cost | ~$0–30/mo (image gen + upscaling) |
| Payout floor | $25 |
| Agent-ops overhead | ~$0.50–1/mo |

### Unit economics, recomputed

The notes already do this math and land on "unlikely within 6 months" — I'd sharpen it further: under a realistic (not best-case) weekly-cap assumption for a brand-new account, **the required file count cannot be submitted inside 6 months at all**, independent of acceptance rate or sales. That makes P6 lower than the round-1 estimate, not just uncertain.

### Synergy with primary

**None.** Image-prompt engineering, Adobe's own contributor payment system, no shared code, no shared skill with Apify Actor development. Negative synergy, in fact: the recurring weekly-click requirement is a standing obligation that competes for the same human attention "near-zero work" is supposed to protect.

### Verdict

**ELIMINATE** as a default recommendation — the recurring-forever manual step alone fails "near-zero ongoing human work" regardless of the earnings probability. **Narrow reopen test** (not a full build-out): before dismissing permanently, have the agent attempt Adobe's FTP/SFTP + CSV metadata submission path in the human's account and confirm whether a batch can go from files-on-disk to "submitted and under review" with zero portal interaction per batch. If and only if that's confirmed, B3's automation score moves from ELIMINATE toward the notes' original MAYBE — but the volume-math problem above still caps P6 well below B1/B2 either way.
**P3 <1%, P6 4–8%** (down from round-1 10–15%).

---

## 5. B4 — Pinterest → niche site (affiliate) + faceless YouTube

This is really two unrelated bets bundled under one letter. Scored separately.

### 5a. Pinterest → affiliate niche site

**Attack**
- **Worst $-per-action of anything examined.** Amazon Associates pays 1–4.5% on most physical goods. $50/month needs **~$1,100–$5,000 of referred purchases/month** (at 3% commission, $50/0.03 ≈ $1,667, ≈48 orders at a $35 AOV) — this is a much heavier lift per dollar than B1's ~$12 direct sale (net ~$10.90) or B2's ~$6 item (net ~$4.98).
- Amazon Associates auto-closes the account without **3 qualifying sales within the first 180 days of signup** — the clock starts at signup, not at "when the site has traffic." A slow-ramping new Pinterest account/domain can get closed before ever reaching real volume, forcing a reapplication.
- Since Apr 14, 2026, sales referred through paid/boosted traffic don't count — moot here since no ads are planned, but tightens attribution generally.
- Pinterest's own "AI modified" labels + "see fewer AI" controls (expanded through Dec 2025) let users opt out of seeing exactly this content type — a structural headwind unique to this channel.

**Hidden human work**: Pinterest business account + site claim, developer app + a **one-time human-on-camera OAuth demo video** for Standard API access (1–2h), affiliate program applications + tax forms + disclosure pages (1–2h). Recurring: monitoring the Amazon 180-day cliff, reacting to Pinterest policy notices (~15–20 min/month).

**Synergy with primary**: None with Apify. Only synergy is with **B1**, and only if literally merged (same domain/hosting/SEO content, affiliate links added to existing tool pages) rather than built as a 4th separate site — which is what the source notes actually recommend (fold the affiliate layer into the tool-hub's SEO engine). As an independent project, it isn't one.

**Verdict**: **ELIMINATE** as a standalone backup. If pursued at all, it's a content tweak to B1 (add affiliate links to existing tool-hub pages), not its own setup/checklist/kill-criteria line item. **P3 1–3%, P6 3–7%.**

### 5b. Faceless YouTube (AI-assisted, original format)

**Attack**
- **Cannot produce a single dollar inside the 3–6 month window by construction.** Needs 1,000 subscribers + 4,000 watch hours (8,000 for new applicants from Feb 1, 2027) *before* any ad revenue exists at all, and YPP approval is a **human-reviewed** gate outside agent control. Realistic accumulation of 60,000–160,000 views takes 6–12+ months even in a good case. This isn't a probability-of-earning question at month 6 — it's a "the revenue switch is still off at month 6" question for the overwhelming majority of attempts.
- **Existential, unappealable platform risk.** Google's Scalable Cluster Termination System reportedly terminated ~130,000 channels in 6 months with **<1% overturn rate**. Unlike Etsy delisting a few items or Adobe rejecting a batch, this can zero out the *entire* channel and account with no realistic recourse — the worst tail risk of any method examined in any of the four documents, category included.
- If the API compliance audit isn't granted, every single upload defaults to private and needs a manual human "publish" click — a recurring-forever labor cost in the same family as B3's weekly submission problem.

**Hidden human work**: channel + 2FA + phone verification (1–2h), Google Cloud project + OAuth + API audit application (uncertain approval), YPP application (human-reviewed, pure wait), AdSense linking + tax. Recurring, until/unless audited: manual publish click per video (~10–15 min/week at 2–3 uploads/week).

**Synergy with primary**: None. Zero code, skill, infra, or demand overlap with Apify or with any other backup.

**Verdict**: **ELIMINATE, hard, no conditions.** No guardrail fixes a human-reviewed monetization gate plus a cluster-termination system with sub-1% appeal success. **P3 ~0%, P6 1–3%.**

---

## 6. Setup checklists and kill criteria (included backups only)

### B1 — AI tool hub (phased)

**AI agent does**
- Build 3–5 candidate tools as Apify PPE Actors first (reuses primary infra/skill entirely).
- Instrument each Actor's run-volume; flag any tool crossing a demand threshold (e.g., sustained organic runs/week) as a website candidate.
- For graduated tools only: scaffold the site, write legal pages (ToS/privacy/refund) for human review, implement credit-pack + subscription pricing, wire the MoR API, set hard spend caps, implement auto-refund-within-7-days logic, build rate limiting/CAPTCHA on the free tier, draft directory-listing submissions.
- Run nightly health checks, weekly SEO content refresh (no thin/duplicate pages), monthly model-deprecation watch, and a weekly digest email to the human.

**Human does (one-time)**
- Choose and KYC an MoR by country (Stripe Managed Payments/Polar if eligible; else Lemon Squeezy/Paddle/Dodo/Creem).
- API provider account + card + hard monthly spend cap.
- Domain registration + hosting account; hand API tokens to the agent.
- Approve agent-drafted legal pages before first sale.
- Optional: TAAFT $49 listing (skip the $347 priority tier).

**Human does (recurring, minutes/month)**
- Read the weekly digest (~15–30 min/month total).
- Rare: approve a re-KYC if the MoR changes terms; approve chargeback evidence if the MoR requires the account holder.

**Kill criteria**
- Zero paid conversions by month 4 despite ≥300–500 monthly tool-page visitors → pricing/product problem, kill that tool.
- Fewer than ~200 monthly visitors by month 4 despite directory listings → traffic-generation failed, kill the site (not fixable by product tweaks).
- API + hosting costs exceed 30% of gross revenue in 2 consecutive months → abuse or broken unit economics, kill or redesign.
- 2+ chargebacks in any 3-month window → kill (fraud/quality signal).
- Two different MoRs both reject the product on review → structural policy-fit problem, kill.

### B2 — Etsy AI digital downloads (conditional)

**AI agent does**
- Generate original designs + listing copy with mandatory AI-disclosure line and "Designed by a seller" attribution on every listing.
- Publish via Etsy Open API v3 (`listings_r`/`listings_w`, ListingFile for digital files); start at ~50 listings, add a few per week rather than a bulk drop (limits mass-listing-velocity risk).
- Draft replies to buyer messages for human approval (Etsy's API does not appear to expose buyer messaging per the notes — verify before assuming full automation here).
- Monitor for policy flags and draft an appeal or replacement plan.

**Human does (one-time)**
- Open shop, ID verification, bank link, 2FA; pay the $15–29 setup fee.
- Register Etsy developer app, approve OAuth scopes.
- Approve agent-drafted shop policies text.
- **Explicitly decide**: non-personalized instant-download only (required condition for this verdict).

**Human does (recurring, minutes/month)**
- Reply to/approve agent-drafted buyer messages: ~30–60 min/month at target volume (~11 sales/mo), scales with sales.
- Occasional policy-flag response.

**Kill criteria**
- Zero sales by month 4 across a full (~50–75 listing) catalog → kill, stop paying renewal fees.
- 2+ listings removed for policy violations in any quarter → shop-level suspension risk too high, kill.
- Message-reply time exceeds 2 hours in any month → either convert fully to non-personalized-only or kill (scope creep into a part-time job).
- Rating drops below 4 stars or 2+ reviews cite "AI"/quality complaints → overhaul designs or kill (reputational spiral).

### B3 — verification-only test (not a build-out, since the verdict is ELIMINATE by default)
- Human: attempt Adobe's FTP/SFTP + CSV batch submission once, end-to-end, in the human's own contributor account.
- Confirm: does the batch reach "submitted, under review" with zero required portal click? If yes, B3 can be re-scored; if no (or unconfirmable), leave eliminated.

---

## 7. A method visible in the notes but missing from B1–B4

**Zero-marginal-cost cross-listing of the primary's own Actor backends** (`software_api_marketplaces.md`, §6–7) — specifically **Zyla API Hub** and **Poe price-per-message bots**, with x402 as a distant third.

This wasn't wrongly *eliminated* — the notes correctly score Zyla/RapidAPI cross-listing as "MAYBE, cross-list only" and Poe as "MAYBE (low), 5–10% P6 if the user's country is eligible," neither a KEEP nor a hard ELIMINATE. It's simply **absent from your B1–B4 shortlist**, and it deserves a place for a reason none of B1–B4 share: **near-zero marginal cost**, because it's not a new project at all.

- If a tool already exists as an Apify Actor with an HTTP-callable backend, listing the *same* backend on Zyla (80/20 split, same shape as Apify) or wrapping the *same* LLM-call logic as a Poe per-message bot costs a few hours of adapter code, not a new business. There's no new MoR, no new domain, no new demand-generation effort — you're renting the same code to a second doorway.
- Poe in particular is a structural match for B1's own tool concepts (resume tailoring, translation) since Poe bots are exactly "take user input, run a prompt, return output" — the same shape, on a platform that already has message-buying users, unlike B1's website which has none.
- Caveats, honestly: Poe's country eligibility is contradictory in the sourced pages (US-only vs. 23 regions — unresolved), x402's real (non-gamed) transaction volume is reportedly a small fraction of its headline figures, and none of these has real earnings evidence at the small-developer level. Treat this as a free option, not a plan: build it opportunistically once a tool's core logic exists for Apify, spend no dedicated setup budget on it, and hold no probability expectation above single digits.

I did not find a stronger candidate than this in the corpus. Everything else eliminated in the four assigned documents (headshots, Suno songs, Fiverr/Upwork, Shutterstock, KDP, Redbubble, Merch on Demand, TikTok/Snapchat/X/Facebook, Medium, newsletters, podcasts, Reddit/Quora, programmatic SEO) was eliminated for reasons that hold up under this same attack — either a hard ToS/legal block, a human-reviewed gate the agent can't clear, or economics that don't move even under generous assumptions.

---

## 8. Gaps and what would change this analysis

- Etsy's rules on off-site generator links for "instant, non-personalized" fulfillment of otherwise-personalizable product types were never confirmed in the source notes — worth a human spot-check before committing to B2's non-personalized condition.
- Whether Adobe's FTP/CSV path truly bypasses the weekly portal click is unconfirmed — see the B3 verification test above.
- Poe's country eligibility (US-only vs. 23 regions) is unresolved in the sourced pages.
- All P3/P6 figures in this document, like those in the source notes, are judgment calibrated to the cited evidence, not measured base rates. No dataset exists anywhere in this research project that isolates "new operator, zero ongoing human work, 3–6 months" as a cohort.
