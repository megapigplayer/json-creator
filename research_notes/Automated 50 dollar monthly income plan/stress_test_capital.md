# Stress Test: How Certain Is the "Certain" Path to $50/Month? (data as of 28 Sep 2026)

*Red-team analysis of Round-1's capital/hardware findings. Method note: this session made exactly one successful web search (US CPI, cited below); page fetching was otherwise unavailable. Everything else is either (a) drawn from the two Round-1 notes and re-derived with new math — tagged **[Author calculation]** — or (b) added general knowledge not present in Round-1 — tagged **[unverified background knowledge]**, not verified in-session and not tax/legal advice. Round-1's own evidence tags ([Official]/[Aggregator]/[Secondary]/[Self-reported]/[Marketing]) are preserved when quoting its cited findings directly. All dollar figures are USD unless a currency symbol says otherwise. "Net" means net of personal income tax unless stated as "gross" or "pre-tax."*

---

## Executive summary

Round-1 concluded that government-backed cash yield (T-bills, government money-market funds, top insured savings) is the only **near-certain** route to $50/month, needing about $18–21k in the US at Sept-2026 rates, with GPU rental (RTX 4090/5090) as a coin-flip **MAYBE**, and a software product (AI-built Apify Store Actor portfolio) as the only no-capital survivor at a 35–50% chance by month 6. This stress test attacks all three claims quantitatively and finds:

1. **The cash-yield path is nominally near-certain but not "free money."** At today's US numbers (HYSA 4.20%, 22% federal tax, 3.4% CPI inflation — see §1.3), the $18,315 pot that Round-1's own worked example uses to produce "$50.00/month net" earns a **real (inflation-adjusted) return of roughly −0.12%/year**, i.e. about **−$1.89/month** once purchasing-power loss is netted against the payout. The plan converts a static pile of capital into a monthly cash flow while *approximately preserving, not growing,* real wealth. Only 4 of the 12 yield×tax combinations modeled in §1.3 are real-positive.
2. **A single 100bp shock — smaller than the 75bp of cuts the Fed itself made in Sept–Dec 2025 — silently breaks the "$50" promise with zero action by the user.** A HYSA cut from 4.20% to 3.20% turns the $18,315 plan into $38.08/month net (§1.1), and nothing in the "near-zero work" design alerts the user.
3. **Round-1's GPU numbers mix pre-tax and post-tax accounting**, making the $55–65/month "MAYBE" look more competitive against the $50 *net* cash-yield target than it is. Tax-consistent, the RTX 4090/5090-on-Salad midpoint at US-average power is closer to **$41–49/month net**, not $55–65 (§3.5), and it is measurably less "zero-touch" than cash yield (manual redemption, driver updates, wear watch).
4. **The "bridge" strategy (reinvest software income into a cash buffer) does not make $50/month near-certain within 24 months.** Modeled month-by-month (§4), the base case reinvests roughly $50/month of proceeds and after 24 months of full compounding has a buffer of only ~$738 — worth about **$1.68/month** of its own guaranteed income, under 4% of the target. Reaching the ~$18–22k independence threshold from a ~$50–100/month income stream *alone* takes on the order of **10–30 years**, not two. The bridge's real near-term value is a strictly non-shrinking income floor ("ratchet"), not fast independence — unless the user also injects outside capital.
5. **Bottom line:** "near-certain, near-zero-work, consistent $50/month" is honestly achievable (~90%+ confidence) only for a user who already has roughly **$20–25k** in liquid capital to deploy — and even then the honest framing is "certain in nominal dollars, roughly flat in real terms." Below that capital level, nothing surveyed in either Round-1 note or this stress test clears 50% confidence within 6 months; the best available options are coin-flips.

---

## 1. Attacking the cash-yield "near-certain" claim

### 1.1 Rate-cut risk

Round-1's own timeline is the best evidence that "the Fed is hiking, so rates are safe" is a fragile premise over any horizon longer than a few months:

> "The Fed made three 25 bp cuts in Sept, Oct and Dec 2025, taking the target range from 4.25–4.50% to 3.50–3.75%. It then held for five straight meetings in 2026... **16 Sep 2026:** the FOMC voted 12–0 to raise the target range 25 bp to 3.75%–4.00%... driven by 'spiraling oil prices'." — Round-1, citing [CNBC](https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html) [Secondary/Official excerpt]

That is a **100 bp reversal in under a year** (three cuts, then a hike), driven by an oil-price shock. Round-1 also flags that the Bank of Israel's own reasoning cuts the *other* way — it expects rates to fall to ~3% because it expects energy prices to *fall* after a US–Iran MOU, directly contradicting the Fed/ECB/BoE's rising-energy framing in the same month. Two central banks reading the same global situation and reaching opposite rate conclusions in September 2026 is itself evidence that the "up" trend Round-1 leans on is not a settled fact — it is one read of a volatile geopolitical input (Middle East energy prices) that could resolve either way over the next 6–24 months.

**Two distinct exposures, both uncompensated by "near-zero work":**

- **HYSA / MMF (variable rate):** the bank or fund can reprice *any day*, with no notice period required. Round-1 itself notes VMFXX's 24-day average maturity means its yield "follows the Fed within weeks." A "zero-work" design means nobody is watching for the cut.
- **T-bill ladder (locked-then-rolled):** each rung is locked for its term, so a ladder smooths the transmission of a rate move — but only by *delaying*, not preventing it. A 6-rung, 26-week ladder fully re-prices to the new rate within about 6 months of a sustained shift, and a rung purchased mid-cutting-cycle still resets to whatever the market offers that week.

**Quantified break of the "$50" promise, no action taken:**

| Scenario | Capital | Rate | Tax | Net $/month | vs. $50 target |
|---|---|---|---|---|---|
| Round-1 worked example (Newtek HYSA) | $18,315 | 4.20% | 22% | $50.00 | on target |
| Same capital, one realistic 100bp cut | $18,315 | 3.20% | 22% | $38.08 | **−24%, silently** |
| Same capital, Round-1's own "stress case" | $18,315 | 3.00% | 22% | $35.71 | **−29%, silently** |
| Same capital, cut matching 2025's 75bp move | $18,315 | 3.45% | 22% | $41.03 | **−18%, silently** |

*[Author calculation: monthly net = capital × rate ÷ 12 × (1 − tax)]*

