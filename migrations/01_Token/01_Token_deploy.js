const {utils} = require('ethers');
const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getContractAddress} = require('@animoca/ethereum-migrations/src/helpers/templates');
const Contract_deploy = require('@animoca/ethereum-migrations/src/templates/Contract/deploy');

const name = 'Token';
const symbol = 'TOK';
const decimals = 18;

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

module.exports = Contract_deploy('Token', {
  contract: 'Token',
  args: [
    {name: 'name', value: name},
    {name: 'symbol', value: symbol},
    {name: 'decimals', value: decimals},
    {name: 'holders', value: async (hre) => (await getAllocations(hre)).map((allocation) => allocation.address)},
    {name: 'amounts', value: async (hre) => (await getAllocations(hre)).map((allocation) => utils.parseEther(allocation.amount))},
    {name: 'ForwarderRegistry', value: getContractAddress('ForwarderRegistry@1.0')},
  ],
});
module.exports.skip = skipChainTypesExceptFor('ethereum');
