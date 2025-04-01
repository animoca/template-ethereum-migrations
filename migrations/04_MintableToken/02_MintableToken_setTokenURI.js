const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {mainnetDeploymentName, tokenURI} = require('../../src/constants/MintableToken');
const ERC20_setTokenURI = require('@animoca/ethereum-migrations/src/templates/token/ERC20/ERC20_setTokenURI');

module.exports = ERC20_setTokenURI(mainnetDeploymentName, tokenURI);
module.exports.skip = skipChainTypesExceptFor('ethereum');
