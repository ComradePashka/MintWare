// #![allow(clippy::result_large_err)]
pub use anchor_lang::prelude::*;

use anchor_lang::solana_program::entrypoint::ProgramResult;
use anchor_spl::token::{Token, TokenAccount};
pub mod instructions;
pub mod errors;
pub mod state;
pub mod constants;

use instructions::*;
//use instructions::CreateProject;

declare_id!("HCikGfj5AnDHFU6uN5XHuUmNuAqFVexNksaEYh6SzJVv" );

#[program]
pub mod mintware {

//TODO: cleanup afer testing
    use anchor_lang::solana_program::program::invoke;
    use anchor_spl::token::spl_token;
    use super::*;

    pub fn project_init(ctx: Context<ProjectInit>, name: String, description: String, reward_percent: u8, amount: u64) -> Result<()> {
        project::project_init(ctx, name, description, reward_percent, amount)
    }

    pub fn project_close(ctx: Context<ProjectClose>) -> Result<()> {
        project::project_close(ctx)
    }

    // pub fn project_init(ctx: Context<ProjectInit>, name: String, description: String, reward_percent: u8, amount:u64) -> Result<()> {
    //     project::project_init(ctx, name, description, reward_percent, amount)
    // }

    pub fn fund(ctx: Context<Fund>, amount: u64) -> ProgramResult {
//        let _rewards = &mut ctx.accounts.rewards;
        let token_program = ctx.accounts.token_program.to_account_info();
        let sender_ata = ctx.accounts.sender_ata.to_account_info();
        let rewards_ata = ctx.accounts.rewards_ata.to_account_info();
        let sender = ctx.accounts.sender.clone();

        let ix = spl_token::instruction::transfer(
            token_program.key,
            sender_ata.key,
            rewards_ata.key,
            &sender.key,
            &[],
            amount,
        )?;

        let _ = invoke(
            &ix,
            &[
                sender_ata,
                rewards_ata,
                sender.to_account_info(),
                token_program,
            ],
        );

        Ok(())
    }
}

// #[derive(Accounts)]
// pub struct Create<'info> {
//     #[account(init, payer = user, space = 9000, seeds = [b"REWARDS".as_ref(), user.key().as_ref()], bump)]
//     pub rewards: Account<'info, Rewards>,
//     #[account(mut)]
//     pub user: Signer<'info>,
//     pub system_program: Program<'info, System>,
//     pub token_program: Program<'info, Token>,
// }

#[derive(Accounts )]
pub struct Fund<'info> {
    pub sender: Signer<'info>,
    // #[account(mut)]
    // pub rewards: Account<'info, Rewards>,
    #[account(mut)]
    pub sender_ata: Account<'info, TokenAccount>,
    #[account(mut)]
    pub rewards_ata: Account<'info, TokenAccount>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
}
