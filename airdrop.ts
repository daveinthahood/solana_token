import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from "./file.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//creo la connessione
const conn = new Connection("https://api.devnet.solana.com", "finalized");


// creiamo l'airdrop 

(async () => {
    try {
        const airdropSign = await conn.requestAirdrop(
            keypair.publicKey,
            1 * LAMPORTS_PER_SOL
        )
        console.log("Airdrop Eseguito", airdropSign);
        
    } catch (error) {
        console.error(error);
        
    }
})();