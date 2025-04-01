module.exports = {
  namedAccounts: {
    deployer: {
      default: 0,
    },

    owner: {
      default: 1,
    },

    // QA team
    QA1: {
      default: '0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead',
    },
    QA2: {
      default: '0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead',
    },
    QA3: {
      default: '0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead',
    },

    // Token
    Token_poolA: {
      default: '0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead',
    },
    Token_poolB: {
      default: '0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead',
    },
    Token_poolC: {
      default: '0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead',
    },

    // NFT
    NFT_royaltyReceiver: {
      default: 2,
    },

    // NFT
    MultiToken_royaltyReceiver: {
      default: 2,
    },
  },

  namedGroups: {
    QATeam: ['QA1', 'QA2', 'QA3'],
  },
};
