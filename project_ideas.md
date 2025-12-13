## Project Ideas (brainstorming — not final requirements)

These are *starting points* designed to score well on the hackathon judging pillars (Implementation, Design-fit to Sui, Idea relevance, UX). We’ll iterate and pick one based on team skills/time.

### Why citations are mandatory in this doc
Because we’re using LLM assistance, **every non-trivial technical claim should be anchored to a source** (official docs or reputable ecosystem repos). This keeps us honest, reduces “confidence hallucinations”, and makes our eventual submission stronger for judges reviewing architecture decisions.

**How citations work here:** inline footnote markers like `[^sui-docs]` or `[^beep-sdk]`, with the full list collected at the very end under **Citations**.

### Eligibility / qualifying rule (must-follow)
To qualify, we must either:
1) **Build our own project**, or
2) **Contribute to RFPs / open-source repos**.

Topic hub (RFPs + repos):[^sui-topics]

**Rule for this file:** I will add the ideas one-by-one. Say **`next`** when you want me to write the next idea in full detail.

### What tends to win on Sui hackathons (skeptical, based on past winners)
This isn’t predictive, but it helps calibrate risk and differentiation:
- **End-to-end working product beats slides**: winners repeatedly ship a complete loop (on-chain + UI + real integration).[^overflow-2024-winners][^kucoin-2023-winners]
- **Strong UX / onboarding** matters even when “Implementation” is the top pillar: consumer apps, wallets, and “make it easy” projects place highly.[^overflow-2024-winners][^epfl-2023-winners]
- **Clear Sui-native design**: object-centric modeling and clean capability access control tend to show up in winning infra/tooling concepts.[^epfl-2023-winners][^sui-examples]
- **Trend pressure is real**: in 2025 winners, AI + privacy/crypto were heavily represented; you must either lean in *hard* or differentiate clearly.[^overflow-2025-winners]
- **Walrus/Seal can be a differentiator** when used to solve a real UX/security problem (not just “we used it”).[^walrus-hackathon-highlights-summer25]

### How to use past submissions for inspiration (fast)
1. **Scan 20–30 submissions** and note what they *actually demo* (not what they promise).[^sui-overflow-devfolio]
2. **Steal structure, not ideas**: UI flow, repo layout, demo video format, and how they explain Sui-specific design.
3. **Look for “judge-friendly” artifacts**: working link, short demo video, tests, and clean event schema.
4. Use a second gallery for more idea variety (student hackathons are great for weekend scope).[^asu-sui-devpost-gallery]

---

## Idea 1 — Agent-Paywalled API Marketplace (Sui + BEEP a402 + Walrus + Seal)

