# Task-Paying Programs and Market-Mechanics Bots: Can AI Automation Legitimately Capture ~$50/Month? (2025–2026)

**Method note (read first):** This session hit two limits. It ran out of web searches after 12 queries, and the network proxy blocked almost every domain except github.com and raw.githubusercontent.com. As a result:
1. Findings tagged **[search summary]** come from the search engine's summary of the linked page. The page itself could not be opened, so treat these as medium confidence. The URL is the page the summary was drawn from.
2. Findings from documents hosted on GitHub were read directly: curl, QEMU, Ghostty, tldraw, Expensify, the Numerai docs, Polymarket/agents, poly-maker, MLE-bench, and the Kalshi replication repo. So was the HackerOne *Hacker-Powered Security Report 2025/26* PDF, which was downloaded and turned into text.
3. Several sets of terms could NOT be retrieved: MTurk, Prolific, Outlier, DataAnnotation, Mercor, Swagbucks and other survey sites, bookmakers and matched-betting sites, Betfair's API pricing, bank-bonus terms, P2E games, and airdrop programs. Anything said about them is listed under **Gaps** as unverified background knowledge. Verdicts on those methods rest on reasoning about how the programs are built, not on quoted terms.
4. All probabilities, costs and capital figures in the scorecards are **the researcher's estimates (marked "est.")**, not sourced facts.

---

## Q1. Which methods (if any) are ToS-compliant when automated, profitable for a small player, AND automatable to near-zero effort?

### Takeaway
**No method in this category passes all three tests cleanly.** The programs that pay for tasks fall into two groups:
- Bug bounties and OSS bounties now require a human to check AI output, or they penalise and ban unattended AI submissions.
- Data labeling, surveys, microtasks, P2E and airdrops pay specifically for human judgement or a unique human identity.

Market-mechanics bots are legal and API-friendly in some countries, but the returns are negative or extremely skewed for small players. Only two capital-at-risk methods survive as **MAYBE**:
1. A passive, maker-only market-making bot on Kalshi or Polymarket, where the user's country allows it.
2. An automated Numerai tournament model backed by an NMR stake.

Neither is a reliable, *consistent* $50/month. Both look more like speculation than an "earning program".

