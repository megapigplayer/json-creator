# Selling small automated software products through buyer-supplying marketplaces (APIs, scrapers, bots, extensions, plugins, AI tools/agents) as an automated ~$50/month net income source (research date: 2026-09-28)

> **Method note, read first.** In this session the sandbox egress proxy blocked WebFetch for every domain I tried (apify.com, docs/help/blog.apify.com, creator.poe.com, coindesk.com, chainalysis.com, extensionpay.com, dev.to, use-apify.com, godberrystudios.com, agentbyline.com). The session-wide WebSearch budget (200 calls, shared with the other researchers) also ran out after about 37 of my queries. As a result, every citation below rests on search-engine extracts of the cited page, not on a full-page read. Spot-check the exact numbers before publishing. I could **not** research these at all: Telegram Stars/Mini Apps, Discord Premium Apps, Slack, Raycast, Obsidian, VS Code, GitHub Sponsors, npm, n8n/Make/Zapier templates, APILayer, Lemon Squeezy, and Firefox/Edge store rules. Anything said about them is kept in **Gaps** or labeled as unverified inference. Anyone who wants those checked can raise `CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION` and re-run just those channels.

## 1. How does the developer get paid? (revenue share, fees, payout thresholds and methods, availability outside the US)

### Takeaway
Apify Store has the clearest and most globally usable payout path. On pay-per-event (PPE) Actors the developer keeps about 80% of revenue minus platform compute. Invoices are monthly and approve themselves automatically, and payouts go out by PayPal (from $20) or bank wire (from $100). Most alternatives fall short in one of four ways:
- **They take more.** RapidAPI's fee rose to 25% on 15 Nov 2025, and it pays out only through PayPal.
- **They depend on Stripe.** ExtensionPay, Poe and MCPize all pay through Stripe.
- **They are closed or restricted.** Figma is not approving new sellers, the GPT Store revenue program is a US-only pilot, and ChatGPT apps can only sell physical goods in-app.
- **They pay in crypto.** x402 settles in USDC.

