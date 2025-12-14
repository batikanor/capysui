module geoproof_move::geoproof_move {
  use sui::object::{Self, UID};
  use sui::transfer;
  use sui::tx_context::{Self, TxContext};

  /// Off-chain, the Walrus blob contains a JSON bundle (report draft + rendered artifacts).
  /// On-chain we only anchor a compact pointer + digest.
  public struct ChangeReport has key, store {
    id: UID,
    created_at_ms: u64,

    /// JSON-encoded bbox (e.g. "[minLng,minLat,maxLng,maxLat]")
    bbox_json: vector<u8>,
    start_date: vector<u8>,
    end_date: vector<u8>,

    /// e.g. "wayback" | "sentinel-2-l2a" | "landsat-c2-l2"
    source: vector<u8>,
    /// e.g. "closest" | "clearest" (Wayback uses closest)
    variant: vector<u8>,

    /// Walrus blob id string bytes.
    walrus_blob_id: vector<u8>,
    /// SHA-256 hex string bytes (computed over a stable JSON representation of the report draft).
    report_sha256_hex: vector<u8>,
  }

  public entry fun create_report(
    created_at_ms: u64,
    bbox_json: vector<u8>,
    start_date: vector<u8>,
    end_date: vector<u8>,
    source: vector<u8>,
    variant: vector<u8>,
    walrus_blob_id: vector<u8>,
    report_sha256_hex: vector<u8>,
    ctx: &mut TxContext,
  ) {
    let report = ChangeReport {
      id: object::new(ctx),
      created_at_ms,
      bbox_json,
      start_date,
      end_date,
      source,
      variant,
      walrus_blob_id,
      report_sha256_hex,
    };
    transfer::public_transfer(report, tx_context::sender(ctx));
  }
}


