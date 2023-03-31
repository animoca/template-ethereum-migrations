const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getContractAddress} = require('@animoca/ethereum-migrations/src/helpers/templates');
const Contract_deploy = require('@animoca/ethereum-migrations/src/templates/Contract/deploy');

module.exports = Contract_deploy('PolygonMintableTokenSealedAirdrop', {
  contract: 'SealedExecutor',
  args: [{name: 'ForwarderRegistry', value: getContractAddress('ForwarderRegistry@1.0')}],
});
module.exports.skip = skipChainTypesExceptFor('polygon');
module.exports.dependencies = ['ForwarderRegistry@1.0_deploy'];
