#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("J8CDXq657QtTaSP7x7xeUPeuJd8Eta2icZzNx5p8BK4T");

#[program]
pub mod mint_ware {
    use super::*;

  pub fn close(_ctx: Context<CloseMintWare>) -> Result<()> {
    Ok(())
  }

  pub fn decrement(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.mint_ware.count = ctx.accounts.mint_ware.count.checked_sub(1).unwrap();
    Ok(())
  }

  pub fn increment(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.mint_ware.count = ctx.accounts.mint_ware.count.checked_add(1).unwrap();
    Ok(())
  }

  pub fn initialize(_ctx: Context<InitializeMintWare>) -> Result<()> {
    Ok(())
  }

  pub fn set(ctx: Context<Update>, value: u8) -> Result<()> {
    ctx.accounts.mint_ware.count = value.clone();
    Ok(())
  }
}

#[derive(Accounts)]
pub struct InitializeMintWare<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  init,
  space = 8 + MintWare::INIT_SPACE,
  payer = payer
  )]
  pub mint_ware: Account<'info, MintWare>,
  pub system_program: Program<'info, System>,
}
#[derive(Accounts)]
pub struct CloseMintWare<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  mut,
  close = payer, // close account and return lamports to payer
  )]
  pub mint_ware: Account<'info, MintWare>,
}

#[derive(Accounts)]
pub struct Update<'info> {
  #[account(mut)]
  pub mint_ware: Account<'info, MintWare>,
}

#[account]
#[derive(InitSpace)]
pub struct MintWare {
  count: u8,
}
