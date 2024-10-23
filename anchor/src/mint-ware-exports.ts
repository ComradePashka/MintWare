// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor';
import { Cluster, PublicKey, Signer } from '@solana/web3.js';
import MintWareIDL from '../target/idl/mintware.json';
import type { Mintware } from '../target/types/mintware';


//TODO: findout if it's possible to export constants.rs from Anchor?
//TODO: change to project wide ENV VARS?
export const SETTINGS_PDA_SEED = "settings";
export const PROJECT_PDA_SEED = "project";
export const POOL_PDA_SEED = "pool";

export const FALLBACK_REWARD_AUTHORITY: PublicKey = new PublicKey("7ZVEnYAR5KHNAhERDGnmuVLSUid4Dq3mCqMecAdXP4UY");

//TODO: DO NOI MESS UP!
//
// USD Coin: 4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU
// Mint authority: GrNg1XM2ctzeE2mXxXCfhcTUbejM8Z4z4wNVTy2FjMEz
//
// USD Coin Dev: Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr (both address and Mint authority)
//

export const DEV_USDCOIN_MINT: PublicKey = new PublicKey("Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr");


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

export const [settingsPDA] = PublicKey.findProgramAddressSync(
  [Buffer.from(SETTINGS_PDA_SEED, "utf8")],
  MINT_WARE_PROGRAM_ID
)


export function getProjectPDA(owner: PublicKey, token_mint: PublicKey) {
  const [projectPDA] = PublicKey.findProgramAddressSync(
    [
      Buffer.from(PROJECT_PDA_SEED, "utf8"),
      owner.toBuffer(),
      token_mint.toBuffer()
    ],
    MINT_WARE_PROGRAM_ID
  )
  return projectPDA
}


export function getProjectATA(owner: PublicKey, token_mint: PublicKey) {
  const [projectATA] = PublicKey.findProgramAddressSync(
    [
      Buffer.from(POOL_PDA_SEED, "utf8"),
      getProjectPDA(owner, token_mint).toBuffer(),
    ],
    MINT_WARE_PROGRAM_ID
  )
  return projectATA
}
