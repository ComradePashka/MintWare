/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/mintware.json`.
 */
export type Mintware = {
  "address": "HCikGfj5AnDHFU6uN5XHuUmNuAqFVexNksaEYh6SzJVv",
  "metadata": {
    "name": "mintware",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "fund",
      "discriminator": [
        218,
        188,
        111,
        221,
        152,
        113,
        174,
        7
      ],
      "accounts": [
        {
          "name": "sender",
          "signer": true
        },
        {
          "name": "senderAta",
          "writable": true
        },
        {
          "name": "rewardsAta",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "projectClose",
      "discriminator": [
        40,
        179,
        102,
        74,
        77,
        53,
        140,
        6
      ],
      "accounts": [
        {
          "name": "project",
          "writable": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "projectInit",
      "discriminator": [
        168,
        255,
        1,
        195,
        140,
        64,
        219,
        220
      ],
      "accounts": [
        {
          "name": "project",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  106,
                  101,
                  99,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "poolAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "project"
              }
            ]
          }
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "signerAta",
          "writable": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "rewardPercent",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "project",
      "discriminator": [
        205,
        168,
        189,
        202,
        181,
        247,
        142,
        19
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "rewardOutOfRange",
      "msg": "Reward out of range"
    },
    {
      "code": 6001,
      "name": "wrongAuthority",
      "msg": "Wrong Authority"
    }
  ],
  "types": [
    {
      "name": "project",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "tokenMint",
            "type": "pubkey"
          },
          {
            "name": "rewardPercent",
            "type": "u8"
          }
        ]
      }
    }
  ]
};
