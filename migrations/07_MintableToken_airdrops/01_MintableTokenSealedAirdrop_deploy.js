const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getContractAddress} = require('@animoca/ethereum-migrations/src/helpers/templates');
const Contract_deploy = require('@animoca/ethereum-migrations/src/templates/Contract/deploy');

module.exports = Contract_deploy('MintableTokenSealedAirdrop', {
  contract: 'SealedExecutor',
  args: [{name: 'ForwarderRegistry', value: getContractAddress('ForwarderRegistry@4.1')}],
});
module.exports.skip = skipChainTypesExceptFor('ethereum');
module.exports.dependencies = ['ForwarderRegistry@4.1_deploy'];
