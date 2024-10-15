use anchor_lang::prelude::*;

use crate::state::settings_data::SettingsData;

pub fn mintware_settings(ctx: Context<Settings>, new_min_reward_percent: u8, new_max_reward_percent: u8) -> Result<()> {
    // let account: &mut &mut ChopTree<'_> = &mut ctx.accounts;
    // account.player.update_energy()?;
    // account.player.print()?;

    // if account.player.energy < amount {
    //     return err!(GameErrorCode::NotEnoughEnergy);
    // }

    // account.player.last_id = counter;
    // account.player.chop_tree(amount)?;
    // account.game_data.on_tree_chopped(amount)?;

    ctx.accounts.settings.min_reward_percent = new_min_reward_percent;
    ctx.accounts.settings.max_reward_percent = new_max_reward_percent;

    msg!(
        "Global settings are: MIN {} MAX {}", new_min_reward_percent, new_max_reward_percent
    );
    Ok(())
}

#[derive(Accounts)] //, Session
pub struct Settings<'info> {
    #[account(
        init_if_needed,
        payer = signer,
        space = 1000, // 8 + 8 for anchor account discriminator and the u64. Using 1000 to have space to expand easily.
        seeds = [b"settings".as_ref()],
        bump,
    )]
    pub settings: Account<'info, SettingsData>,

    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}
