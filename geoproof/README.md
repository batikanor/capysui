# GeoProof (Sui Hackathon Submission)

GeoProof generates a verifiable satellite change report:
- pick an AOI (bbox / radius / from→to)
- pick a *Wayback timeline* (unique snapshots per location)
- render before/after crops + change mask
- publish an evidence bundle to **Walrus** and anchor a `ChangeReport` object on **Sui**

## Prerequisites

- Node.js + npm
- Sui CLI installed (`sui --version`)

Official references:
- Sui CLI client docs: https://docs.sui.io/references/cli/client
- Sui keytool docs: https://docs.sui.io/references/cli/keytool
- Get testnet coins / faucet: https://docs.sui.io/guides/developer/getting-started/get-coins

## 1) Run locally

```bash
cd geoproof
npm install
npm run dev
```

Open http://localhost:3000

## 2) One-time setup: Sui testnet wallet + env vars (required for Publish)

The backend route `POST /api/publish` needs:
- `SUI_PRIVATE_KEY` (bech32 string starting with `suiprivkey`)
- `GEOPROOF_PACKAGE_ID` (published Move package id)

### 2.1 Configure Sui CLI for testnet

```bash
sui client new-env --alias testnet --rpc https://fullnode.testnet.sui.io:443 || true
sui client switch --env testnet
```

### 2.2 Create a new address (local keystore)

This generates a new keypair in your local Sui keystore:

```bash
sui client new-address ed25519
```

Get the active address:

```bash
sui client active-address
```

### 2.3 Fund the address (testnet faucet)

Some Sui CLI versions will instruct you to use the Web UI. Use whichever works for you:

```bash
sui client faucet
```

If the CLI tells you to use the web faucet, open the provided link (it includes your address).

Verify balance:

```bash
sui client balance
```

### 2.4 Export `SUI_PRIVATE_KEY` in `suiprivkey...` format

GeoProof uses Mysten’s `decodeSuiPrivateKey()` (TypeScript SDK) which expects the bech32 format that starts with `suiprivkey`.

```bash
sui keytool export --key-identity $(sui client active-address)
```

Create `geoproof/.env.local`:

```env
SUI_NETWORK=testnet
SUI_PRIVATE_KEY=<YOUR_SUI_PRIVATE_KEY_IN_BECH32_FORMAT>
GEOPROOF_PACKAGE_ID=

WALRUS_UPLOAD_RELAY_HOST=https://upload-relay.testnet.walrus.space
WALRUS_EPOCHS=3

NOMINATIM_CONTACT=youremail@example.com
```

Notes:
- `.env.local` is ignored by git (see `geoproof/.gitignore`).
- Set a real `NOMINATIM_CONTACT` to comply with Nominatim usage policy.

Additional notes:
- If `sui client faucet` prints a web URL instead of dispensing coins, use that URL (this is expected behavior on some CLI/network setups and is documented by Sui).
- You must have enough Testnet SUI for both Move publish and later “Publish to Walrus + Sui” from the app.

## 3) Publish the Move package (to get `GEOPROOF_PACKAGE_ID`)

```bash
cd geoproof/move/geoproof_move
sui move build
sui client publish --gas-budget 200000000
```

Copy the published `packageId` from the output into `GEOPROOF_PACKAGE_ID` in `geoproof/.env.local`.

## 4) Use Publish in the UI

1. Generate a Wayback diff (recommended)
2. Click **Publish to Walrus + Sui**

If publish fails, the response includes a hint (most commonly: faucet funds missing).
