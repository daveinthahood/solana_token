import { Keypair, Connection, PublicKey } from "@solana/web3.js";

import { transfer, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";

import wallet from "./file.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const conn = new Connection("https://api.devnet.solana.com", "confirmed");
const mint = new PublicKey("HF9hw5yPB82Qg5fcaHDxC24tKUnvcBke3TY6TaymowQ3");
const fromAta = new PublicKey("3oEeEHvWka4SGWCADGyDEMHR7cFcJWuty1idobKatJNg");

const to = Keypair.generate();

(async () => {

    const tokenAcc = await getOrCreateAssociatedTokenAccount(
        conn, 
        keypair, 
        mint,
        to.publicKey
    );

    const toAta = tokenAcc.address;
    console.log("Associated:", toAta.toBase58());

    const amountToAta = tokenAcc.amount;
    console.log("Amount", amountToAta.toString());

    const amount = 10e5;

    await transfer( 
        conn, 
        keypair,
        fromAta,
        toAta,
        keypair,
        amount
    )
    
   console.log(amount, fromAta.toBase58(), toAta.toBase58());
    
})()
