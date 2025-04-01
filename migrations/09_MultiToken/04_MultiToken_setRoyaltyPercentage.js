const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const setRoyaltyPercentage = require('@animoca/ethereum-migrations/src/templates/token/royalty/ERC2981/setRoyaltyPercentage');

const royaltyPercentage = 5;

module.exports = setRoyaltyPercentage('MultiToken', royaltyPercentage);
module.exports.skip = skipChainTypesExceptFor('arb1');
