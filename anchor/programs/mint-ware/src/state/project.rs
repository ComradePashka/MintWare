use anchor_lang::prelude::*;

// `id` INTEGER NOT NULL AUTO_INCREMENT,
// `authority` VARCHAR(64) NOT NULL,
// `name` VARCHAR(64) NOT NULL,
// `description` VARCHAR(128) NOT NULL,
// `token_mint` VARCHAR(64) NOT NULL,
// `reward_percent` TINYINT NOT NULL DEFAULT 5,
// `tx` VARCHAR(128) NOT NULL,
// `tx_confirmed_at` TIMESTAMP(0) NULL,


#[account]
#[derive(InitSpace, Debug)]
pub struct Project {
    pub authority: Pubkey, // 32

    #[max_len(64)]
    pub name: String,

    #[max_len(128)]
    pub description: String,

    pub token_mint: Pubkey, //32
    // pub pool_ata: Pubkey,
    // pub signer_ata: Pubkey,
    pub reward_percent: u8
    // pub last_login: i64,

    // 32 + 64 + 128 + 32 + 1 = 257 
}

impl Project {
    pub fn print(&mut self) -> Result<()> {
        // Note that logging costs a lot of compute. So don't use it too much.
        msg!(
            "Authority: {} Name: {} Description: {}",
            self.authority,
            self.name,
            self.description
        );
        Ok(())
    }

    // Examples from game project

    // pub fn update_energy(&mut self) -> Result<()> {
    //     // Get the current timestamp
    //     let current_timestamp = Clock::get()?.unix_timestamp;

    //     // Calculate the time passed since the last login
    //     let mut time_passed: i64 = current_timestamp - self.last_login;

    //     // Calculate the time spent refilling energy
    //     let mut time_spent = 0;

    //     while time_passed >= TIME_TO_REFILL_ENERGY && self.energy < MAX_ENERGY {
    //         self.energy += 1;
    //         time_passed -= TIME_TO_REFILL_ENERGY;
    //         time_spent += TIME_TO_REFILL_ENERGY;
    //     }

    //     if self.energy >= MAX_ENERGY {
    //         self.last_login = current_timestamp;
    //     } else {
    //         self.last_login += time_spent;
    //     }

    //     Ok(())
    // }

    // pub fn chop_tree(&mut self, amount: u64) -> Result<()> {
    //     match self.wood.checked_add(amount) {
    //         Some(v) => {
    //             self.wood = v;
    //         }
    //         None => {
    //             msg!("Total wood reached!");
    //         }
    //     };
    //     match self.energy.checked_sub(amount) {
    //         Some(v) => {
    //             self.energy = v;
    //         }
    //         None => {
    //             self.energy = 0;
    //         }
    //     };
    //     Ok(())
    // }
}
