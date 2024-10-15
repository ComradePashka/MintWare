use crate::state::project_data::ProjectData;
use crate::state::settings_data::SettingsData;
use anchor_lang::prelude::*;
use anchor_spl::token::{Mint, Token, TokenAccount, Transfer};

pub fn init_project(ctx: Context<CreateProject>, name: String, description: String, reward_percent: u8, amount: u64) -> Result<()> {

    let project = &mut ctx.accounts.project;
    project.authority = ctx.accounts.signer.key();
    project.name = name.clone();
    project.description = description;
    project.token_mint = ctx.accounts.token_mint.key();
    project.reward_percent = reward_percent;

    msg!("Initialized new Project '{}' with reward {}", name, reward_percent);

    let inner = vec![
        b"project".as_ref(),
        ctx.accounts.signer.key.as_ref(),
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
pub struct CreateProject<'info> {
    #[account(
        init,
        payer = signer,
        space = 1000, // 8+32+x+1+8+8+8 But taking 1000 to have space to expand easily.
        seeds = [b"project".as_ref(), signer.key().as_ref()],
        bump,
    )]
    pub project: Account<'info, ProjectData>,

    #[account(
        init_if_needed,
        payer = signer,
        space = 1000, // 8 + 8 for anchor account discriminator and the u64. Using 1000 to have space to expand easily.
        seeds = [b"settings".as_ref()],
        bump,
    )]
    pub settings: Account<'info, SettingsData>,

    #[account(
        init,
        payer = signer,
        seeds=[b"pool".as_ref(), signer.key().as_ref(),],
        bump,
        token::mint=token_mint,
        token::authority=project,
    )]
    pool_ata: Account<'info, TokenAccount>,

    token_mint: Account<'info, Mint>, 

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
