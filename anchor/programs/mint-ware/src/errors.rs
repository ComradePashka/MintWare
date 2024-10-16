use anchor_lang::error_code;

#[error_code]
pub enum SettingsErrorCode {
    #[msg("ivalid range")]
    InvalidRange,
    #[msg("Wrong Authority")]
    WrongAuthority,
}

#[error_code]
pub enum ProjectErrorCode {
    #[msg("Reward out of range")]
    RewardOutOfRange,
    #[msg("Wrong Authority")]
    WrongAuthority,
}