### One-liner
Build a marketplace where developers publish an API “product” and agents/users can call it using **pay-per-request** (HTTP **402 / a402**) with **self-custodial stablecoin payments on Sui**,[^sui-docs] while API specs and receipts are stored on **Walrus**[^walrus-docs] and sensitive configs/credentials are shared via **Seal**.[^seal-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### Why this can win (mapped to judging)
- **Implementation (40%)**: real end-to-end product (Move + backend gateway + frontend), measurable correctness (payments, metering, receipts), testable flows.
- **Design (30%)**: object-centric assets (API listing objects, access/meter objects, receipt objects) + parallelism (independent calls / per-user quotas).[^sui-docs]
- **Idea (20%)**: blockchain is meaningfully used for settlement, tamper-proof metering receipts, and composable access rights.
- **Outcome/UX (10%)**: demo is intuitive: connect wallet → buy credits or pay-per-call → see logs/receipts → revoke access.

### Target users
- API builders who want instant monetization.
- AI agents (or power users) needing authenticated paid access to tools.

### Batikan fit score: 90/100
**Why Batikan is likely strong here**
- Proven hackathon execution + fast ramp-up on Sui: 3rd place at the first Sui hackathon in Poland *after joining late, solo, with no prior Sui/Move experience*.[^batikanor]
- Strong fullstack background (React/Next.js + backend + cloud) which this idea needs (gateway + UI + infra).[^batikanor]
- Comfort with “agent/AI tool” style integrations from prior AI-heavy projects.[^batikanor]

**Risks / why it’s not a perfect 100**
- This depends on multiple ecosystem components (payments + storage + encryption). Integration risk is the main schedule killer.
- Production-grade metering/idempotency can be deceptively tricky; needs disciplined testing.

### Hackathon win chance (skeptical): 78/100
**Why it could place highly**
- Clear “working product” demo: list → pay → call → receipt; judges can verify quickly.[^overflow-2024-winners]
- Strong ecosystem integration story (BEEP + Walrus + optional Seal) that looks “Sui-native” if the on-chain object model is clean.[^beep-sdk][^walrus-docs][^sui-docs]
- Bridges to real demand: paid tool/API access is a common pain point for builders/agents.

**Why it might *not* win**
- Risk of looking like “a payments proxy with blockchain sprinkled on” unless Sui objects/caps are central.
- Multi-component integration can fail on demo day (timeouts, wallet friction, RPC issues). Mitigate via tight scope and local fallbacks.[^sui-rpc-ref]

**How to increase win odds**
- Make one spectacular E2E flow bulletproof + tested (tie-breaker).
- Emphasize object-centric parallelism: per-user passes/receipts as owned objects, minimal shared state.[^sui-docs][^sui-examples]

### Core MVP (hackathon-sized)
1. **Publisher flow**
   - Create an “API Listing” with name, description, pricing model (per-call), and endpoint.
   - Upload OpenAPI schema (or tool manifest) to **Walrus** and store the content-address on-chain.[^walrus-docs]
2. **Consumer flow**
   - Connect wallet and purchase a limited “call pack” *or* pay-per-request.
   - Call the API through a gateway that enforces payment and returns **HTTP 402** when unpaid (a402 payment flow).[^beep-sdk]
3. **Receipts & transparency**
   - Each successful paid call emits an on-chain receipt reference.
   - Detailed call receipts (timestamp, price, listing id, response hash) stored on Walrus.[^walrus-docs]

### Architecture (high level)
- **Move package (Sui)**
  - `ApiListing` object: publisher, pricing, walrus schema pointer, status.
  - `AccessPass` (or `CreditBalance`) object: owned by consumer; decremented per call.
  - `CallReceipt` object/event: immutable record of settlement + pointer to Walrus receipt.
  - Admin capabilities for publishers (pause listing, rotate endpoint metadata pointer, etc.).
  - Keep module patterns idiomatic by mirroring known-good examples from the official Sui repo.[^sui-examples]
- **Gateway service (TypeScript/Node)**
  - Validates a402 payment via **BEEP SDK**.[^beep-sdk]
  - Enforces metering, signs/commits receipt, returns proxied API response.
  - Minimal indexer/cache (store listing metadata locally + subscribe to events) using Sui APIs.[^sui-api-ref]
  - Uploads schemas/receipts to Walrus through the Walrus HTTP API (or SDK) for a clean backend boundary.[^walrus-web-api]
- **Frontend (web)**
  - Browse listings, view schemas, buy access/credits, test-call the API, view receipts.
  - Use Sui dApp Kit for wallet connection + querying patterns.[^sui-dapp-kit]
- **Storage/security**
  - **Walrus**: immutable schema + receipt artifacts (proof-friendly).[^walrus-docs]
  - **Seal** (optional in MVP): share “publisher secrets” *without* hardcoding (e.g., upstream API key escrow/release pattern), or encrypt premium documentation.[^seal-docs]

### Implementation requirements
#### Hardware
- Any modern laptop; optional second machine only if you want to run extra services.

#### Software
- Sui CLI + localnet/devnet tooling.[^sui-docs]
- Node.js (gateway + frontend).
- Sui TypeScript SDK + docs for transaction building and RPC usage.[^sui-ts-sdk][^ts-sdks-repo]
- Sui dApp Kit for wallet UX.[^sui-dapp-kit]
- A database (optional): SQLite/Postgres for caching; can be skipped for MVP.

#### Licensing / compliance
- Prefer permissive licenses (MIT/Apache-2.0) for included code.
- Do **not** commit API keys; use env vars + local secrets.
- If calling third-party APIs in demo, ensure their ToS allows proxying.

### Knowledge requirements
- **Sui basics**: objects, ownership, shared objects vs owned objects, events.[^sui-docs][^sui-cheat-sheet]
- **Move**: modules, abilities, access control patterns, testing with Move unit tests.[^sui-docs][^sui-cheat-sheet]
- **Wallet + signing**: transaction construction/signing, frontend wallet integration.[^sui-docs]
- **Sui SDK usage**: transaction building, querying objects/events via API reference.[^sui-ts-sdk][^sui-api-ref]
- **HTTP gateway**: building a reverse proxy, auth headers, rate limiting.
- **Payments/a402**: understanding the HTTP 402 flow and how BEEP implements it.[^beep-sdk]

### Difficulty / hardening level
- **MVP difficulty**: Medium.
- **Hardening level (what separates winners)**: High.
  - Prevent replay/double-spend in metering.
  - Idempotent receipts.
  - Clear, auditable event schema.
  - Robust error handling + friendly UX.

### Security & correctness checklist (what judges will notice)
- Clear separation of publisher/admin vs user permissions (capabilities).
- No shared mutable state bottleneck (avoid one global shared counter).
- Deterministic pricing + explicit rounding rules.
- Replay protection: gateway must not accept the same payment proof twice.
- Receipts are immutable and verifiable (hash response or canonical metadata).

### Test plan (tie-breaker strength)
- **Move tests**: listing creation, credit decrement, invalid access, paused listing.
- **Gateway tests**: 402 when unpaid, success path emits receipt, idempotency behavior.
- **E2E smoke**: UI flow on devnet/testnet with recorded demo script.

### Demo script (2–3 minutes)
1. Publisher creates listing + uploads OpenAPI to Walrus.
2. User connects wallet, tries call → gets HTTP 402 with payment instructions.
3. User pays via BEEP, retries call → succeeds.
4. UI shows receipt + Walrus link; on-chain event visible.
5. Optional: publisher pauses listing; calls fail gracefully.

### Stretch goals (if ahead of schedule)
- Seal-based encrypted “premium docs” or encrypted receipt payloads.[^seal-docs]
- Subscription pricing (time-based access pass).
- Multi-provider routing + SLA scoring from on-chain receipts.
- Simple agent integration: expose each listing as an MCP tool.

## Idea 2 — Private Bug Bounty Vault (Sui + Walrus + Seal)

### One-liner
Create a **responsible disclosure** platform where projects post bounties on-chain,[^sui-docs] researchers submit **encrypted** vulnerability reports stored on **Walrus**,[^walrus-docs] access is controlled via **Seal**,[^seal-docs] and payouts/refunds are enforced by **Sui Move** (escrow + deadlines + auditable events).[^sui-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### Batikan fit score: 84/100
**Why Batikan is likely strong here**
- Prior privacy-focused hackathon work (e.g., “SecSanta” at ETHRome) suggests good instincts for confidentiality UX and threat-awareness.[^batikanor]
- Very strong general execution + product delivery history across many hackathons.[^batikanor]
- Fullstack ability helps because you need both crypto-ish flows *and* a clean triage UI.[^batikanor]

**Risks / why it’s not a perfect 100**
- “Bug bounty / disclosure” systems need careful security design and abuse resistance; getting details wrong can undermine credibility.
- Cryptography and access control are easy to implement incorrectly without strict review; we must lean heavily on Seal docs and keep scope tight.

### Hackathon win chance (skeptical): 70/100
**Why it could place highly**
- Privacy/security is a recurring winner theme (e.g., cryptography/privacy track winners).[^overflow-2025-winners]
- Very judge-friendly architecture story: escrow + deadlines + encrypted storage + auditable events.

**Why it might *not* win**
- Judges may apply higher security bar (because it’s a security product); any flaw feels fatal.
- Hard to “wow” in 2 minutes unless UX is extremely crisp (decrypt/review/accept/payout instantly).

**How to increase win odds**
- Keep on-chain state machine minimal and provable; show tests for the critical transitions.
- Add one strong UX differentiator (e.g., zkLogin onboarding for researchers) only if it’s stable.[^sui-zklogin]

### Why this can win (mapped to judging)
- **Implementation (40%)**: real flows with money + permissions + deadlines; easy to test (happy paths + failure paths).
- **Design (30%)**: clean object model (each bounty/submission is its own object), parallel by default (many bounties/submissions can process simultaneously).
- **Idea (20%)**: blockchain is essential for *escrow guarantees* + audit trail, while encryption preserves responsible disclosure.
- **Outcome/UX (10%)**: smooth UX: “post bounty → submit encrypted report → maintainer decrypts → accept → payout”.

### Target users
- OSS maintainers / small protocol teams who can’t run a full HackerOne program.
- Security researchers who want credible escrow + clear timelines.

### Core MVP (hackathon-sized)
1. **Bounty creation**
   - A project deposits funds into a `Bounty` object (SUI or a stablecoin if available).
   - Metadata includes severity tiers, deadline windows, and a Seal identity/key reference for maintainers.
2. **Encrypted submission**
   - Researcher uploads an encrypted report bundle to **Walrus** (details, PoC, reproduction steps).[^walrus-docs]
   - On-chain `Submission` object stores the Walrus content address + hash commitments + timestamps.[^sui-docs]
3. **Triage + acceptance**
   - Maintainer decrypts (via Seal access grant) and either accepts (payout) or rejects (optional partial refund / no payout).[^seal-docs]
4. **Deadlines & incentives**
   - If the maintainer doesn’t respond by `T_triage`, researcher can reclaim a “submission bond” (anti-spam) and optionally escalate to “auto-refund of bounty” policy.
   - If accepted, payout is deterministic by tier.

### Architecture (high level)
- **Move package (Sui)**
  - `Bounty` object (likely shared):
    - project address, balance, tier rules, triage SLA timestamps, status.
  - `Submission` object (owned by researcher or shared-with-cap):
    - bounty id, walrus pointer, report hash, created_at, status.
  - `MaintainerCap`:
    - capability required to accept/reject, rotate Seal key reference, pause bounty.
  - Events:
    - `BountyCreated`, `SubmissionCreated`, `SubmissionAccepted`, `SubmissionRejected`, `PayoutExecuted`.
  - Design goal: avoid a single global counter; every bounty stands alone for parallelism.

- **Client app (web)**
  - Project: create bounty, fund escrow, review submissions.
  - Researcher: encrypt report, upload to Walrus, submit pointer, monitor status.

- **Encryption + access control**
  - **Walrus** stores only encrypted bytes.[^walrus-docs]
  - **Seal** governs who can decrypt (e.g., encrypt a symmetric key to maintainer identity; optionally time-lock key sharing after acceptance).[^seal-docs]
  - If you implement custom allow/deny logic on-chain, follow Seal’s guidance for `seal_approve*` patterns and limitations.[^seal-using]

### Implementation requirements
#### Hardware
- Any laptop.

#### Software
- Sui CLI + devnet/testnet.[^sui-docs]
- Walrus tooling (CLI/API) for content upload/retrieval.[^walrus-docs]
- Seal tooling/library for encryption + access grants.[^seal-docs]
- Frontend stack of choice (React/Next.js recommended for speed).

#### Licensing / compliance
- Add a clear *responsible disclosure* workflow (even in-app copy): “do not publish details until accepted”.
- Never store plaintext vulnerabilities on-chain.
- Ensure any cryptography library licenses are compatible (MIT/Apache-2.0 preferred).

### Knowledge requirements
- **Move**: escrow patterns, capability-based access control, time-based logic.[^sui-docs][^sui-cheat-sheet][^move-book]
- **Sui object model**: owned vs shared objects, events, object lifecycle.[^sui-docs][^sui-cheat-sheet]
- **Applied crypto basics**: symmetric encryption, key wrapping, integrity (hashes).
- **Walrus basics**: content addressing and retrieval.[^walrus-docs][^walrus-awesome]
- **Seal basics**: defining recipients and granting access.[^seal-docs][^seal-using]

### Difficulty / hardening level
- **MVP difficulty**: Medium–High.
- **Hardening level (what separates winners)**: High.
  - Anti-spam (submission bond, rate limits).
  - Clear state machine (no “stuck” submissions).
  - No information leaks (metadata minimization).
  - Deterministic payouts + predictable deadlines.

### Security & correctness checklist
- Commit to **hashes**, not plaintext: store `report_hash` and Walrus pointer only.
- Prevent maintainer abuse:
  - enforce explicit acceptance transaction for payout;
  - optional: refunds if maintainer is inactive past SLA.
- Prevent researcher abuse:
  - require bond to submit;
  - prevent duplicate submissions claiming the same report hash.

### Test plan (tie-breaker strength)
- **Move tests**:
  - create bounty, fund escrow;
  - submit with bond;
  - accept triggers payout;
  - reject path;
  - deadline expiry behaviors.
- **Frontend smoke**:
  - encrypt → upload → submit → accept → view payout event.

### Demo script (2–3 minutes)
1. Maintainer posts a bounty and deposits funds.
2. Researcher creates an encrypted report, uploads to Walrus, submits pointer on-chain.
3. Maintainer decrypts (Seal access), clicks “Accept”, payout executes.
4. UI shows on-chain event + Walrus receipt link (still encrypted to outsiders).

### Stretch goals
- Multi-maintainer review (N-of-M cap) for acceptance.
- Reputation score: accepted submissions mint a non-transferable “Cred” object.
- Public-safe disclosure: after acceptance, publish a redacted summary to Walrus + on-chain pointer.

## Idea 3 — Encrypted AI Dataset + Model Artifact Licensing (Sui + Walrus + Seal + zkLogin)

### One-liner
Create a marketplace for **AI datasets and model artifacts** where creators publish encrypted assets to **Walrus**,[^walrus-docs] decryption is governed by **Seal** access control bound to on-chain licenses,[^seal-docs][^seal-using] and purchases/royalties are enforced by **Sui Move** objects and events.[^sui-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### Why this can win (mapped to judging)
- **Implementation (40%)**: clear full-stack deliverable: Move escrow + frontend purchase flow + encrypted download/decrypt + receipts; easy to test.
- **Design (30%)**: strong Sui fit: each listing/license is an object; parallel purchases; capability-based access control patterns.[^sui-docs][^sui-examples]
- **Idea (20%)**: blockchain materially improves licensing (audit trail, composable rights, automated royalty splits), while encryption keeps data private.
- **Outcome/UX (10%)**: frictionless onboarding via zkLogin (OAuth) so non-crypto users can buy a dataset in minutes.[^sui-zklogin]

### Target users
- Independent dataset creators (synthetic data, labeled samples, domain corpora).
- Teams needing verifiable, auditable access to proprietary training data.
- ML hackers who want “buy + decrypt + use” without bespoke NDAs for a demo.

### Batikan fit score: 93/100
**Why Batikan is likely strong here**
- Strong AI + fullstack profile (multiple AI projects, React/Next.js, backend, cloud) maps directly to “marketplace + encryption + download UX”.[^batikanor]
- Demonstrated ability to ship privacy-flavored products under hackathon pressure (e.g., SecSanta privacy project).[^batikanor]
- Proven Sui ramp-up speed (previous Sui hackathon result).[^batikanor]

**Risks / why it’s not a perfect 100**
- Real-world dataset licensing gets legally messy; for hackathon we must keep scope to *demo assets you own* + clear terms.
- Encryption/key management is unforgiving; we must use Seal’s intended model and keep custom crypto minimal.[^seal-docs][^seal-using]

### Hackathon win chance (skeptical): 80/100
**Why it could place highly**
- AI data marketplaces have recently won in Sui ecosystem competitions (signal that judges/community value this category).[^overflow-2025-winners][^walrus-hackathon-highlights-summer25]
- Very strong “Sui + Walrus + Seal” design fit: on-chain licenses + off-chain encrypted blobs is a coherent architecture.
- zkLogin can make the demo feel mainstream and smooth.[^sui-zklogin][^sui-zklogin-integration]

**Why it might *not* win**
- Category crowding: because similar ideas already exist among winners, novelty bar is higher.[^overflow-2025-winners]
- Risk of sounding like “another marketplace” unless the licensing/encryption angle is immediately obvious and compelling.

**How to increase win odds**
- Make differentiation explicit: “license = on-chain object; decryption = Seal-gated; data = Walrus; terms = hash-locked.”
- Show one killer feature in the demo: tamper-evident license terms + hash verification after decrypt.

### Core MVP (hackathon-sized)
1. **Creator publishes an asset**
   - Upload dataset/model artifact bytes to Walrus; store the Walrus blob reference in a `Listing` on Sui.[^walrus-docs][^walrus-web-api]
   - Encrypt the asset and configure Seal access policy so only license holders can decrypt.[^seal-docs]
2. **Buyer purchases a license**
   - Buyer pays and receives a `License` object (or `AccessCap`) that proves entitlement.[^sui-docs]
3. **Buyer downloads + decrypts**
   - Frontend fetches encrypted bytes from Walrus and decrypts via Seal (client-side) after verifying license state.[^seal-docs][^walrus-docs]
4. **Receipts + usage transparency**
   - Emit events for purchases and (optionally) decrypt grants; show an audit timeline in the UI.[^sui-docs][^sui-api-ref]

### Architecture (high level)
- **Move package (Sui)**
  - `Listing` object: creator, price, Walrus pointer, content hash, terms pointer.
  - `License` object: owned by buyer; references listing id; includes expiry (optional), seat count (optional).
  - `CreatorCap`: allows editing listing metadata, pausing sales, rotating Walrus pointer for *new* versions.
  - Royalty split: in MVP do a single recipient; stretch goal adds splits.
  - Use patterns similar to official Sui examples (object lifecycle, events, caps).[^sui-examples]

- **Frontend (web)**
  - Wallet connection and queries with Sui dApp Kit.[^sui-dapp-kit]
  - Optional zkLogin for email/OAuth onboarding (best demo UX).[^sui-zklogin][^sui-zklogin-integration]
  - “Upload (creator)” flow and “Buy + decrypt (buyer)” flow.

- **Backend helper (optional)**
  - A small uploader service to Walrus via its HTTP API (keeps creator flow simple).[^walrus-web-api]
  - Not required if you keep everything client-side.

### Implementation requirements
#### Hardware
- Laptop only.
- Optional: external storage if you demo larger blobs (not needed for MVP).

#### Software
- Sui CLI + devnet/testnet tooling.[^sui-docs]
- Sui TypeScript SDK for tx building and object queries.[^sui-ts-sdk]
- Sui dApp Kit for wallet UX.[^sui-dapp-kit]
- Walrus docs + HTTP API for storing/retrieving blobs.[^walrus-docs][^walrus-web-api]
- Seal docs/SDK for encryption + authorization checks.[^seal-docs][^seal-using]
- (Optional) zkLogin integration for OAuth onboarding.[^sui-zklogin][^sui-zklogin-integration]

#### Licensing / compliance
- Only upload **assets you own** or have explicit rights to (use synthetic/public-domain for demo).
- Make “terms” explicit: a short license text stored on Walrus and referenced by hash in the listing.
- Never store plaintext proprietary data on-chain; only hashes + Walrus pointers.[^sui-docs]

### Knowledge requirements
- **Sui basics**: objects/ownership, events, caps.[^sui-docs][^sui-cheat-sheet]
- **Move**: object modeling + access control.[^move-book][^sui-examples]
- **Walrus**: content addressing, upload/download via HTTP API.[^walrus-docs][^walrus-web-api]
- **Seal**: client-side encryption + on-chain access decisions.[^seal-docs][^seal-using]
- **Optional**: zkLogin for OAuth-based onboarding.[^sui-zklogin]

### Difficulty / hardening level
- **MVP difficulty**: Medium.
- **Hardening level (what separates winners)**: High.
  - Versioning (new dataset versions without breaking old licenses).
  - Revocation semantics (what does it mean for already-downloaded data?).
  - Tamper-evident terms (hash-locked license text).
  - UX clarity around encryption and access.

### Security & correctness checklist
- Store `content_hash` and verify it client-side after download.
- Make license checks deterministic (no ambiguous “maybe allowed”).
- If you log access events, ensure they don’t leak sensitive metadata.
- Follow Seal guidance on `seal_approve*` limitations (avoid fast-changing on-chain state in approve logic).[^seal-using]

### Test plan (tie-breaker strength)
- **Move tests**: publish listing, buy license, blocked buy when paused, metadata update rules, basic royalty transfer.
- **E2E smoke**: creator uploads → buyer purchases → buyer decrypts → UI shows receipt timeline.

### Demo script (2–3 minutes)
1. Creator uploads a small “toy dataset” (e.g., 1–5MB) to Walrus and publishes listing.
2. Buyer logs in (wallet or zkLogin), purchases license.
3. Buyer downloads encrypted blob from Walrus, decrypts via Seal, verifies hash.
4. UI shows the on-chain purchase event + receipt info.

### Stretch goals
- Royalty splits (multiple recipients).
- Time-based licenses (expiry) + renewal.
- “Model card / dataset card” stored on Walrus with hash commitment.
- Reputation: mint non-transferable “verified creator” badge after N sales.

## Idea 4 — Sui Product Passport (Anti-Counterfeit + Repair History with Selective Disclosure)

### One-liner
Build a consumer app where each physical item has a **Product Passport** on Sui (an object you can verify and transfer), with supporting evidence (photos, receipts, manuals) stored on **Walrus**,[^walrus-docs] and sensitive fields (owner identity, invoice details) encrypted and access-controlled via **Seal**.[^seal-docs][^seal-using]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### Why this can win (mapped to judging)
- **Implementation (40%)**: clean E2E: mint passport → attach evidence → verify via scan → transfer ownership → append repair entry → view timeline.
- **Design (30%)**: very Sui-native: passport is an object; ownership transfer is first-class; append-only events give an auditable history.[^sui-docs]
- **Idea (20%)**: blockchain adds real value: tamper-resistant provenance + transfer history; selective disclosure solves privacy.
- **Outcome/UX (10%)**: instantly understandable demo: scan QR/NFC → “is this real?” + timeline view.

### Target users
- Consumers buying second-hand goods (sneakers, electronics, luxury items).
- Repair shops wanting verifiable service history.
- Brands/creators wanting authenticity checks without central databases.

### Batikan fit score: 88/100
**Why Batikan is likely strong here**
- Strong fullstack and product delivery track record (many shipped projects + strong presenting ability).[^batikanor]
- Prior success in sustainability/real-world impact hackathons fits a “circular economy” narrative (repair history, reuse).[^batikanor]
- Previous Sui hackathon placement indicates fast iteration on Sui-specific constraints.[^batikanor]

**Risks / why it’s not a perfect 100**
- If we require NFC hardware, the demo can get flaky; we should default to QR and keep NFC as a stretch.
- Authenticity can become “hand-wavy” unless we define a crisp manufacturer/issuer model.

### Hackathon win chance (skeptical): 76/100
**Why it could place highly**
- Proven winning shape on Sui: on-chain authenticity verification projects have won before (e.g., NFC-based verification at an official Sui student hackathon).[^epfl-2023-winners]
- Very judge-friendly: fast to understand + visually demoable.

**Why it might *not* win**
- Novelty risk: “anti-counterfeit passport” is a known pattern; we must differentiate with Seal privacy + Walrus evidence and a crisp UX.
- Hard to prove “authenticity” without brand participation; we must position as a *verifiable provenance ledger* + issuer attestations.

**How to increase win odds**
- Make the issuer model explicit: `IssuerCap` mints passports; users can verify issuer address + on-chain events.
- Show selective disclosure in the demo (public timeline vs owner-only invoice) using Seal.[^seal-docs][^seal-using]

### Core MVP (hackathon-sized)
1. **Issuer mints a passport**
   - Create `ProductPassport` object with immutable fields (serial, model, issuer, mint timestamp) + a Walrus pointer for public metadata (photos/manual).[^sui-docs][^walrus-docs]
2. **User verifies authenticity**
   - Scan a QR code that encodes the object id; app fetches object + verifies issuer address and signature chain.
3. **Ownership transfer**
   - Current owner transfers the passport object to the buyer; UI shows transfer in timeline.[^sui-docs]
4. **Repair / service entry**
   - Append a `ServiceEvent` (event + Walrus attachment for invoice) and optionally encrypt invoice details with Seal (owner-only).[^seal-docs][^walrus-docs]

### Architecture (high level)
- **Move package (Sui)**
  - `ProductPassport` (owned object): issuer, serial/model, metadata pointer.
  - `IssuerCap` (owned by issuer): authorizes minting.
  - `ServiceEvent` (event): references passport id + Walrus pointer(s); optionally also emit a public hash commitment.
  - Mirror patterns from official Sui examples to keep object lifecycle and caps idiomatic.[^sui-examples]

- **Frontend (web/mobile web)**
  - Wallet UX via Sui dApp Kit.[^sui-dapp-kit]
  - Optional zkLogin for “scan + verify” without installing a wallet first (best consumer demo).[^sui-zklogin]
  - Timeline viewer: reads on-chain events + fetches Walrus attachments.

- **Storage & privacy**
  - Walrus stores evidence blobs (images, PDFs, manuals).[^walrus-docs]
  - Seal encrypts owner-only fields/attachments (invoice, address, warranty details).[^seal-docs]

### Implementation requirements
#### Hardware
- None for MVP (QR codes only).
- Optional: NFC tags + phone with NFC for a wow-factor demo (stretch).[^epfl-2023-winners]

#### Software
- Sui CLI + devnet/testnet.[^sui-docs]
- Sui TypeScript SDK + API reference for object/event reads.[^sui-ts-sdk][^sui-api-ref]
- Walrus upload + retrieval via HTTP API.[^walrus-web-api]
- Seal for encryption/access decisions.[^seal-docs][^seal-using]

#### Licensing / compliance
- Do not claim “brand authentication” unless issuer keys are controlled by the brand.
- Use demo assets (sample invoices) without personal data.

### Knowledge requirements
- **Sui**: object ownership/transfer, events.[^sui-docs][^sui-cheat-sheet]
- **Move**: capabilities + minting pattern.[^move-book]
- **Walrus**: storing/retrieving evidence blobs.[^walrus-docs]
- **Seal**: encrypt + authorize selective disclosure.[^seal-docs][^seal-using]

### Difficulty / hardening level
- **MVP difficulty**: Medium.
- **Hardening level (what separates winners)**: Medium–High.
  - Prevent unauthorized service entries (repair-shop caps or owner approval flows).
  - Avoid metadata leaks (what’s public vs encrypted).
  - Make verification trust model explicit (issuer allowlist).

### Security & correctness checklist
- Verify issuer identity (address) in UI; show “verified issuer / unknown issuer”.
- Avoid storing PII on-chain; store only hashes/pointers.
- Keep service entry authorization deterministic (cap-based).

### Test plan (tie-breaker strength)
- **Move tests**: mint passport, prevent non-issuer mint, transfer, authorized service entry.
- **E2E smoke**: create → scan → verify → transfer → add service → timeline updates.

### Demo script (2–3 minutes)
1. Issuer mints a “Limited Edition” product passport.
2. User scans QR, sees “Verified issuer” + public metadata from Walrus.
3. Owner transfers to buyer; timeline updates.
4. Repair shop adds a service entry; buyer can decrypt invoice via Seal (owner-only).

### Stretch goals
- NFC tags.
- “Warranty token” / expiry-based capabilities.
- Offline verification cache (last-known good state) with clear warnings.

## Idea 5 — Walletless Event Pass + Gasless Check-in (zkLogin + Sponsored Transactions)

### One-liner
Ship a hackathon-ready **event ticket + check-in system** where attendees onboard with **zkLogin** (OAuth),[^sui-zklogin] receive a Sui `Ticket` object, and complete key actions with **sponsored (gasless) transactions** so first-time users don’t need SUI to participate.[^sui-sponsored-tx][^sui-sponsor-txn-guide]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### Why this can win (mapped to judging)
- **Implementation (40%)**: extremely demoable E2E: create event → issue ticket → scan at gate → mint badge → show on-chain proof.
- **Design (30%)**: Sui-native modeling: tickets/badges as owned objects, check-in as an on-chain state transition + events (parallel check-ins).[^sui-docs]
- **Idea (20%)**: blockchain relevance is clear: verifiable attendance + transferable tickets (optional) + anti-duplication by consuming a ticket.
- **Outcome/UX (10%)**: zkLogin + sponsored tx removes the biggest UX blocker (wallet + gas), which judges consistently reward in consumer apps.[^overflow-2024-winners][^epfl-2023-winners]

### Target users
- Hackathons, meetups, conferences (including *this* hackathon).
- Organizers who want verifiable attendance / badge issuance.
- Attendees who don’t want to buy gas tokens just to check in.

### Batikan fit score: 91/100
**Why Batikan is likely strong here**
- Strong presenter + repeated hackathon wins: this idea is fundamentally a “demo-first” product.[^batikanor]
- Fullstack + cloud experience helps with the two-app setup (attendee app + gate app) and a minimal gas-station backend.[^batikanor]
- Proven fast Sui ramp-up (previous Sui hackathon placement).[^batikanor]

**Risks / why it’s not a perfect 100**
- Getting zkLogin + sponsored transactions stable inside a hackathon timeframe is doable but integration-heavy; we must keep the flow minimal and test early.[^sui-zklogin-integration][^sui-sponsored-tx]

### Hackathon win chance (skeptical): 82/100
**Why it could place highly**
- Judges can verify quickly: a ticket object exists, gets consumed at check-in, and a badge is minted—no hand-wavy claims.
- Strong UX story (walletless + gasless) aligns with what repeatedly wins in consumer/mobile tracks.[^overflow-2024-winners]

**Why it might *not* win**
- “Ticketing” is common; without a sharp differentiator it can look generic.
- Infra reliability risk: OAuth redirect issues, sponsor service downtime, or object-locking edge cases can break the demo.[^sui-sponsored-tx]

**How to increase win odds**
- Make the differentiator explicit: “proof-of-attendance as a Sui object + gasless check-in + OAuth onboarding”.
- Over-invest in a flawless 2-minute demo flow and add tests for ticket-consumption invariants.

### Core MVP (hackathon-sized)
1. **Organizer creates an event**
   - Mint an `Event` object and keep an `OrganizerCap` for admin actions.[^sui-docs]
2. **Attendee onboards (zkLogin)**
   - User signs in with OAuth and gets a Sui address via zkLogin.[^sui-zklogin][^sui-zklogin-integration]
3. **Ticket issuance (sponsored tx)**
   - A sponsor/gas-station pays gas to mint a `Ticket` to the attendee (or the attendee requests a sponsored mint).[^sui-sponsored-tx][^sui-sponsor-txn-guide]
4. **Gate check-in**
   - Gate staff scans attendee QR; check-in consumes `Ticket` and mints a non-reusable `Badge` (or emits a `CheckedIn` event).[^sui-docs]
5. **Proof page**
   - Public page shows event details and verifies badge ownership via Sui API reads.[^sui-api-ref]

### Architecture (high level)
- **Move package (Sui)**
  - `Event` object: name, time window, optional Walrus metadata pointer.
  - `OrganizerCap`: authorizes ticket issuance policies (supply limits, close sales).
  - `Ticket` object (owned): references `event_id`, `ticket_id`.
  - `Badge` object (owned): minted on successful check-in.
  - Events: `TicketIssued`, `CheckedIn`, `BadgeMinted`.
  - Use Sui example patterns for caps + events to stay idiomatic.[^sui-examples]

- **Apps**
  - **Attendee app**: zkLogin + show QR + show badge.
  - **Gate app**: scan QR → submit check-in transaction.

- **Gas station (minimal backend)**
  - Signs sponsored transactions within a tight allowlist (only event/ticket endpoints).[^sui-sponsor-txn-guide]
  - Rate-limits requests and keeps idempotency (one ticket per attendee).

### Implementation requirements
#### Hardware
- Two phones (or one phone + one laptop camera) for scanning QR codes.

#### Software
- Sui CLI + devnet/testnet.[^sui-docs]
- Sui dApp Kit + TS SDK.[^sui-dapp-kit][^sui-ts-sdk]
- zkLogin integration guide (frontend auth + proof flow).[^sui-zklogin-integration]
- Sponsored transactions docs/guide (gas station).[^sui-sponsored-tx][^sui-sponsor-txn-guide]

#### Licensing / compliance
- Don’t store personal attendee data on-chain.
- OAuth provider terms: use standard OAuth flow; don’t scrape.

### Knowledge requirements
- **Sui**: owned objects, events, object lifecycle.[^sui-docs][^sui-cheat-sheet]
- **Move**: caps + “consume ticket then mint badge” invariants.[^move-book]
- **zkLogin**: OAuth + ZK proof flow.[^sui-zklogin][^sui-zklogin-integration]
- **Sponsored transactions**: dual-signing and sponsor risk model.[^sui-sponsored-tx]

### Difficulty / hardening level
- **MVP difficulty**: Medium–High (integration heavy).
- **Hardening level (what separates winners)**: High.
  - Prevent double check-in (ticket consumption is the clean invariant).
  - Prevent sponsor abuse (allowlist + rate limits).
  - Handle equivocation/object-lock risks gracefully (retry UX, clear errors).[^sui-sponsored-tx]

### Security & correctness checklist
- Ticket is **single-use**: check-in must consume it; second check-in must fail.
- Gate app should never accept raw “I’m checked in” claims; always verify on-chain result.
- Sponsor service should only sign transactions for whitelisted Move calls and budgets.[^sui-sponsor-txn-guide]

### Test plan (tie-breaker strength)
- **Move tests**: mint ticket, check-in consumes ticket, cannot check-in twice, cannot mint without organizer/sponsor rules.
- **E2E smoke**: zkLogin → sponsor mint → scan → check-in → badge visible.

### Demo script (2–3 minutes)
1. Organizer creates event.
2. Attendee signs in with zkLogin.
3. Attendee requests a sponsored ticket mint (no SUI needed).
4. Gate scans QR; check-in consumes ticket and mints badge.
5. Badge verified on a public proof page.

### Stretch goals
- “Workshop attendance” badges per room (parallel check-ins).
- Optional Walrus storage for event schedule/poster and badge artwork.[^walrus-docs]
- Optional Seal encryption for organizer-only lists (not necessary for MVP).[^seal-docs]

## Idea 6 — Sui Parallelism Profiler (PTB/Object Dependency Visualizer + Linter)

### One-liner
Build a developer tool that **explains why a transaction (or dApp flow) is slow/serial**, by visualizing **object dependencies** and flagging **shared-object bottlenecks**, then suggesting Sui-native refactors (owned objects, per-user state, event-driven accounting).[^sui-docs][^sui-api-ref]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### Why this can win (mapped to judging)
- **Implementation (40%)**: real, testable tool with a clear before/after demo on a sample Move package.
- **Design (30%)**: directly demonstrates deep alignment with Sui’s object-centric model and parallel execution philosophy.[^sui-docs]
- **Idea (20%)**: meaningful blockchain relevance: it helps teams build scalable Sui apps correctly (high leverage).
- **Outcome/UX (10%)**: dev UX can be excellent: paste tx digest / connect wallet → see graph + actionable warnings.

### Target users
- Hackathon teams building on Sui who accidentally serialize their dApp.
- Sui developers troubleshooting throughput and “why is everything a shared object?” issues.

### Batikan fit score: 86/100
**Why Batikan is likely strong here**
- Strong fullstack background + appetite for developer tooling (you’ve built and tested software at scale; you can present technical tools clearly).[^batikanor]
- Fast learning curve on new ecosystems (prior Sui hackathon result).[^batikanor]

**Risks / why it’s not a perfect 100**
- Dev tools sometimes score lower if judges prioritize end-user apps.
- Requires crisp storytelling: it must be obvious in 60 seconds why this matters.

### Hackathon win chance (skeptical): 73/100
**Why it could place highly**
- Tooling has historically won/placed in Sui hackathons (e.g., a drag-and-drop contract builder project) when it’s practical and demoable.[^epfl-2023-winners]
- High leverage: judges often reward projects that improve the developer ecosystem.[^kucoin-2023-winners]

**Why it might *not* win**
- Less “wow” than consumer apps unless the visualization is beautiful and the value is immediate.
- If the tool feels like generic “graph UI” without unique Sui insights, it will be ignored.

**How to increase win odds**
- Demo a *real* improvement: take a naive shared-counter contract → refactor to per-user owned state, show the profiler warnings disappear.
- Make it Sui-specific: explicit identification of shared objects, owned objects, and event queries using Sui APIs.[^sui-api-ref]

### Core MVP (hackathon-sized)
1. **Input a transaction digest** (or build a small PTB in-app)
   - Fetch the transaction block details and list input/output objects.[^sui-api-ref]
2. **Build an object dependency graph**
   - Nodes: objects; edges: “read”, “mutate”, “create”, “transfer”.
3. **Linter warnings**
   - “Shared object hotspot” (single shared object touched in many txs).
   - “Global counter / singleton state” smell.
   - “Heavy RPC usage risk” with a note to follow RPC best practices for production.[^sui-rpc-best-practices]
4. **Actionable suggestions**
   - Suggest patterns (per-user owned object, sharded state, event-based aggregation) with links to examples.

### Architecture (high level)
- **Frontend (web)**
  - Connect to a Sui client and fetch tx/object data via the TS SDK.[^sui-ts-sdk]
  - Visualize the graph (e.g., dagre/vis.js style) and render warnings.

- **Optional backend (if needed)**
  - Cache tx/object responses to reduce RPC calls and make demos stable.[^sui-rpc-best-practices]

- **Reference patterns**
  - Use official Sui examples as “known-good” patterns for owned vs shared design and events.[^sui-examples]

### Implementation requirements
#### Hardware
- Laptop only.

#### Software
- Sui TypeScript SDK + Sui API reference (for tx/object queries).[^sui-ts-sdk][^sui-api-ref]
- A small web app stack (React/Next/Vite).

#### Licensing / compliance
- No special constraints.
- If you include third-party visualization libraries, verify licenses are permissive.

### Knowledge requirements
- **Sui**: object ownership, shared vs owned objects, events, transaction blocks.[^sui-docs][^sui-cheat-sheet]
- **Sui APIs**: querying tx blocks, objects, and events.[^sui-api-ref]

### Difficulty / hardening level
- **MVP difficulty**: Medium.
- **Hardening level (what separates winners)**: Medium–High.
  - Robust parsing across transaction types.
  - Clear heuristics (avoid false positives).
  - Polished visualization + fast load times.

### Security & correctness checklist
- Don’t log private keys / wallet secrets.
- If you add caching, avoid storing sensitive wallet session data.

### Test plan (tie-breaker strength)
- Unit tests for:
  - graph builder (given a mocked tx response);
  - rule engine (shared-object hotspot detection);
  - deterministic rendering inputs.

### Demo script (2–3 minutes)
1. Show a naive contract/dApp flow that touches a shared counter.
2. Paste tx digest → profiler highlights shared-object hotspot.
3. Switch to a refactored version (per-user owned state) → profiler shows green path.

### Stretch goals
- “Profile my dApp flow”: record N tx digests and aggregate hotspot score.
- Export a “judge-friendly” report (PNG/SVG + JSON warnings).
- Add a small Move example package in the repo as a benchmark.[^sui-examples]

## Idea 7 — AI-Backed Doc Editor with Verifiable Provenance (PlateJS + FastAPI + Sui/Walrus/Seal)

### One-liner
Build an **AI-assisted document editor** (proposal writing, specs, audits) using a modern rich-text editor (PlateJS)[^platejs] and a **FastAPI streaming backend** bootstrapped from a Vercel AI template,[^vercel-ai-sdk-python-streaming] where:
- drafts are stored as encrypted blobs on **Walrus**[^walrus-docs] and shared selectively via **Seal**,[^seal-docs][^seal-using]
- each “publish” creates a **Sui DocCommit** object anchoring a content hash + immutable timestamp + author identity (wallet or zkLogin).[^sui-docs][^sui-zklogin]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### Why this can win (mapped to judging)
- **Implementation (40%)**: strong full-stack scope that’s easy to demo (editor + AI streaming + publish + verify).
- **Design (30%)**: Sui-native *if* we treat commits as objects/events and avoid central DB “truth”.[^sui-docs]
- **Idea (20%)**: blockchain relevance is clean: tamper-evident provenance + verifiable authorship of documents/specs.
- **Outcome/UX (10%)**: a polished editor is immediately impressive; AI streaming makes it feel modern.

### Target users
- Hackathon teams: writing submissions, specs, and pitch scripts.
- Protocol teams: publishing signed audits, design docs, and upgrade notes.
- Communities: collaborative governance proposals with verifiable authorship.

### Batikan fit score: 95/100
**Why Batikan is likely strong here**
- Very strong AI + fullstack background (FastAPI/React + AI functionality), plus consistent hackathon shipping velocity.[^batikanor]
- This mirrors the kind of “AI-backed SaaS” work you’ve shipped before (e.g., AI surveying / reporting-style products).[^batikanor]
- Presentation advantage: you can demo this live smoothly (typing + streaming AI + publish + verify).

**Risks / why it’s not a perfect 100**
- Risk of drifting into “just another AI editor” unless provenance/verification is a first-class feature.

### Hackathon win chance (skeptical): 77/100
**Why it could place highly**
- Extremely demoable and visually polished (often underrated tie-breaker).
- Clear “Sui adds something”: independent verification of what was published and by whom.[^sui-docs]

**Why it might *not* win**
- If judges want deeper Sui-specific architecture than “store hash on-chain”, they may score it as shallow.
- Competitive space: AI editors are common; we must differentiate with Walrus/Seal privacy + verifiable commits.

**How to increase win odds**
- Make verification central: “paste a Walrus blob id + DocCommit id → verify integrity + signer in one click”.
- Add one Sui-native feature beyond hashing: e.g., **multi-signer approvals** for a final publish (team sign-off) or a “doc version NFT” that can be transferred to new maintainers.

### Core MVP (hackathon-sized)
1. **Editor**
   - Start from PlateJS to get a strong doc-editing UX quickly.[^platejs]
2. **AI assistant (streaming)**
   - Start from the Vercel FastAPI streaming template; implement “rewrite”, “summarize”, and “generate sections”.[^vercel-ai-sdk-python-streaming]
3. **Publish + commit**
   - Serialize the doc (JSON) → encrypt (optional) → upload to Walrus → get blob reference.[^walrus-docs][^walrus-web-api]
   - Create a `DocCommit` on Sui: `{walrus_ref, content_hash, author, created_at, visibility}` and emit an event.[^sui-docs]
4. **Verify view (public)**
   - Fetch commit from Sui + fetch blob from Walrus + verify hash locally; show “VALID/INVALID”.[^sui-api-ref]

### Architecture (high level)
- **Frontend (React/Next)**
  - PlateJS editor + commit timeline UI.
  - Wallet/identity: use Sui dApp Kit or zkLogin for frictionless onboarding.[^sui-dapp-kit][^sui-zklogin]

- **Backend (FastAPI)**
  - AI endpoints with server-side streaming (for great UX).
  - Optional Walrus upload proxy to avoid CORS/auth headaches during demo.[^walrus-web-api]

- **Move package (Sui)**
  - `DocCommit` (owned object) or event-only model:
    - If object: easier “latest commit” queries per author.
    - If events: append-only timeline, easy to index.
  - A simple `Doc` object can reference “latest commit id” to avoid scanning all events.
  - Keep patterns consistent with official Sui examples.[^sui-examples]

### Implementation requirements
#### Hardware
- Laptop only.

#### Software
- PlateJS template.[^platejs]
- FastAPI + Vercel AI SDK Python streaming template.[^vercel-ai-sdk-python-streaming]
- Sui TS SDK + dApp Kit for wallet connection and tx signing.[^sui-ts-sdk][^sui-dapp-kit]
- Walrus + Seal for storage and selective disclosure.[^walrus-docs][^seal-docs]

#### Licensing / compliance
- Do not upload private docs in plaintext; default to encryption for drafts.
- If using an LLM provider, avoid sending secrets; redact keys/addresses.

### Knowledge requirements
- **Fullstack**: React + FastAPI streaming.
- **Sui**: objects/events, signing, querying tx/object state.[^sui-docs][^sui-api-ref]
- **Walrus**: blob storage + retrieval.[^walrus-docs]
- **Seal**: encryption + access gating patterns.[^seal-docs][^seal-using]

### Difficulty / hardening level
- **MVP difficulty**: Medium.
- **Hardening level (what separates winners)**: High.
  - Solid integrity verification flows.
  - Collaboration model (multi-signer / approvals).
  - Great UX + zero flaky demos.

### Security & correctness checklist
- Verify hashes locally before showing “verified”.
- Keep on-chain metadata minimal (no doc text on-chain).
- Ensure access control is explicit: public commit vs private draft.

### Test plan (tie-breaker strength)
- Unit tests: hash/verify pipeline, commit serialization.
- E2E smoke: write → AI rewrite → publish → verify.

### Demo script (2–3 minutes)
1. Type a paragraph; click “Improve tone” and stream a rewrite.
2. Publish: shows Walrus upload + Sui commit.
3. Open verify page: “Verified” with author identity and timestamp.

### Stretch goals
- Multi-signer “publish approval” flow (team sign-off).
- Seal-based share links: “grant access to reviewer for 1 hour”.[^seal-using]
- Sponsored publish transactions for non-crypto users.[^sui-sponsored-tx]

## Idea 8 — GeoProof: Verifiable Satellite “Change Reports” (WebGIS + FastAPI + Sui/Walrus/Seal)

### One-liner
Build a WebGIS app where anyone can select an area + time window, fetch **open satellite imagery** via a STAC API,[^pc-reading-stac][^stac-standard] compute a simple change metric (e.g., vegetation loss / urban expansion), and **publish a tamper-evident “ChangeReport” on Sui** that points to evidence stored on **Walrus** (before/after thumbnails, masks, metadata).[^walrus-docs][^sui-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### Why this can win (mapped to judging)
- **Implementation (40%)**: compelling E2E demo: draw polygon → run analysis → view change overlay → publish report → verify on-chain.
- **Design (30%)**: good Sui fit if reports are first-class objects and evidence is content-addressed (Walrus) with optional private sharing (Seal).[^sui-docs][^seal-docs]
- **Idea (20%)**: real-world relevance (climate, compliance, disaster response) + blockchain adds integrity/auditability.
- **Outcome/UX (10%)**: map UI is naturally impressive; “share a verified report link” is judge-friendly.

### Target users
- NGOs / journalists verifying land-use change.
- Municipalities monitoring construction/green areas.
- Insurers / logistics teams tracking flood/fire impacts (stretch).

### Batikan fit score: 92/100
**Why Batikan is likely strong here**
- Strong CV/ML background and fullstack delivery: satellite change detection is mostly “clean data pipeline + visualization + model/metric”.[^batikanor]
- Sustainability/climate involvement (jury/mentor roles, climate-related work) fits the narrative and judging story.[^batikanor]
- You can demo maps and analytics very well (visual payoff).

**Risks / why it’s not a perfect 100**
- Geospatial stacks can be finicky (projections, tiling, large files). We must keep scope tight (small AOI, low-res previews).

### Hackathon win chance (skeptical): 74/100
**Why it could place highly**
- “Wow factor” from map + before/after overlay, plus a clear verification story.
- Strong relevance and credible use of open datasets (e.g., Sentinel-2) via a well-known open data catalog.[^pc-sentinel2-l2a]

**Why it might *not* win**
- Risk of being judged as “Web2 GIS with a hash on-chain” unless Sui objects and verification UX are central.
- Satellite processing time/performance can make demos flaky.

**How to increase win odds**
- Make verification a first-class screen: “given `ChangeReport` id → fetch Walrus evidence → recompute hash → VERIFIED”.
- Keep the metric simple and explainable (NDVI delta / change heatmap) rather than promising a big ML model.

### Core MVP (hackathon-sized)
1. **Map select AOI**
   - Use MapLibre GL JS for a smooth in-browser map with polygon drawing.[^maplibre-docs]
2. **Fetch satellite scenes**
   - Query Planetary Computer STAC for Sentinel-2 L2A scenes over AOI/time range.[^pc-reading-stac][^pc-sentinel2-l2a]
3. **Compute change**
   - Generate small preview rasters (before/after) and a delta heatmap.
4. **Publish**
   - Upload evidence bundle (images + JSON params + scene ids) to Walrus.[^walrus-docs][^walrus-web-api]
   - Create a `ChangeReport` object on Sui storing `{walrus_ref, params_hash, author, created_at}` and emit events.[^sui-docs]
5. **Share / verify**
   - Anyone can open the report link and verify integrity by recomputing hashes from Walrus content.

### Architecture (high level)
- **Frontend (React on Vercel)**
  - MapLibre UI + “analysis job” UI + report viewer.
  - Wallet connection via Sui dApp Kit (optional zkLogin if time).[^sui-dapp-kit][^sui-zklogin]

- **Backend (FastAPI)**
  - Endpoints:
    - `/search` (STAC search),
    - `/analyze` (create previews + delta),
    - `/publish` (Walrus upload + Sui tx).
  - Cache results for stable demos (avoid hammering public endpoints; follow RPC best practices).[^sui-rpc-best-practices]

- **Privacy (optional but differentiating)**
  - If AOI is sensitive, encrypt evidence bundle with Seal and only share with approved reviewers.[^seal-docs][^seal-using]

### Implementation requirements
#### Hardware
- Laptop only.

#### Software
- Planetary Computer STAC usage (Python client) to discover scenes.[^pc-reading-stac]
- Map UI with MapLibre.[^maplibre-docs]
- Sui TS SDK + API reference for report publishing + verification queries.[^sui-ts-sdk][^sui-api-ref]
- Walrus HTTP API for evidence upload/retrieval.[^walrus-web-api]
- Optional Seal for private sharing.[^seal-docs]

#### Licensing / compliance
- Use open datasets only (Sentinel-2 L2A is a safe default via Planetary Computer catalog).[^pc-sentinel2-l2a]
- Don’t publish private coordinates if they are sensitive; encrypt or generalize.

### Knowledge requirements
- Web mapping basics (tiles, GeoJSON).
- Light geospatial processing (crop AOI, compute simple indices).
- Sui publishing + verification patterns (objects + events + hashes).[^sui-docs]

### Difficulty / hardening level
- **MVP difficulty**: Medium–High.
- **Hardening level (what separates winners)**: High.
  - Performance + caching.
  - Clear trust model: what does a report prove (integrity of evidence + authorship), and what it doesn’t.

### Security & correctness checklist
- Keep chain data minimal; store only content hashes and Walrus refs.
- Ensure deterministic hashing (canonical JSON serialization).
- Avoid leaking sensitive AOI if using Seal/private mode.

### Test plan (tie-breaker strength)
- Unit tests for hashing/verification and parameter canonicalization.
- E2E smoke: AOI → analyze → publish → verify.

### Demo script (2–3 minutes)
1. Draw AOI around a known changing area.
2. Run analysis → show before/after and delta overlay.
3. Publish to Sui → open shared link → verify report.

### Stretch goals
- Alerts: subscribe to a “watchlist” object; auto-generate periodic reports.
- Crowdsourced validation: allow reviewers to sign/attest to a report (multi-signer approvals).

## Idea 9 — SecSanta on Sui: Private Group Gifting Pool with Recipient Choice (FastAPI + React/Vercel + Seal/Walrus)

### One-liner
Build a **privacy-forward group gifting** app where friends can pool funds for a recipient, but **individual contributions and messages stay private in the UI** using encrypted artifacts (Seal + Walrus), while the pooled funds are escrowed and settled on **Sui** with a clean, verifiable event trail.[^sui-docs][^seal-docs][^walrus-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### Why this idea exists (and why it’s credible)
This is explicitly inspired by Batikan’s past hackathon build **“SecSanta”** (privacy-focused group gifting) and adapts the core loop to Sui primitives and ecosystem tooling.[^batikanor]

### Why this can win (mapped to judging)
- **Implementation (40%)**: strong E2E: create group → invite → contribute → recipient selects gift → payout/settlement → proofs/receipts.
- **Design (30%)**: Sui-native if we model each pool as objects with explicit caps, avoid global shared state, and use events for auditability.[^sui-docs][^sui-examples]
- **Idea (20%)**: blockchain adds real value for escrow guarantees and transparent settlement, while encryption addresses the “privacy-in-groups” UX problem.
- **Outcome/UX (10%)**: very demoable; a polished UI + “recipient chooses” feels mainstream.

### Target users
- Friend groups buying joint gifts.
- Communities pooling funds for a creator.
- Teams gifting members while keeping individual amounts/messages private.

### Batikan fit score: 96/100
**Why Batikan is likely strong here**
- Directly aligned with a proven past hackathon theme you shipped successfully (SecSanta).[^batikanor]
- Fullstack + AI + cloud background makes the product UI and reliability achievable fast.[^batikanor]
- Strong presenter advantage: this is a “tell a story in 2 minutes” product.

**Risks / why it’s not a perfect 100**
- True on-chain privacy is hard; we must be honest: we’re providing **selective disclosure and private group UX**, not ZK-level concealment of transfers.

### Hackathon win chance (skeptical): 79/100
**Why it could place highly**
- Very strong end-to-end demo loop (judges can verify escrow + settlement quickly).
- Emotional “consumer” narrative + privacy angle tends to resonate, and consumer/mobile projects repeatedly place well.[^overflow-2024-winners]

**Why it might *not* win**
- If privacy claims feel overstated, judges may penalize.
- Payment/escrow flows can get flaky if wallet onboarding is rough; mitigate with zkLogin and/or sponsored tx for key actions.[^sui-zklogin][^sui-sponsored-tx]

**How to increase win odds**
- Make privacy boundaries explicit in the UI (“public on-chain escrow; encrypted per-contributor messages/off-chain proofs”).
- Make one happy-path bulletproof and tested; avoid complex multi-currency support.

### Core MVP (hackathon-sized)
1. **Create a gift pool**
   - Organizer creates `GiftPool` with target recipient and deadline; pool holds escrow funds (SUI for MVP).[^sui-docs]
2. **Invite contributors**
   - Share a link; contributors join (wallet or zkLogin).[^sui-zklogin]
3. **Contribute + private note**
   - On-chain: contribute to pool.
   - Off-chain (encrypted): contributor note stored on Walrus and only decryptable by recipient (Seal).[^walrus-docs][^seal-docs]
4. **Recipient chooses the gift**
   - Recipient selects from a curated catalog (for demo: 3 options).
   - App triggers payout to the “merchant” address (demo address) and emits `GiftChosen` + `PaidOut` events.[^sui-docs]
5. **Receipts + verification page**
   - Public: show the pool object + payout tx digest.
   - Private: recipient decrypts contributor notes.

### Architecture (high level)
- **Frontend (React on Vercel)**
  - Use a Vercel AI template backend if you want “gift suggestion” or “write a nice card message” with streaming UX.[^vercel-ai-sdk-python-streaming]
  - Wallet UX via Sui dApp Kit; optional zkLogin for smoother onboarding.[^sui-dapp-kit][^sui-zklogin]

- **Backend (FastAPI)**
  - Optional (MVP-friendly) service for:
    - generating encrypted note bundles,
    - uploading to Walrus,
    - serving the “verify” page that recomputes hashes.
  - Keep sensitive data client-side when possible.

- **Move package (Sui)**
  - `GiftPool` object: organizer, recipient, deadline, status, total, payout address.
  - `PoolCap`: organizer-only actions (close pool, cancel).
  - `ContributionReceipt` events: append-only proofs (do not store private notes on-chain).
  - Avoid a global shared counter; each pool is isolated for parallelism.[^sui-docs]
  - Use patterns aligned with official examples (caps, events, object lifecycle).[^sui-examples]

### Implementation requirements
#### Hardware
- Laptop + 2 phones optional for a “recipient + contributor” live demo.

#### Software
- React + Vercel deployment; optionally start from Vercel AI SDK Python streaming template.[^vercel-ai-sdk-python-streaming]
- FastAPI backend for minimal services.
- Sui TS SDK + dApp Kit.[^sui-ts-sdk][^sui-dapp-kit]
- Walrus + Seal for encrypted notes and selective disclosure.[^walrus-docs][^seal-docs][^seal-using]
- Optional sponsored tx to remove gas friction for contributors (nice UX differentiator).[^sui-sponsored-tx][^sui-sponsor-txn-guide]

#### Licensing / compliance
- Don’t process real payments to real merchants for the demo; use a demo address.
- Don’t store personal data on-chain.

### Knowledge requirements
- **Sui**: escrow-ish object flows, events, ownership/caps.[^sui-docs][^sui-cheat-sheet]
- **Seal/Walrus**: encrypted blobs + access control patterns.[^seal-docs][^walrus-docs]
- **Fullstack**: React + FastAPI.

### Difficulty / hardening level
- **MVP difficulty**: Medium.
- **Hardening level (what separates winners)**: High.
  - Robust state machine (cancel/timeout/refund).
  - Idempotent payouts.
  - Clear privacy boundaries.

### Security & correctness checklist
- Never put private notes on-chain.
- Do not allow payout twice; enforce one-way state transitions.
- Explicitly define who can trigger payout (recipient vs organizer).

### Test plan (tie-breaker strength)
- **Move tests**: create pool, contribute, close, payout once, reject after deadline/cancel.
- **E2E smoke**: contributor note encryption → Walrus upload → recipient decrypt.

### Demo script (2–3 minutes)
1. Organizer creates pool for recipient.
2. Two contributors add funds + encrypted notes.
3. Recipient opens pool, decrypts notes, chooses gift.
4. Payout executes; verification page shows on-chain proof.

### Stretch goals
- Multi-currency contributions (if stablecoin available) and/or a402 payment gateway integration.[^beep-sdk]
- Sponsored contributions so contributors never need SUI.[^sui-sponsored-tx]
- “Anonymous contributor mode” (UI-level anonymity) with clear disclaimer.

## Idea 10 — Qualifying via OSS: Fix/Improve Sui dApp Kit (Turbopack Compatibility + Theming DX)

### One-liner
Qualify (and potentially stand out) by **contributing upstream**: ship a high-impact improvement to MystenLabs’ **Sui dApp Kit / TS SDKs** (e.g., fix **Next.js Turbopack compatibility**, improve theming ergonomics, add a minimal reproduction + tests) and submit the PR as the hackathon deliverable.[^ts-sdks-repo][^sui-topics]

**Qualification (required):** This is the “contribute to open-source repos” path.[^sui-topics]

### Why this can win (mapped to judging)
- **Implementation (40%)**: judges can review real production code changes, tests, and a clean PR.
- **Design (30%)**: inherently Sui-native (it’s Sui’s official tooling).
- **Idea (20%)**: high leverage: improves many builders’ UX and reduces friction for adoption.
- **Outcome/UX (10%)**: you can show a before/after demo in a real dApp (e.g., Turbopack now works; theming is easier).

### Concrete contribution targets (pick 1–2)
1. **Fix Turbopack breakage in dApp Kit**
   - There’s a reported issue where `SuiClientProvider` fails under `next dev --turbopack` with `ReferenceError: e is not defined`.[^dapp-kit-turbopack-issue][^sui-client-provider-docs]
2. **Improve theming / customization DX**
   - Community feedback highlights pain around theming customization and dark mode ergonomics.[^dapp-kit-theme-discussion][^dapp-kit-themes-docs]

### Batikan fit score: 89/100
**Why Batikan is likely strong here**
- Strong engineering rigor + test background (automation, reliability) is ideal for upstream fixes.[^batikanor]
- Fullstack experience helps with reproductions across toolchains (Next/React) and packaging issues.[^batikanor]
- Prior blockchain hackathon success suggests you can ship under time pressure.[^batikanor]

**Risks / why it’s not a perfect 100**
- If maintainers don’t merge quickly, you may need to submit as “open PR” with clear proof and reproduction.
- Tooling contributions can be scored less emotionally than consumer products unless the impact is obvious.

### Hackathon win chance (skeptical): 67/100
**Why it could place highly**
- A merged (or clearly accepted) fix to official tooling is extremely credible and high-impact.
- Cleaner diff + tests can score very well on “Implementation”.

**Why it might *not* win**
- Depends on judging culture: some hackathons reward “new product” demos more than OSS improvements.
- Merge/review latency is outside our control.

**How to increase win odds**
- Keep scope tight, reproducible, and measurable (one bugfix + one demo app).
- Provide a minimal reproduction repo and add regression tests.
- Pair the PR with a small demo app (Vercel deploy) showing the fix in action.

### Execution plan (hackathon-sized)
1. **Reproduce** the bug or pain point
   - Create a tiny Next app using the documented `SuiClientProvider` setup.[^sui-client-provider-docs]
   - Demonstrate failure under Turbopack (or theming limitation).
2. **Patch**
   - Fix the underlying packaging/bundler issue (or theming API/variables).
3. **Regression tests**
   - Add a test or build check that would have caught it.
4. **PR quality**
   - Clear PR description with “before/after”, repro steps, and why the change is safe.

### Implementation requirements
#### Hardware
- Laptop only.

#### Software
- Node + pnpm/yarn.
- Repo: `MystenLabs/ts-sdks` (dApp Kit lives here) and/or related `MystenLabs/sui` issue tracking.[^ts-sdks-repo][^dapp-kit-turbopack-issue]

#### Licensing / compliance
- Follow repo contribution guidelines; avoid committing secrets.

### Knowledge requirements
- React/Next bundling and ESM/CJS nuances.
- Reading and modifying TS monorepo packages.

### Difficulty / hardening level
- **MVP difficulty**: Medium.
- **Hardening level (what separates winners)**: High.
  - Minimal reproduction.
  - Backwards compatibility.
  - Regression tests.

### Demo script (2 minutes)
1. Show the failing example app (Turbopack error) or painful theming case.
2. Switch to the fixed version (or PR branch) where it works.
3. Show PR diff + tests + link.

---

## Idea 11 — Sui Provenance for Software Releases (Artifacts on Walrus + On-chain Release Registry)

### One-liner
Build a **release provenance registry** where a team publishes a release with a **Walrus-hosted artifact bundle** (binary, SBOM, attestations) and an on-chain **`Release` object** on Sui that immutably anchors the artifact hash + version + git commit reference, enabling anyone to verify “this binary matches this release”.[^walrus-docs][^sui-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### Why this can win (mapped to judging)
- **Implementation (40%)**: crisp, testable E2E: upload bundle → publish release → verify bundle hash.
- **Design (30%)**: strong Sui fit if each `Project` and `Release` is an object and verification is content-addressed via Walrus.[^sui-docs][^walrus-docs]
- **Idea (20%)**: software supply-chain integrity is a real-world problem with clear blockchain relevance (immutability + attestations).
- **Outcome/UX (10%)**: judge-friendly: “verify this release” page that turns green/red.

### Target users
- Open-source maintainers shipping releases.
- Protocol teams publishing audited binaries/configs.
- Enterprises wanting tamper-evident release history.

### Batikan fit score: 90/100
**Why Batikan is likely strong here**
- Strong fullstack + cloud background (shipping deployable systems fast).[^batikanor]
- Good reliability instincts: the hash/verify pipeline must be correct and testable.[^batikanor]

**Risks / why it’s not a perfect 100**
- If it devolves into “hash on-chain”, it’ll feel shallow; must include a verifier UX + clear trust model.

### Hackathon win chance (skeptical): 72/100
**Why it could place highly**
- High-leverage infra idea; similar classes of “infrastructure/tooling” work have been rewarded historically.[^kucoin-2023-winners]
- Aligns with real Walrus usage patterns as a data layer (artifact bundles are a natural fit).[^walrus-hackathon-highlights-summer25]

**Why it might *not* win**
- Less emotional than consumer apps; needs a polished demo and clear value in 2 minutes.

**How to increase win odds**
- Add one differentiator: multi-signer “release approval” (team sign-off) or immutable rollback policy.
- Make verification central: paste `Release` id → fetch Walrus bundle → recompute → VERIFIED.

### Core MVP (hackathon-sized)
1. **Project registry**: create `Project` object + `MaintainerCap`.
2. **Upload bundle** to Walrus (artifact + canonical metadata JSON) and store Walrus ref.[^walrus-web-api]
3. **Publish release**: create `Release` object `{project_id, version, walrus_ref, bundle_hash, publisher, created_at}` and emit event.[^sui-docs]
4. **Verify**: frontend queries Sui for `Release`, downloads bundle from Walrus, recomputes hash locally, compares → VERIFIED/INVALID.[^sui-api-ref]

### Architecture (high level)
- **Frontend (React/Vercel)**: publish + verify UI.
- **Backend (FastAPI, optional)**: Walrus upload proxy + canonicalization helpers.
- **Move (Sui)**: `Project`, `Release`, caps, events; keep patterns idiomatic via examples.[^sui-examples]

### Test plan (tie-breaker strength)
- Unit tests for canonical hashing.
- E2E smoke: publish → verify.

---

## Idea 12 — Open-source “Gas Station + zkLogin Starter Kit” (FastAPI + Vercel + dApp Kit)

### One-liner
Build (and optionally upstream) a **starter kit** that makes Sui onboarding *actually easy*: a production-minded **gas station** (sponsored transactions) + **zkLogin** integration + a demo dApp (React/Vercel) so teams can clone and get **walletless + gasless** UX quickly.[^sui-sponsored-tx][^sui-zklogin][^sui-dapp-kit]

**Qualification (required):** Either path works: (A) build-your-own project (ship the starter kit), and/or (B) contribute upstream by PR-ing a template/example to an official repo.[^sui-topics][^ts-sdks-repo][^sui-create-dapp]

### Why this can win (mapped to judging)
- **Implementation (40%)**: tangible, reviewable code + working deploy.
- **Design (30%)**: tightly aligned to Sui primitives (sponsored tx + zkLogin) with explicit safeguards.[^sui-sponsored-tx][^sui-sponsor-txn-guide]
- **Idea (20%)**: high ecosystem leverage (many teams fail at onboarding; this unblocks them).
- **Outcome/UX (10%)**: best possible UX story: “no wallet install, no gas, still self-custodial”.[^sui-zklogin]

### Batikan fit score: 94/100
**Why Batikan is likely strong here**
- FastAPI + React/Vercel template shipping is in your wheelhouse, and you have strong hackathon shipping velocity.[^batikanor]

**Risks / why it’s not a perfect 100**
- Gas-station security posture must be strict (allowlist, budgets, rate limits), otherwise it looks unsafe.[^sui-sponsor-txn-guide]

### Hackathon win chance (skeptical): 69/100
**Why it could place highly**
- If other teams adopt it during the hackathon, the impact is obvious.
- Strong alignment with consumer winners emphasizing frictionless onboarding.[^overflow-2024-winners]

**Why it might *not* win**
- “Starter kit” can be underrated versus “new product” unless you show adoption and a flawless demo.

**How to increase win odds**
- Demo: “sign in with Google” (zkLogin) → mint object via sponsored tx → verify result.
- Include an admin panel showing allowlist + rate limits in action.

### Core MVP (hackathon-sized)
1. Demo dApp (dApp Kit) calling one Move function.
2. zkLogin end-to-end from the official guide.[^sui-zklogin-integration]
3. FastAPI gas station that signs only allowlisted calls/budgets.[^sui-sponsored-tx][^sui-sponsor-txn-guide]
4. Deploy frontend on Vercel + backend hosted.

### Contribution angle (optional but qualifying)
- PR a template/example to an official repo (e.g., `create-dapp` templates or `ts-sdks` examples).[^sui-topics][^sui-create-dapp][^ts-sdks-repo]

---

## Idea 13 — SuiGraph Atlas: 3D Relationship Explorer + Semantic Search (react-force-graph + embeddings)

### One-liner
Build a **beautiful, interactive 3D graph explorer** for Sui where users can visually traverse relationships (wallets ⇄ packages ⇄ objects ⇄ transactions) and also **search semantically** (“show contracts like X”, “clusters around this package”) using embeddings + vector search, with shareable graph snapshots anchored on Sui/Walrus.[^sui-docs][^sui-api-ref][^react-force-graph][^threejs-docs][^sentence-transformers][^faiss]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### Why this can win (mapped to judging)
- **Implementation (40%)**: real E2E system: ingest → build graph → compute embeddings → query → render 3D UI.
- **Design (30%)**: Sui-native data model: objects/events/tx are first-class and verifiable via RPC; snapshots can be stored on Walrus and referenced from Sui for provenance.[^sui-docs][^walrus-docs]
- **Idea (20%)**: differentiates from typical explorers by combining **graph thinking** + **semantic search**.
- **Outcome/UX (10%)**: judges love a strong visual demo; this is instantly legible on a projector.

### Target users
- Developers exploring ecosystem interactions.
- Auditors / security researchers looking for clusters and “who interacts with what”.
- Hackathon judges/mentors wanting to quickly understand your on-chain activity.

### Batikan fit score: 97/100
You’re strong in **graphs + embeddings + data science**, and this idea turns that directly into a demoable product.

### Hackathon win chance (skeptical): 75/100
**Why it could place highly**
- Demo is visually unique (rare among hackathon submissions).
- Clear technical depth without needing huge Move complexity.

**Why it might *not* win**
- Data ingestion can get flaky if you over-scope; must keep the ingest window small and deterministic.

### Core MVP (hackathon-sized)
1. **Ingest a bounded dataset** (e.g., N recent tx for a target package / time window) via Sui RPC.[^sui-api-ref]
2. Build a **typed graph**:
   - nodes: `Address`, `Package`, `Object`, `Tx`
   - edges: `CALLS`, `OWNS`, `TRANSFERS`, `EMITS`
3. Compute **embeddings** for node text (package name/module/function/event names or annotated descriptions).[^sentence-transformers]
4. Provide **semantic search** (query → nearest nodes) using a local vector index.[^faiss]
5. Render in **3D force layout** with smooth interactions (focus node, expand neighborhood, clustering color).[^react-force-graph][^threejs-docs]

### Architecture (high level)
- **Frontend (React/Vercel)**
  - `react-force-graph` for 3D force graph.
  - Optionally add a “globe mode” view for dramatic storytelling using `react-globe.gl` (purely as a visualization, not claiming geolocation).[^react-globe-gl]
- **Backend (FastAPI)**
  - ingestion worker (pull RPC pages), graph builder, embedding builder.
  - serves precomputed graph JSON + vector index.
- **Storage**
  - store graph snapshot JSON on Walrus for shareability.[^walrus-web-api]
  - optional: write a small Sui `GraphSnapshot` object that records `{walrus_ref, created_at, scope}` for provenance.[^sui-docs]

### Difficulty / hardening level
- **MVP difficulty**: Medium.
- **Hardening level (what separates winners)**: High.
  - deterministic ingestion, caching, and a rock-solid demo dataset.

### Demo script (2–3 minutes)
1. Load graph snapshot of a known package.
2. Fly around the 3D graph; click nodes to expand relationships.
3. Type: “nft mint” → jump to semantically similar nodes.
4. Show the snapshot provenance (Walrus ref + optional on-chain anchor).

---

## Idea 14 — MoveVerse: Contract Similarity Radar (Embeddings + Dependency Graph)

### One-liner
Build a tool that lets developers and auditors explore **Move package similarity** on Sui: fetch package/module metadata via Sui APIs, compute embeddings for code “signatures” (function names/types/docs), cluster similar packages, and visualize the ecosystem as an interactive graph (plus “find similar to this package”).[^sui-docs][^sui-api-ref][^sentence-transformers][^faiss][^react-force-graph]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### Why this can win (mapped to judging)
- **Implementation (40%)**: very testable: crawl → embed → search → visualize.
- **Design (30%)**: directly leverages Sui’s on-chain packages and public query APIs.[^sui-api-ref]
- **Idea (20%)**: helps auditors/devs detect copy-paste patterns and understand code reuse.
- **Outcome/UX (10%)**: “contract similarity search” is a crisp demo that feels like a real product.

### Target users
- Security auditors and reviewers.
- Devs looking for existing implementations (“find me a package similar to X”).
- Ecosystem teams triaging clones/forks.

### Batikan fit score: 95/100
Graph + embedding strengths translate directly, and the UI can be very polished with your React/3D comfort.

### Hackathon win chance (skeptical): 74/100
**Why it could place highly**
- It’s a differentiated devtool with an obvious “wow” moment.

**Why it might *not* win**
- Needs careful scoping so crawling doesn’t dominate the weekend; focus on a curated package set.

### Core MVP (hackathon-sized)
1. Curate ~50–200 packages (seed list + a small crawler).
2. For each package, derive a textual “signature”: module + function names + (optional) docs.
3. Compute embeddings + build a vector index (FAISS) for similarity search.[^sentence-transformers][^faiss]
4. Build a graph where edges represent top-k similarity and/or explicit dependency relationships.
5. 3D visualization + “similar packages” panel.

### Difficulty / hardening level
- **MVP difficulty**: Medium.
- **Hardening level**: Medium-High.

### Demo script (2 minutes)
1. Paste a package id.
2. Show “most similar packages” + the similarity graph cluster.
3. Click a node and reveal its signature + why it’s similar.

---

## Citations
[^sui-docs]: https://docs.sui.io/
[^sui-cheat-sheet]: https://docs.sui.io/guides/developer/dev-cheat-sheet?q=llm
[^sui-api-ref]: https://docs.sui.io/sui-api-ref
[^sui-rpc-ref]: https://docs.sui.io/references/sui-api
[^sui-ts-sdk]: https://sdk.mystenlabs.com/
[^ts-sdks-repo]: https://github.com/MystenLabs/ts-sdks
[^sui-dapp-kit]: https://sdk.mystenlabs.com/dapp-kit
[^sui-examples]: https://github.com/MystenLabs/sui/tree/main/sui_programmability/examples
[^move-book]: https://move-language.github.io/move/
[^beep-sdk]: https://github.com/beep-it/beep-sdk
[^walrus-docs]: https://docs.wal.app/
[^walrus-web-api]: https://docs.wal.app/usage/web-api.html
[^walrus-awesome]: https://github.com/MystenLabs/awesome-walrus
[^seal-docs]: https://seal-docs.wal.app/
[^seal-using]: https://seal-docs.wal.app/UsingSeal/
[^seal-awesome]: https://github.com/MystenLabs/awesome-seal?tab=readme-ov-file#awesome-seal-
[^batikanor]: https://batikanor.com
[^sui-zklogin]: https://docs.sui.io/concepts/cryptography/zklogin
[^sui-zklogin-integration]: https://docs.sui.io/guides/developer/cryptography/zklogin-integration
[^overflow-2024-winners]: https://blog.sui.io/2024-sui-overflow-hackathon-winners/
[^overflow-2025-winners]: https://blog.sui.io/2025-sui-overflow-hackathon-winners/
[^kucoin-2023-winners]: https://blog.sui.io/hackathon-winners/
[^epfl-2023-winners]: https://blog.sui.io/epfl-bsa-hackathon-winners/
[^walrus-hackathon-highlights-summer25]: https://www.walrus.xyz/blog/walrus-hackathon-highlight-summer25
[^sui-overflow-devfolio]: https://sui-overflow.devfolio.co/
[^asu-sui-devpost-gallery]: https://asu-x-sui-hackathon.devpost.com/project-gallery
[^sui-sponsored-tx]: https://docs.sui.io/concepts/transactions/sponsored-transactions
[^sui-sponsor-txn-guide]: https://docs.sui.io/guides/developer/sui-101/sponsor-txn
[^sui-rpc-best-practices]: https://docs.sui.io/references/sui-api/rpc-best-practices
[^vercel-ai-sdk-python-streaming]: https://vercel.com/templates/ai/ai-sdk-python-streaming
[^platejs]: https://platejs.org/
[^pc-reading-stac]: https://planetarycomputer.microsoft.com/docs/quickstarts/reading-stac/
[^pc-sentinel2-l2a]: https://planetarycomputer.microsoft.com/dataset/sentinel-2-l2a
[^stac-standard]: https://www.ogc.org/standards/stac/
[^maplibre-docs]: https://maplibre.org/maplibre-gl-js/docs/
[^sui-topics]: https://rebrand.ly/sui-topics
[^dapp-kit-turbopack-issue]: https://github.com/MystenLabs/sui/issues/20505
[^dapp-kit-theme-discussion]: https://github.com/MystenLabs/sui/discussions/18669
[^dapp-kit-themes-docs]: https://sdk.mystenlabs.com/dapp-kit/themes
[^sui-client-provider-docs]: https://sdk.mystenlabs.com/dapp-kit/sui-client-provider
[^sui-create-dapp]: https://sdk.mystenlabs.com/dapp-kit/create-dapp
[^react-force-graph]: https://github.com/vasturiano/react-force-graph
[^react-globe-gl]: https://github.com/vasturiano/react-globe.gl
[^threejs-docs]: https://threejs.org/docs/
[^react-three-fiber]: https://github.com/pmndrs/react-three-fiber
[^sentence-transformers]: https://github.com/huggingface/sentence-transformers
[^faiss]: https://github.com/facebookresearch/faiss
