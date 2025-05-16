// deploy_metadata.js

const fs = require("fs");
const {
  Connection,
  Keypair,
  PublicKey,
  Transaction,
  sendAndConfirmTransaction,
  clusterApiUrl,
} = require("@solana/web3.js");
const {
  createCreateMetadataAccountV2Instruction,
  PROGRAM_ID: TOKEN_METADATA_PROGRAM_ID,
} = require("@metaplex-foundation/mpl-token-metadata");

(async () => {
  // 1) Connect to Mainnet-Beta
  const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");

  // 2) Load your payer keypair (exported keypair.json from Phantom)
  const secret = Uint8Array.from(
    JSON.parse(fs.readFileSync("keypair.json", "utf8"))
  );
  const payer = Keypair.fromSecretKey(secret);

  // 3) Specify your mint address
  const mintPubkey = new PublicKey("A8qUVSby4bXU9DpCkL7n6sr4HiwMRQp5xnSXP3uEiQ14"); 

  // 4) Derive the metadata PDA
  const [metadataPDA] = await PublicKey.findProgramAddress(
    [
      Buffer.from("metadata"),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      mintPubkey.toBuffer(),
    ],
    TOKEN_METADATA_PROGRAM_ID
  );

  // 5) Define your off-chain JSON URI
  const uri = "https://pinuspintar.id/pinus.json";

  // 6) Prepare the metadata payload
  const data = {
    name: "PinusToken",
    symbol: "PNT",
    uri,                         // must point to your JSON metadata
    sellerFeeBasisPoints: 0,    // royalties; set to 0 if none
    creators: null,
    collection: null,
    uses: null,
  };

  // 7) Build the Metaplex instruction
  const ix = createCreateMetadataAccountV2Instruction(
    {
      metadata: metadataPDA,
      mint: mintPubkey,
      mintAuthority: payer.publicKey,
      payer: payer.publicKey,
      updateAuthority: payer.publicKey,
    },
    {
      createMetadataAccountArgsV2: {
        data,
        isMutable: false,
      },
    }
  );

  // 8) Send the transaction
  const tx = new Transaction().add(ix);
  const txid = await sendAndConfirmTransaction(connection, tx, [payer]);
  console.log("✅ Metadata created:", txid);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
