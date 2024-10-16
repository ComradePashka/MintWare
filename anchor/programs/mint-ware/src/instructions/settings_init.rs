use anchor_lang::prelude::*;

use crate::{constants::{FALLBACK_REWARD_AUTHORITY, SETTINGS_PDA_SEED}, errors::SettingsErrorCode, state::settings::Settings};

pub fn settings_init(ctx: Context<SettingsInit>, new_min_reward_percent: u8, new_max_reward_percent: u8) -> Result<()> {

    if new_min_reward_percent > new_max_reward_percent {
        return err!(SettingsErrorCode::InvalidRange);
    }
    
    let settings = &mut ctx.accounts.settings;
    settings.min_reward_percent = new_min_reward_percent;
    settings.max_reward_percent = new_max_reward_percent;
    settings.reward_authority = FALLBACK_REWARD_AUTHORITY;

    msg!(
        "Global settings are: MIN {} MAX {}", new_min_reward_percent, new_max_reward_percent
    );
    Ok(())
}

#[derive(Accounts)] //, Session
pub struct SettingsInit<'info> {
    #[account(
        init_if_needed,
        payer = signer,
        space = 1000, // 8 + 8 for anchor account discriminator and the u64. Using 1000 to have space to expand easily.
        seeds = [SETTINGS_PDA_SEED],
        bump,
    )]
    pub settings: Account<'info, Settings>,

    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}
