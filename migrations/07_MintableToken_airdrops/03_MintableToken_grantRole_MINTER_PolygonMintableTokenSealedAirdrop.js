const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getContractAddress} = require('@animoca/ethereum-migrations/src/helpers/templates');
const AccessControl_grantRole = require('@animoca/ethereum-migrations/src/templates/access/AccessControl/grantRole');

module.exports = AccessControl_grantRole('MintableToken', 'MINTER', getContractAddress('MintableTokenSealedAirdrop'));
module.exports.skip = skipChainTypesExceptFor('ethereum');
module.exports.tags = ['MintableTokenSealedAirdrop', 'MintableToken_grantRole_MINTER_MintableTokenSealedAirdrop'];
