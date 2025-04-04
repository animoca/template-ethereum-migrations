const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getNamedAccount} = require('@animoca/ethereum-migrations/src/helpers/templates');
const setRoyaltyReceiver = require('@animoca/ethereum-migrations/src/templates/token/royalty/ERC2981/setRoyaltyReceiver');

module.exports = setRoyaltyReceiver('MultiToken', getNamedAccount('MultiToken_royaltyReceiver'));
module.exports.skip = skipChainTypesExceptFor('arb1');
