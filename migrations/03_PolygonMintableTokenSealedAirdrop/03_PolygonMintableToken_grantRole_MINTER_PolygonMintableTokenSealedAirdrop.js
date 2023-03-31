const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getContractAddress} = require('@animoca/ethereum-migrations/src/helpers/templates');
const AccessControl_grantRole = require('@animoca/ethereum-migrations/src/templates/access/AccessControl/grantRole');

module.exports = AccessControl_grantRole('PolygonMintableToken', 'MINTER', getContractAddress('PolygonMintableTokenSealedAirdrop'));
module.exports.skip = skipChainTypesExceptFor('polygon');
module.exports.tags = ['PolygonMintableTokenSealedAirdrop', 'PolygonMintableToken_grantRole_MINTER_PolygonMintableTokenSealedAirdrop'];
