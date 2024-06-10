// generazione delle chiavi 

import { Keypair } from "@solana/web3.js";


const keypair = Keypair.generate();
console.log("Hai generato il wallet");
console.log("Public:", keypair.publicKey.toBase58());
console.log("Private:", keypair.secretKey.toString());