### Cited Findings
- **Automation is being shut out of task bounties.**
  - Bugcrowd: researchers must manually verify the accuracy and reproducibility of any finding assisted by generative AI. "Automated or unverified outputs are not accepted as valid submissions." Bugcrowd has also added submission limits for accounts with little past performance. — [Bugcrowd blog](https://www.bugcrowd.com/blog/bugcrowd-policy-changes-to-address-ai-slop-submissions/); [Bugcrowd Docs – submission limit](https://docs.bugcrowd.com/researchers/reporting-managing-submissions/reporting-a-bug/submissions-limit/) [search summary]
  - Immunefi: "submitting AI-generated reports on Immunefi will result in a ban." Its rules prohibit AI-generated or automated-scanner reports that lack impact information. — [Immunefi on X](https://x.com/immunefi/status/1600889765448273920?lang=en); [Immunefi Rules](https://immunefi.com/rules/) [search summary]
- **Maintainers are closing the door on AI pull requests.**
  - QEMU policy is to "DECLINE any contributions which are believed to include or derive from AI generated content." — [QEMU code-provenance.rst](https://github.com/qemu/qemu/blob/master/docs/devel/code-provenance.rst)
  - tldraw turned off external pull requests on 15 Jan 2026 because of an influx of AI-generated PRs. — [tldraw #7695](https://github.com/tldraw/tldraw/issues/7695)
- **Prediction-market returns are negative for most people and concentrated at the top.**
  - Of about 2.5M Polymarket wallets, 84.1% lost money. — [TechFlow, citing The Defiant/Sergeenkov, Apr 2026](https://www.techflowpost.com/en-US/article/31018) [search summary]
  - In political markets from Dec 2025 to Feb 2026, 0.55% of profitable maker wallets captured 50% of maker gains. — [CoinDesk, 29 Apr 2026](https://www.coindesk.com/markets/2026/04/29/a-tiny-group-is-winning-on-polymarket-as-under-1-of-wallets-take-half-the-profits) [search summary]
- **The "maker" edge exists but is thin.** On Kalshi, makers do better than takers. The maker advantage on contracts priced at 50¢ or more is only about +2–2.6% gross. — [Bürgi, Deng & Whelan via SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5502658); [replication repo](https://github.com/Vladosyna/kalshi-makers-takers-persistence)
- **Some platforms explicitly support automation.**
  - Numerai documents an MCP server that works with Claude Code, Codex CLI and Cursor for creating and uploading models and submissions. — [Numerai docs – mcp.md](https://github.com/numerai/docs/blob/master/numerai-tournament/mcp.md)
  - Polymarket publishes a framework for autonomous trading agents. Its terms still bar US persons and other restricted jurisdictions, including when trading through the API or an agent. — [Polymarket/agents](https://github.com/Polymarket/agents)

### Inferences
**Summary matrix** (details and scorecards are in Q2–Q7):

| # | Method | ToS-OK if automated? | Profitable for a small player? | Near-zero effort? | Verdict |
|---|---|---|---|---|---|
| A1 | Autonomous AI bug-bounty agent | No | No | No | **ELIMINATE** |
| A2 | AI-assisted, human-verified bug hunting | Yes | Rarely | No | **ELIMINATE** (for this goal) |
| B1 | AI agent PRs for Algora/Opire/IssueHunt bounties | Mostly no | Low | No | **ELIMINATE** |
| B2 | Expensify-style bounties paid through Upwork | Human proposals required | Low | No | **ELIMINATE** |
| C1 | Kaggle prizes via AI agents | Generally yes | No (prize odds tiny) | Partly | **ELIMINATE** |
| C2 | Data-labeling / "AI trainer" work automated with AI | No | n/a | No | **ELIMINATE** |
| C3 | Numerai: automated model + NMR stake | Yes | Unknown, volatile | Yes | **MAYBE** |
| D1 | Directional AI forecasting bot (Polymarket/Kalshi) | Yes, where legal | No (most lose) | Yes | **ELIMINATE** |
| D2 | Prediction-market arbitrage bot | Yes, where legal | No, for small players | Yes | **ELIMINATE** |
| D3 | Passive maker/rebate market-making bot | Yes, where legal | Marginal, uncertain | Mostly | **MAYBE** |
| D4 | Betfair Exchange API bot | Yes, where available | Unproven | Yes | **ELIMINATE** |
| D5 | Bookmaker value-betting or arbitrage bots | No (unverified) | No | — | **ELIMINATE** |
| D6 | CEX/DEX arbitrage and MEV bots | Yes | No (professional competition) | Yes | **ELIMINATE** |
| D7 | Exchange grid/DCA bots | Yes | Not income (price exposure) | Yes | **ELIMINATE** |
| E1 | Matched betting / bonus hunting | No (bots barred – unverified) | One-off, declining | No | **ELIMINATE** |
| E2 | Bank/brokerage sign-up bonuses | Yes (done manually) | Yes for humans, mostly US | No | **ELIMINATE** (for zero-touch) |
| E3 | Cashback portals | n/a | Not income | — | **ELIMINATE** |
| E4 | Referral programs (automated) | No | — | — | **ELIMINATE** |
| F1–F5 | Surveys/GPT sites, MTurk/Prolific, ad-watching, P2E, airdrop farming | No | No | — | **ELIMINATE** |

- The pattern holds across the board. Where a program pays for *work*, it now either (a) screens out unattended AI output or (b) is buying something only a human can supply. Where a program pays for *market mechanics*, bots are allowed, but professional bots already take most of the edge.

### Gaps
- None of the program terms for surveys, microtasks, data labeling, bookmakers or bank bonuses could be read in this session (see Q6 and Q7).
- No 2025–26 study was found on how profitable small bots are in CEX/DEX arbitrage or grid trading.

---

## Q2. Bug bounties with AI agents (HackerOne, Bugcrowd, Intigriti, Immunefi): rules, acceptance, crackdowns, newcomer payouts

### Takeaway
Platforms tolerate AI as a research tool. They require a human to verify each finding, and they are actively rate-limiting or banning people who submit unverified AI output. Validity rates for AI-heavy submissions have collapsed. The best-known open-source program (curl) shut down in 2026 because of AI slop. Payouts are extremely concentrated among top researchers. An unattended AI agent run by a newcomer has close to zero legitimate expected income.

### Cited Findings
- **curl shut its bounty.** Before 2025, more than 15% of submissions were confirmed vulnerabilities. In 2025 that fell below 5%, "not even one in twenty was real". curl stopped accepting HackerOne submissions on 31 Jan 2026. Over six years the program paid $86,000 for 78 confirmed vulnerabilities. — [BleepingComputer](https://www.bleepingcomputer.com/news/security/curl-ending-bug-bounty-program-after-flood-of-ai-slop-reports/); [Daniel Stenberg, "The end of the curl bug-bounty," 26 Jan 2026](https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/); [The Register, 21 Jan 2026](https://www.theregister.com/security/2026/01/21/curl-shutters-bug-bounty-program-to-stop-ai-slop/5063039) [search summary]
- curl's maintainer was already considering dropping bounty awards in July 2025 to stop AI slop. — [The Register, 15 Jul 2025](https://www.theregister.com/2025/07/15/curl_creator_mulls_nixing_bug/) [search summary]
- curl's own policy file now says: "The curl project does not offer any rewards for reported bugs or vulnerabilities." It explains that bounties create perverse incentives leading to false reports. — [curl docs/BUG-BOUNTY.md](https://github.com/curl/curl/blob/master/docs/BUG-BOUNTY.md)
- **Bugcrowd crackdown.**
  - Bugcrowd saw a sharp rise in "AI slop": high-volume, lightly evidenced, templated reports. Over three weeks its queues grew by more than 334%, even after excluding legitimate reports.
  - It is updating submission policies, rate controls and detection, and it limits submissions from accounts with little past performance.
  - Researchers must manually verify AI-assisted findings, and "automated or unverified outputs are not accepted as valid submissions."
  - Sources: [Bugcrowd blog – policy changes](https://www.bugcrowd.com/blog/bugcrowd-policy-changes-to-address-ai-slop-submissions/); [Bugcrowd Docs – AI](https://docs.bugcrowd.com/researchers/onboarding/ai-privacy-security/); [Computing.co.uk, 2026](https://www.computing.co.uk/news/2026/security/bug-bounty-platforms-battle-ai-slop) [search summary]
- **Academic view.** A 2026 SSRN paper models bug-bounty screening under "AI-generated noise". It describes platforms exiting, tightening submission rules, investing in AI triage, and capping submissions per researcher. — [Akçura & Ozdemir, SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7369659) [search summary]
- **Immunefi (older, 2022–2023).**
  - It banned users who submitted ChatGPT-generated reports. It said no real vulnerability had been found through such reports and that they cited functions that did not exist. Bans tied to ChatGPT made up 21% of all banned accounts. — [The Block](https://www.theblock.co/post/240758/immunefi-chatgpt-generated-web3-bug-bounty-reports); [Immunefi on X](https://x.com/immunefi/status/1600889765448273920?lang=en) [search summary; 2022–23 data, possibly outdated]
  - The prohibition is now written into its rules: AI-generated or automated-scanner reports that lack impact information are prohibited. — [Immunefi Rules](https://immunefi.com/rules/) [search summary]
- **HackerOne *Hacker-Powered Security Report*, 9th edition (2025/26), read directly** — [PDF mirror](https://raw.githubusercontent.com/jacobdjwilson/awesome-annual-security-reports/main/Annual%20Security%20Reports/2025/HackerOne-Hacker-Powered-Security-Report-2025.pdf); [official page](https://www.hackerone.com/report/hacker-powered-security):
  - HackerOne programs paid $81M in the past 12 months, up 13% year on year. The top 10 programs paid $21.6M.
  - The top 100 all-time researchers have earned $31.8M, and the top 10 researchers $7.6M. The average yearly payout per active program is $42K.
  - For "total platform earnings in the last 12 months", the report gives an average researcher earning of **$39,500**, a median of **$13,800**, and a top earner at **$1,079,738**. The PDF text does not define who is counted. It is very likely researchers with earnings, so it does *not* describe newcomers.
  - The researcher survey covered 1,825 "active HackerOne researchers who have submitted at least one valid vulnerability report since June 1, 2024" (fielded 14 Jul–8 Aug 2025). That is survivorship-biased by design. Of those surveyed, **67% use AI or automation tools**.
  - "Hackbots": **49% of all hackbot reports were valid**. Hackbots "excel at pattern-matching and detecting surface-level flaws like reflected XSS, much like traditional scanners."
  - Caution: the report's headline "210% increase" refers to valid reports of vulnerabilities *in AI systems*. It is not about vulnerabilities *found by* AI.
- HackerOne's press release says autonomous hackbots submitted **more than 560 confirmed valid findings in 2025**. — [HackerOne press release](https://www.hackerone.com/press-release/hackerone-report-finds-210-spike-ai-vulnerability-reports-amid-rise-ai-autonomy) [search summary]
- **XBOW**, a venture-funded autonomous pentester, topped HackerOne's US leaderboard in mid-2025. Of about **1,060 submissions**: 130 were resolved, 303 triaged, **208 duplicates** and **209 informative**. The duplicate/informative share was about 39%. — [TechSpot](https://www.techspot.com/news/108473-ai-tool-xbow-becomes-first-non-human-top.html); [XBOW blog](https://xbow.com/blog/top-1-how-xbow-did-it); [TechRepublic](https://www.techrepublic.com/article/news-ai-xbow-tops-hackerone-us-leaderboad/) [search summary]

### Inferences
**Scorecard A1 — Fully autonomous AI bug-bounty agent submitting to HackerOne/Bugcrowd/Intigriti/Immunefi → ELIMINATE**
- (a) Automation after setup: **1/5.** Bugcrowd requires manual verification and rejects "automated or unverified outputs", and Immunefi bans AI-generated reports. An unattended pipeline therefore cannot legitimately submit.
- (b) Unavoidable human steps: platform account, identity and tax forms, and a payout method. On top of that, a skilled person must reproduce and verify *every* finding. That is ongoing expert work, which breaks the user's constraint.
- (c) Cost: no capital at risk. Est. $20–$300/month for LLM/API and infrastructure. Reputation/"signal" is also at risk: low-signal accounts get capped.
- (d) Time to first dollar: est. months, often never, for a novice. Time to $50/month: est. not reached.
- (e) P(≥$50/month net): **3 months ≈ 1–2%; 6 months ≈ 2–3% (est.).**
  - A well-funded, specialised team (XBOW) had only about 12% of submissions resolved and about 39% duplicate or informative.
  - Hackbots' strength is surface bugs like XSS, which are the most heavily duplicated class.
  - Validity rates are collapsing (curl below 5%), and newcomer accounts face submission limits.
- (f) Consistency: very low. Payouts are lumpy and winner-take-most (the top 100 all-time earners hold $31.8M).
- (g) ToS/legal risk: **high.** Bans (Immunefi), rate limits (Bugcrowd), and the risk of testing out-of-scope assets, which could fall under computer-misuse laws (see Gaps).
- (h) Evidence quality: high for policy and trends. No data exists on what newcomers earn.
- (i) 2025–26 trend: strongly negative for unattended AI submissions. curl closed in Feb 2026, Bugcrowd cracked down in 2026, and platforms are tightening. Meanwhile funded hackbot companies are raising the competition.

**Scorecard A2 — AI-assisted but human-verified bug hunting → ELIMINATE (for this goal)**
- (a) **1/5**. (b) Many weekly hours of skilled human work. (c) Near-zero cash cost.
- (d) Months to a first valid bounty for a beginner (est.).
- (e) **3 months ≈ 2%; 6 months ≈ 5% (est.)** for someone who is not a security professional. The competition is 67% AI-assisted veterans.
- (f) Lumpy. (g) Low ToS risk if in scope. (h) Medium. (i) Competition is rising.
- This is a legitimate path only for someone willing to become a security researcher. It fails "near-zero effort".

### Gaps
- Intigriti's AI and automation policy could not be retrieved.
- Program-level bans on automated scanning are common in HackerOne/Bugcrowd scopes (background knowledge), but no specific quote was retrieved.
- No newcomer earnings distribution was found, for example the share of first-year accounts that earn anything.
- Web3 audit contests (Code4rena, Sherlock, Cantina) were not researched. Code4rena's former automated "bot races" might be relevant history.
- HackerOne's own written rule on AI-generated reports was not retrieved. Only the press release and HPSR were available.

---

## Q3. Open-source bounties (Algora, Opire, IssueHunt, Gitcoin, Expensify): AI-agent submissions, acceptance, maintainer policies, competition

### Takeaway
OSS bounties are small: roughly $20–$400 per issue in the sampled repo. They pay only when a PR is merged, and several people compete for each one. In 2025–26 maintainers turned sharply against unsolicited AI PRs: bans, mandatory disclosure, public "denouncement" lists, and PRs switched off entirely. Some maintainers run their own AI bots with priority, and Algora's terms reportedly forbid robotic access. An autonomous bounty-farming agent is ELIMINATE.

### Cited Findings
- **How Algora works.** Algora is a GitHub app for bounties and tips on issues and PRs. It pays out when PRs are merged and handles payouts, compliance and 1099s. — [algora-io/algora](https://github.com/algora-io/algora) [search summary]
- **Algora terms and AI policies (secondary source).** A GitHub issue now returning 404 claimed that "Algora terms prohibit robotic access". It also claimed that among projects with a written policy, 37 ban AI contributions outright and 72 allow them only with conditions, usually disclosure. — [joyelgeorge/Taskman #194](https://github.com/joyelgeorge/Taskman/issues/194) [search summary; low-quality secondary source, not verified against Algora's terms]
- **2026 maintainer backlash, as reported.** Drive-by LLM-generated PRs are flooding popular repos. Ghostty went zero-tolerance, tldraw auto-closed external PRs, and Codeberg banned AI-heavy repositories by a 71% vote. — [DEV Community, "AI slop killed the open-source bug bounty"](https://dev.to/ritabratamaiti/ai-slop-killed-the-open-source-bug-bounty-2o64) [search summary]
- **Ghostty's AI policy (read directly):**
  - "All AI usage in any form must be disclosed."
  - "The human-in-the-loop must fully understand all code… If you can't explain what your changes do… do not contribute."
  - "Bad AI drivers will be denounced," and they are added to a public list that "will block all future contributions."
  - Source: [Ghostty AI_POLICY.md](https://github.com/ghostty-org/ghostty/blob/main/AI_POLICY.md)
- **tldraw** began auto-closing external PRs on 15 Jan 2026. Most AI-generated PRs "suffer from incomplete or misleading context, misunderstanding of the codebase, and little to no follow-up engagement from their authors." Its CONTRIBUTING file now says "Pull requests are turned off for this repository." — [tldraw #7695](https://github.com/tldraw/tldraw/issues/7695); [tldraw CONTRIBUTING.md](https://github.com/tldraw/tldraw/blob/main/CONTRIBUTING.md)
- **QEMU** declines any contribution believed to include or derive from AI-generated content. — [QEMU code-provenance.rst](https://github.com/qemu/qemu/blob/master/docs/devel/code-provenance.rst)
- **Expensify's paid-issue program:**
  - Proposals are reviewed on a first-come basis for "the earliest provided, best proposed solution." Expensify's own **MelvinBot proposals receive priority review**.
  - Contributors are hired and paid through Upwork.
  - New contributors may work only one job at a time. "ALL NEW PROPOSALS MUST BE DIFFERENT FROM EXISTING PROPOSALS." "You are accountable for all AI output you submit."
  - There is a **50% penalty per regression**.
  - Source: [Expensify/App CONTRIBUTING.md](https://github.com/Expensify/App/blob/main/contributingGuides/CONTRIBUTING.md)
- **Bounty sizes sampled:** tscircuit's Algora "💎 Bounty" issues (Sept 2025) ranged from **$20 to $400**. Examples: $20, $40, $50, $100, $150, $200, $400. — [tscircuit bounty issues](https://github.com/tscircuit/tscircuit/issues?q=is%3Aissue%20label%3A%22%F0%9F%92%8E%20Bounty%22)

### Inferences
**Scorecard B1 — AI agent autonomously solving Algora/Opire/IssueHunt bounties → ELIMINATE**
- (a) Automation: **1–2/5.** An agent can write the code. But disclosure and the rule that a human must understand the code (Ghostty), outright bans (QEMU), closed PRs (tldraw) and Algora's reported ban on robotic access make unattended submission non-compliant on many repos.
- (b) Human steps: GitHub account, payout onboarding, and answering review comments. The review back-and-forth is ongoing human work.
- (c) Cost: no capital. Est. $20–$200/month in LLM costs.
- (d) First dollar: weeks to months, if ever. $50/month: est. not reliably reached.
- (e) P(≥$50/month net): **3 months ≈ 3%; 6 months ≈ 5% (est.).** Bounties are small ($20–$400), paid only on merge, and several people attempt each one. Maintainers' own bots get priority (MelvinBot). Bans and denouncement lists put the account at risk.
- (f) Consistency: low. Supply of suitable bounties is irregular.
- (g) ToS risk: **high** (denouncement, bans, platform terms).
- (h) Evidence: medium. Maintainer policies are primary sources, but there is no data on competition per bounty or acceptance rates.
- (i) Trend: strongly negative (the January 2026 wave of PR shutdowns and zero-tolerance policies).

**Scorecard B2 — Expensify-style bounties paid through Upwork → ELIMINATE.**
- Proposals are human-evaluated, first come first served.
- The maintainer's own AI bot is prioritised.
- Payment requires a human Upwork account and engagement.
- Regressions cost 50% of the payout.
- Automation 1/5. P(≥$50/month) at 3 or 6 months is **under 5% (est.)**.

**Scorecard B3 — Gitcoin / IssueHunt / Opire → ELIMINATE (unverified).**
- No current data on activity or AI rules was retrieved (see Gaps).
- The same maintainer-policy barriers apply to any platform whose payout depends on a maintainer merging an AI PR.

### Gaps
- Competition per bounty (the number of "/attempt" claims per Algora bounty) could not be measured. GitHub search was restricted in this session, and issue pages rendered without comments.
- Algora's actual terms text was not retrieved.
- Gitcoin's current status could not be verified in this session. Background knowledge says its original bounties marketplace was wound down years ago in favour of grants. Opire and IssueHunt activity levels and AI rules were also not retrieved.
- Expensify's standard bounty amount and its "AI Etiquette" guide were not retrieved.

---

## Q4. Competitions and AI-training work (Kaggle; Outlier, DataAnnotation, Mercor; plus Numerai as an automation-native alternative)

### Takeaway
Kaggle-style prizes are a lottery aimed at the very top places, now contested by strong AI agents, so they are ELIMINATE. Data-labeling and "AI trainer" platforms exist to buy *human* judgement, so automating them with AI is non-compliant and plausibly fraudulent: ELIMINATE. Numerai is the one competition-style program built for automation (API, auto-staking, and an MCP server that supports Claude Code). It requires staking NMR crypto that can be burned, returns for ordinary stakers could not be verified, and income is volatile. MAYBE.

### Cited Findings
- **MLE-bench leaderboard (OpenAI's benchmark of 75 offline Kaggle competitions):**
  - Top agents in Feb–Mar 2026 score about **63–64% overall**: Famou-Agent 2.0 with Gemini-3-Pro scored 64.44 ± 1.18 (23 Feb 2026), and AIBuildAI with Claude Opus 4.6 scored 63.11 ± 0.44 (6 Mar 2026). They score about 77–80% on the "Low" complexity split.
  - Runs are typically 24 hours.
  - Maintainers stopped taking new leaderboard submissions on 24 Apr 2026.
  - Source: [openai/mle-bench](https://github.com/openai/mle-bench)
- **Numerai payout mechanics:**
  - "payout = stake * clip(payout_factor * (score), -0.05, 0.05)". The maximum payout or burn per round is capped at ±5%, and "If you have a negative score a portion of your stake will burn."
  - payout_factor = min(1, stake_threshold / total_at_risk). The thresholds are 72,000 NMR (Numerai), 36,000 (Signals) and 10,000 (Crypto).
  - Source: [Numerai docs – staking.md](https://github.com/numerai/docs/blob/master/numerai-tournament/staking.md)
- **Numerai 2026 "atomic blockchain staking":**
  - Migration started 18 Jun 2026 for Crypto and 10 Jul 2026 for Numerai and Signals.
  - Stakes are "locked atomically per round". Rounds take "1–3 months to resolve". Claims are "automatically processed" and "re-staked in the next open round".
  - Source: [Numerai docs – atomic-blockchain-staking.md](https://github.com/numerai/docs/blob/master/numerai-tournament/atomic-blockchain-staking.md)
- **Numerai MCP server:** supports Codex CLI, Cursor and Claude Code. It lets an agent create and upload models and submissions and monitor performance, using API-key scopes such as "Upload submissions and pickled models." The docs repo was archived on 15 Jul 2026, so some pages may be out of date. — [Numerai docs – mcp.md](https://github.com/numerai/docs/blob/master/numerai-tournament/mcp.md)

### Inferences
**Scorecard C1 — Kaggle prizes via an autonomous AI agent → ELIMINATE**
- (a) Automation: **3/5 technically**. Agents can run end-to-end pipelines, but claiming a prize requires human identity and paperwork (see Gaps).
- (b) Human steps: account, accepting each competition's rules, and prize KYC and tax forms.
- (c) Cost: est. $0–$100+/month for compute. No capital at risk.
- (d) First dollar: months (a competition has to finish). $50/month: effectively never on a *consistent* basis.
- (e) P(≥$50/month net): **3 months <1%; 6 months ≈1–2% (est.).**
  - MLE-bench "medals" on replayed past competitions are not prize money. Prizes go to a handful of top places.
  - Live leaderboards now include the same frontier agents plus expert humans.
  - A single prize, if one ever came, would be lumpy rather than recurring.
- (f) Consistency: very low.
- (g) ToS risk: low. AutoML and LLM tools are generally allowed, but rules vary by competition (see Gaps).
- (h) Evidence: low to medium. There is good evidence on agent capability but none on prize odds.
- (i) Trend: rapidly improving agents make prizes *more* contested.

**Scorecard C2 — Data-labeling / "AI trainer" platforms (Outlier, DataAnnotation, Mercor, Alignerr, Remotasks, and similar) automated with AI → ELIMINATE**
- (a) **0/5 legitimately.** The product being sold is human-generated judgement, so AI-generated answers misrepresent the work.
- (b) Identity verification, skill assessments, and per-task human work.
- (c) No cash cost.
- (e) **About 0%** compliant probability.
- (g) ToS/fraud risk: very high. Expect account termination and withheld pay (specific terms unverified; see Gaps).
- (h) Evidence: low in this session. The logic is strong.
- (i) Trend: not verified.

**Scorecard C3 — Numerai tournament (AI-built model with automated submissions and an NMR stake) → MAYBE (speculative, capital at risk)**
- (a) Automation: **4/5.** There is an official API and automated compute, an MCP server that supports Claude Code, and automatic re-staking under atomic staking. Only occasional monitoring or retraining is needed.
- (b) Human steps:
  - create the account
  - buy NMR through a KYC'd exchange
  - set up a wallet
  - set the per-round stake
  - file taxes
- (c) Capital at risk:
  - The whole stake is at risk. Each round can burn up to 5% of stake. NMR's own price can move independently.
  - Est. a **$3k–$10k stake** is needed to target $50/month, assuming an average net of about 0.5–1.5% per month. That return assumption is itself unverified.
  - Running cost est. $0–$20/month.
- (d) Time to first payout: about 1–3 months, because rounds take that long to resolve. Time to $50/month: only with a large stake *and* a model that adds value over the meta-model.
- (e) P(≥$50/month net):
  - With a $3–5k+ stake: **3 months ≈ 5–10%; 6 months ≈ 10–20% (est.)**.
  - With a stake under $1k: **about 0–5%**.
  - Reason: payouts scale with stake, typical staker returns are unknown, and the token's price swings dominate.
- (f) Consistency: **low.** Rounds can swing between −5% and +5% of stake, on top of token-price moves.
- (g) ToS risk: low, because automation is supported. Regulatory and tax treatment of a crypto token varies by country (unverified).
- (h) Evidence: medium on mechanics (official docs). **None on realised returns** (see Gaps).
- (i) Trend: moving toward automation (MCP for agents in 2026; atomic staking June–July 2026).

### Gaps
- **Terms not retrieved** for Outlier, DataAnnotation, Mercor or Prolific (Q7). Background knowledge, unverified here: these platforms' guidelines forbid using ChatGPT or other AI to produce task answers and they run detection. Scale AI and Outlier also saw client and workload turbulence in 2025. The report writer should confirm these from the primary terms.
- Kaggle's rules on automated ML tools, prize eligibility, KYC and code-licence requirements were not retrieved. Nor were typical team counts per competition.
- Numerai: no data on median or average staker return for 2025–26. Also unverified: country restrictions on staking, whether the round schedule is daily or weekly, NMR price history, and minimum stake size.
- Other automation-native "earn by model" networks were not researched: CrunchDAO, Bittensor subnets, Allora.

---

## Q5. Prediction markets, betting exchanges and crypto bots (Polymarket, Kalshi, Betfair API, DEX/CEX arbitrage, grid bots)

### Takeaway
Bots are *allowed* on Polymarket's and Kalshi's APIs where the user's country is permitted. But the evidence shows most wallets lose money, that arbitrage and maker profits go to a tiny set of automated wallets, and that 2026 taker fees eroded the simple edges further. Makers do earn more than takers, with a modest positive edge on contracts priced at 50¢ or more, and Polymarket now pays maker rebates. So a *passive maker bot* is the only market-mechanics idea that is not dead on arrival. It is a MAYBE: capital at risk and inconsistent. Directional forecasting bots, arbitrage bots, Betfair bots, CEX/DEX arbitrage and MEV, and grid bots are ELIMINATE. Country access is a hard gate: Kalshi restricts 38 jurisdictions including the UK, Canada and France, and Polymarket's international site bars US persons and others.

### Cited Findings
- **Arbitrage study (IMDEA Networks).**
  - Covers 86 million Polymarket bets from April 2024 to April 2025. Arbitrageurs extracted **about $40 million**.
  - The **top three wallets** placed more than 10,200 bets between them and made **$4.2M**, showing "bot-like behaviour".
  - Political markets, especially the 2024 US election, were the most exploited.
  - Posted to arXiv on 5 Aug 2025.
  - Sources: [DL News](https://www.dlnews.com/articles/markets/polymarket-users-lost-millions-of-dollars-to-bot-like-bettors-over-the-past-year/); [Yahoo Finance](https://finance.yahoo.com/news/polymarket-users-lost-millions-dollars-143016473.html) [search summary]
- **Profit concentration.** In political markets from Dec 2025 to Feb 2026:
  - 0.55% of profitable maker wallets captured 50% of maker gains.
  - 0.26% of winning taker wallets captured about the same share.
  - Each of those groups took roughly $8M of about $16M in profit.
  - Solidus flagged signs of **wash trading and possible POLY airdrop farming**.
  - Source: [CoinDesk, 29 Apr 2026](https://www.coindesk.com/markets/2026/04/29/a-tiny-group-is-winning-on-polymarket-as-under-1-of-wallets-take-half-the-profits) [search summary]
- **Loss rates.**
  - Andrey Sergeenkov analysed 2.5 million Polymarket wallets: **84.1% lost money** and fewer than 16% had any positive return. The biggest profits went to automated strategies (arbitrage bots, market-making algorithms, HFT). Manual retail traders "typically enter positions only after prices have already adjusted." — [TechFlow, Apr 2026](https://www.techflowpost.com/en-US/article/31018) [search summary]
  - Bloomberg found **more than 100,000 wallets lost at least $1,000**, nearly double the number that gained as much. — [Finance Magnates](https://www.financemagnates.com/fintech/100000-polymarket-wallets-lost-at-least-1000-bloomberg-analysis-shows/) [search summary]
- **Polymarket fees (2026).** Polymarket historically charged no trading fees.
  - **Fee Structure V2 (effective 30 Mar 2026)** added taker-fee coefficients by category: crypto 0.07, sports 0.03, finance/politics/mentions/tech 0.04, economics/culture/weather/other 0.05. Geopolitics and world events remain fee-free.
  - **Makers pay zero** and get **rebates**. The share of taker fees returned to makers is 25% in most categories, 20% in crypto, and 15% in sports after a July 2026 update. Rebates are distributed daily.
  - The **US exchange** (effective 3 Apr 2026) uses a uniform taker coefficient of 0.05 and a maker rebate of −0.0125, capped at $1.25 per 100 contracts at 50¢.
  - A new taker rebate program returns 3–50% of fees across 7 volume tiers.
  - Sources: [StartPolymarket fee guide](https://startpolymarket.com/learn/polymarket-fees/); [Polymarket Help – Trading Fees](https://help.polymarket.com/en/articles/13364478-trading-fees); [Polymarket Help – Maker Rebates](https://help.polymarket.com/en/articles/13364471-maker-rebates-program); [MarketMath](https://marketmath.io/news/polymarket-taker-rebate-program-2026) [search summary; official pages could not be opened]
- **Polymarket jurisdiction.** Its terms "prohibit US persons and persons from certain other jurisdictions from trading on Polymarket (via UI & API and including agents developed by persons in restricted jurisdictions)." — [Polymarket/agents README](https://github.com/Polymarket/agents)
- **Open-source maker bot warning.** The poly-maker README says: "Market making on Polymarket is competitive and can lose money. This is a reference implementation and a research harness, not a guaranteed-profitable product." The bot quotes maker-only, post-only orders. — [warproxxx/poly-maker](https://github.com/warproxxx/poly-maker)
- **Kalshi economics (Bürgi, Deng & Whelan, 2025/26 working paper).**
  - Prices are informative but show a **favourite–longshot bias**.
  - Buyers of contracts priced **under 10¢ lose more than 60%** of their money. Contracts above 50¢ earn a small positive return.
  - **Makers earn more than Takers.** Both lose on cheap contracts, but Takers lose substantially more.
  - Sources: [SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5502658); [UCD working paper](https://www.ucd.ie/economics/t4media/WP2025_19.pdf); [CEPR VoxEU](https://cepr.org/voxeu/columns/economics-kalshi-prediction-market) [search summary]
- **Independent replication (read directly).**
  - Maker advantage on contracts at 50¢ or more: +2.6% gross in the original paper, +2.09% in the replication.
  - Kalshi "began to charge fees on Makers after April 2025" on a per-series basis, covering 8.0% → 14.4% of in-scope markets (61% → 66% of volume).
  - After that change, the maker advantage at 50¢ or more was **+2.40% gross** and "never crosses zero across the plausible fee band."
  - Source: [Vladosyna/kalshi-makers-takers-persistence](https://github.com/Vladosyna/kalshi-makers-takers-persistence)
  - **Conflict on sample size:** the search summary says "over 300,000 contracts", while the replication cites the original as "33,222 contracts, 10,061 events, 124,732 Yes prices". These may be different paper versions or different units.
- **Kalshi international access.**
  - On 10 Oct 2025 Kalshi announced expansion to more than 140 countries. Its availability page lists 143 supported countries, and **38 jurisdictions are restricted, including Canada, France, Poland, Russia, Singapore, Taiwan, Thailand, the United Kingdom and Venezuela**. — [CoinPerps](https://www.coinperps.com/learn/kalshi-restricted-countries); [Laika Labs](https://laikalabs.ai/prediction-markets/kalshi-legal-supported-restricted-countries) [search summary]
  - After launch, users in India, Brazil and Nigeria reported they could not sign up. — [Sportico](https://www.sportico.com/business/sports-betting/2025/kalshi-international-countries-access-1234874388/) [search summary]
  - India's August 2025 online gaming law "effectively bans almost all types of online wagers". — [Sportico](https://www.sportico.com/business/sports-betting/2025/kalshi-china-india-access-launch-1234873579/) [search summary]

### Inferences
**Scorecard D1 — Directional AI forecasting bot (buys when it "disagrees" with the price) → ELIMINATE**
- (a) Automation: **5/5 technically.**
- (b) Human steps: KYC'd account (Kalshi) or wallet plus USDC (Polymarket), funding, and a country check.
- (c) Capital at risk: everything deployed. 2026 taker-fee coefficients of 0.03–0.07 on Polymarket, plus fees on Kalshi.
- (d) First dollar: days, but it can just as easily be a first loss.
- (e) P(≥$50/month net): **3 months ≈ 5%; 6 months ≈ 5% (est.)**. That is roughly the odds of luck: 84% of wallets lose, and takers do worst, especially on longshots.
- (f) Very low consistency.
- (g) Legal only where permitted: Polymarket's international site bars US persons and others including via API, Kalshi restricts 38 jurisdictions, and India bans online wagering.
- (h) Medium-high evidence: several on-chain analyses and an academic paper, mostly via summaries.
- (i) More bots and new fees: negative.

**Scorecard D2 — Prediction-market arbitrage bot (within one market or across venues) → ELIMINATE**
- (a) **5/5 technically.**
- (b) Cross-venue arbitrage needs accounts on both venues, which many countries cannot hold at once (for example, a UK resident is barred from Kalshi).
- (c) Capital stays locked until markets resolve. Fees apply. There is a risk that two venues resolve "the same" event differently (inference).
- (d) First dollar in days. $50/month is unlikely.
- (e) **3 months ≈ 3–5%; 6 months ≈ 3–5% (est.).** About $40M of arbitrage went mostly to high-frequency wallets (three wallets took $4.2M), and the 2026 fees shrink the gaps that remain.
- (f) Low. (g) Same as D1. (h) Medium-high. (i) Negative.

**Scorecard D3 — Passive maker-only market-making bot (earning the spread plus maker rebates / liquidity rewards) on Kalshi or Polymarket → MAYBE**
- (a) Automation: **4/5**. It needs monitoring, a kill-switch, handling of API changes, and pausing before news events.
- (b) Human steps: KYC or wallet, funding, and confirming the country is allowed.
- (c) Capital at risk: est. $2k–$10k. Losses come from adverse selection (informed takers hit your quotes before news) and binary resolution risk. VPS est. $5–$20/month.
- (d) First dollar: days, since Polymarket distributes maker rebates daily. $50/month: uncertain, months.
- (e) P(≥$50/month net): **3 months ≈ 10%; 6 months ≈ 10–20% (est.).**
  - For: the *average* maker edge is modestly positive (+2.1% to +2.6% gross on contracts at 50¢ or more, and it survived Kalshi's maker fees), and rebates return 15–25% of taker fees.
  - Against: maker profits are extremely concentrated (0.55% of maker wallets took 50%), the open-source bot's author warns it "can lose money", and a naive bot is likely below average.
- (f) Consistency: low to moderate. News days can wipe out weeks of spread (est.).
- (g) Legal and API-permitted where available. Self-trading or wash trading to farm rebates would be manipulation and is excluded.
- (h) Medium. (i) Mixed: 2026 fees fund maker rebates (positive), but professional competition is growing (negative).

**Scorecard D4 — Betfair Exchange API bot → ELIMINATE**
- (a) **5/5 technically.**
- (b) Account and KYC, plus buying a live API key for a one-time fee (amount not verified in this session).
- (c) Capital at risk, exchange commission, and a possible "Premium Charge" on consistent winners (unverified).
- (e) **3 months ≈ 2–5%; 6 months ≈ 3–5% (est.)**. No evidence was found that small bots make money, and professional in-play bots dominate (inference).
- (g) Available only in some countries. Betfair Exchange does not serve the US (background knowledge, unverified).
- (h) Low.

**Scorecard D5 — Sportsbook value-betting or arbitrage bots → ELIMINATE.** Bookmaker terms typically forbid automated software, and winning accounts get stake-limited (unverified; see Gaps). Gambling legality varies by country. It fails the ToS test outright.

**Scorecard D6 — CEX–CEX / DEX arbitrage and MEV bots → ELIMINATE.**
- (a) 5/5 technically, but competing requires latency, capital and specialised infrastructure.
- The closest verified evidence is from prediction markets: arbitrage profits concentrate in a few high-frequency wallets.
- No 2025–26 evidence was found that small arbitrage or MEV bots make money after gas and fees.
- There is also smart-contract, exchange and hack risk.
- P(≥$50/month net) **≤5% at 3 and 6 months (est.)**.

**Scorecard D7 — Exchange grid/DCA bots (e.g., Pionex, Binance, 3Commas) → ELIMINATE as "income."**
- Returns come mainly from the underlying asset's price path (inference). In a trending-down market the bot keeps buying into the fall.
- No verified evidence of consistent net profit was found.
- P(consistent ≥$50/month net) **≈5–10% (est.)**, and that depends on market direction, not on any edge.

### Gaps
- Polymarket's official geoblock list (docs.polymarket.com) and help-centre pages could not be opened. Background knowledge (unverified): besides US persons on the international platform, restricted places have included France, Belgium, Poland, Singapore, Thailand, Taiwan and Ontario. Confirm before recommending.
- Also unverified: when Polymarket US launched, and who is eligible for it (the US fee schedule effective April 2026 implies it operates).
- Kalshi's current fee formula, its interest paid on balances, and its liquidity-incentive program were not retrieved.
- Not retrieved: Betfair's API live-key fee, its Premium Charge thresholds, and its country availability.
- No rigorous 2025–26 study of retail crypto grid, arbitrage or MEV bot profitability was found.
- There is no data on the *median* maker-bot outcome on Polymarket or Kalshi. The positive maker numbers are averages across all makers, including professionals.

---

## Q6. Matched betting / bonus hunting, bank and brokerage sign-up bonuses, cashback, referral programs

### Takeaway
None of these can run at near-zero effort within the rules.
- Matched betting and bonus hunting need a person to open accounts and place bets at bookmakers, whose terms typically bar automation and "bonus abuse". Offers are finite and accounts get restricted.
- Bank and brokerage bonuses are legal and genuinely profitable for a *human* (mainly in the US). Each bonus needs a new application, KYC and qualifying activity, so it is recurring human work.
- Cashback is a discount on real purchases, not income.
- Automated referral spam or fake referrals break the rules.
All ELIMINATE for the zero-touch goal.

### Cited Findings
- No primary sources for this cluster could be retrieved: the search budget was exhausted and the relevant sites were blocked.
- The only related verified finding is that surveillance firms now flag wash trading and possible airdrop farming on a major platform. That points to active detection of incentive gaming. — [CoinDesk, 29 Apr 2026](https://www.coindesk.com/markets/2026/04/29/a-tiny-group-is-winning-on-polymarket-as-under-1-of-wallets-take-half-the-profits) [search summary]

### Inferences
**Scorecard E1 — Matched betting / bonus hunting → ELIMINATE**
- (a) **0–1/5**. Placing bets on bookmaker sites with scripts is typically barred (unverified), and each new bookmaker needs a human sign-up and KYC.
- (b) A new account per bookmaker, deposits, and manual bet placement.
- (c) Bankroll est. £100–£1,000 moving between accounts. Losses come from mistakes such as wrong stakes or voided bets (est.).
- (d) First pound in days (for a human). $50/month is achievable *manually* at first, but it declines as welcome offers run out and accounts are restricted (background, unverified).
- (e) Automated and compliant: **about 0%**.
- (f) Front-loaded, then decaying.
- (g) Legality and tax differ by country; the UK is the classic case (unverified). Bookmaker terms risk confiscated bonuses and closed accounts.
- (h) Low (nothing retrieved). (i) Unverified.

**Scorecard E2 — Bank and brokerage sign-up bonuses (churning) → ELIMINATE for zero-touch (note: the best *human-effort* option in this cluster for US residents)**
- (a) **1/5**. Recurring transfers can be scheduled, but each bonus needs a new human application, KYC and often direct-deposit setup.
- (b) New applications every 1–3 months to keep an average of $50/month (est.).
- (c) Capital parked temporarily. Watch fees, early-closure clawbacks, and the effect of bank inquiries on future approvals (unverified).
- (d) Weeks to months per bonus.
- (e) Compliant and zero-touch: **about 0%**. With about 1–2 human hours a month, $50/month on average is plausible for US residents (est., unverified).
- (f) Lumpy. (g) Low if terms are followed. Bonuses are taxable. Mostly US-centric; outside the US, account-switching bonuses exist in places like the UK (unverified).
- (h) Low in this session.

**Scorecard E3 — Cashback portals → ELIMINATE.** Cashback requires real purchases, so it is a discount rather than income. Automating fake or returned purchases to harvest cashback would be fraud.

**Scorecard E4 — Referral programs → ELIMINATE.** Automated posting of referral links (spam) or self-referrals and fake accounts break the rules and in many places anti-spam law. Genuine referrals need a human audience, which is outside this category.

### Gaps
- No terms were retrieved for bookmakers, matched-betting services, banks, brokerages, cashback portals or referral programs. The report writer should treat all E-cluster specifics as unverified background knowledge. The ELIMINATE verdicts rest on design logic: human KYC per offer, finite offers, and the fact that automation or multi-accounting defeats the offer's purpose.
- No 2025–26 data was found on typical matched-betting profits or bank-bonus yields.

---

## Q7. Survey/"get-paid-to" sites, microtask sites (MTurk, Prolific), ad-watching, play-to-earn games, crypto airdrop farming and quests

### Takeaway
These programs pay for **a unique human's attention, opinions or play**. Letting a bot or LLM supply that is misrepresentation: at minimum a ToS breach, and for research platforms it corrupts scientific data and is plausibly fraud. Multi-accounting or sybil farming (many wallets or accounts) is explicitly the thing airdrop and quest programs screen out. Single-wallet, rule-compliant quest participation is legal but lottery-like and inconsistent. All ELIMINATE.

### Cited Findings
- Surveillance of prediction-market incentives now flags "possible POLY airdrop farming" and wash trading. Platforms and analytics firms are actively looking for farmed activity. — [CoinDesk, 29 Apr 2026](https://www.coindesk.com/markets/2026/04/29/a-tiny-group-is-winning-on-polymarket-as-under-1-of-wallets-take-half-the-profits) [search summary]
- No primary terms (MTurk, Prolific, Swagbucks or other survey sites, P2E games, Galxe or Layer3 quests) or airdrop sybil reports could be retrieved in this session (see Gaps).

### Inferences
**Scorecard F1 — Survey/GPT sites (Swagbucks and similar) completed by bots or LLMs → ELIMINATE.**
- Automation 0/5 legitimately.
- The product sold to clients is authentic human survey data, so bot answers are misrepresentation.
- Expect bans and forfeited balances (unverified specifics).
- Even honest *manual* earnings on these sites are very low (background, unverified).
- P(compliant ≥$50/month) **about 0%**.

**Scorecard F2 — MTurk / Prolific via scripts or LLMs → ELIMINATE.**
- These pay for human participation in research and labeling. Researchers use attention checks and AI-use detection (background, unverified).
- AI-generated responses corrupt research data and plausibly amount to fraud against the requester.
- MTurk's rules on automated tools and Prolific's AI policy could not be retrieved.
- P **about 0%**.

**Scorecard F3 — Ad-watching / paid-to-click (PTC) → ELIMINATE.**
- Paying for ad views assumes a human is watching. Automating views is ad fraud.
- PTC sites are also a known scam category (background, unverified).
- P **about 0%**.

**Scorecard F4 — Play-to-earn game bots → ELIMINATE.**
- P2E games typically ban bots and multi-accounting (unverified), and token rewards have been volatile or collapsing since the 2021–22 peak (background, unverified).
- Consistency is very low. Assets such as NFTs and tokens put capital at risk.

**Scorecard F5 — Airdrop / quest farming → ELIMINATE.**
- **Multi-wallet (sybil) farming** breaks eligibility rules and is actively screened, including by third-party surveillance. It is the textbook excluded behaviour.
- **Single-wallet, rule-compliant quests run by a script:**
  - Many quest platforms require captchas or human-verification steps (unverified).
  - Rewards are discretionary and irregular, closer to a lottery than income.
  - It costs gas and bridging fees and exposes the wallet to hacks and phishing.
  - P(≥$50/month *consistently*) **≈ 0–3% (est.)**.

### Gaps
- Could not verify the specific terms clauses: MTurk's Participation Agreement on automated means, Prolific's policy on AI use and bots, the Swagbucks and InboxDollars terms, P2E game terms, or Galxe and Layer3 anti-bot rules.
- Could not verify 2025–26 airdrop sybil statistics, for example LayerZero's self-report and bounty-hunt process: the GitHub URLs tried returned 404.
- Could not verify the scale of LLM-bot detection on Prolific or MTurk in 2025–26.
- The report writer should present these verdicts as resting on design logic plus unverified background knowledge, unless other researchers' notes supply primary sources.

---

## Q8. Survivors of this category: final verdicts with concrete details

### Takeaway
**No method in this category fully passes all three tests**: ToS-compliant when automated, profitable for a small player, and near-zero effort. Two capital-at-risk methods are **MAYBE**. Both are closer to "small speculative strategies" than to "earning programs", and neither is likely to produce a *consistent* $50/month:
1. **A passive maker-only bot on Kalshi or Polymarket**, only if the user's country is eligible.
2. **An automated Numerai tournament model with an NMR stake.**

Everything else is **ELIMINATE**. For the user's stated goal, the report writer should probably treat this whole category as "no reliable survivor".

### Cited Findings
- **Why the maker bot is the least-bad market option:**
  - On Kalshi, makers beat takers, and makers earned +2.6% (original) / +2.09% (replication) / +2.40% (after maker fees) gross on contracts priced at 50¢ or more. — [replication repo](https://github.com/Vladosyna/kalshi-makers-takers-persistence); [SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5502658)
  - Buying contracts under 10¢ loses more than 60%. — [UCD WP](https://www.ucd.ie/economics/t4media/WP2025_19.pdf) [search summary]
  - Polymarket makers pay zero fees and receive 15–25% of taker fees back as daily rebates (2026). — [StartPolymarket](https://startpolymarket.com/learn/polymarket-fees/); [Polymarket Help – Maker Rebates](https://help.polymarket.com/en/articles/13364471-maker-rebates-program) [search summary]
- **The counter-evidence on the maker bot:**
  - 0.55% of profitable maker wallets captured 50% of maker gains. — [CoinDesk](https://www.coindesk.com/markets/2026/04/29/a-tiny-group-is-winning-on-polymarket-as-under-1-of-wallets-take-half-the-profits) [search summary]
  - "Market making on Polymarket is competitive and can lose money." — [poly-maker](https://github.com/warproxxx/poly-maker)
  - Country gates: Kalshi excludes 38 jurisdictions including the UK, Canada and France ([CoinPerps](https://www.coinperps.com/learn/kalshi-restricted-countries) [search summary]). Polymarket's international platform excludes US persons and others, including via API or agents ([Polymarket/agents](https://github.com/Polymarket/agents)).
- **Why Numerai is the most automation-compatible "competition":**
  - The MCP server supports Claude Code for model and submission workflows. — [mcp.md](https://github.com/numerai/docs/blob/master/numerai-tournament/mcp.md)
  - Automatic re-staking applies under atomic staking, with rounds resolving in 1–3 months. — [atomic-blockchain-staking.md](https://github.com/numerai/docs/blob/master/numerai-tournament/atomic-blockchain-staking.md)
  - Payouts and burns are capped at ±5% of stake per round. — [staking.md](https://github.com/numerai/docs/blob/master/numerai-tournament/staking.md)

### Inferences
**MAYBE #1 — Passive maker-only prediction-market bot (Kalshi, or Polymarket where legal)**
- **Concrete setup (est.):**
  - $2k–$5k of capital.
  - Post-only limit orders only, never crossing the spread.
  - Quote mainly contracts at 50¢ or more, where the academic data shows a persistent maker edge, and avoid longshots under 10¢.
  - Focus on categories where taker fees fund maker rebates, such as politics/finance at 25% rebate share. Fee-free geopolitics markets presumably have no taker-fee rebate pool to share.
  - Hard per-market exposure caps, a daily loss kill-switch, and pausing quotes before scheduled news or resolution events.
  - VPS at $5–$20/month. An AI coding agent can build it using the Polymarket agents framework or Kalshi's API.
- **Human steps:** eligibility check for the user's country, KYC or wallet setup, funding, and tax reporting.
- **Expected outcome (est.):** a plausible monthly P&L range of roughly −$150 to +$100 on $3k. P(≥$50/month net) is about **10% at 3 months and 10–20% at 6 months**.
- **Loss scenarios:** adverse selection on news; resolution disputes; bugs such as runaway orders; platform fee or rebate changes like the ones that already happened in March and July 2026; wallet or smart-contract risk on Polymarket.
- **Never** self-trade or wash-trade to farm rebates or airdrops. That is manipulation, and surveillance firms already flag it.

**MAYBE #2 — Numerai automated model plus NMR stake**
- **Concrete setup (est.):**
  - The AI agent builds a model from Numerai's example pipelines, then submits automatically through the API/compute or MCP each round.
  - Stake is set once and re-staked automatically.
  - Requires buying NMR through a KYC'd exchange.
- **Expected outcome:** unknown. Realised returns for typical stakers were not verified. Each round can swing between −5% and +5% of stake, on top of NMR price volatility.
- **Capital:** meeting $50/month would need an est. **$3k–$10k stake** under optimistic return assumptions.
- **Probability:** P(≥$50/month net) about **5–10% at 3 months and 10–20% at 6 months**, and only with that stake size.
- **Consistency:** low. First payout arrives only after 1–3 months.

**Non-automated but legitimate options (fail the "near-zero effort" test; the writer may mention them as contrasts):**
- AI-assisted, human-verified bug hunting (A2) — this needs a skilled, engaged human.
- Manual bank or brokerage sign-up bonuses (E2) — mainly for US residents.

**Benchmark:** any guaranteed yield of *r*% a year needs $600/*r*% of capital to produce $600 a year. At 4% that is $15,000. Both MAYBEs need less capital than that, but they carry real loss risk and far higher variance. The report writer should weigh that honestly against the user's wish for *consistent* income.

### Gaps
- There is no verified median outcome for small maker bots or for Numerai stakers. This is the single most important missing piece for either MAYBE.
- Whether the user's (unknown) country allows Kalshi, Polymarket, Betfair or NMR purchase and staking must be checked against current primary sources. Polymarket's official geoblock list could not be opened in this session.
- Not researched and possibly worth other researchers' attention:
  - Web3 audit contests
  - Bittensor subnet mining and CrunchDAO/Allora, which are automation-native "earn by model" networks
  - Polymarket "holding rewards" or interest-like programs, and Kalshi's interest on balances, which are capital-yield products rather than tasks
