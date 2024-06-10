import { Keypair, Connection } from "@solana/web3.js";

import { createMint } from "@solana/spl-token";
import wallet from "./file.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const conn = new Connection("https://api.devnet.solana.com", "confirmed");

(async () => {

    const mint = await createMint(
        conn,
        keypair,
        keypair.publicKey,
        null,
        6
    );

    console.log("Mint Address:", mint.toBase58());
    
})()