#![allow(clippy::result_large_err)]
use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;

declare_id!("3ELXEaKAsaA6yuEo9PwbVKSWZCaPjHcBpoXoDXndX4j3");

#[program]
pub mod mint_ware {
  use super::*;

  pub fn create(ctx: Context<Create>, name: String, description: String) -> ProgramResult {
    let rewards = &mut ctx.accounts.rewards;
    rewards.name = name;
    rewards.description = description;
    rewards.rewards_pool = 0;
    rewards.admin = *ctx.accounts.user.key;
    Ok(())
  }

  pub fn withdraw(ctx: Context<Withdraw>, amount: u64) -> ProgramResult {
    let rewards = &mut ctx.accounts.rewards;
    let user = &mut ctx.accounts.user;

    if rewards.admin != *user.key {
      return Err(ProgramError::IncorrectProgramId);
    }
    let rent_balance = Rent::get()?.minimum_balance(rewards.to_account_info().data_len());
    if **rewards.to_account_info().lamports.borrow() -rent_balance < amount {
      return Err(ProgramError::InsufficientFunds);
    }
    **rewards.to_account_info().try_borrow_mut_lamports()? -= amount;
    **user.to_account_info().try_borrow_mut_lamports()? += amount;

    Ok(())
  }

  pub fn fund(ctx: Context<Fund>, amount: u64) -> ProgramResult {
    let ix = anchor_lang::solana_program::system_instruction::transfer(
      &ctx.accounts.user.key(),
      &ctx.accounts.rewards.key(),
      amount
    );
    let _ = anchor_lang::solana_program::program::invoke(
      &ix,
      &[
        ctx.accounts.user.to_account_info(),
        ctx.accounts.rewards.to_account_info(),
      ]);
    (&mut ctx.accounts.rewards).rewards_pool += amount;
    Ok(())
  }
}

#[derive(Accounts)]
pub struct Create<'info> {
  #[account(init, payer = user, space = 9000, seeds = [b"REWARDS".as_ref(), user.key().as_ref()], bump)]
  pub rewards: Account<'info, Rewards>,
  #[account(mut)]
  pub user: Signer<'info>,
  pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Withdraw<'info> {
  #[account(mut)]
  pub rewards: Account<'info, Rewards>,
  #[account(mut)]
  pub user: Signer<'info>,
}

#[derive(Accounts)]
pub struct Fund<'info> {
  #[account(mut)]
  pub rewards: Account<'info, Rewards>,
  #[account(mut)]
  pub user: Signer<'info>,
  pub system_program: Program<'info, System>,
}

#[account]
pub struct Rewards {
  pub admin: Pubkey,
  pub name: String,
  pub description: String,
  pub rewards_pool: u64
}
