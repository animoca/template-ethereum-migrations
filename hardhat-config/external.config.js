module.exports = {
  external: {
    contracts: [
      {
        artifacts: ['node_modules/@animoca/ethereum-contracts-4.1/artifacts', 'node_modules/@animoca/ethereum-contracts-bridging-2.0/artifacts'],
        deploy: 'node_modules/@animoca/ethereum-migrations/migrations',
      },
      {
        artifacts: ['node_modules/@animoca/template-ethereum-contracts-1.0/artifacts'],
      },
    ],
    deployments: {
      hardhat: ['node_modules/@animoca/ethereum-migrations/deployments/all'],
      localhost: ['node_modules/@animoca/ethereum-migrations/deployments/all'],
      mainnet: ['node_modules/@animoca/ethereum-migrations/deployments/mainnet', 'node_modules/@animoca/ethereum-migrations/deployments/all'],
      goerli: ['node_modules/@animoca/ethereum-migrations/deployments/goerli', 'node_modules/@animoca/ethereum-migrations/deployments/all'],
      matic: ['node_modules/@animoca/ethereum-migrations/deployments/matic', 'node_modules/@animoca/ethereum-migrations/deployments/all'],
      mumbai: ['node_modules/@animoca/ethereum-migrations/deployments/mumbai', 'node_modules/@animoca/ethereum-migrations/deployments/all'],
    },
  },
};
