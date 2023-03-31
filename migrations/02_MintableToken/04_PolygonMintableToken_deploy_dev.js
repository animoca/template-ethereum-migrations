const {skipNetworksNotTagged} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getContractAddress} = require('@animoca/ethereum-migrations/src/helpers/templates');
const Contract_deploy = require('@animoca/ethereum-migrations/src/templates/Contract/deploy');

const name = 'Polygon MintableToken';
const symbol = 'pMTOK';
const decimals = 18;

module.exports = Contract_deploy('PolygonMintableToken', {
  contract: 'MintableToken',
  args: [
    {name: 'name', value: name},
    {name: 'symbol', value: symbol},
    {name: 'decimals', value: decimals},
    {name: 'ForwarderRegistry', value: getContractAddress('ForwarderRegistry@1.0')},
  ],
});
// Only for local dev, since the mapping behavior is not emulated
module.exports.skip = skipNetworksNotTagged('dev');
