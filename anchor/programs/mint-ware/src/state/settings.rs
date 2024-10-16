use anchor_lang::prelude::*;


#[account]
pub struct Settings {
    pub min_reward_percent: u8,
    pub max_reward_percent: u8,
    pub reward_authority: Pubkey
}

impl Settings {

    //TODO: add any extra implementations here

    // pub fn on_tree_chopped(&mut self, amount_chopped: u64) -> Result<()> {
    //     match self.total_wood_collected.checked_add(amount_chopped) {
    //         Some(v) => {
    //             if self.total_wood_collected >= MAX_WOOD_PER_TREE {
    //                 self.total_wood_collected = 0;
    //                 msg!("Tree successfully chopped. New Tree coming up.");
    //             } else {
    //                 self.total_wood_collected = v;
    //                 msg!("Total wood chopped: {}", v);
    //             }
    //         }
    //         None => {
    //             msg!("The ever tree is completly chopped!");
    //         }
    //     };

    //     Ok(())
    // }
}
