const {ethers} = require('hardhat');
const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {mainnetDeploymentName, tokenName, tokenSymbol, tokenDecimals} = require('../../src/constants/Token');
const ERC20FixedSupply_deploy = require('@animoca/ethereum-migrations/src/templates/token/ERC20/ERC20FixedSupply_deploy');

async function getAllocations(hre) {
  const namedAccounts = await hre.getNamedAccounts();

  return hre.network.tags.production
    ? [
        {name: 'Token_poolA', address: namedAccounts.Token_poolA, amount: '1000000000'},
        {name: 'Token_poolB', address: namedAccounts.Token_poolB, amount: '1000000000'},
        {name: 'Token_poolC', address: namedAccounts.Token_poolC, amount: '1000000000'},
      ]
    : [
        {name: 'Deployer', address: namedAccounts.deployer, amount: '1000000000'},
        ...[...hre.namedGroups.QATeam].map((wallet) => {
          return {name: 'QAWallet', address: wallet, amount: '50000000'};
        }),
      ];
}

module.exports = ERC20FixedSupply_deploy(
  mainnetDeploymentName,
  tokenName,
  tokenSymbol,
  tokenDecimals,
  async (hre) => (await getAllocations(hre)).map((allocation) => allocation.address),
  async (hre) => (await getAllocations(hre)).map((allocation) => ethers.parseEther(allocation.amount)),
);

module.exports.skip = skipChainTypesExceptFor('ethereum');
