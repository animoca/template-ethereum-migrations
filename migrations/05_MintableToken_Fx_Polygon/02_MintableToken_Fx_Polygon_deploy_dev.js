const {skipNetworksNotTagged} = require('@animoca/ethereum-migrations/src/helpers/common');
const {polygonDeploymentName, tokenName, tokenSymbol, tokenDecimals} = require('../../src/constants/MintableToken');
const ERC20MintBurn_deploy = require('@animoca/ethereum-migrations/src/templates/token/ERC20/ERC20MintBurn_deploy');

module.exports = ERC20MintBurn_deploy(polygonDeploymentName, tokenName, tokenSymbol, tokenDecimals);

// Only for local dev, since the mapping behavior is not emulated
module.exports.skip = skipNetworksNotTagged('dev');
