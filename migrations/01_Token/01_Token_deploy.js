const {ethers} = require('hardhat');
const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const ERC20FixedSupply_deploy = require('@animoca/ethereum-migrations/src/templates/token/ERC20/ERC20FixedSupply_deploy');

async function getAllocations(hre) {
  const namedAccounts = await hre.getNamedAccounts();

  const mainnetAllocations = [
    {name: 'Token_poolA', address: namedAccounts.Token_poolA, amount: '1000000000'},
    {name: 'Token_poolB', address: namedAccounts.Token_poolB, amount: '1000000000'},
    {name: 'Token_poolC', address: namedAccounts.Token_poolC, amount: '1000000000'},
  ];

  const testnetAllocations = [
    {name: 'Deployer', address: namedAccounts.deployer, amount: '1000000000'},
    ...[...hre.namedGroups.QATeam].map((wallet) => {
      return {name: 'QAWallet', address: wallet, amount: '50000000'};
    }),
  ];

  const allocations = hre.network.tags.production ? mainnetAllocations : testnetAllocations;
  return allocations;
}

module.exports = ERC20FixedSupply_deploy(
  'Token',
  'Token',
  'TOK',
  18,
  async (hre) => (await getAllocations(hre)).map((allocation) => allocation.address),
  async (hre) => (await getAllocations(hre)).map((allocation) => ethers.parseEther(allocation.amount)),
);

module.exports.skip = skipChainTypesExceptFor('ethereum');
