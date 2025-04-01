const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getContractAddress} = require('@animoca/ethereum-migrations/src/helpers/templates');
const {mainnetDeploymentName} = require('../../src/constants/MintableToken');
const AccessControl_grantRole = require('@animoca/ethereum-migrations/src/templates/access/AccessControl/grantRole');

module.exports = AccessControl_grantRole(mainnetDeploymentName, 'MINTER', getContractAddress('FxERC20MintBurnRootTunnel@2.0'));
module.exports.skip = skipChainTypesExceptFor('ethereum');
module.exports.dependencies = ['FxERC20MintBurnRootTunnel@2.0_deploy'];
module.exports.tags = [mainnetDeploymentName];
