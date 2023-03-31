const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getContractAddress} = require('@animoca/ethereum-migrations/src/helpers/templates');
const AccessControl_grantRole = require('@animoca/ethereum-migrations/src/templates/access/AccessControl/grantRole');

module.exports = AccessControl_grantRole('PolygonMintableToken', 'MINTER', getContractAddress('FxERC20MintBurnChildTunnel@0.3'));
module.exports.skip = skipChainTypesExceptFor('polygon');
module.exports.dependencies = ['FxERC20MintBurnChildTunnel@0.3_mapToken_MintableToken'];
module.exports.tags = ['MintableToken'];
