const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getContractAddress} = require('@animoca/ethereum-migrations/src/helpers/templates');
const Contract_deploy = require('@animoca/ethereum-migrations/src/templates/Contract/deploy');

const name = 'NFT';
const symbol = 'NFT';

module.exports = Contract_deploy('NFT', {
  contract: 'NFT',
  args: [
    {name: 'name', value: name},
    {name: 'symbol', value: symbol},
    {name: 'OperatorFilterRegistry', value: getContractAddress('OperatorFilterRegistry')},
    {name: 'ForwarderRegistry', value: getContractAddress('ForwarderRegistry@1.0')},
  ],
});
module.exports.skip = skipChainTypesExceptFor('polygon');
module.exports.dependencies = ['ForwarderRegistry@1.0_deploy'];
