const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const ERC20_setTokenURI = require('@animoca/ethereum-migrations/src/templates/token/ERC20/setTokenURI');

const tokenURI = '';

module.exports = ERC20_setTokenURI('Token', tokenURI);
module.exports.skip = skipChainTypesExceptFor('ethereum');
