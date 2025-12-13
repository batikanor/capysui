## Refined Project Ideas (focus set)

### Eligibility / qualifying rule (must-follow)

To qualify, we must either:

1. **Build our own project**, or
2. **Contribute to RFPs / open-source repos**.

Topic hub (RFPs + repos):[^sui-topics]

### About this file

- This is a **shortlist + expansions** around the ideas you liked: **Idea 7, Idea 8, Idea 14** (kept with the same numbers).
- New ideas below are intentionally **similar in flavor**: data/embeddings, graph/3D UI, verifiable provenance, and “judge-friendly” demos.
- **Citations**: keep using footnotes for non-trivial technical claims and core dependencies.

---

## Idea 7 — AI-Backed Doc Editor with Verifiable Provenance (PlateJS + FastAPI + Sui/Walrus/Seal)

### One-liner

AI-assisted rich-text editor (PlateJS) with a “Publish” button that creates an immutable **DocCommit** on Sui (hash + timestamp + author), stores versions on Walrus, and selectively encrypts sensitive sections via Seal.[^platejs][^sui-docs][^walrus-docs][^seal-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### Why it’s winner-shaped

- Very demoable: edit → AI assist → publish → verify.
- Strong Sui fit: object-centric commits + events.[^sui-docs]

### MVP

- PlateJS editor + diff view.
- FastAPI streaming AI assist (optional) + publish pipeline.[^vercel-ai-sdk-python-streaming]
- Verify page: recompute hash and compare to on-chain `DocCommit`.

---

## Idea 8 — GeoProof: Verifiable Satellite “Change Reports” (WebGIS + FastAPI + Sui/Walrus/Seal)

### One-liner

Pick an area + time window, fetch open satellite imagery via STAC, compute a simple change metric, and publish a tamper-evident **ChangeReport** on Sui that references evidence stored on Walrus (thumbnails/masks/metadata).[^stac-standard][^pc-reading-stac][^sui-docs][^walrus-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### Why it’s winner-shaped

- Judges can verify quickly: “here’s the report object + evidence links”.
- Visual demo (map + before/after) tends to score well.

### MVP

- Map UI (MapLibre).
- STAC fetch + compute (FastAPI).
- Walrus evidence bundle + Sui `ChangeReport` anchor.[^walrus-web-api][^sui-api-ref]

---

## Idea 14 — MoveVerse: Contract Similarity Radar (Embeddings + Dependency Graph)

### One-liner

Compute embeddings for Move package “signatures” (module/function names + docs), run similarity search (FAISS), and visualize clusters in a 3D graph so users can discover “packages similar to X”.[^sui-api-ref][^sentence-transformers][^faiss][^react-force-graph]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### Why it’s winner-shaped

- A crisp “wow”: paste package → see nearest neighbors + cluster.
- Obvious usefulness for devs/auditors.

### MVP

- Curate 50–200 packages.
- Embed + build vector index.
- 3D graph UI (react-force-graph) with explanation panel (“why similar”).[^react-force-graph][^threejs-docs]

---

# 10 more ideas like 7/8/14 (novel + very demoable)

## Idea 15 — ClaimGraph Studio: Verifiable Claim–Evidence Graphs for Reports

### One-liner
Create reports where **every claim is a node**, evidence is attached as a Walrus bundle, and the whole claim graph is anchored on Sui; embeddings power “find similar claims / supporting evidence”.[^walrus-docs][^walrus-web-api][^sui-docs][^sentence-transformers]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Editor (can reuse PlateJS) with “Claim blocks” that must attach evidence IDs.[^platejs]
- Graph view (react-force-graph): claims ↔ evidence ↔ sources.[^react-force-graph]
- Publish: store report bundle on Walrus + anchor `ClaimGraphSnapshot` on Sui.[^walrus-web-api][^sui-docs]
- Verify page: recompute bundle hash + show on-chain pointer.

---

## Idea 16 — GeoProof Similarity Feed: Clustered Change Reports (Map + 3D Graph)

### One-liner
Turn GeoProof into a “news feed”: publish many ChangeReports, embed each report (text + metadata), and cluster similar changes so users can browse by “type of change” and jump between related regions/time windows.[^pc-reading-stac][^stac-standard][^sentence-transformers]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Create ChangeReports as in Idea 8 (Walrus evidence + Sui anchor).[^walrus-docs][^sui-docs]
- Embedding index for report summaries + nearest-neighbor search.[^faiss]
- UI: map (MapLibre) + “related reports” panel + optional similarity graph view.[^maplibre-docs][^react-force-graph]

---

## Idea 17 — Move Pattern Finder: “Describe what you want” → Similar Packages/Modules

### One-liner
Like Idea 14, but productized: type “escrow with deadline”, “ticketing NFT”, “vesting”, and get **similar Move packages/modules** + a graph of related implementations (plus a “why” explanation).[^sui-api-ref][^sentence-transformers][^faiss]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Curated package set.
- Build “module signature docs” → embeddings → FAISS search.
- 3D cluster graph + details panel (top matching functions/terms).[^react-force-graph]

---

## Idea 18 — Data Lineage Graph: Verifiable Dataset/Model Pipelines (Walrus + Sui)

### One-liner
Track dataset + model artifact transformations as a **lineage DAG**: each step stores inputs/outputs on Walrus and anchors a `LineageStep` object on Sui so anyone can verify the exact pipeline that produced an output.[^walrus-docs][^sui-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Upload dataset bundle(s) to Walrus.[^walrus-web-api]
- Record a small pipeline: `raw → cleaned → features → model`.
- 3D lineage graph UI (nodes=artifacts, edges=transform steps).[^react-force-graph][^threejs-docs]
- Verify: download bundle(s) and check hashes match the on-chain lineage.

---

## Idea 19 — Prompt+Source Provenance for AI Writing (Selective Disclosure with Seal)

### One-liner
Extend Idea 7 with a “Provenance Pack”: store the **exact sources + prompt config** used to generate a section, encrypt sensitive prompts via Seal, and anchor a `ProvenancePack` pointer on Sui for verifiable AI-assisted writing.[^seal-docs][^walrus-docs][^sui-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- PlateJS doc with “AI generated” blocks.
- Bundle: sources list + prompt params + output hash stored on Walrus.
- Seal-encrypt prompt text (optional) and store encrypted blob reference.[^seal-docs]
- Verify page shows what’s public vs encrypted.

---

## Idea 20 — Upgrade Diff Explorer: Visual “What Changed” Between Two Move Package Versions

### One-liner
Given two package versions, compute a structured diff (API surface changes, renamed functions, added/removed events), embed the change summary for search, and visualize upgrade paths as a graph (“show me risky upgrades”).[^sui-api-ref][^sentence-transformers]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Select two package IDs.
- Extract signature text → diff → summary.
- Graph view of versions and diffs; “similar upgrades” search via embeddings.[^react-force-graph][^faiss]

---

## Idea 21 — Evidence Room: Verifiable Case Files with Relationship Graphs (Walrus + Seal)

### One-liner
Build a “case file” system for investigations: upload evidence bundles to Walrus, encrypt sensitive notes via Seal, and visualize relationships (people/orgs/events/evidence) as a graph with verifiable anchors on Sui.[^walrus-docs][^seal-docs][^sui-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Case file editor (text + attachments).
- Relationship graph UI (react-force-graph).
- Publish case snapshot bundle on Walrus + anchor pointer on Sui.

---

## Idea 22 — Sui Activity Storyboard: Turn On-chain Data Into a Shareable 3D Narrative

### One-liner
Generate a “storyboard” from a curated slice of Sui activity (for a package or wallet): build a typed graph (tx/object/event), auto-generate short captions, and publish a shareable snapshot with verifiable provenance.[^sui-api-ref][^sui-docs][^walrus-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Ingest N transactions via RPC.
- Build graph + 3D viewer (fly-through).
- Save snapshot JSON on Walrus + anchor on Sui.

---

## Idea 23 — GeoProof “Time Machine”: 3D Globe Playback with Verifiable Frames

### One-liner
A 3D globe playback UI that shows a time series of imagery-derived frames (or change masks); each frame set is stored on Walrus and anchored on Sui so viewers can verify the exact data behind the animation.[^react-globe-gl][^pc-reading-stac][^walrus-docs][^sui-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Pick region + 3 timestamps (STAC).
- Generate 3 frames/masks + store on Walrus.
- Globe playback + verify link.

---

## Idea 24 — ProofSearch: One Semantic Search Box Across Docs + GeoProof + Move Packages

### One-liner
Unify 7/8/14 into one “semantic OS” for proofs: search across **DocCommits**, **ChangeReports**, and **Move packages** using embeddings + a shared graph UI, with every result having a verifiable Walrus/Sui provenance trail.[^sentence-transformers][^faiss][^sui-docs][^walrus-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Index: (A) docs from Idea 7, (B) reports from Idea 8, (C) package signatures from Idea 14.
- One search box → ranked results → jump-to graph context.
- “Verify” button on every item.

---

# More (10 additional) ideas — optimized for novelty + demo wow

## Idea 25 — GeoProof Watchlists: On-chain Alerts for Verified Changes

### One-liner
Users create “watchlists” (region + metric + threshold). A backend periodically computes changes from STAC imagery, stores evidence bundles on Walrus, and when triggered publishes a verifiable `GeoAlert` anchor on Sui; UI shows a timeline + alert graph.[^pc-reading-stac][^stac-standard][^walrus-docs][^sui-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Create watchlist → run one scheduled compute → trigger one alert.
- Alert page: evidence bundle + verify.

---

## Idea 26 — CapGraph: Visualize “Who Can Do What” in a Move Package (Capability Flow Graph)

### One-liner
Given a package, build an interactive graph of **capabilities/roles** (caps, admin objects, allowed entrypoints) to show “who can mint/upgrade/withdraw” and flag confusing authority paths; add semantic search (“show mint authority”).[^sui-api-ref][^react-force-graph][^sentence-transformers]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Curate 5–20 packages.
- Parse module signatures into a “role graph” (even heuristic is fine for hackathon).
- 3D graph + search + share snapshot.

---

## Idea 27 — Spec-to-Chain Traceability: Link Doc Sections to On-chain Evidence

### One-liner
Combine Idea 7’s editor with a “Trace” mode: each paragraph/requirement links to on-chain evidence (tx digest/object id) and/or Walrus evidence bundles, producing a verifiable trace graph that reviewers can click through.[^sui-docs][^sui-api-ref][^walrus-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Doc editor + “Attach evidence” UI.
- Render trace graph + “verify all evidence” button.

---

## Idea 28 — Move “Concept Map” Generator: Embedding-based Package Cartography

### One-liner
Auto-build a concept map of the Move ecosystem: embed package signatures, cluster them into “themes” (escrow, nft minting, access control, staking), and render an explorable 3D map where users can jump across similar clusters.[^sentence-transformers][^faiss][^react-force-graph]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Curate ~200 packages.
- Clusters + labeled “themes” (manual labels OK for hackathon).
- 3D map + “find similar” search.

---

## Idea 29 — GeoProof “What Changed?” Explainer: Evidence-first Narratives

### One-liner
Make GeoProof instantly understandable: for each ChangeReport, generate a compact evidence-first narrative (bullet points + key stats) and link each sentence to a specific evidence artifact in the Walrus bundle; semantic search across narratives.[^walrus-docs][^sentence-transformers]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Report summary template (LLM optional; can be rule-based).
- Sentence → evidence pointer mapping.
- “Verify sentence” click-through.

---

## Idea 30 — Provenance Badges: Verifiable “This Report Has Evidence” Widgets

### One-liner
Ship a drop-in widget (iframe/JS snippet) that any site can embed: it shows a badge (“Verified on Sui”) for a document/report and opens a verifier modal that checks the Sui anchor + Walrus bundle hash live.[^sui-docs][^walrus-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- One verifier route + embeddable widget.
- Demonstrate on 2 pages: a doc (Idea 7) + a GeoProof report (Idea 8).

---

## Idea 31 — Graph-backed Review Rooms: Multi-reviewer Sign-off on Claims/Diffs

### One-liner
Add a “review room” workflow: reviewers sign off on claims (Idea 7/15 style) or diffs (Idea 20 style), and the sign-offs become edges in a verifiable graph (who reviewed what, when), anchored on Sui and linked to Walrus artifacts.[^sui-docs][^walrus-docs][^react-force-graph]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- 2 reviewer roles.
- Sign-off edges + timeline view + verify.

---

## Idea 32 — Move “Interface Search”: Find Packages by ABI-like Signatures

### One-liner
Search for Move packages by interface intent: embed “function signatures + event names” so users can query “has withdraw(owner_cap)”, “emits Minted”, etc., and get ranked matches + similarity graph clusters.[^sui-api-ref][^sentence-transformers][^faiss]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Curated packages.
- Signature extraction + vector index.
- Search + graph + “why matched” panel.

---

## Idea 33 — “One Click Verify” Investigator Kit: Case File + GeoProof + Doc Provenance

### One-liner
A single UX that ties together the best demo elements: create a case file, attach GeoProof reports and doc commits, and present a cinematic verifier page that traverses the evidence graph (map → report → doc → on-chain anchor) in one flow.[^walrus-docs][^sui-docs][^maplibre-docs][^react-force-graph]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Case file with 2 artifacts (doc + report).
- “Verify all” page with clickable evidence path.

---

## Idea 34 — GlobeGraph Demo Mode: Live 3D Presentation of Your Project’s Proofs

### One-liner
Build a “demo mode” presenter tool: it loads any set of Walrus/Sui-backed artifacts (doc commits, change reports, package similarity results) and renders them as an animated 3D scene (graph + globe) for judges, with verifiable links always one click away.[^react-globe-gl][^react-force-graph][^sui-docs][^walrus-docs]

**Qualification (required):** Build-your-own project (this idea). Alternatively: contribute to RFPs / open-source repos.[^sui-topics]

### MVP
- Load 3 artifacts and play a scripted camera path.
- Every node opens verifier.

---

## Citations
[^sui-docs]: https://docs.sui.io/
[^sui-api-ref]: https://docs.sui.io/sui-api-ref
[^walrus-docs]: https://docs.wal.app/
[^walrus-web-api]: https://docs.wal.app/usage/web-api.html
[^seal-docs]: https://seal-docs.wal.app/
[^sui-topics]: https://rebrand.ly/sui-topics
[^vercel-ai-sdk-python-streaming]: https://vercel.com/templates/ai/ai-sdk-python-streaming
[^platejs]: https://platejs.org/
[^stac-standard]: https://www.ogc.org/standards/stac/
[^pc-reading-stac]: https://planetarycomputer.microsoft.com/docs/quickstarts/reading-stac/
[^react-force-graph]: https://github.com/vasturiano/react-force-graph
[^react-globe-gl]: https://github.com/vasturiano/react-globe.gl
[^threejs-docs]: https://threejs.org/docs/
[^sentence-transformers]: https://github.com/huggingface/sentence-transformers
[^faiss]: https://github.com/facebookresearch/faiss
[^maplibre-docs]: https://maplibre.org/maplibre-gl-js/docs/
