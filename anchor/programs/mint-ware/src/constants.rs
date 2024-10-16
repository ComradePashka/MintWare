use anchor_lang::prelude::{pubkey, Pubkey};

pub const SETTINGS_PDA_SEED: &[u8] = b"settings";
pub const PROJECT_PDA_SEED: &[u8] = b"project";
pub const POOL_PDA_SEED: &[u8] = b"pool";

pub const FALLBACK_REWARD_AUTHORITY: Pubkey = pubkey!("7ZVEnYAR5KHNAhERDGnmuVLSUid4Dq3mCqMecAdXP4UY");
pub const DEV_USDCOIN_MINT: Pubkey = pubkey!("GrNg1XM2ctzeE2mXxXCfhcTUbejM8Z4z4wNVTy2FjMEz");

pub const MAX_ENERGY: u64 = 100;
// pub const MAX_WOOD_PER_TREE: u64 = 100000;
