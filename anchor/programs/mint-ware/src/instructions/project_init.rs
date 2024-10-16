use crate::constants::{PROJECT_PDA_SEED, SETTINGS_PDA_SEED, POOL_PDA_SEED};

use crate::state::project::Project;
use crate::state::settings::Settings;
use anchor_lang::prelude::*;
use anchor_spl::token::{Mint, Token, TokenAccount, Transfer};


pub fn project_init(ctx: Context<ProjectInit>, name: String, description: String, reward_percent: u8, amount: u64) -> Result<()> {

    let project = &mut ctx.accounts.project;
    project.authority = ctx.accounts.signer.key();
    project.name = name.clone();
    project.description = description;
    project.token_mint = ctx.accounts.token_mint.key();
    project.reward_percent = reward_percent;

    msg!("Initialized new Project '{}' with reward {}", name, reward_percent);

    let inner = vec![
        PROJECT_PDA_SEED,
        ctx.accounts.signer.key.as_ref(),
        project.token_mint.as_ref()
    ];
    let outer = vec![inner.as_slice()];

    let transfer_instruction = Transfer{
        from: ctx.accounts.signer_ata.to_account_info(),
        to: ctx.accounts.pool_ata.to_account_info(),
        authority: ctx.accounts.signer.to_account_info(),
    };
    let cpi_ctx = CpiContext::new_with_signer(
        ctx.accounts.token_program.to_account_info(),
        transfer_instruction,
        outer.as_slice(),
    );

    // The `?` at the end will cause the function to return early in case of an error.
    anchor_spl::token::transfer(cpi_ctx, amount)?;

    Ok(())
}

#[derive(Accounts)]
pub struct ProjectInit<'info> {
    #[account(
        init,
        payer = signer,
        space = 1000, // 8 + ? //TODO: set size using https://docs.rs/anchor-lang/latest/anchor_lang/derive.InitSpace.html
        seeds = [PROJECT_PDA_SEED, signer.key().as_ref(), token_mint.key().as_ref()],
        bump,
    )]
    pub project: Account<'info, Project>,

    //TODO: find global init or workaround with CPI?
    #[account(
        init_if_needed,
        payer = signer,
        space = 56, // 8 + (8 + 8) . +32 Pubkey for reward_auth
        seeds = [SETTINGS_PDA_SEED],
        bump,
    )]
    pub settings: Account<'info, Settings>,

    #[account(
        init,
        payer = signer,
        seeds=[POOL_PDA_SEED, project.key().as_ref()],
        bump,
        token::mint=token_mint, //TODO: decide if ATA is really required?
        token::authority=project,
    )]
    pub pool_ata: Account<'info, TokenAccount>,

    pub token_mint: Account<'info, Mint>,

    #[account(
        mut,
        constraint=signer_ata.owner == signer.key(),
        constraint=signer_ata.mint == token_mint.key()
    )]
    signer_ata: Account<'info, TokenAccount>,

    #[account(mut)]
    pub signer: Signer<'info>,
    
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
}