The practical implication for §2's decision table: anyone targeting the *bare minimum* capital for $50/month (rather than a buffer above it) should expect the plan to under-deliver within 1–2 years unless they periodically re-check the rate — which is itself a small but real violation of "near-zero ongoing work."

### 1.2 Taxes — the US case, and why "generic non-US, 15–25%" undersells the real spread

**US, 22% federal bracket (Round-1's assumption):** this ignores two real asymmetries the round-1 capital table applies uniformly across vehicles:

- **T-bill interest is exempt from state and local income tax; HYSA and most MMF interest is not** [unverified background knowledge — Round-1 flagged US Treasury interest's state-tax exemption as an unconfirmed Gap, but it is standard, well-established US tax treatment]. A HYSA saver in a high-state-tax jurisdiction (e.g., ~9%+ marginal) faces an effective rate well above 22%, while a T-bill saver in the identical state pays 22% federal only. This is a real, structural reason to prefer T-bills or a Treasury-heavy government MMF over a bank HYSA for identical headline yields, which Round-1's Section 9 does not flag when it presents "Option A: HYSA" and "Option C: govt MMF" as roughly interchangeable.
- **Treasury-heavy government MMFs (e.g., VUSXX, which Round-1 cites at 3.76%) commonly pass through a state-tax-exempt percentage to shareholders**, similar to direct T-bills, when they report the fund's Treasury-obligation percentage at tax time [unverified background knowledge — not confirmed in-session]. If true, this makes VUSXX-style funds a meaningfully better after-tax choice than a same-yield HYSA for state-tax-paying US residents, and is worth the user's own confirmation before committing $20k+.

**Generic non-US claim, stress-tested against Round-1's own country data:** the task's assumed 15–25% band does not bracket what Round-1 actually found:

- **UK:** Round-1 cites a Personal Savings Allowance of £1,000 (basic-rate) / £500 (higher-rate) [unverified background knowledge, flagged by Round-1 itself as unconfirmed]. At Round-1's own LemFi 5.00% rate, £12,000 of capital produces about £600/year — **entirely inside the £1,000 PSA**, i.e. **0% effective tax**, not 15–25%, *provided the saver has no other interest income*. This single case sits below the task's assumed floor.
- **Germany:** Round-1 cites a flat 26.375% *Abgeltungsteuer* plus a €1,000 saver's allowance (*Sparerpauschbetrag*) [same caveat]. 26.375% sits **above** the task's assumed 25% ceiling.
- **Israel:** no 2026 interest-tax rate was found in Round-1 (explicit Gap); background knowledge suggests Israeli interest/marketable-security income is commonly taxed around 15–25% for individuals depending on instrument and linkage terms [unverified background knowledge] — this is the one case that actually sits inside the assumed band, and it is unverified.

**Net finding:** the real-world spread runs from **~0% (UK, PSA-sheltered) to ~26.4% (Germany, flat tax)** — wider on both ends than the task's assumed 15–25%, and the two ends are both drawn from Round-1's own country data, not invented for this stress test. Anyone applying a flat "15–25%" assumption to their own country without checking is liable to be meaningfully wrong in either direction.

**Cross-border US access:** [unverified background knowledge, not confirmed in-session] US-source "portfolio interest" — which includes T-bill interest — paid to a nonresident alien is generally exempt from the standard 30% NRA withholding tax under IRC §871(h)/881(c) (the "portfolio interest exemption"), *provided* the bill is held in registered form and the holder isn't a 10%+ owner of the issuer (moot for T-bills) or a controlled foreign corporation. If accurate, this means a non-US holder buying T-bills (directly or via SGOV-type ETFs) through an international broker may owe **no US tax at all** on the interest, only whatever their home country charges — a materially different (better) picture than "US tax plus home tax." This needs a local tax professional's confirmation; it is flagged here because it directly affects §1.6's FX analysis and Round-1 never raised it.

### 1.3 Inflation: the "$50/month" is mostly (or entirely) compensation for lost purchasing power, not free income

New data point this session: **US headline CPI held at 3.4% year-over-year in August 2026 (unchanged from July); core CPI 2.4% y/y, the lowest since March 2021; gasoline +27.4% y/y** — [usinflationcalculator.com, "US CPI August 2026"](https://www.usinflationcalculator.com/inflation/us-cpi-august-2026/100073342/); [CNBC, "CPI inflation report August 2026," 11 Sep 2026](https://www.cnbc.com/2026/09/11/cpi-inflation-report-august-2026.html) [Aggregator/Secondary, via WebSearch]. The gasoline spike is directly consistent with the "spiraling oil prices" language the Fed used to justify its 16 Sep hike in Round-1's notes — a useful cross-check that the two independent sources agree.

**The core calculation** (Fisher approximation: real rate ≈ nominal after-tax rate − inflation):

| Vehicle | Nominal yield | Tax | After-tax nominal | Inflation | **Real after-tax yield** | On $18,315-equivalent capital |
|---|---|---|---|---|---|---|
| Top HYSA (Round-1's worked example) | 4.20% | 22% | 3.276% | 3.4% | **−0.124%** | −$22.71/yr = **−$1.89/mo** |
| 6-mo T-bill ladder | 4.33% | 22% | 3.377% | 3.4% | **−0.023%** | −$4.02/yr on $17,765 = **−$0.33/mo** |
| Govt MMF (VMFXX) | 3.74% | 22% | 2.917% | 3.4% | **−0.483%** | −$99.34/yr on $20,568 = **−$8.28/mo** |
| Round-1 "stress case" | 3.00% | 22% | 2.340% | 3.4% | **−1.060%** | −$271.79/yr on $25,641 = **−$22.65/mo** |

*[Author calculation]*

**What this means in plain terms:** the plan reliably pays $50.00 nominal dollars into the user's account every month, exactly as promised — that part of the "certainty" claim holds up. But the $18,315 (or $17,765, or $20,568) sitting behind it is **losing purchasing power at roughly the same rate the interest is paid out**, in every one of Round-1's headline scenarios. The saver is not "earning $50/month" in the everyday sense of growing their wealth; they are running a near-zero-sum conversion of a static real asset into a nominal cash flow, and in three of the four rows above the conversion is a small **net real loss**. This is the single most important corrective to the plan's framing: call it "capital preservation with a monthly disbursement," not "profit."

**Full sensitivity grid** (real after-tax yield = yield × (1 − tax) − 3.4% inflation):

| Yield \ Tax | 0% | 15% | 25% |
|---|---|---|---|
| 3.0% | −0.40% | −0.85% | −1.15% |
| 3.5% | **+0.10%** | −0.43% | −0.78% |
| 4.0% | **+0.60%** | **0.00%** | −0.40% |
| 4.5% | **+1.10%** | **+0.43%** | −0.03% |

*[Author calculation, 3.4% US CPI held constant]* Only 4 of 12 cells are clearly real-positive, and all four require yields at the high end of Round-1's observed range (4.0–4.5%) combined with tax at or below 15%. The realistic US case (yield ~4.0–4.3%, tax ~22%) sits almost exactly on the zero line.

### 1.4 Bank APY cuts — idiosyncratic risk on top of Fed risk

This is distinct from §1.1: a bank can cut its *own* posted rate for reasons that have nothing to do with the Fed — it has raised the deposits it wanted, a promotional period is ending, or it is repricing competitively.

- Round-1's own aggregators **disagree on the "top" rate in the same week**: "Fortune lists 'up to 4.50%' on 21 and 25 Sep 2026... Yahoo lists 'up to 4.10%' on 23 Sep 2026... The spread probably comes from promotional or conditional accounts." A market where the *definition* of "the best rate" varies by ±40bp depending on which aggregator you read is a market where rates are not stable, observable facts — they are marketing.
- The specific banks in Round-1's headline $18,315 example (Newtek 4.20%, Happen 4.20%, Axos up to 4.21%) are smaller, deposit-chasing institutions rather than a Treasury-backed instrument. Deposit-chasing banks have a well-documented general pattern of cutting promotional rates once they've attracted the deposits they wanted, and of repricing savings APY downward faster than they reprice it upward when their funding costs fall [unverified background knowledge — standard, widely observed banking behavior, not specific to these institutions]. Nothing in Round-1's notes or this one confirms Newtek/Happen/Axos specifically will do this — but the *category* risk is real, and it is a second, independent decay channel on top of Fed-driven risk.
- **This directly conflicts with "near-zero ongoing work."** Protecting against idiosyncratic bank cuts requires periodically comparing rates and being willing to move money — the same chasing behavior Round-1 already flags as breaking "zero work" for German Tagesgeld and UK bonus accounts. A genuinely zero-touch cash plan should assume it will *not* be monitored, and size in a buffer (see §1.1's stress table) rather than assume the headline rate holds.

### 1.5 Account minimums — and a hidden recurring-work trap in Round-1's own worked example

Round-1's rate table (Section 1) quietly mixes conditional and unconditional accounts:

| Account | Rate | Condition to earn that rate |
|---|---|---|
| Axos | up to 4.21% | Needs a linked checking account and deposit conditions |
| Happen Bank LevelUp | 4.20% | **Needs $250/month in deposits** |
| Newtek Personal HYS | 4.20% | No monthly fee (used in Round-1's headline example) |
| CIT | 4.10% | Fewer requirements |
| Valley | 4.08% | Fewer requirements |
| Bask | 3.75% | **No minimum, no fees, no conditions** |

**Happen Bank's $250/month deposit requirement is a recurring action, not a one-time step** — if it is missed even once, the account likely reverts to a much lower base rate that Round-1 did not capture. That contradicts the user's stated constraint ("only one-time steps") more directly than anything else in the cash-yield category. Round-1's chosen headline example (Newtek) happens to be condition-free, which is the right choice, but a reader who instead reaches for Axos or Happen because they show a marginally higher rate would unknowingly take on a monthly chore.

**The true zero-condition price of "zero work":** swapping to Bask (3.75%, genuinely no strings) instead of a conditional 4.20% account costs real capital:

$600 ÷ (0.0375 × 0.78) = **$20,513** for Bask vs. **$18,315** for a conditional 4.20% account — **about $2,198 (12%) more capital** to buy true unconditionality. *[Author calculation]*

- **TreasuryDirect** requires only a **$100 minimum per bill** [unverified background knowledge, standard TreasuryDirect fact, not confirmed in-session] — the lowest bar of any vehicle here — but Round-1 flagged as an open Gap whether non-US persons can open an account directly (in general, TreasuryDirect requires a US taxpayer ID and US bank account, which most non-US residents without a US SSN cannot supply). A non-US user is therefore more likely routed to a broker-held T-bill or a short-Treasury ETF (SGOV-type), which have their own account minimums (broker-dependent, not researched by Round-1).
- **VMFXX's $3,000 minimum** is a real one-time barrier for scenario (a)/(b) users (see §2) but not a "condition to keep earning" the way Happen's is.

### 1.6 Currency risk for non-US users buying US T-bills / USD instruments

Round-1 explicitly did not research FX rates and presented non-US figures in local currency only. The gap matters more than Round-1's framing suggests:

- Any non-US user who buys **USD-denominated** T-bills, HYSAs, or govt MMFs to chase the higher US yield is taking on **principal-level FX risk that the "safe yield" framing obscures**. The yield itself may be contractually safe in USD; the *value of that USD in the user's home currency* is not. A 5–10% currency swing over 6–24 months is well within normal historical ranges for most currency pairs [unverified background knowledge], and would swamp several years of the targeted $50/month.
- Concretely: if the home currency *strengthens* 10% against the dollar between funding and spending, a nominally-unchanged $50/month payout buys 10% less in local terms — directly breaking the "consistent" claim in the currency the user actually spends in, even though nothing "went wrong" in USD terms.
- **Recurring conversion costs**, if the user actually moves the cash monthly rather than letting it accumulate in USD: typically on the order of 0.5–3% per transfer depending on method (bank wire vs. a low-cost transfer service) [unverified background knowledge] — a cost Round-1's capital tables do not include anywhere.
- **The honest trade-off Round-1 doesn't fully state:** avoiding FX risk means staying in home-currency instruments, but Round-1's own non-US data shows those are frequently *worse* on both axes — lower and falling rates (Israel: BoI cut to 3.25% on 1 Sep 2026 and guiding toward ~3%; no 2026 keren kaspit yield was even found) or lower and flat (Eurozone: ECB 2.50%, needing ~€22–24k). Taking the FX risk to reach the higher USD yield, or accepting a lower and less certain home-currency yield to avoid it, are both real costs that "safe in USD" glosses over for a non-US reader — and per §1.2, the NRA portfolio-interest exemption (if it applies to the user's situation) at least removes the *double-taxation* half of this problem, leaving FX as the remaining, unhedged risk.

### 1.7 Does the "monthly consistency" claim actually hold?

Round-1: "HYSAs and MMFs accrue continuously and pay monthly, so they suit a monthly $50 target... A 6-rung ladder of 26-week bills... turns them into roughly monthly income." True on *timing*. Less true on *amount*:

- **MMF:** smoothest cash-flow timing, but (per §1.1) the *fastest* to reprice down, since the 7-day yield tracks the Fed within weeks. Each month's payout moves with the current rate — "consistent" only while the rate is.
- **HYSA:** pays monthly, but reprices in **discrete jumps** on the bank's own schedule (see §1.4) rather than smoothly — the user can go months at the old rate and then take a step down (or up) with no warning.
- **T-bill ladder:** monthly cash-flow timing by construction, but the *amount* is a rolling average of **six different historical yields**, one per rung. In a period of changing rates (which Round-1's own data shows is exactly where the US sits right now — three cuts, then a hike, all within 12 months), consecutive months' payouts will not be equal: a ladder built while rates were falling has monthly payouts that visibly *decline* rung by rung as older, higher-yield rungs mature and are replaced by newer, lower-yield ones — and the reverse in a rising-rate regime, which introduces a rung-to-rung "sawtooth" that a single blended-rate MMF or HYSA does not have. Weekly 26-week bill auction results also vary by roughly 5–15bp between consecutive auctions even absent a Fed move [unverified background knowledge, normal auction noise], so no two rungs land exactly on the same yield regardless.
- **A ladder's "auto-roll" is not confirmed to be a genuine zero-touch broker feature** — Round-1 flags this explicitly as an unverified Gap. If it isn't actually automatic fee-free at the user's specific broker, "zero work" quietly becomes a monthly login-and-reinvest chore, and a missed rollover (e.g., over a weekend/holiday) means a few days of that rung sitting idle at $0.

**Verdict:** all three vehicles deliver cash on a monthly cadence, so the *timing* half of "monthly consistency" is solid. The *amount* half is only as consistent as the underlying rate — which §1.1 and §1.4 show is not guaranteed — and the three vehicles transmit rate changes differently (MMF fastest/smoothest pass-through, HYSA steppy and bank-discretionary, ladder smoothed-but-sawtoothed). Round-1's claim should be read as "you'll get *a* payment every month," not "you'll get *the same* payment every month."

### 1.8 Recomputed capital-needed tables

**Capital required for $50/month NET ($600/year net) = 600 ÷ [yield × (1 − tax)]**

| Yield \ Tax rate | 0% | 15% | 22% (US federal) | 25% | 26.375% (DE, for reference) |
|---|---|---|---|---|---|
| 3.0% | $20,000 | $23,529 | $25,641 | $26,667 | $27,149 |
| 3.5% | $17,143 | $20,168 | $21,978 | $22,857 | $23,271 |
| 4.0% | $15,000 | $17,647 | $19,231 | $20,000 | $20,374 |
| 4.5% | $13,333 | $15,686 | $17,094 | $17,778 | $18,110 |

*[Author calculation; the 22% column reproduces Round-1's own figures exactly where they overlap — e.g. 4.33%/22% → $17,765, matching Round-1's T-bill-ladder number — confirming methodology consistency. The 26.375% column shows the task's assumed 15–25% ceiling is breached by a real country in Round-1's own data (Germany).]*

**Quick reference, gross $/month per $1,000 (pre-tax), for the four yields:** 3.0% → $2.50; 3.5% → $2.92; 4.0% → $3.33; 4.5% → $3.75.

**Vehicle robustness matrix** (synthesis of §1.1–§1.7):

| Risk | T-bill ladder | Top HYSA | Govt MMF |
|---|---|---|---|
| Fed/macro rate cut | Medium (6-mo smoothing) | High (reprices on bank's own timeline) | Highest (reprices in ~24 days) |
| Idiosyncratic issuer cut | None (US Treasury, not deposit-competing) | **High** (see Happen/Axos pattern, §1.5) | Low (large funds rarely need promo rates) |
| Tax treatment (US) | Best (state-tax exempt) | Worst (fully state + federal taxable) | Often partial state exemption if Treasury-heavy [unverified] |
| Minimum to open | $100/bill | $0–conditional (see §1.5) | $3,000 (VMFXX) |
| Recurring condition to keep the rate | None | **Some accounts: yes** (§1.5) | None |
| FX risk (non-US buyer) | High if USD | High if USD | High if USD |
| Payout amount consistency | Sawtooth-smoothed | Discrete bank-driven steps | Smoothest, fastest to fall |
| Genuinely zero-touch | High, *if* auto-roll confirmed | Highest | High |

---

## 2. Decision table by user situation

| Scenario | Exactly what to do | Expected net $/month | P(≥$50) at 3 mo | P(≥$50) at 6 mo | Time / steps |
|---|---|---|---|---|---|
| **(a) $0 capital** | Pursue the sole no-capital survivor: AI-agent-built portfolio of 20–40 pay-per-event Actors on Apify Store (see §4). Open a zero-condition HYSA (Bask, 3.75%, no minimum) day one and sweep every dollar of proceeds into it. | ~$0–8 (M3); ~$0–40, most likely $15–30 (M6) | **15–25%** (Round-1) | **35–50%** (Round-1) | ~1–2 hrs one-time human setup (Apify account, payout details, Creator Plan ~$6, API token, HYSA account) + 6–8 weeks of *agent* build time + annual tax filing |
| **(b) $1k–5k** | Same software path as (a), **plus** immediately park the $1–5k in a top HYSA/govt MMF to bank a guaranteed floor while the bridge ramps. | Cash floor $2.73 (@$1k) to $13.65 (@$5k) net, 22%/4.20%, plus software as in (a) | ~**20–30%** *[Author estimate: (a)'s odds, nudged up because less of the $50 must come from the volatile leg]* | ~**40–55%** *[Author estimate]* | (a)'s steps + ~30–60 min to open/fund the cash account |
| **(c) $5k–15k** | Max the cash account now with the full $5–15k (locks in $13.65–$40.95/month net near-certainly); run the software bridge *only* to cover the remaining gap ($9–36/month) — a much easier bar than the full $50. | @$5k: ~$14 cash + software; @$15k: ~$41 cash + software (Round-1: "$15k = $40.95, short of $50") | **25–70%**, rising with capital *[Author estimate: ~25–35% @$5k, ~40–50% @$10k, ~55–70% @$15k]* | **45–85%**, rising with capital *[Author estimate: ~45–60% @$5k, ~60–75% @$10k, ~75–85% @$15k]* | Cash-account steps (~30–60 min) run in parallel with (a)'s software steps |
| **(d) $15k–25k+** | Execute the Round-1 KEEP survivor directly — 6-rung 26-week T-bill ladder (~$17.8k) or top HYSA (~$18.3k) or govt MMF (~$20.6k). At $25k+, deliberately over-fund ~35–40% above the bare minimum as a buffer against §1.1/§1.4's rate-cut risk. No software bridge needed. | $50–70+/month; e.g. $25k @ 4.20% HYSA/22% tax = **$68.25**/month net (Round-1), and still ~$52/month net even after a 100bp APY cut (§1.1) | **90–95%** (Round-1's own rows: HYSA 92%, T-bill/MMF 95%) | **88–95%** (Round-1: HYSA 88%, T-bill/MMF 95%) | Fully one-time: account/KYC/W-9/fund/auto-roll, ~1–3 hrs total; genuinely near-zero ongoing (best match to the user's stated constraint) |
| **(e) owns RTX 4090/5090** | Install Salad (simplest) or, for technical users, a dedicated Vast.ai Linux host. Measure real watts with a wall meter for 30 days before trusting the income (Round-1's own recommendation). Apply the stop rule: 2 consecutive sub-$50 net months → stop. | **$27–65/month net, tax-consistent midpoint ~$41–49** — lower than Round-1's pre-tax-flavored "$55–65" (see §3.5 for why) | **~25–35%** *[Author estimate, revised down from Round-1's 40% to correct for tax treatment + wear + climate load — see §3]* | **~20–30%** *[Author estimate, revised down from Round-1's 35%; note this option's odds *fall* from 3→6 months, unlike every capital-building option, because platform/wear/rate risk accumulates while there is no ramp-up to offset it]* | ~30–60 min setup; **not** fully zero-touch ongoing — manual redemption, driver/OS updates, wear and heat monitoring (§3.6) |
| **(f) owns mid-range GPU (3060–4070-class)** | **Do not** pursue GPU sharing for this goal. Round-1: −$20 to +$15/month *gross of tax and wear* at US-average power, worse in UK/EU. After tax and hidden wear costs (§3.2), expected value is at or below zero. Default to whichever of (a)–(d) matches actual capital. | ~$0 (recommended not to run); ~$0–10, fragile, if attempted anyway | **~0–2%** | **~0–2%** | N/A — not recommended |

---

## 3. Stress-testing the GPU option

### 3.1 Electricity cost sensitivity at $0.10 / $0.20 / $0.30 per kWh

Re-running Round-1's own system-level power draws (assumed whole-system wattage under load, not GPU alone) at the three requested price points:

| System | Utilization | kWh/month | @ $0.10/kWh | @ $0.20/kWh | @ $0.30/kWh |
|---|---|---|---|---|---|
| RTX 3060 PC | 70% | 141 | $14.10 | $28.20 | $42.30 |
| RTX 3080 PC | 70% | 229 | $22.90 | $45.80 | $68.70 |
| RTX 4070 PC | 70% | 166 | $16.60 | $33.20 | $49.80 |
| RTX 4090 PC | 50% | 234 | $23.40 | $46.80 | $70.20 |
| RTX 4090 PC | 70% | 299 | $29.90 | $59.80 | $89.70 |
| RTX 5090 PC | 70% | 377 | $37.70 | $75.40 | $113.10 |

*[Author calculation from Round-1's kWh/month figures]*

**Net-of-power, before personal tax**, RTX 4090 at 70% utilization, across Round-1's three gross-revenue scenarios ($90/$115/$150):

| Power price | Gross $90 | Gross $115 | Gross $150 |
|---|---|---|---|
| $0.10/kWh | $60.10 | $85.10 | $120.10 |
| $0.20/kWh | $30.20 | $55.20 | $90.20 |
| $0.30/kWh | **$0.30** | $25.30 | $60.30 |

*[Author calculation]* At $0.30/kWh (much of the UK/EU per Round-1's own cited prices — UK ~26.3p ≈ $0.33–0.35/kWh depending on FX, per Round-1's Ofgem citation), the low end of the gross-revenue range is a wash *before tax even applies*.

**The RTX 5090 draws meaningfully more power than the 4090 at the same utilization** (377 vs. 299 kWh/month at 70%, a 78 kWh/$7.80–$23.40/month swing across these three price points) for a similar gross-revenue assumption in Round-1's notes. A bigger card is not automatically a better earner once its own power draw is priced in — the marketing framing ("up to $150/month," "$460/month for 4× 5090s") does not net out this asymmetry.

### 3.2 Wear and depreciation (a hidden cost Round-1 explicitly flagged but never quantified)

Round-1 lists "GPU and fan wear, and lower resale value" as a real but unpriced cost. A rough estimate: a card run at sustained 60–90% load for months is a different duty cycle than typical bursty gaming use, and used-GPU markets have historically discounted cards with known extended-full-load history (the pattern is well documented from the 2017–2022 crypto-mining GPU resale era) [unverified background knowledge — GPU prices were an explicit Round-1 research Gap, never priced]. If a new RTX 4090/5090 costs on the order of $1,600–2,000 [unverified background knowledge] and rental use costs an *incremental* ~10–15% of resale value versus gaming-only use, that is roughly **$160–300 of wear cost, or about $7–13/month if amortized over a 24-month rental period** — not captured anywhere in Round-1's or this document's revenue tables, and directly erosive to the already-thin margins in §3.5.

### 3.3 Noise, heat, and the climate multiplier Round-1 never quantified

A 4090/5090 at 60–90% sustained utilization draws roughly 450–575W+ at the GPU alone (Round-1's assumed board power) continuously — comparable to a mid-size space heater running 24/7, plus audible fan noise in whatever room houses it. Round-1 flags "extra air-conditioning load in summer" as a hidden cost but never sizes it. A rough physical estimate: essentially all of that electrical draw becomes heat, and a typical home AC unit needs roughly 1/3–1/2 as much *additional* electricity to remove a given amount of heat (a coefficient of performance around 2–3) [unverified background knowledge, standard HVAC estimate]. That implies an **effective electricity-cost multiplier of roughly 1.4–1.5× during AC season** in a hot climate — which is exactly the kind of climate (Israel, the US Sun Belt, southern Europe) the user might be in, given the country is unknown. Applied to the $0.20/kWh row in §3.1, the *effective* cost during several months a year could sit closer to the $0.30/kWh row — i.e. the AC season alone can push a "marginal" location into the "losing money" band for part of the year.

### 3.4 Platform rate-cut risk: Salad's own 12 Sep 2026 precedent

Round-1's central GPU case leans on a rate *increase* for the 4090/5090 class that happened just 16 days before this document's date, in the **same announcement** that *cut* rates for 15 other GPU classes:

> "12 Sep 2026 rate change: RTX 5090 and 4090 rates went up... Fifteen other GPU classes went down, mostly at those tiers." — Round-1, citing [SaladCloud blog, 12 Sep 2026](https://blog.salad.com/earning-rate-changes-september-2026/) [Official, via excerpt]

This is the GPU-market analogue of §1.4's bank-APY-cut risk, and arguably faster-moving: a compute marketplace's payout is a real-time function of customer demand, which the same announcement shows Salad is willing to move in *either direction* within a single update, for *specific GPU classes*, with no contractual floor. If the 12 Sep increase attracts more 4090/5090 owners (plausible, since Salad publicly marketed it), supply could rebalance and rates could reverse in the following months — the platform has already demonstrated the willingness to cut, just on different hardware classes in this instance.

### 3.5 The tax-treatment correction: why the "$55–65/month" framing overstates the case

Round-1's Section 9 explicitly states its GPU figures are **"before tax"**: *"Math at US-average 18.34¢: gross $90–150 minus electricity $43–67... = about $23–101/month before tax."* Its Section 7 scorecard, by contrast, states dollar figures generally assume 22% tax "unless noted." Comparing this pre-tax GPU range against the cash-yield tables' **net-of-tax** $50 target is not apples-to-apples — and it is exactly the kind of inconsistency a stress test exists to catch.

Applying tax to Round-1's own clean, paired table (§4, Section 4 of Round-1: $90 gross/60% util → $41 net-of-power; $115/60% → $66; $150/90% → $83, all before personal tax):

| Tax treatment | $41 case | $66 case | $83 case | Midpoint |
|---|---|---|---|---|
| **A: simple 22% (hobby/other income)** | $31.98 | $51.48 | $64.74 | **~$49.40** |
| **B: ~35% effective (self-employment tax applies)** | $26.65 | $42.90 | $53.95 | **~$41.17** |

*[Author calculation]* Under the *more favorable* tax treatment, the midpoint lands almost exactly **at** $50 — not comfortably above it, as Round-1's pre-tax "$55–65" framing implies. Under the less favorable treatment it is clearly below.

**Which treatment applies is genuinely unresolved** [unverified background knowledge, not tax advice — jurisdiction- and filer-specific]: if GPU-rental income is treated as a hobby/other-income, electricity may or may not be deductible against it (US hobby-expense deduction rules have been in flux around the TCJA's scheduled sunset and subsequent legislative changes); if treated as a self-employment activity (Schedule C in the US), electricity is deductible but the income is also subject to ~15.3% self-employment tax on top of ordinary income tax, which is the source of Scenario B's ~35% effective rate. Round-1 flagged tax rules generally as an unverified Gap; this GPU-specific hobby-vs-business distinction is a new, sharper version of that same gap, and it moves the central estimate by roughly $8/month at the midpoint — material against a $50 target.

**Revised odds:** combining this tax correction with §3.2 (wear) and §3.3 (climate multiplier), this document's estimate for RTX 4090/5090 net P(≥$50) is **~25–35% at 3 months and ~20–30% at 6 months** — down from Round-1's pre-tax-flavored 40%/35%, and preserving Round-1's own (unusual) finding that the odds *fall* over time rather than rise, because there is no ramp-up period to offset accumulating platform/wear/rate risk (contrast with the software bridge in §4, whose odds *rise* with time as the portfolio matures).

*Caveat: Round-1's own Section 9 range ($23–101/month before tax) is wider than its Section 4 paired table ($41–83) because the two sections pair different utilization assumptions for gross revenue vs. electricity cost — a minor internal inconsistency in Round-1 itself, and a second reason to treat any single GPU point-estimate as rough.*

### 3.6 Is it truly "zero-touch"? No — and less so than cash yield

Round-1 already rates GPU-sharing automation at 4/5, not 5/5. Concretely, beyond the financial marginality above, this option requires genuinely recurring human actions that cash yield does not:

1. Initial driver/OS setup (one-time, fine).
2. **Periodic driver and Windows updates**, which can interrupt jobs or force a reboot — recurring.
3. **Manual redemption** — Round-1's own setup instructions say "Redeem manually." This is a recurring cash-out action; a HYSA or T-bill ladder requires *no* equivalent action for the income to exist.
4. The **30-day wall-meter measurement and 2-month stop-rule check** that Round-1 itself recommends is, by definition, ongoing monitoring.
5. **Opportunity cost**: the PC is unavailable for its owner's own use (gaming, other work) while heavily loaded — not a cash cost, but a real one if it's meant to still be "their gaming PC."
6. Physical management of noise/heat (closing doors, moving the unit, seasonal adjustments) may require occasional intervention.

**Verdict:** cash yield requires *zero* recurring action for the income mechanism itself to keep functioning (only optional, elective rate-shopping). GPU sharing requires several small but real recurring actions. This is a category-level finding, independent of the dollar figures: GPU rental is a weaker match to "near-zero ongoing human work" than cash yield, not just a financially weaker option.

---

## 4. The bridge strategy: software income reinvested into a cash-yield buffer

### 4.1 Mechanism and assumptions

Round-1's sole no-capital survivor (`software_api_marketplaces.md`) is an AI-agent-built and -run portfolio of 20–40 pay-per-event Actors on Apify Store, targeting "about $62–75 a month in gross PPE revenue" to net roughly $50/month to the developer, with **P3 15–25%, P6 35–50%** of reaching that on its own. The bridge idea: instead of spending that income, sweep 100% of it every month into a top cash-yield account, so that even if the software channel is volatile, an increasingly large, increasingly certain cash floor builds underneath it.

**Modeled assumptions** (all **[Author model, illustrative]**, not sourced facts):

- Start: **$0 seed capital** (the hardest, most informative case — any actual seed capital scales the result roughly proportionally; see §2(b)/(c)).
- Software revenue (Apify-net, pre-personal-tax) follows three trajectories below; 22% personal tax applied to get spendable software income.
- Cash-buffer rate glide path (reflecting §1.1's genuine multi-year rate uncertainty): 4.20% (months 1–6) → 3.85% (7–12) → 3.60% (13–18) → 3.50% (19–24), gross-compounded monthly (a HYSA credits full interest into the account; tax is a separate, once-a-year cash event, not a monthly deduction from the balance).
- "Floor" = the buffer's own after-tax monthly yield at that point — i.e. spendable income if the software channel vanished entirely that month. This is the "near-certain" component the strategy is meant to build.

### 4.2 Base case — full 24-month model

| Month | Apify net (pre-tax) | Software after-tax | Buffer (end of month) | Buffer's own after-tax "floor" | Combined spendable |
|---|---|---|---|---|---|
| 1 | $0 | $0.00 | $0.00 | $0.00 | $0.00 |
| 2 | $0 | $0.00 | $0.00 | $0.00 | $0.00 |
| 3 | $5 | $3.90 | $3.90 | $0.01 | $3.91 |
| 4 | $12 | $9.36 | $13.27 | $0.04 | $9.40 |
| 5 | $20 | $15.60 | $28.92 | $0.09 | $15.69 |
| 6 | $30 | $23.40 | $52.42 | $0.14 | $23.54 |
| 7 | $35 | $27.30 | $79.89 | $0.21 | $27.51 |
| 8 | $38 | $29.64 | $109.79 | $0.29 | $29.93 |
| 9 | $40 | $31.20 | $141.34 | $0.37 | $31.57 |
| 10 | $42 | $32.76 | $174.55 | $0.46 | $33.22 |
| 11 | $44 | $34.32 | $209.43 | $0.55 | $34.87 |
| 12 | $46 | $35.88 | $245.98 | $0.62 | $36.50 |
| 13 | $47 | $36.66 | $283.38 | $0.66 | $37.32 |
| 14 | $48 | $37.44 | $321.67 | $0.75 | $38.19 |
| 15 | $49 | $38.22 | $360.86 | $0.85 | $39.07 |
| 16 | $50 | $39.00 | $400.94 | $0.94 | $39.94 |
| 17 | $50 | $39.00 | $441.14 | $1.05 | $40.05 |
| 18 | $51 | $39.78 | $482.24 | $1.16 | $40.94 |
| 19 | $51 | $39.78 | $523.43 | $1.10 | $40.88 |
| 20 | $52 | $40.56 | $565.52 | $1.19 | $41.75 |
| 21 | $52 | $40.56 | $607.73 | $1.29 | $41.85 |
| 22 | $53 | $41.34 | $650.84 | $1.38 | $42.72 |
| 23 | $53 | $41.34 | $694.08 | $1.48 | $42.82 |
| 24 | $54 | $42.12 | **$738.22** | **$1.68** | **$43.80** |

*[Author calculation. Apify-net trajectory: ramps through the Round-1-cited 6–8 week build period and "meaningful revenue by months 3–4," continuing to grow through month 12 as the agent adds Actors, plateauing near Round-1's own $50/month Apify-net target by month 24.]*

**The central, somewhat surprising finding:** even with full, disciplined reinvestment for 2 straight years, the base case never reaches $50/month combined (it ends at $43.80), and the buffer's *own* contribution is trivial throughout — **$1.68 of the final $43.80 is from the buffer (under 4%)**. This is not a modeling error; it is arithmetic: the base-case software channel contributes only ~$52 total across its first six months (less than one month's full target), so the cumulative reinvested pool never gets large. Reaching the ~$18–22k independence threshold (§1.8) from these monthly surpluses alone — at a pace of roughly $500–650/year of new contributions by year 2 — would take on the order of **25–35 more years**, not two.

### 4.3 Pessimistic and optimistic cases (quarterly checkpoints)

| Scenario | Metric | M6 | M12 | M18 | M24 |
|---|---|---|---|---|---|
| **Pessimistic** (Round-1's month-4 "kill criterion" — <$10/mo by M4 — is triggered; re-niche only partly recovers) | Software after-tax | ~$2.34 | ~$4.68 | ~$4.68 | ~$6.24 |
| | Buffer balance | ~$8 | ~$35 | ~$65 | ~$95 |
| | Buffer's own floor | ~$0.02 | ~$0.09 | ~$0.16 | ~$0.23 |
| | **Combined spendable** | **~$2.36** | **~$4.77** | **~$4.84** | **~$6.47** |
| **Optimistic** (software clears $50/mo net by ~M6, keeps growing via expanded Actor count + Apify-hosted MCP tools) | Software after-tax | $42.90 | $70.20 | $81.12 | $90.48 |
| | Buffer balance | $100.19 | $475.40 | $949.96 | **$1,489.90** |
| | Buffer's own floor | $0.25 | $1.11 | $2.16 | **$3.39** |
| | **Combined spendable** | **$43.15** | **$71.31** | **$83.28** | **$93.87** |

*[Author calculation, same compounding methodology as §4.2]*

**Even the optimistic case does not reach cash-yield independence within 24 months.** By month 24, the buffer has grown to ~$1,490 — real progress, but still under 8% of the ~$18–22k threshold, and it contributes under 4% of that month's combined income (the other 96%+ is still the software channel itself). Extrapolating the optimistic case's surplus-accumulation rate (roughly $1,000–1,500/year and slowly rising), full independence is on the order of **10–15 more years**, not months.

**The pessimistic case shows the bridge's floor without its promise:** if the software channel fails Round-1's own kill criterion, the buffer never accumulates meaningfully (~$95 by month 24, ~$0.23/month of its own), and the user is left exactly where §2(a) describes — back to needing outside capital or a different method entirely.

### 4.4 Synthesis: a "ratchet," not a shortcut to certainty

Three honest conclusions, none of which match a literal reading of "near-certain over time" within the 24-month horizon the task poses:

1. **The probability of hitting $50/month within 24 months is set almost entirely by the software leg**, not the buffer. In all three scenarios, the buffer's own floor stays under $3.50/month even at 24 months — nowhere near enough to move the needle on Round-1's 15–25%/35–50% software odds. **Adding the cash-yield bridge does not materially raise the probability of reaching $50/month inside two years.**
2. **What the bridge genuinely buys is a strictly non-shrinking floor** — a "ratchet." Once a month's software surplus is swept into the buffer, that increment is locked in as safe, compounding income even if a later month's software revenue drops to zero (a real risk — Round-1's own Section 3 shows how fast platform payouts can be cut). Without the bridge, a bad software month nets exactly $0 that month with nothing banked from the good months before it. With it, every prior good month keeps paying a little, forever. That is real risk reduction — just not fast, and not sufficient on its own to reach "near-certain" within 24 months.
3. **The fast, high-confidence path to independence is adding outside capital, not waiting for the bridge to compound on its own.** A user who also has (or later saves) even $5,000–10,000 from outside this plan and combines it with the software bridge lands in §2(c)'s much stronger 45–85% range almost immediately, rather than the 24-month models' 0–8% cash-independence figures above. Given the task states capital is unknown, this is the practical, honest recommendation: treat the software bridge as a genuine, low-cost bet worth running in parallel with whatever capital-building the user can do from other income — not as a substitute for it.

---

## 5. Final verdicts, with honest confidence

| Claim from Round-1 | This stress test's verdict |
|---|---|
| Government-backed cash yield is "near-certain" for $50/month | **Holds, narrowly, and only in nominal terms.** At ~$18–22k deployed in a top US HYSA/T-bill ladder/govt MMF, 90–95% confidence over 6 months is a fair read of the evidence (§1.8, §2d). But at current US rates/tax/inflation, real (inflation-adjusted) return is roughly **−0.1% to 0%** (§1.3) — the "$50/month" is mostly-to-entirely compensation for lost purchasing power, not wealth growth. A single 100bp rate move (smaller than 2025's actual 75bp of cuts) can cut realized income ~18–29% with zero action taken (§1.1) unless the user holds a buffer meaningfully above the bare minimum (§2d recommends ~$25k, not $18k). **Confidence in the nominal claim: ~90%. Confidence that this constitutes "free income" rather than "capital preservation with a disbursement": low — the real-terms math says otherwise.** |
| RTX 4090/5090 GPU rental is a coin-flip MAYBE (~35–45%) | **Weaker than stated.** Round-1's own figures mix pre-tax and post-tax accounting; tax-consistent, the net midpoint is ~$41–49/month, not $55–65 (§3.5), before wear (§3.2, ~$7–13/month) and climate-driven AC load (§3.3, up to 1.4–1.5× effective power cost in hot climates part of the year) are even added. Revised: **~25–35% at 3 months, ~20–30% at 6 months**, holding only at cheap power (≤$0.10–0.15/kWh) and a cool climate or good ventilation. It is also measurably less zero-touch than cash yield (§3.6). **Confidence this clears $50/month net for a typical US-power, average-climate user: well under 50% — a genuine coin-flip-or-worse, not a favorable bet, for someone who needs the $50 reliably.** |
| A no-capital software bridge, reinvested into cash yield, makes income "near-certain over time" | **Does not hold within 24 months.** The bridge does not materially raise the probability of hitting $50/month inside two years over the software channel's own odds (still Round-1's 15–25%/35–50%), because a ~$50–100/month income stream is simply too small relative to the ~$18–22k independence threshold to compound there quickly — full independence from reinvested proceeds alone is a **10–30+ year project**, not a 24-month one (§4.2–§4.4). What it *does* reliably deliver is a small, strictly non-shrinking income floor and real risk reduction against a total software collapse. **Confidence that this specific mechanism reaches near-certainty within 24 months: low (well under 20%). Confidence that it modestly and safely improves the odds versus doing nothing: high.** |
| Overall: "near-zero-work, consistent $50/month, legal and low-risk" | **Achievable with high confidence (~90%+) only for a user who already has ~$20–25k in liquid capital**, understood honestly as a nominal, roughly real-flat cash flow, not a growing income. **For a user without that capital, no combination of methods surveyed across both research rounds reaches even 50% confidence within 6 months.** The realistic best case at $0–15k capital is a genuine coin-flip (software bridge, 35–50% by month 6, higher if combined with whatever partial capital is on hand per §2b/§2c) or a weaker coin-flip (GPU rental, revised 20–30%), and true near-certainty is a multi-year, capital-driven outcome, not a near-term, work-avoidant one. |

---

## Appendix: sources and evidence tags used in this document

- **Round-1 primary sources**, quoted or recomputed from: `capital_hardware_resource_sharing.md` and `tasks_bounties_markets.md` (both in this folder), plus one figure sourced from `software_api_marketplaces.md` (the Apify PPE Actor portfolio, P3 15–25% / P6 35–50%, used in §4 and §2a).
- **New source this session (one successful WebSearch, as instructed):**
  - [usinflationcalculator.com, "US CPI August 2026: Inflation Picks Up as Gas Prices Surge"](https://www.usinflationcalculator.com/inflation/us-cpi-august-2026/100073342/) [Aggregator]
  - [CNBC, "CPI inflation report August 2026," 11 Sep 2026](https://www.cnbc.com/2026/09/11/cpi-inflation-report-august-2026.html) [Secondary]
  - Used for: US headline CPI 3.4% y/y (August 2026, unchanged from July), core CPI 2.4% y/y, gasoline +27.4% y/y — the real-vs-nominal calculations throughout §1.3 and §1.8.
- **[Author calculation]**: arithmetic derived from Round-1's cited rates/figures using stated, disclosed formulas (capital = $600 ÷ [yield × (1 − tax)]; real yield ≈ nominal after-tax yield − inflation; monthly buffer compounding as specified in §4.1).
- **[Author estimate]**: a probability or qualitative judgment this document assigns, distinct from a Round-1-sourced figure; always stated as a range and flagged as this document's own judgment, not measured data.
- **[unverified background knowledge]**: general knowledge (tax rules, HVAC physics, banking behavior, TreasuryDirect mechanics, IRC provisions, GPU resale patterns) not confirmed by any source read in this session or Round-1's. Flagged wherever used; the reader should verify anything decision-relevant with a local professional before acting, exactly as Round-1's own Gaps sections repeatedly recommend.
