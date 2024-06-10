import { Keypair, Connection, PublicKey } from "@solana/web3.js";

import { mintTo, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";

import wallet from "./file.json"



const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const conn = new Connection("https://api.devnet.solana.com", "confirmed");
const mint = new PublicKey("HF9hw5yPB82Qg5fcaHDxC24tKUnvcBke3TY6TaymowQ3");

(async () => {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        conn,
        keypair,
        mint,
        keypair.publicKey,
    );

    const ata = tokenAccount.address;
    console.log("Associated Token Account:", ata.toBase58());

    const amount = 8e6;

    await mintTo(
        conn,
        keypair,
        mint,
        ata,
        keypair.publicKey,
        amount
    );

    console.log("Minted", amount, "to", ata.toBase58());
})()