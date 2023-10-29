const {skipNetworksNotTagged} = require('@animoca/ethereum-migrations/src/helpers/common');
const ERC20MintBurn_deploy = require('@animoca/ethereum-migrations/src/templates/token/ERC20/ERC20MintBurn_deploy');

module.exports = ERC20MintBurn_deploy('PolygonMintableToken', 'Polygon MintableToken', 'pMTOK', 18);

// Only for local dev, since the mapping behavior is not emulated
module.exports.skip = skipNetworksNotTagged('dev');
