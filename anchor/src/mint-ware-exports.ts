// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor';
import { Cluster, PublicKey } from '@solana/web3.js';
import MintWareIDL from '../target/idl/mintware.json';
import type { Mintware } from '../target/types/mintware';

// Re-export the generated IDL and type
export { Mintware, MintWareIDL };

// The programId is imported from the program IDL.
export const MINT_WARE_PROGRAM_ID = new PublicKey(MintWareIDL.address);

// This is a helper function to get the MintWare Anchor program.
export function getMintWareProgram(provider: AnchorProvider) {
  return new Program(MintWareIDL as Mintware, provider);
}

// This is a helper function to get the program ID for the MintWare program depending on the cluster.
export function getMintWareProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
    case 'mainnet-beta':
    default:
      return MINT_WARE_PROGRAM_ID;
  }
}