### Cited Findings
**Apify Store**
- Developers "earn 80% of the revenue minus platform usage costs" on pay-per-event Actors — [Apify Help: Make money publishing your Actors](https://help.apify.com/en/articles/8684010-make-money-publishing-your-actors-on-apify-store); [Apify partner page](https://apify.com/partners/actor-developers).
- A different wording appears in Apify's help centre: "For pay-per-result or pay-per-event models, Apify deducts the Apify platform costs used to run the Actor, plus a 20% commission from profits" — [Apify Help: How developer payouts work](https://help.apify.com/en/articles/10057167-how-developer-payouts-work).
- The two wordings imply different formulas: 0.8×revenue − costs, or 0.8×(revenue − costs). I could not resolve which is correct.
- **Monetization models available now:**
  - Pay per event: users pay for events your code triggers, such as a result or an Actor start.
  - Pay per result.
  - Pay per usage: the user pays for platform resources and the developer earns nothing.
  - Source: [Apify Help: Ship your Actor and get paid](https://help.apify.com/en/articles/12800725-ship-your-actor-and-get-paid); [Apify Help: What is pay per event?](https://help.apify.com/en/articles/10700066-what-is-pay-per-event).
- **Rental (flat monthly fee) is being retired:**
  - Under rental, Apify kept a 20% commission — [Apify docs: Monetize Actors](https://docs.apify.com/actors/publishing/monetize).
  - Apify stopped accepting new rental listings and rental price changes on 31 Mar / 1 Apr 2026.
  - Full retirement is 30 Sep / 1 Oct 2026. Sources give the boundary dates slightly differently.
  - Sources: [Apify blog: Rental to pay-per-event migration](https://blog.apify.com/migrating-to-pay-per-event-pricing/); [Apify docs: Rental pricing model](https://docs.apify.com/actors/publishing/monetize/rental); [Godberry Studios migration playbook](https://godberrystudios.com/posts/apify-pay-per-event-migration-playbook-2026/) (third party); [AgentByline](https://agentbyline.com/articles/apify-actor-passive-income-what-really-earns-in-2026-67lcfr) (third party).
- An Actor with no new pricing configured by 2026-09-30 "is automatically converted to pay-per-usage, which pays the developer nothing" — [Godberry Studios](https://godberrystudios.com/posts/apify-pay-per-event-migration-playbook-2026/) (third party; consistent with Apify's model list above).
- **Payout thresholds:** at least $20 for PayPal and $100 for wire transfer. Earnings below the minimum roll over to the next month — [Apify Help: How developer payouts work](https://help.apify.com/en/articles/10057167-how-developer-payouts-work); [Apify docs: Manage payouts](https://docs.apify.com/platform/actors/publishing/monetize/monthly-payouts).
- **Payout schedule:** Apify generates payout invoices automatically on the 11th of each month. The developer has 3 days to approve or dispute, and the invoice is approved automatically on the 14th if nobody acts. Payments are released on days 21–25 — [Apify Help: How developer payouts work](https://help.apify.com/en/articles/10057167-how-developer-payouts-work); [Apify partner page](https://apify.com/partners/actor-developers).
- **Wise:** Apify legal terms say "Commission may be paid either via PayPal, bank transfer or Wise". The word "commission" suggests this comes from the affiliate terms, so it may not apply to Actor payouts — [Apify Affiliate Program Terms](https://docs.apify.com/legal/affiliate-program-terms-and-conditions); [Apify Store Publishing Terms](https://docs.apify.com/legal/store-publishing-terms-and-conditions).
- **Creator Plan:** $1/month, prepaid for the first 6 months. It includes $500 of platform usage over those 6 months and is meant for community developers building and publishing Actors. It also "will limit access to Actors on Apify Store" — [Apify: Introducing Creator Plan](https://apify.com/pricing/creator-plan).
- **MCP servers:** Apify also hosts and monetizes MCP servers ("Build and monetize MCP servers"). It claims its MCP marketplace connects servers to "36K+ monthly developers" — [Apify: MCP for developers](https://apify.com/mcp/developers) (claim from search extract).

**RapidAPI (now owned by Nokia)**
- Nokia acquired Rapid, the company behind RapidAPI, in November 2024. Nokia's own release describes the deal as buying Rapid's "technology and R&D unit" to strengthen network-API solutions — [TechCrunch, 13 Nov 2024](https://techcrunch.com/2024/11/13/nokia-acquires-rapid-the-api-company-once-valued-at-1b/); [Nokia newsroom](https://www.nokia.com/newsroom/nokia-acquires-rapid-technology-and-rd-unit-to-strengthen-development-of-network-api-solutions-and-ecosystem/).
- Nokia is steering the platform towards telecom "Network as Code" APIs — [Fierce Network](https://www.fierce-network.com/wireless/nokia-doubles-down-network-apis-rapid-buy).
- One aggregator says "the consumer-facing marketplace ... has seen a significant decline in active listings and developer activity". This is unsourced, so treat it as unverified — [BuildMVPFast](https://www.buildmvpfast.com/alternatives/rapidapi); [DigitalAPI](https://www.digitalapi.ai/blogs/best-api-marketplaces).
- **Fee increase:** the flat 20% marketplace fee was "updated to 25%" starting 15 Nov 2025 — [RapidAPI docs: Payouts and Finance](https://docs.rapidapi.com/docs/payouts-and-finance).
- **Payouts:**
  - RapidAPI "currently only pays out API providers via PayPal".
  - PayPal's payout processing fees "can be 2% of the payout amount up to $20 maximum, depending on your country".
  - Payments under $2.00 may be combined with a later payment.
  - Sources: [RapidAPI docs: Payouts and Finance](https://docs.rapidapi.com/docs/payouts-and-finance); [RapidAPI: API Provider Payout Schedule](https://rapidapi.zendesk.com/hc/en-us/articles/17777288883988-API-Provider-Payout-Schedule).

**Zyla API Hub**
- **Revenue split:** 80% to the API provider and 20% to ZylaLabs, "may vary depending on the service level" — [Zyla: Monetize your API](https://zylalabs.com/monetize-your-api); [Zyla Terms](https://zylalabs.com/terms).
- **Listing:** signup is free, and Zyla tests the API before accepting it. Pricing can be pay-as-you-go, subscription or one-time — [Zyla: Monetize your API](https://zylalabs.com/monetize-your-api); [Medium starter guide](https://medium.com/@aleb/the-most-complete-starter-guide-to-sell-on-zyla-api-hub-1810ae57f7b6).
- **Uptime rule:** Zyla enforces a minimum uptime. APIs that fall below it can have earnings reduced or be suspended — [Zyla Terms](https://zylalabs.com/terms).
- Zyla also sells its own APIs on RapidAPI — [RapidAPI: Zyla Labs organization](https://rapidapi.com/organization/zyla-labs).

**MCP-server monetization marketplaces (all new in 2026)**
- **MCPize:** 80/20 split. Servers that joined before 10 June 2026 are grandfathered at 85%. MCPize bundles hosting, SSL, Stripe payments and discovery — [MCPize: Make money with MCP](https://mcpize.com/blog/make-money-with-mcp); [MCPize: Monetize MCP servers](https://mcpize.com/developers/monetize-mcp-servers).
- **AgenticMarket and SettleGrid:**
  - AgenticMarket gives its first 100 approved creators 90% for 12 months (80% standard).
  - SettleGrid offers a free tier of 25,000 operations/month at a 0% platform fee (95% revenue share).
  - I could not tell which of these three pages each figure came from: [State of MCP Monetization 2026 (mcp-marketplace.io)](https://mcp-marketplace.io/blog/state-of-mcp-monetization-2026); [dev.to guide (shekharp1536)](https://dev.to/shekharp1536/how-to-monetize-mcp-servers-in-2026-the-complete-developers-guide-6bk); [dev.to guide (lexwhiting)](https://dev.to/lexwhiting/how-to-monetize-your-mcp-server-in-2026-the-complete-guide-2pg9).

**Paid APIs for AI agents: x402 and Stripe's agentic rails**
- **x402:**
  - It is an open protocol (Apache 2.0) governed by the x402 Foundation, which Coinbase and Cloudflare co-founded.
  - It builds payment into HTTP requests with "no accounts and no setup".
  - It settles in USDC on Base, Solana and Tempo.
  - Sources: [WorkOS: x402 vs Stripe MPP](https://workos.com/blog/x402-vs-stripe-mpp-how-to-choose-payment-infrastructure-for-ai-agents-and-mcp-tools-in-2026); [Eco: Stripe Link Agents and x402](https://eco.com/support/en/articles/14839406-stripe-link-agents-and-x402-explained); [x402 whitepaper (June 2026)](https://x402.org/wp-content/uploads/sites/10/2026/06/x402-whitepaper.pdf).
- **Stripe's agentic rails:**
  - Stripe previewed an x402 integration for USDC on Base in February 2026 — [The Block](https://www.theblock.co/post/389352/stripe-adds-x402-integration-usdc-agent-payments); [crypto.news](https://crypto.news/stripe-taps-base-ai-agent-x402-payment-protocol-2026/).
  - Stripe's Machine Payments Protocol (MPP) launched on 18 Mar 2026 with Tempo. It offers session-based streaming micropayments in stablecoins and fiat — [Stripe blog: Introducing the Machine Payments Protocol](https://stripe.com/blog/machine-payments-protocol); [WorkOS](https://workos.com/blog/x402-vs-stripe-mpp-how-to-choose-payment-infrastructure-for-ai-agents-and-mcp-tools-in-2026).
  - "Link Agents" launched on 29 Apr 2026. It lets Stripe-managed wallets approve fiat purchases for Claude and OpenAI agents — [Eco](https://eco.com/support/en/articles/14839406-stripe-link-agents-and-x402-explained).
  - Stripe also has the Agentic Commerce Suite and Agentic Commerce Protocol (ACP) — [WorkOS](https://workos.com/blog/x402-vs-stripe-mpp-how-to-choose-payment-infrastructure-for-ai-agents-and-mcp-tools-in-2026); [Crossmint protocol comparison](https://www.crossmint.com/learn/agentic-payments-protocols-compared).

**OpenAI (ChatGPT apps and GPT Store)**
- **App directory:** it launched in December 2025, and OpenAI now accepts ChatGPT app submissions from third-party developers — [VentureBeat](https://venturebeat.com/technology/openai-now-accepting-chatgpt-app-submissions-from-third-party-devs-launches); [OpenAI: Introducing apps in ChatGPT](https://openai.com/index/introducing-apps-in-chatgpt/).
- **App monetization:**
  - The recommended, generally available approach is "external checkout", where users complete the purchase on the developer's own domain.
  - Approval for Instant Checkout (in-ChatGPT, via ACP) "is limited to apps for physical goods purchases".
  - Source: [OpenAI Apps SDK: Monetization](https://developers.openai.com/apps-sdk/build/monetization).
  - A secondary source says publishers cannot sell digital services inside a ChatGPT app — [Phiture](https://phiture.com/asostack/chat-gpt-app-directory/); [WebFX](https://www.webfx.com/blog/ai/chatgpt-apps/).
- **GPT Store revenue program:**
  - It was announced in January 2024 as paying US builders based on engagement — [AlternativeTo news, Jan 2024](https://alternativeto.net/news/2024/1/openai-launched-a-gpt-store-for-user-made-chatbots-with-a-new-revenue-program-for-creators).
  - 2026 secondary sources say it "remains a limited, invite-only pilot restricted to a small group of US-based builders" and "never broadly launched" — [Digital Applied](https://www.digitalapplied.com/blog/gpt-store-custom-gpts-business-guide-2026); [WildnetEdge](https://www.wildnetedge.com/blogs/gpt-store-monetization-guide). These are low-quality sources, but they match a builder thread asking about its status — [OpenAI community](https://community.openai.com/t/what-is-the-status-with-gpt-store-revenue-share/839172).

**Poe (Quora)**
- **Terms:**
  - Creators set a price per message, up to $10,000 per 1,000 messages.
  - Poe sends payments in USD to the creator's Stripe account.
  - Creators can set Stripe to pay out monthly whenever earnings exceed $10.
  - Taxpayer information must be filed within 90 days of joining.
  - Sources: [Poe Creator Platform: Creator Monetization](https://creator.poe.com/docs/resources/creator-monetization); [Poe Help: Creator Monetization FAQs](https://help.poe.com/hc/en-us/articles/21921312368020-Poe-Creator-Monetization-FAQs); [Poe blog: price per message](https://poe.com/blog/new-on-poe-creator-monetization-via-price-per-message); [Poe Earnings ToS](https://poe.com/pages/earnings-tos).
- **Country eligibility conflicts:** one set of Poe pages says "price per message is currently limited to creators in the US". Another extract of Poe pages says the feature is "available in 23 regions worldwide". This is unresolved — [Poe blog](https://poe.com/blog/new-on-poe-creator-monetization-via-price-per-message); [Poe FAQs](https://help.poe.com/hc/en-us/articles/21921312368020-Poe-Creator-Monetization-FAQs).

**Browser extensions (Chrome, Firefox, Edge, Opera, Brave) via ExtensionPay**
- Google shut down Chrome Web Store payments, and ExtensionPay was created to fill that gap — [ExtensionPay](https://extensionpay.com/); [Chromium extensions group: paid plans](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/MK4KIe8Ywcc).
- **ExtensionPay terms:**
  - It charges 5% per transaction, and Stripe processing fees are charged separately.
  - Money goes straight to the developer's own connected Stripe account, so ExtensionPay is not the merchant of record.
  - There are no upfront or monthly fees.
  - It supports Chrome, Firefox, Edge, Opera, Brave and other Chromium browsers.
  - Sources: [Kelviq: Chrome extension payment platforms](https://www.kelviq.com/blog/chrome-extension-payment-platforms/); [ExtensionPay](https://extensionpay.com/).

**Plugins and apps**
- **WordPress plugins via Freemius:**
  - Freemius takes 7% on WordPress products (4.7% Freemius plus 2.3% "WordPress solution fee"). Adding about 3.5% in gateway fees brings the total to roughly 10.5%.
  - The fee drops to 0.5% on monthly gross sales above $100,000.
  - Payouts are monthly via PayPal, Payoneer or bank wire (IBAN/SWIFT), with a $100 minimum balance.
  - Sources: [Freemius: Our Pricing](https://freemius.com/help/documentation/getting-started/our-pricing/); [Freemius WordPress pricing](https://freemius.com/wordpress/pricing/); [Fungies](https://fungies.io/freemius-alternatives-wordpress-plugins-themes-2026/); [ChargePanda](https://www.chargepanda.com/blog/post/best-platform-to-sell-wordpress-plugins).
- **Shopify App Store:**
  - Developers keep 100% of their first $1,000,000 in gross app revenue earned from 1 Jan 2025 (a lifetime, not annual, allowance) and 85% above that.
  - All billing carries a 2.9% processing fee.
  - Developers with $20M+ in annual app revenue, or companies with $100M+ in annual revenue, are excluded.
  - The previous exemption reset every year; the 2025 change removed that.
  - Sources: [Shopify.dev: Revenue share](https://shopify.dev/docs/apps/launch/distribution/revenue-share); [Shopify changelog](https://shopify.dev/changelog/update-to-shopifys-app-developer-revenue-share); [BetaKit](https://betakit.com/shopify-app-developers-will-no-longer-be-exempt-from-sharing-their-first-1-million-usd-in-revenue-every-year/).
- **Figma Community:**
  - Figma charges a flat 15%, which covers processing, payouts, tax and refunds, and pays sellers 30 days after purchase.
  - Payouts reach more than 50 countries, but not India, Brazil, Nigeria, Pakistan, Bangladesh or Sri Lanka.
  - Figma "is not approving new creators to sell paid files on Community at this time". The date of this statement is unverified and it may go back to 2023–24.
  - Sources: [Figma Help: About selling Community resources](https://help.figma.com/hc/en-us/articles/12067637274519-About-selling-Community-resources); [Kelviq: Figma plugin monetization 2026](https://www.kelviq.com/blog/figma-plugin-monetization/); [Figma Forum: approved seller](https://forum.figma.com/ask-the-community-7/how-do-i-become-an-approved-seller-for-paid-plugins-56625).
  - Third-party payment can be used instead — [Figma Forum](https://forum.figma.com/ask-the-community-7/sell-on-figma-community-3rd-party-payment-vs-figma-payment-25300).
- **Canva:**
  - The Premium Apps Program pays existing apps "recurring revenue each month based on how often the app is used" and offers grants for apps still in development.
  - Apps can be gated, freemium or credit-based, and premium apps are available to users on Pro plans or higher.
  - Canva has a "$50 million developer innovation fund".
  - Sources: [Canva Premium Apps Program](https://www.canva.com/developers/premium-apps-program/); [Canva docs: Premium apps](https://www.canva.dev/docs/apps/premium-apps/); [Canva docs: Innovation Fund](https://www.canva.dev/docs/apps/innovation-fund/); [Canva newsroom](https://www.canva.com/newsroom/news/extend-developer-tools/).

### Inferences
- **Approximate net per $100 of gross sales,** before income tax and before FX or receiving fees:
  - Apify: about $80 minus compute. Compute is near zero for lightweight Actors.
  - RapidAPI: $75 minus up to about $1.50 in PayPal fees.
  - Zyla: about $80, payout method unknown.
  - MCPize: $80–85.
  - ExtensionPay: about $95 minus Stripe fees, roughly $91. The developer is also the merchant of record, which brings VAT and sales-tax duties.
  - Freemius: about $89.50.
  - Shopify: about $97.10.
  - Figma: $85, but closed to new sellers.
- **Global availability.**
  - Apify: PayPal or wire makes it the most country-agnostic channel that also brings its own buyers.
  - Stripe-dependent routes (ExtensionPay, Poe, MCPize, Stripe MPP): they only work where Stripe accounts are available.
  - RapidAPI: it needs an account that can receive PayPal.
  - x402: it needs only a wallet to receive, but converting USDC to local money usually means a KYC-verified exchange. That last point is inference and unverified.
- **Near-zero-touch payouts.** Apify approves invoices automatically on the 14th and pays on the 21st–25th. Once payout details are on file, no monthly human action is needed. I found no other channel with a documented zero-touch payout cycle.
- **Payout floor.** For a $50/month goal, Apify's $20 PayPal floor clears every month. The $100 wire floor would pay roughly every two months.

### Gaps
- **Unverified background knowledge** (model training data, not checked this session):
  - **Telegram:** digital goods in bots and Mini Apps must be sold for Telegram Stars. Developers withdraw Stars through Fragment as Toncoin (TON) after a hold of about 21 days. The historical minimum withdrawal was about 1,000 Stars, and the developer-side value is about $0.013 per Star. Stars can also be spent on Telegram Ads.
  - **Discord:** Premium Apps (app subscriptions and one-time purchases) are limited to developers in a list of supported countries, reportedly the US, UK and EU. The revenue-share figure is unverified.
  - **Slack:** the Marketplace does not process payments, so apps bill externally.
  - **Raycast, Obsidian and VS Code:** their stores have no in-store payments. Monetization happens through external licensing or donations. I believe Raycast Store extensions are open source in a public repository.
  - **GitHub Sponsors:** no fee on sponsorships of personal accounts; payouts go through Stripe Connect in a limited list of regions.
  - **npm:** no monetization.
  - **Lemon Squeezy:** acquired by Stripe in 2024. It acts as merchant of record at roughly 5% + 50¢ per transaction.
  - **Chrome Web Store:** charges a small one-time developer registration fee, historically $5.
  - **WordPress.org:** plugin guidelines ban "trialware". A free version must stay fully functional, and a separate Pro upsell is allowed.
  - **n8n:** templates are shared through its Creator Hub. Whether paid templates are allowed is unknown.
  - **Make and Zapier:** no paid-template marketplace.
- **APILayer:** its terms for third-party providers were not found.
- **Poe:** country eligibility is contradictory (US-only vs 23 regions).
- **Apify's revenue-share formula:** it is ambiguous whether it is 0.8R − C or 0.8(R − C).
- **Apify payout details:** whether Wise applies to Actor payouts is unknown, and so are any country or sanctions restrictions on payouts.
- **Zyla:** payout method and threshold not found.
- **RapidAPI:** payout schedule details not retrieved.

## 2. What do typical (not top) developers earn, and how are earnings distributed?

### Takeaway
Only Apify publishes platform-wide payout totals. It pays about $1.4M a month to about 3,000 community developers, an average of about $470 each. Top creators make more than $10k a month. The median is not published, and with 54,000–70,000+ listed Actors most of them clearly earn nothing.

In every other channel, the "typical" evidence points to single-digit or low double-digit dollars a month:
- Real indie Chrome extension portfolios sit at $22–31 MRR.
- Fewer than 5% of MCP servers reportedly earn anything.
- GPT Store builders outside the pilot earn nothing.
- x402's genuine commerce was about $28k a day across the entire ecosystem (March 2026).

### Cited Findings
- **Apify: aggregate payouts**
  - Apify "pays out $1.4M monthly to developers, across roughly 3,000 community developers", about $470 average — [Apify partner page](https://apify.com/partners/actor-developers) (from search extract), also quoted by [AgentByline](https://agentbyline.com/articles/apify-actor-passive-income-what-really-earns-in-2026-67lcfr).
  - "The most successful independent creators on Apify Store make over $10,000 monthly recurring revenue, and many others make more than $1,000 every month" — [Apify Help](https://help.apify.com/en/articles/8684010-make-money-publishing-your-actors-on-apify-store); [Apify Help: Ship your Actor and get paid](https://help.apify.com/en/articles/12800725-ship-your-actor-and-get-paid).
  - Apify "has already paid out over $4M to developers building Actors, with September 2025 alone seeing payouts hit $563K, 6x more than the previous year" — [Apify $1M Challenge press release (NatLawReview / EIN Presswire)](https://natlawreview.com/press-releases/apify-bets-1m-independent-developers-building-ais-missing-tools).
  - These figures only fit together if monthly payouts grew about 2.5x between September 2025 ($563k) and the 2026 claim ($1.4M). I could not verify the $1.4M figure directly.
- **Apify: store size (supply)**
  - The partner page snapshot lists "53,954 tools and automations" and claims "10,000+ new signups daily". The signup claim is ambiguous and may count users rather than developers — [Apify partner page](https://apify.com/partners/actor-developers).
  - A third-party page says "70,000+ Actors (checked 2026-09-09)" — [Use Apify: Best Apify Actors](https://use-apify.com/docs/best-apify-actors). The attribution comes from a search extract.
- **Apify: third-party commentary.** "Plenty of published actors earn nothing". "The realistic first outcome is a few hundred dollars a month from a small portfolio, not a replacement income from one clever scraper" — [AgentByline](https://agentbyline.com/articles/apify-actor-passive-income-what-really-earns-in-2026-67lcfr). This is opinion.
- **Apify: case study.** One developer built 98 Actors between November 2025 and April 2026, reaching "855 monthly users". The exact revenue is deliberately not disclosed. The trajectory:
  - Months 1–2: "single-digit weekly runs".
  - Months 3–4: the first Actors reached double-digit user counts, and revenue "became meaningful but inconsistent".
  - Months 5–6: "the catalog effect kicked in hard", with users discovering one Actor through another.
  - Source: [Apify blog: How I built 98 production Actors in 6 months](https://blog.apify.com/building-98-actors-on-apify-store/).
- **Apify: 2024 demand growth.** Monthly active users grew 142% between January and October 2024, and API calls rose from 3.6 billion to 6.8 billion. This data may be outdated — [Apify blog: Reach over 50,000 monthly API users](https://blog.apify.com/how-to-monetize-api/).
- **Browser extensions**
  - ExtensionPay says it "has helped developers make over $500k" in total, across all developers and years. An earlier snapshot said $20,000 — [ExtensionPay](https://extensionpay.com/); [Indie Hackers: ExtensionPay](https://www.indiehackers.com/product/extensionpay).
  - Survivorship examples: Closet Tools at about $42k/month and Easy Folders at about $3,700/month — [ExtensionPay: 8 Chrome extensions with impressive revenue](https://extensionpay.com/articles/browser-extensions-make-money).
  - Typical real reports: "MRR update: $22/month from Chrome extensions" — [Indie Hackers](https://www.indiehackers.com/post/mrr-update-22-month-from-chrome-extensions-0715acdd8b).
  - One indie developer reported $31.03 MRR from a portfolio of freemium extensions as of the end of July 2026 — [dev.to (ktg0215): Real numbers after 6 months](https://dev.to/ktg0215/real-numbers-freemium-chrome-extension-monetization-after-6-months-5hga); [dev.to (ktg0215): 7 paid extensions](https://dev.to/ktg0215/monetizing-chrome-extensions-with-freemium-real-numbers-from-7-paid-extensions-5cj).
  - SEO benchmark sites claim freemium-to-paid conversion of 0.5–2% of active users (3–5% in high-intent niches). They also claim extensions with 1,000–5,000 users "typically earn $100–$500 per month". These figures are unverified and look optimistic compared with the real reports above — [Chrome Goldmine](https://chromegoldmine.com/blog/chrome-extension-monetization/chrome-extension-revenue-benchmarks/); [Konabayev](https://konabayev.com/blog/extension-monetization-statistics-2026/).
- **MCP servers:** "over 20,000 MCP servers in the wild, with less than 5% making a single dollar". The source is self-interested marketplace content — [mcp-marketplace.io: State of MCP Monetization 2026](https://mcp-marketplace.io/blog/state-of-mcp-monetization-2026); [MCPize](https://mcpize.com/blog/make-money-with-mcp).
- **x402**
  - CoinDesk (11 Mar 2026) found that despite "a roughly $7 billion ecosystem valuation", x402 "currently processes only about $28,000 in daily volume, much of it from testing and 'gamed' transactions rather than real commerce" — [CoinDesk](https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet); [Glenbrook summary](https://glenbrook.com/payments_news/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet/).
  - By late April 2026, Coinbase reported 69,000 active agents, 165M transactions and about $50M in cumulative volume. A tracker estimates about 50% of transactions are "gamified" — [Presenc AI x402 tracker](https://presenc.ai/research/x402-protocol-adoption-tracker-2026).
  - The volume surge in Q4 2025 was driven largely by the PING memecoin's "pay-to-mint", which processed more than 150,000 transactions in its first month — [Sherlock](https://sherlock.xyz/post/x402-explained-the-http-402-payment-protocol); [Chainalysis](https://www.chainalysis.com/blog/x402-agentic-payments-adoption/).
  - Conflicting estimate: "roughly $600 million in annualized volume" as of March 2026 — [Nevermined stats](https://nevermined.ai/blog/stablecoin-payments-ai-agents-statistics). That is irreconcilable with $28k a day (about $10M a year), so treat headline volume figures as unreliable.
  - A contrarian developer post claims "522 data points" of real demand — [dev.to](https://dev.to/nathanielc85523/the-media-says-no-one-wants-agent-micropayments-i-have-522-data-points-that-disagree-23f9). Its content was not retrieved.
- **GPT Store:** "most creators earn $0"; among qualifying builders, "median earnings appear to be under $100 per quarter"; "~$0.03 per conversation" — [WildnetEdge](https://www.wildnetedge.com/blogs/gpt-store-monetization-guide); [The GPT Shop](https://www.thegptshop.online/blog/openai-gpt-store-revenue-sharing). These are low-quality and unverified.
- **Poe:** the search extracts contained two contradictory payout-scale claims: "over $100,000 had been paid out to bot makers by mid-2026" and a "tens of millions annual creator-payout run rate". The underlying source is unclear, so treat both as unreliable — [Poe Help](https://help.poe.com/hc/en-us/articles/21921312368020-Poe-Creator-Monetization-FAQs); [UsagePricing: Poe](https://www.usagepricing.com/blueprint/poe).

### Inferences
- **Where $50/month sits in Apify's distribution (illustrative only).** Assume payouts to the roughly 3,000 paid developers follow a log-normal curve with a $470 mean. The median would then be about $150 at moderate skew (σ=1.5), $64 at σ=2, or $21 at σ=2.5. So $50/month is plausibly near the median *paid* Apify developer. The hard part is becoming one of the paid developers in the first place, because most listings earn nothing.
- **A portfolio is required.** There are about 3,000 paid developers but 54,000–70,000 listed Actors, so a single Actor is a lottery ticket. The one detailed case study only saw meaningful revenue once the catalog effect kicked in.
- **Scale comparison.** ExtensionPay's cumulative, multi-year total (over $500k) is less than two weeks of Apify developer payouts. For people who want to buy ready-made tools, Apify's buyer pool is one to two orders of magnitude larger than any other channel examined.
- **Survivorship bias.** Every "top earner" example (Apify's $10k+ creators, Closet Tools at $42k/month) is survivorship. Base rates should come from the aggregates and small-developer reports, not the showcases.

### Gaps
- Apify publishes no median, percentiles, or count of developers who publish paid Actors. So the share of new entrants who reach $50/month cannot be computed.
- No typical-earnings data was found for RapidAPI, Zyla, APILayer, Poe, Canva Premium Apps, small Shopify apps, WordPress/Freemius, Telegram Stars or Discord Premium Apps.
- The contents of "I Measured 900 Apify Actors..." and "a practical guide from shipping 10 Actors" were not retrieved. They may contain small-developer numbers — [dev.to (nikita_iakovlev)](https://dev.to/nikita_iakovlev_415524c19/i-measured-900-apify-actors-and-got-the-price-wrong-by-100x-heres-the-corrected-data-3418); [dev.to (miccho27)](https://dev.to/miccho27/how-to-build-and-monetize-apify-actors-a-practical-guide-from-shipping-10-actors-3f56).

## 3. Ongoing maintenance burden, and how much an AI coding agent could handle automatically

### Takeaway
Apify runs its own daily health checks. They make breakage visible within 24 hours, and they penalize it: an Actor that fails is labeled "under maintenance" after 3 days and deprecated after about 17 more. That fits well with an agent-run schedule of tests, automatic fixes and redeploys. The main residual risks are target-site changes, anti-bot defenses, and platform policy changes.

Extensions, WordPress plugins and Shopify apps come with human-facing support, reviews, refunds and tax duties. Those are much harder to hand fully to an agent.

### Cited Findings
- **Apify's daily test:** Apify tests every public Actor daily. The test runs the Actor with its default (prefill) input, and the run must end as Succeeded with a non-empty default dataset within 5 minutes — [Apify docs: Actor testing in Apify Store](https://docs.apify.com/actors/publishing/test); [Apify docs: Automated testing](https://docs.apify.com/platform/actors/publishing/test).
- **Escalation when tests fail:**
  - After 3 consecutive days of failures, Apify notifies the developer and labels the Actor "under maintenance" until it is fixed. That label "makes your Actor rank lower in search results".
  - If runs keep failing for another 14 days, the Actor is deprecated. Apify describes this as automatically deprecating Actors "broken for more than a month".
  - Sources: [Apify Help: Troubleshooting "Under maintenance"](https://help.apify.com/en/articles/10057123-why-is-my-actor-marked-as-under-maintenance); [Apify Help: What to do when your Actor comes under maintenance](https://help.apify.com/en/articles/9716923-what-to-do-when-your-actor-comes-under-maintenance); [Apify docs: Testing and maintenance](https://docs.apify.com/platform/actors/development/testing-and-maintenance).
- **Actors that need a login:** "Actors that require some sort of authentication will always fail the tests despite being fully functional". After a fix and rebuild, "the automatic testing system will pick this up within 24 hours and mark it as healthy" — same Apify sources.
- **Policy-change maintenance:** the rental retirement forced migrations with a deadline. A third party reports "40–70% revenue drops" for developers who moved from rental to pay-per-usage without a proper PPE plan. That report is unverified and self-interested — [Godberry Studios](https://godberrystudios.com/posts/apify-pay-per-event-migration-playbook-2026/).
- **Zyla:** minimum-uptime rule, with reduced earnings or suspension below it — [Zyla Terms](https://zylalabs.com/terms).
- **MCPize** handles hosting, SSL, payments and discovery for MCP servers — [MCPize](https://mcpize.com/developers/monetize-mcp-servers).

### Inferences
- **Agent maintenance loop for Apify (inference; all steps use standard Apify API and CLI patterns).** A scheduled CI job, such as GitHub Actions nightly:
  - runs each Actor with fixture inputs through the Apify API;
  - checks output schema and row counts;
  - on failure, has the coding agent patch parsers or selectors, run the tests, and redeploy (e.g. `apify push`);
  - re-runs the checks;
  - watches for "under maintenance" flags.
- **Target choice matters more than code quality.** Stable, structured sources break rarely and need no expensive residential proxies. Examples: official public APIs used within their terms, government and open-data portals, sitemaps and RSS, and utility Actors that transform user-supplied data. Scraping anti-bot-heavy consumer sites breaks often and adds proxy costs that erode PPE margin.
- **Prefill inputs must pass the daily test.** Default inputs should be tiny, fast (well under 5 minutes) and never require a login. Otherwise the Actor is permanently marked under maintenance and loses ranking.
- **Realistic automation levels:**
  - Apify: about 4/5.
  - Browser extensions: about 3/5, because of store reviews, user emails, refunds, Stripe disputes and VAT returns.
  - WordPress and Shopify: about 2/5, because users expect support and the platforms review and change frequently.
  - x402 and MCP endpoints: about 4/5 technically, but demand is the constraint, not maintenance.

### Gaps
- Whether Apify exposes Store "Issues" (user bug reports) and reviews through an API, which decides whether replies can be automated, and how response time affects ranking: not found.
- No data was found on how often scrapers break, by type of target site.
- Chrome Web Store review times, Shopify API-versioning cadence and WordPress.org review queue times were not verified this session.

## 4. Legal, terms-of-service and policy risks

### Takeaway
Legal risk sits mostly in what an Actor scrapes, not in the marketplaces. Many high-demand Apify categories (social networks, login-walled sites, personal-data harvesting) conflict with the constraint that everything must be legal and within terms of service, so they are eliminated. Public or open-data and utility Actors are low-risk.

Platform-policy risk is material everywhere. Examples from 2024–2026:
- Apify retired rental pricing.
- RapidAPI raised its fee to 25% and Nokia changed its strategy.
- Shopify cut back its revenue-share exemption.
- Figma froze new seller approvals.
- ChatGPT apps can only monetize physical goods.
- The GPT Store revenue program never launched broadly.

### Cited Findings
- **Apify:** no new rental listings from about 1 Apr 2026. Rental retires 30 Sep / 1 Oct 2026, and unmigrated Actors switch to pay-per-usage, which pays the developer $0 — [Apify blog](https://blog.apify.com/migrating-to-pay-per-event-pricing/); [Godberry Studios](https://godberrystudios.com/posts/apify-pay-per-event-migration-playbook-2026/).
- **RapidAPI:** fee rose from 20% to 25% on 15 Nov 2025 — [RapidAPI docs](https://docs.rapidapi.com/docs/payouts-and-finance). Nokia acquired Rapid in November 2024 and is refocusing on telecom network APIs — [TechCrunch](https://techcrunch.com/2024/11/13/nokia-acquires-rapid-the-api-company-once-valued-at-1b/); [Fierce Network](https://www.fierce-network.com/wireless/nokia-doubles-down-network-apis-rapid-buy).
- **Shopify:** the annual $1M exemption became a lifetime allowance counted from 1 Jan 2025 — [BetaKit](https://betakit.com/shopify-app-developers-will-no-longer-be-exempt-from-sharing-their-first-1-million-usd-in-revenue-every-year/); [Shopify.dev](https://shopify.dev/docs/apps/launch/distribution/revenue-share).
- **Figma:** not approving new creators to sell paid resources — [Figma Help](https://help.figma.com/hc/en-us/articles/12067637274519-About-selling-Community-resources).
- **ChatGPT apps:** Instant Checkout approval is limited to physical goods — [OpenAI Apps SDK: Monetization](https://developers.openai.com/apps-sdk/build/monetization).
- **x402:** much of its volume is testing or "gamed" activity, including memecoin "pay-to-mint" — [CoinDesk](https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet); [Presenc AI](https://presenc.ai/research/x402-protocol-adoption-tracker-2026).
- **Zyla:** uptime service-level penalties — [Zyla Terms](https://zylalabs.com/terms).
- **Apify publishing terms:** the Store Publishing Terms and Conditions govern Store listings. Their contents were not retrieved — [Apify Store Publishing Terms](https://docs.apify.com/legal/store-publishing-terms-and-conditions).

### Inferences
- **ELIMINATE:** Actors, APIs or bots that:
  - log in to scrape;
  - get around access controls or anti-bot measures;
  - harvest personal data (emails, phone numbers, profiles) from social networks or directories;
  - or otherwise break a target site's terms.
  These are the riskiest categories legally (privacy law such as the GDPR, and contract/terms claims). They also fail Apify's tests when a login is needed, break most often, and are the most crowded.
- **KEEP:**
  - Actors built on official APIs used within their terms, or on open-government and open-data sources.
  - Actors collecting public, non-personal data where the site's terms allow automated access.
  - Pure utilities: file or format conversion, data cleaning and validation, and checks of URLs the user supplies.
- **Tax (inference; verify with a tax adviser):**
  - On Apify, Apify bills the buyers and pays the developer a share. The developer only handles their own income tax.
  - With ExtensionPay or raw Stripe, the developer is the merchant of record and may owe VAT or sales tax on consumer sales. That is non-trivial human work.
  - Merchant-of-record services such as Freemius (unverified) or Lemon Squeezy (unverified) take that burden off, at a higher fee.
- **Crypto payouts** (x402's USDC; Telegram Stars paid out in TON) add tax and regulatory complexity in many countries.

### Gaps
- **Unverified background knowledge** (not checked this session):
  - US case law on scraping public data, e.g. *hiQ v. LinkedIn* and *Meta v. Bright Data* (2024).
  - EU data-protection guidance on web scraping of personal data.
  - Chrome Web Store program policies on paid features and disclosure.
  - WordPress.org's ban on trialware.
  - Telegram's rule that digital goods be sold for Stars.
  - Apify's list of prohibited content.
  - All of these need checking against primary sources before the final report relies on them.
- Apify's rules on price changes (how often, how much notice) were not retrieved.

## 5. Time to first dollar and to $50/month, and which niches look underserved in 2026

### Takeaway
**Apify.** A new Actor can get runs within weeks, but cash follows a monthly cycle and arrives about 3–8 weeks after the underlying sales. The best-documented portfolio case only saw "meaningful but inconsistent" revenue in months 3–4. So $50/month net is realistic in months 3–6 if it happens at all.

**Other channels.** They have slower or undocumented ramps; the Chrome portfolios cited above were still at about $31 MRR after roughly 6 months.

**Niches.** Data on gaps between Store categories is not public. The agent has to mine Store data itself, and third-party Store-analytics Actors exist for that.

### Cited Findings
- **Apify payout cycle:** invoice on the 11th, automatic approval on the 14th, payment on the 21st–25th. Balances under $20 (PayPal) or $100 (wire) roll over — [Apify Help: How developer payouts work](https://help.apify.com/en/articles/10057167-how-developer-payouts-work).
- **Apify ramp in the 98-Actor case:** months 1–2 had single-digit weekly runs, revenue became "meaningful but inconsistent" in months 3–4, and the "catalog effect" arrived in months 5–6 — [Apify blog](https://blog.apify.com/building-98-actors-on-apify-store/).
- **Browser extensions:** the freemium portfolio earned $31.03 MRR by the end of July 2026, about 6 months in — [dev.to (ktg0215)](https://dev.to/ktg0215/real-numbers-freemium-chrome-extension-monetization-after-6-months-5hga). A guide on getting to a first sale exists but was not read — [ExtensionBooster](https://extensionbooster.net/blog/chrome-extension-first-sale-solo-dev-revenue-guide/).
- **Store-analytics tools already exist as Actors:** "Apify Store Intelligence – Trends, Revenue & Rankings" — [Apify Store](https://apify.com/dev-sinior/apify-store-intel); "Store Actor Intelligence API" — [Apify Store](https://apify.com/johnvc/store-actor-intelligence-api); "Apify Revenue Tracker — PPE Earnings Estimator" — [Apify Store](https://apify.com/ryanclinton/actor-revenue-analytics/input-schema).
- **Apify's $1M Challenge** ran until 31 Jan 2026. Prizes were $30k/$20k/$10k grand prizes plus $2k weekly spotlights, and the first 5 Actors published after registering were entered automatically. It is now over — [Apify Challenge](https://apify.com/challenge); [Apify Challenge Terms](https://docs.apify.com/legal/challenge-terms-and-conditions); [WeAreDevelopers](https://www.wearedevelopers.com/en/magazine/677/what-developers-are-building-to-win-1-million-with-apify-677); [Indie Hackers](https://www.indiehackers.com/post/the-apify-1m-challenge-mBIQoARFDO6JZKiZFU8M).

### Inferences
- **Revenue needed for $50 net on Apify.**
  - If profit = 0.8 × revenue − compute, and compute is about 10–15% of revenue, you need roughly $70–75 a month in gross PPE revenue.
  - With negligible compute, you need about $62.50.
  - Example: at $3 per 1,000 results, that is about 24,000 billed results a month across the portfolio. This is feasible with a few repeat business users running scheduled jobs.
- **Calendar reality.** Say sales start in month 2 after publishing. The first PayPal payout then lands in month 3 at the earliest (on the 21st–25th), and a stable $50 or more typically comes in months 4–6.
- **Candidate niches (hypotheses the agent should test with Store data, not established facts):**
  - Country- or language-specific public data (local government registries, tenders, open-data portals, public statistics) that English-centric Actors ignore.
  - Niche business directories whose terms allow automated access.
  - Data utilities: deduplication, validation, format conversion, PDF/HTML-to-structured-data for files users supply.
  - MCP or agent-friendly wrappers around public APIs, so AI agents can call them on a pay-per-use basis. Apify claims its MCP marketplace reaches "36K+ monthly developers" — [Apify](https://apify.com/mcp/developers).
  - Replacements for rental Actors that are abandoned or left unmigrated after the 30 Sep / 1 Oct 2026 retirement.

### Gaps
- No public category-saturation dataset for Apify Store was retrieved, and the 98-Actor author's niche list was not retrieved.
- Whether Apify is running any creator challenge or program in the second half of 2026 was not found.
- Time to first dollar for Poe, Telegram, Discord, Canva and Shopify was not verified.

## 6. Scorecard for every method, with verdicts (KEEP / MAYBE / ELIMINATE)

### Takeaway
**KEEP (one survivor):** Apify Store pay-per-event Actors in legal, public-data or utility niches, including Apify-hosted MCP servers.

**MAYBE (low-probability add-ons):**
- Freemium browser extension billed through ExtensionPay (only where Stripe is available).
- Poe price-per-message bots (only if the user's country is eligible).
- Canva Premium Apps (only if accepted).
- Zyla or RapidAPI cross-listings of APIs that already exist.

**ELIMINATE:**
- RapidAPI as a main channel.
- APILayer (no evidence).
- x402 and Stripe agentic rails used alone.
- Stand-alone MCP marketplaces.
- WordPress + Freemius.
- Shopify.
- Figma.
- Raycast, Obsidian and VS Code.
- Telegram Stars bots.
- Discord Premium Apps.
- Slack.
- GPT Store.
- ChatGPT Apps SDK (for now).
- GitHub Sponsors.
- npm.
- n8n, Make and Zapier templates.
- Apify rental.
- Any scraper that relies on logins, personal data or terms-of-service violations.

### Cited Findings
- The load-bearing facts behind the scores are cited in Sections 1–5:
  - Apify: 80% minus compute; $20/$100 payout floors; about $1.4M a month across about 3,000 developers; daily tests.
  - RapidAPI: 25% fee and PayPal-only payouts.
  - x402: about $28k a day of real volume.
  - MCP servers: fewer than 5% earn anything.
  - Chrome extensions: $22–31 MRR in real reports.
  - Figma: new-seller freeze.
  - GPT Store: US-only pilot.
  - ChatGPT apps: physical goods only.
  - Shopify: 0% on the first $1M, lifetime.
- Where a fact is repeated below it carries its citation. The probabilities are my estimates (inferences), not data.

### Inferences
**Summary table.** "P3/P6" is my estimated probability of at least $50/month net within 3 and within 6 months, assuming an AI agent builds the product and the human only does one-time account steps.

| # | Method | Automation (0–5) | P3 | P6 | Evidence | Trend 2025–26 | Verdict |
|---|---|---|---|---|---|---|---|
| 1 | Apify Store PPE Actors: legal public-data, open-data and utility niches (incl. Apify-hosted MCP servers) | 4 | 15–25% | 35–50% | Medium | Up | **KEEP** |
| 2 | Apify Actors scraping social, login-walled or personal data | 3 | n/a | n/a | Medium | Crowded | **ELIMINATE** (terms/legal) |
| 3 | Apify rental pricing | – | 0% | 0% | High | Retired | **ELIMINATE** |
| 4 | RapidAPI (Nokia) | 3 | ~3% | 5–8% | Low | Down | **ELIMINATE** as main channel (optional cross-list) |
| 5 | Zyla API Hub | 3 | ~3% | 5–8% | Low | Unknown | **MAYBE (cross-list only)** |
| 6 | APILayer / other API marketplaces | ? | ? | ? | None gathered | ? | **ELIMINATE by default** |
| 7 | x402 paid endpoints (agent micropayments) | 4 | 1–2% | 3–5% | Medium | Hype up, demand low | **ELIMINATE** (watchlist) |
| 8 | Stand-alone MCP monetization marketplaces (MCPize, AgenticMarket, SettleGrid) | 4 | ~2% | ~5% | Low | New entrants | **ELIMINATE** as stand-alone |
| 9 | Stripe agentic rails (MPP, ACP, Link Agents, x402 via Stripe) | 4 | ~1% | 2–3% | Medium (for the rails) | Up (infrastructure) | **ELIMINATE** (payment rail, no buyers) |
| 10 | Browser extension freemium with ExtensionPay (Chrome, Edge, Firefox) | 3 | ~5% | 10–15% | Low–medium | Flat, crowded | **MAYBE** |
| 11 | WordPress.org free plugin + Freemius Pro | 2 | 1–2% | 3–5% | Low | Mature | **ELIMINATE** |
| 12 | Shopify App Store | 2 | ~2% | ~5% | Medium (fees) / low (earnings) | Terms tightened 2025 | **ELIMINATE** (support-heavy) |
| 13 | Figma Community paid plugins | 3 | ~1% | 2–3% | Medium | Closed to new sellers | **ELIMINATE** |
| 14 | Canva Premium Apps Program | 3 | ~2% | ~5% (if accepted) | Low | Expanding | **MAYBE (low)** |
| 15 | Raycast, Obsidian, VS Code extensions | 4 | ≤1% | ≤2% | Unverified | – | **ELIMINATE** |
| 16 | Telegram bots (Stars, Mini Apps) | 3 | ~2% | 4–5% | Unverified | – | **ELIMINATE** |
| 17 | Discord Premium Apps | 2 | ~1% | ~3% | Unverified | – | **ELIMINATE** |
| 18 | Slack apps | 2 | ≤1% | ≤1% | Unverified | – | **ELIMINATE** |
| 19 | GPT Store revenue program | – | ~0% | ~0% | Low | Stagnant | **ELIMINATE** |
| 20 | ChatGPT Apps SDK (App Directory) | 3 | ~1% | 2–3% | Medium | Up, but no digital-goods monetization | **ELIMINATE for now** (watchlist) |
| 21 | Poe price-per-message bots | 4 | 3–5% (if eligible) | 5–10% (if eligible) | Low (conflicting) | Unclear | **MAYBE (low)** |
| 22 | GitHub Sponsors / open-source donations | 4 | ~1% | 2–3% | Unverified | – | **ELIMINATE** |
| 23 | npm packages | 5 | 0% | 0% | Unverified | – | **ELIMINATE** |
| 24 | n8n, Make, Zapier template marketplaces | 4 | ~1% | 3–5% | Unverified | – | **ELIMINATE** |

**Detailed scorecards.** Fields: (a) automation after setup, (b) unavoidable human steps, (c) upfront and monthly cost, (d) time to first dollar and to $50/month, (e) probability of ≥$50/month net at 3 and 6 months with reasoning, (f) consistency, (g) terms/legal/policy risk, (h) evidence quality, (i) 2025–26 trend.

**1. Apify Store PPE Actors in legal public-data, open-data and utility niches, including Apify-hosted MCP servers: KEEP**
- (a) **4/5.** Apify tests daily and flags failures, the agent's CI fixes and redeploys, invoices approve themselves on the 14th, and payouts go out on the 21st–25th ([Apify](https://help.apify.com/en/articles/10057167-how-developer-payouts-work); [Apify docs](https://docs.apify.com/actors/publishing/test)). The leftover human touch is platform policy changes (like the rental retirement) and possibly replies to user issues.
- (b) **Human steps:**
  - Create an Apify account.
  - Enter payout details (PayPal or bank).
  - Accept the Store publishing terms.
  - Create an API token for the agent.
  - Optionally pay for the Creator Plan.
  - Declare the income at home.
- (c) **Cost:** $0–6 up front (Creator Plan $1/month, 6 months prepaid, with $500 of usage — [Apify](https://apify.com/pricing/creator-plan)). No fixed monthly cost: compute is deducted from revenue. The agent tooling is the user's existing subscription.
- (d) **Timing:** first runs and first earnings within weeks. First cash lands on the next 21st–25th once the balance reaches $20 (PayPal). Reaching $50/month net takes 3–6 months, if it happens ([Apify blog](https://blog.apify.com/building-98-actors-on-apify-store/)).
- (e) **P3 15–25%, P6 35–50%.**
  - For: about 3,000 paid developers share about $1.4M a month (mean about $470), so $50 is plausibly near the median *paid* developer ([Apify](https://apify.com/partners/actor-developers)). The 98-Actor case reached "meaningful" revenue by months 3–4.
  - Against: 54,000–70,000+ listings mean most Actors earn $0, and supply generated with AI help is growing fast. PPE is usage-based, and an agent-built portfolio has no reviews at first.
  - These probabilities assume a portfolio of 20–40 small Actors in underserved, terms-compliant niches, not one or two.
- (f) **Consistency: medium.** Revenue is usage-based and fluctuates. A portfolio of repeat or scheduled business users smooths it.
- (g) **Risk: low legal risk** if restricted to public or open data and utilities. **Medium platform-policy risk**: Apify changed its monetization rules in 2026 with about 6 months' notice.
- (h) **Evidence: medium.** Payout totals and top-earner claims come from Apify itself, are not audited, and include no median. There is one detailed case study, with revenue undisclosed.
- (i) **Trend: up.** $563k in September 2025 (6x year-on-year) to about $1.4M a month claimed in 2026 ([press release](https://natlawreview.com/press-releases/apify-bets-1m-independent-developers-building-ais-missing-tools); [Apify](https://apify.com/partners/actor-developers)). Competition is also up.

**2. Apify Actors scraping social networks, logins or personal data: ELIMINATE**
- Breaches the user's terms and legality constraint: these Actors violate target-site terms and risk privacy law.
- Actors that need a login "will always fail the tests" and so rank lower ([Apify docs](https://help.apify.com/en/articles/10057123-why-is-my-actor-marked-as-under-maintenance)).
- These are the most crowded and most brittle categories.

**3. Apify rental pricing: ELIMINATE**
- No new rental listings since about 1 Apr 2026, and the model retires on 30 Sep / 1 Oct 2026 ([Apify blog](https://blog.apify.com/migrating-to-pay-per-event-pricing/)).

**4. RapidAPI: ELIMINATE as a main channel; optional zero-effort cross-listing of an API that already exists**
- (a) **3/5.** You host your own endpoint and uptime is your problem.
- (b) **Human steps:** a RapidAPI account and a PayPal account that can receive money.
- (c) **Cost:** $0 up front; $0–5/month hosting (serverless; an inference).
- (d) **Timing:** unknown.
- (e) **P3 about 3%, P6 5–8%.** There is no typical-earnings evidence. The fee is now 25%, plus PayPal fees of up to 2% ([RapidAPI docs](https://docs.rapidapi.com/docs/payouts-and-finance)). The new owner's strategic focus is elsewhere ([Fierce Network](https://www.fierce-network.com/wireless/nokia-doubles-down-network-apis-rapid-buy)).
- (f) **Consistency:** low or unknown.
- (g) **Risk:** medium platform risk (fee increases, possible deprioritization).
- (h) **Evidence:** low.
- (i) **Trend:** down.

**5. Zyla API Hub: MAYBE, as a cross-listing only**
- (a) **3/5.**
- (b) **Human steps:** account, application and API review ([Zyla](https://zylalabs.com/monetize-your-api)).
- (c) **Cost:** $0 plus hosting.
- (d) **Timing:** unknown.
- (e) **P3 about 3%, P6 5–8%.** The 80/20 split is decent, but there is no evidence of buyer traffic for third-party APIs.
- (f) **Consistency:** unknown.
- (g) **Risk:** uptime penalties ([Zyla Terms](https://zylalabs.com/terms)).
- (h) **Evidence:** low; all of it is self-published by Zyla.
- (i) **Trend:** unknown.

**6. APILayer and other API marketplaces: ELIMINATE by default**
- No provider terms or earnings evidence was gathered, so the scorecard cannot be filled in.

**7. x402 paid endpoints: ELIMINATE, keep on a watchlist**
- (a) **4/5.** Receiving needs no accounts, only a wallet ([WorkOS](https://workos.com/blog/x402-vs-stripe-mpp-how-to-choose-payment-infrastructure-for-ai-agents-and-mcp-tools-in-2026)).
- (b) **Human steps:** create a wallet. Cashing out USDC probably needs a KYC-verified exchange (inference).
- (c) **Cost:** about $0 plus hosting.
- (d) **Timing:** first dollar could come fast technically, but demand is thin.
- (e) **P3 1–2%, P6 3–5%.** Real commerce was about $28k a day across the whole ecosystem, much of it "gamed" or test traffic ([CoinDesk](https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet)). Named production deployments are big players: Coinbase Agent.market, Stripe, CoinGecko, Circle and Cloudflare ([Presenc AI](https://presenc.ai/research/x402-protocol-adoption-tracker-2026)).
- (f) **Consistency:** low.
- (g) **Risk:** stablecoin and crypto tax/regulatory exposure varies by country.
- (h) **Evidence:** medium.
- (i) **Trend:** infrastructure up, organic demand flat.

**8. Stand-alone MCP monetization marketplaces: ELIMINATE as stand-alone**
- (a) **4/5.** MCPize hosts the server ([MCPize](https://mcpize.com/developers/monetize-mcp-servers)).
- (b) **Human steps:** account plus Stripe.
- (c) **Cost:** $0.
- (d) **Timing:** unknown.
- (e) **P3 about 2%, P6 about 5%.** Fewer than 5% of more than 20,000 servers earn a single dollar ([mcp-marketplace.io](https://mcp-marketplace.io/blog/state-of-mcp-monetization-2026), a self-interested source), and these marketplaces launched in 2026 with unproven buyer traffic.
- (g) **Risk:** low to medium.
- (h) **Evidence:** low.
- (i) **Trend:** many launches, unproven.
- **Better route:** publish MCP servers on Apify, where buyers already exist (row 1).

**9. Stripe agentic rails (MPP, ACP, Link Agents): ELIMINATE for this goal**
- These are payment rails, not marketplaces that bring buyers ([Stripe](https://stripe.com/blog/machine-payments-protocol); [Eco](https://eco.com/support/en/articles/14839406-stripe-link-agents-and-x402-explained)).
- They need a Stripe account in a supported country.
- **P3 about 1%, P6 2–3%.**

**10. Freemium browser extension with ExtensionPay (Chrome, Edge, Firefox): MAYBE, second tier**
- (a) **3/5.** The agent can build and ship updates. Store reviews, user email, refunds and disputes, and VAT or sales-tax filings need human access to the accounts.
- (b) **Human steps:**
  - Register as a Chrome Web Store developer (one-time fee; amount unverified).
  - Open a Stripe account; this requires Stripe to be available in the user's country.
  - Create an ExtensionPay account.
  - Set up a support inbox.
  - Register for tax where needed.
- (c) **Cost:** small one-time store fee. $0 per month. 5% plus Stripe fees per sale ([Kelviq](https://www.kelviq.com/blog/chrome-extension-payment-platforms/)).
- (d) **Timing:** first dollar in weeks to months; $50/month typically takes 6–12+ months.
- (e) **P3 about 5%, P6 10–15%.** Real indie portfolios sit at $22–31 MRR after months ([Indie Hackers](https://www.indiehackers.com/post/mrr-update-22-month-from-chrome-extensions-0715acdd8b); [dev.to](https://dev.to/ktg0215/real-numbers-freemium-chrome-extension-monetization-after-6-months-5hga)). $50 net needs roughly 11–12 subscribers at $5, which means about 1,000+ active users at about 1% conversion. Organic Chrome Web Store discovery is slow.
- (f) **Consistency:** medium once reached, since it is subscription revenue.
- (g) **Risk:** medium. Store policy enforcement, plus the developer being merchant of record for VAT.
- (h) **Evidence:** low to medium: vendor totals plus anecdotes.
- (i) **Trend:** flat and crowded.

**11. WordPress.org free plugin + Freemius Pro: ELIMINATE**
- (a) **2/5.** Users expect support, and security patches and plugin review are ongoing.
- (c) **Cost:** fees total about 10.5%, with a $100 minimum payout ([Freemius](https://freemius.com/help/documentation/getting-started/our-pricing/)).
- (d) **Timing:** long install-base ramp.
- (e) **P3 1–2%, P6 3–5%.**
- (h) **Evidence:** low.
- (i) **Trend:** mature and saturated.

**12. Shopify App Store: ELIMINATE for near-zero effort**
- **Fees are excellent:** 0% on the first $1M lifetime, then 15%, plus 2.9% processing ([Shopify.dev](https://shopify.dev/docs/apps/launch/distribution/revenue-share)).
- **But it is not near-zero effort:** merchant support, app review and platform change make automation about 2/5.
- **P3 about 2%, P6 about 5%.**
- (h) **Evidence:** medium for fees, low for small-app earnings.
- (i) **Trend:** terms tightened in 2025 ([BetaKit](https://betakit.com/shopify-app-developers-will-no-longer-be-exempt-from-sharing-their-first-1-million-usd-in-revenue-every-year/)).

**13. Figma Community paid plugins: ELIMINATE**
- New creators are not being approved to sell ([Figma Help](https://help.figma.com/hc/en-us/articles/12067637274519-About-selling-Community-resources)).
- Payouts exclude major developer countries ([Kelviq](https://www.kelviq.com/blog/figma-plugin-monetization/)).
- Third-party licensing works but lacks a buyer funnel.
- **P3 about 1%, P6 2–3%.**

**14. Canva Premium Apps Program: MAYBE (low)**
- Pays monthly based on usage, and Canva has a large paid user base ([Canva](https://www.canva.com/developers/premium-apps-program/)). Eligibility and acceptance criteria are unknown, and there is no payout data.
- (a) **3/5.**
- (e) **P3 about 2%, P6 about 5%**, conditional on acceptance.
- (h) **Evidence:** low.
- (i) **Trend:** expanding.

**15. Raycast, Obsidian and VS Code extensions: ELIMINATE**
- No in-store payments (unverified, from background knowledge). Income would be donations or external licenses.
- **P ≤1–2%.**

**16. Telegram bots (Stars, Mini Apps): ELIMINATE**
- Payout details, discovery and typical earnings could not be verified this session.
- From unverified background: Stars are withdrawn as TON via Fragment after a hold, the developer-side value is about $0.013 per Star, and organic discovery is weak.
- Crypto cash-out adds complexity.
- **P3 about 2%, P6 4–5%.**

**17. Discord Premium Apps: ELIMINATE**
- Unverified: limited to a list of supported countries, and needs community traction plus moderation and support.
- **P3 about 1%, P6 about 3%.**

**18. Slack apps: ELIMINATE**
- The Marketplace does not bill customers (unverified), and there is no buyer funnel for tiny paid tools.

**19. GPT Store revenue program: ELIMINATE**
- A US-only, invite-only pilot that never launched broadly ([Digital Applied](https://www.digitalapplied.com/blog/gpt-store-custom-gpts-business-guide-2026); [OpenAI community](https://community.openai.com/t/what-is-the-status-with-gpt-store-revenue-share/839172)).
- **P about 0%.**

**20. ChatGPT Apps SDK: ELIMINATE for now, keep on a watchlist**
- The App Directory has been live since December 2025 ([VentureBeat](https://venturebeat.com/technology/openai-now-accepting-chatgpt-app-submissions-from-third-party-devs-launches)).
- In-ChatGPT checkout is limited to physical goods, and digital products must use external checkout ([OpenAI](https://developers.openai.com/apps-sdk/build/monetization)).
- An app could act as a funnel to an Apify Actor or a SaaS, but it does not earn on its own.
- **P3 about 1%, P6 2–3%.**

**21. Poe price-per-message bots: MAYBE (low), only if the user's country is eligible**
- (a) **4/5.**
- (b) **Human steps:** Poe account, Stripe account, and tax info within 90 days ([Poe](https://creator.poe.com/docs/resources/creator-monetization)).
- (c) **Cost:** model inference costs. Poe's docs have a "How we cover your costs" page whose contents were not retrieved ([Poe](https://creator.poe.com/docs/resources/how-we-cover-your-costs)).
- (e) **P3 3–5%, P6 5–10% if eligible; 0% if not.**
- (h) **Evidence:** low, and the eligibility and payout claims conflict.
- (i) **Trend:** unclear.

**22. GitHub Sponsors and open-source donations: ELIMINATE**
- Donation income is unreliable and slow; details are unverified.
- **P3 about 1%, P6 2–3%.**

**23. npm packages: ELIMINATE**
- No monetization mechanism.

**24. n8n, Make and Zapier template marketplaces: ELIMINATE**
- I could not verify that any of them has a paid-template marketplace with payouts; details are unverified.
- **P3 about 1%, P6 3–5%.**

### Gaps
- All probabilities are judgment calls built on thin distribution data. No platform other than Apify publishes aggregate payouts, and even Apify publishes no median.
- The scorecards for rows 15–18 and 22–24 rest on unverified background knowledge, because the search budget ran out. Re-verify before the final report.

## 7. Top survivor(s): concrete setup, current fees and thresholds, and the evidence that $50/month is reachable

### Takeaway
**One method clearly survives:** a portfolio of pay-per-event Actors on Apify Store, built and maintained by an AI agent, in terms-compliant public-data and utility niches, with the same code optionally exposed as Apify-hosted MCP tools. It pays about 80% of revenue minus compute. Payouts reach PayPal from $20 or bank wire from $100 on a monthly cycle with automatic approval. My estimate is a 35–50% chance of a steady $50/month net within 6 months.

**Possible second (MAYBE, much lower odds):** a freemium browser extension billed through ExtensionPay, for users in countries Stripe supports who will accept a little support and tax admin. No other method has credible evidence of reaching $50/month net with near-zero work.

### Cited Findings
- **Apify fees and payouts:**
  - The developer gets 80% of PPE revenue minus platform usage costs ([Apify Help](https://help.apify.com/en/articles/8684010-make-money-publishing-your-actors-on-apify-store)); see Section 1 for the alternative wording.
  - Minimum payout: PayPal $20, wire $100, with rollover below that ([Apify Help](https://help.apify.com/en/articles/10057167-how-developer-payouts-work)).
  - Invoice on the 11th, automatic approval on the 14th, payment on the 21st–25th (same source).
- **Available models for new Actors:** PPE, pay per result, and pay per usage (which pays the developer nothing); rental is closed to new listings ([Apify Help](https://help.apify.com/en/articles/12800725-ship-your-actor-and-get-paid); [Apify blog](https://blog.apify.com/migrating-to-pay-per-event-pricing/)).
- **Creator Plan:** $1/month, 6 months prepaid, with $500 of platform usage ([Apify](https://apify.com/pricing/creator-plan)).
- **Quality gate:** daily default-input test that must succeed with non-empty output within 5 minutes; "under maintenance" after 3 failing days (ranks lower); deprecation after 14 more ([Apify docs](https://docs.apify.com/actors/publishing/test); [Apify Help](https://help.apify.com/en/articles/10057123-why-is-my-actor-marked-as-under-maintenance)).
- **Evidence the platform pays small developers at scale:**
  - About $1.4M a month to about 3,000 community developers ([Apify](https://apify.com/partners/actor-developers)).
  - Top creators above $10k a month and "many others" above $1,000 a month ([Apify Help](https://help.apify.com/en/articles/8684010-make-money-publishing-your-actors-on-apify-store)).
  - September 2025 payouts of $563k, 6x year-on-year, and more than $4M paid out in total ([press release](https://natlawreview.com/press-releases/apify-bets-1m-independent-developers-building-ais-missing-tools)).
  - A 98-Actor portfolio reached 855 monthly users and "meaningful" revenue in months 3–4 ([Apify blog](https://blog.apify.com/building-98-actors-on-apify-store/)).
- **Distribution for agent tools:** Apify's MCP marketplace claims "36K+ monthly developers" ([Apify](https://apify.com/mcp/developers)).
- **ExtensionPay (second tier):**
  - 5% plus Stripe fees; money goes to the developer's own Stripe account; works across Chrome, Firefox, Edge, Opera and Brave ([Kelviq](https://www.kelviq.com/blog/chrome-extension-payment-platforms/); [ExtensionPay](https://extensionpay.com/)).
  - Real indie results were $22–31 MRR ([Indie Hackers](https://www.indiehackers.com/post/mrr-update-22-month-from-chrome-extensions-0715acdd8b); [dev.to](https://dev.to/ktg0215/real-numbers-freemium-chrome-extension-monetization-after-6-months-5hga)).

### Inferences
**Survivor 1: Apify Store PPE portfolio setup**
- **One-time human steps (about 1–2 hours):**
  1. Create the Apify account.
  2. Add payout details. PayPal is best for $50/month because its $20 floor clears monthly; wire needs $100 and so pays about every two months.
  3. Accept the Store publishing terms and fill in billing and identity details.
  4. Optionally buy the Creator Plan (about $6 prepaid, $500 of usage for building and testing).
  5. Create an API token and hand it to the agent's CI secrets.
  6. Report the income under home-country tax rules. Apify generates the payout invoices itself; the user does not have to issue them.
- **Agent build plan:**
  - Use Apify's SDK (JavaScript or Python) to ship 20–40 small Actors over 6–8 weeks. Each one gets a tight input schema, a tiny prefill input that passes the daily 5-minute test, a README and SEO-friendly title, and PPE events priced well above compute cost (for example per result plus per start).
  - Targets are open data, official APIs used within their terms, public non-personal data, and utilities. There are no logins, no personal data, and nothing that needs residential proxies.
  - Where it adds value, expose the same logic as an Apify-hosted MCP server so AI agents can call it.
- **Agent run plan:**
  - A nightly CI job calls every Actor through the API with fixture inputs and checks output schema and counts. On failure it patches, tests and redeploys automatically, then confirms the Actor is not "under maintenance" within 24 hours.
  - A weekly job pulls Store and competitor data (for example with third-party Store-intelligence Actors), retires Actors nobody uses, and ships 1–2 new ones where demand exists.
  - A monthly job reconciles payout invoices. No action is needed because approval is automatic.
- **Target math:** about $62–75 a month in gross PPE revenue gives about $50 net. That is, for example, about 24,000 results at $3 per 1,000, or about 2,500 runs at $0.03 per start, across the whole portfolio.
- **Kill criteria:** if month 4 has less than $10 a month in total revenue across the portfolio, the niche selection has failed. Re-niche rather than adding volume.
- **Why believe it:** Apify is the only channel in this category with published evidence that thousands of small third-party developers are paid every month, with a documented zero-touch payout pipeline and a built-in automated quality gate. Growth is strong. The main uncertainties are the unpublished median and fast-growing competition from other AI-built Actors.

**Survivor 2 (conditional MAYBE): freemium browser extension with ExtensionPay**
- Consider it only if the user's country supports Stripe and they accept occasional admin: store reviews, refunds, VAT.
- Expect $50/month to take longer than 6 months. Real portfolios report $22–31 MRR.
- Treat it as a diversification bet, not a base case.

**Low-effort add-ons that are not survivors:**
- Cross-list an API that already exists (for example the backend of an Apify Actor) on Zyla or RapidAPI.
- Accept x402 payments on an endpoint that already exists.
- These cost the agent little but have near-zero evidence of meaningful sales; RapidAPI now takes 25% and pays only via PayPal.

### Gaps
- Apify's median developer earnings and the count of developers publishing paid Actors are unknown, so P3/P6 cannot be calibrated from data.
- The exact PPE profit formula (0.8R − C versus 0.8(R − C)) is unresolved.
- Whether Wise is available for Actor payouts, and any country or sanctions exclusions for Apify payouts, are unknown.
- Whether user issue threads can be handled through the API is unknown.
- Apify's rules on price-change frequency and notice periods are unknown.
- Whether any 2026 creator challenge or bonus program is running is unknown.
