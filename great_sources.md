## Great Sources (for a strong Sui hackathon submission)

## Eligibility / qualifying rule (must follow)
To qualify, we must either:
1) **Build our own project**, or
2) **Contribute to RFPs / open-source repos**.

Topic hub (RFPs + repos): https://rebrand.ly/sui-topics

These are *high-signal* sources you can point an LLM at (RAG / citations) so answers stay grounded in official docs and ecosystem reality.

### Core Sui (protocol + developer basics)
- **Sui Docs (official)** — https://docs.sui.io/
  - Canonical reference for Sui concepts (objects, ownership, transactions), developer tools, and best practices.
- **Sui Developer Cheat Sheet (official)** — https://docs.sui.io/guides/developer/dev-cheat-sheet?q=llm
  - Quick, accurate reminders; also explicitly friendly for LLM-assisted workflows.
- **Sui Developer Portal** — https://sui.io/developers
  - Higher-level entry point to official resources and guides.

### Move on Sui (smart contract language + patterns)
- **Move on Sui section (official, within Sui docs)** — https://docs.sui.io/
  - Use for Sui-specific Move concepts: object model, abilities, entry functions, tx context, etc.
- **Move Language (core) docs/book (official Move project)** — https://move-language.github.io/move/
  - Language fundamentals that apply broadly; pair with Sui docs for Sui-specific semantics.
- **Sui Move examples (official code, great patterns)** — https://github.com/MystenLabs/sui/tree/main/sui_programmability/examples
  - Practical, production-adjacent examples (objects tutorial, NFTs, DeFi, games) you can mirror in your own modules.

### APIs, SDKs, and integration primitives
- **Sui API reference (RPC)** — https://docs.sui.io/sui-api-ref
  - Method-level reference for JSON-RPC calls (useful for backends, indexers, and advanced querying).
- **Sui RPC reference overview** — https://docs.sui.io/references/sui-api
  - The “what to use” page for RPC, including migration notes and format constraints.
- **RPC Best Practices (official)** — https://docs.sui.io/references/sui-api/rpc-best-practices
  - Operational guidance that can prevent demos from flaking (rate limits, redundancy, providers).
- **Sui TypeScript SDK docs (official)** — https://sdk.mystenlabs.com/
  - How to build transactions and interact with Sui from TypeScript.
- **Sui TypeScript SDK repo (official)** — https://github.com/MystenLabs/ts-sdks
  - Source of truth for TS SDK packages and examples.
- **Sui dApp Kit docs (official)** — https://sdk.mystenlabs.com/dapp-kit
  - React hooks + components for wallet integration and querying Sui.
- **Create dApp (official scaffolding)** — https://sdk.mystenlabs.com/dapp-kit/create-dapp
  - Fastest way to scaffold a working end-to-end dApp template.
- **First app: client with TS SDK (official guide)** — https://docs.sui.io/guides/developer/first-app/client-tssdk
  - Practical “connect everything” tutorial.
- **Sui core repo (official)** — https://github.com/MystenLabs/sui
  - Deep reference for protocol internals, examples, and real-world patterns.

### Ecosystem pillars (great for “Design” and “Integration” judging points)
- **Walrus ecosystem list** — https://github.com/MystenLabs/awesome-walrus
  - Discover storage-centric primitives and examples (useful for UX + reliability).
- **Walrus docs (current)** — https://docs.wal.app/
  - The canonical documentation for storing/retrieving data on Walrus.
- **Walrus client HTTP API** — https://docs.wal.app/usage/web-api.html
  - Great for building a gateway backend or a simple uploader service.
- **Walrus SDKs & tools** — https://docs.wal.app/usage/sdks.html
  - Find official and community SDKs + explorers.
- **Seal ecosystem list** — https://github.com/MystenLabs/awesome-seal?tab=readme-ov-file#awesome-seal-
  - Discover encryption / access-control patterns for data stored offchain or shared selectively.
- **Seal docs (current)** — https://seal-docs.wal.app/
  - Overview of Seal’s model: encryption, key servers, and on-chain access control.
- **Seal “Using Seal” (implementation guide)** — https://seal-docs.wal.app/UsingSeal/
  - Concrete guidance for implementing access-control `seal_approve*` functions and constraints.
- **Seal repo (official)** — https://github.com/MystenLabs/seal
  - Source of truth for SDKs, docs, and examples.

### Hackathon “where to build” signals (RFPs + active needs)
- **Sui Foundation RFP board** — https://airtable.com/appNFdPEyQecFhglH/shrZ3OvQ5wAAyIQQd/tblBcgbcf5UsCuuRP
- **Walrus RFP board** — https://airtable.com/appoDAKpC74UOqoDa/shr1je0hfpi4LFHHx/tbliqV4teM5mxdDVp
- **IKA RFP board** — https://airtable.com/app0KKcteV6JukhN1/shrSxDWbi0qn7U88j
  - RFPs are a great way to ensure problem-solution fit and ecosystem relevance.

### Public repos to mine for real code patterns
- **MystenLabs public repos** — https://github.com/orgs/MystenLabs/repositories?type=all&q=visibility%3Apublic+archived%3Afalse+
  - Use as “source of truth” for patterns and up-to-date examples.

### Payments + agent-native integrations (advanced / differentiating)
- **BEEP SDK (TypeScript) on Sui** — https://github.com/beep-it/beep-sdk
  - Self-custodial stablecoin payments, native a402 (agent HTTP 402), and MCP integrations.

### Past Sui hackathons (for “what tends to win” inspiration)
- **Sui Overflow 2024 winners (official)** — https://blog.sui.io/2024-sui-overflow-hackathon-winners/
  - Shows what got rewarded across tracks and why (useful to calibrate scope + UX).
- **Sui Overflow 2025 winners (official)** — https://blog.sui.io/2025-sui-overflow-hackathon-winners/
  - Useful to see emerging themes (AI, privacy/cryptography, wallets, infra).
- **Sui x KuCoin Labs Summer Hackathon winners (official)** — https://blog.sui.io/hackathon-winners/
  - Great reference for “best overall” and category winners; many became real Sui ecosystem projects.
- **EPFL / European student hackathon winners (official)** — https://blog.sui.io/epfl-bsa-hackathon-winners/
  - Compact set of winning ideas with clear demos (good benchmark for an offline weekend hackathon).
- **Walrus hackathon highlights (ecosystem)** — https://www.walrus.xyz/blog/walrus-hackathon-highlight-summer25
  - Shows how teams use Walrus/Seal in practice (good for storage + encryption ideas).

### Submission galleries / project showcases (for concrete inspiration)
- **Sui Overflow 2024 on Devfolio (projects live there)** — https://sui-overflow.devfolio.co/
  - Browse many submissions quickly; copy patterns for scope, demos, and repo structure.
- **ASU x SUI Hackathon project gallery (Devpost)** — https://asu-x-sui-hackathon.devpost.com/project-gallery
  - Easy to scan ideas + demos; good for consumer-app inspiration.
- **Sui Overflow on HackerEarth (challenge page)** — https://www.hackerearth.com/challenges/hackathon/sui-overflow/
  - Another public entry point for rules + examples around submissions.

## How to use these with an LLM (grounded, not hallucinated)
1. **Always cite** a URL + section (or quote snippets) in design docs and PRs.
2. **Prefer “official first”** (docs.sui.io, MystenLabs repos), then ecosystem lists.
3. **Check version drift**: if the source doesn’t match your SDK/CLI version, treat it as “needs verification”.
4. **Turn docs into checklists**: object ownership, access control, tx flow, and wallet signing are where most hacks fail.
