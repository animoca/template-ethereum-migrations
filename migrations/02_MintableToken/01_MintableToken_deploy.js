const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getContractAddress} = require('@animoca/ethereum-migrations/src/helpers/templates');
const Contract_deploy = require('@animoca/ethereum-migrations/src/templates/Contract/deploy');

const name = 'MintableToken';
const symbol = 'MTOK';
const decimals = 18;

module.exports = Contract_deploy('MintableToken', {
  contract: 'MintableToken',
  args: [
    {name: 'name', value: name},
    {name: 'symbol', value: symbol},
    {name: 'decimals', value: decimals},
    {name: 'ForwarderRegistry', value: getContractAddress('ForwarderRegistry@1.0')},
  ],
});
module.exports.skip = skipChainTypesExceptFor('ethereum');
