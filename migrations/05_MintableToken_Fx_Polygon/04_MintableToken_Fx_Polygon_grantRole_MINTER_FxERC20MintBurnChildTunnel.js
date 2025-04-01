const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getContractAddress} = require('@animoca/ethereum-migrations/src/helpers/templates');
const {mainnetDeploymentName, polygonDeploymentName} = require('../../src/constants/MintableToken');
const AccessControl_grantRole = require('@animoca/ethereum-migrations/src/templates/access/AccessControl/grantRole');

module.exports = AccessControl_grantRole(polygonDeploymentName, 'MINTER', getContractAddress('FxERC20MintBurnChildTunnel@2.0'));
module.exports.skip = skipChainTypesExceptFor('polygon');
module.exports.dependencies = [`FxERC20MintBurnChildTunnel@2.0_mapToken_${mainnetDeploymentName}`];
module.exports.tags = [polygonDeploymentName];
