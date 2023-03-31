const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getContractAddress} = require('@animoca/ethereum-migrations/src/helpers/templates');
const AccessControl_grantRole = require('@animoca/ethereum-migrations/src/templates/access/AccessControl/grantRole');

module.exports = AccessControl_grantRole('MintableToken', 'MINTER', getContractAddress('FxERC20MintBurnRootTunnel@0.3'));
module.exports.skip = skipChainTypesExceptFor('ethereum');
module.exports.dependencies = ['FxERC20MintBurnRootTunnel@0.3_deploy'];
module.exports.tags = ['MintableToken'];
