const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getNamedAccount} = require('@animoca/ethereum-migrations/src/helpers/templates');
const AccessControl_grantRole = require('@animoca/ethereum-migrations/src/templates/access/AccessControl/grantRole');

module.exports = AccessControl_grantRole('PolygonMintableTokenSealedAirdrop', 'SEALER', getNamedAccount('deployer'));
module.exports.skip = skipChainTypesExceptFor('polygon');
module.exports.tags = ['PolygonMintableTokenSealedAirdrop'];
