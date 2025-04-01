const {skipNetworksNotTagged} = require('@animoca/ethereum-migrations/src/helpers/common');
const {polygonDeploymentName, tokenURI} = require('../../src/constants/MintableToken');
const ERC20_setTokenURI = require('@animoca/ethereum-migrations/src/templates/token/ERC20/ERC20_setTokenURI');

module.exports = ERC20_setTokenURI(polygonDeploymentName, tokenURI);
// Only for local dev, since the mapping behavior is not emulated
module.exports.skip = skipNetworksNotTagged('dev');
