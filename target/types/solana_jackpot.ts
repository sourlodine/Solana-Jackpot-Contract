export type SolanaJackpot = {
  "version": "0.1.0",
  "name": "solana_jackpot",
  "instructions": [
    {
      "name": "initializeBet",
      "accounts": [
        {
          "name": "bet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultPdaAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "betid",
          "type": "u64"
        }
      ]
    },
    {
      "name": "placeBet",
      "accounts": [
        {
          "name": "bettor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultPdaAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "betAmount",
          "type": "u64"
        },
        {
          "name": "betPosition",
          "type": "u8"
        }
      ]
    },
    {
      "name": "declareResult",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "bet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimRewards",
      "accounts": [
        {
          "name": "bettor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultPdaAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "betAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "betId",
            "type": "u64"
          },
          {
            "name": "betResult",
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "bettorGuess",
            "type": {
              "vec": {
                "option": "u8"
              }
            }
          },
          {
            "name": "bettorList",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "bettorListAmount",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "timestamp",
            "type": "i64"
          },
          {
            "name": "vaultPda",
            "type": "publicKey"
          },
          {
            "name": "totalBetAmount",
            "type": "u64"
          },
          {
            "name": "totalAmountBetOnCorrect",
            "type": "u64"
          },
          {
            "name": "activeStatus",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "betVaultAccount",
      "type": {
        "kind": "struct",
        "fields": []
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "BetLimitFull",
      "msg": "The bet limit for number of users is reached"
    },
    {
      "code": 6001,
      "name": "InvalidBet",
      "msg": "Invalid Bet"
    }
  ]
};

export const IDL: SolanaJackpot = {
  "version": "0.1.0",
  "name": "solana_jackpot",
  "instructions": [
    {
      "name": "initializeBet",
      "accounts": [
        {
          "name": "bet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultPdaAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "betid",
          "type": "u64"
        }
      ]
    },
    {
      "name": "placeBet",
      "accounts": [
        {
          "name": "bettor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultPdaAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "betAmount",
          "type": "u64"
        },
        {
          "name": "betPosition",
          "type": "u8"
        }
      ]
    },
    {
      "name": "declareResult",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "bet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimRewards",
      "accounts": [
        {
          "name": "bettor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultPdaAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "betAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "betId",
            "type": "u64"
          },
          {
            "name": "betResult",
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "bettorGuess",
            "type": {
              "vec": {
                "option": "u8"
              }
            }
          },
          {
            "name": "bettorList",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "bettorListAmount",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "timestamp",
            "type": "i64"
          },
          {
            "name": "vaultPda",
            "type": "publicKey"
          },
          {
            "name": "totalBetAmount",
            "type": "u64"
          },
          {
            "name": "totalAmountBetOnCorrect",
            "type": "u64"
          },
          {
            "name": "activeStatus",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "betVaultAccount",
      "type": {
        "kind": "struct",
        "fields": []
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "BetLimitFull",
      "msg": "The bet limit for number of users is reached"
    },
    {
      "code": 6001,
      "name": "InvalidBet",
      "msg": "Invalid Bet"
    }
  ]
};
