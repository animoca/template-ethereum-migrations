const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getContractAddress} = require('@animoca/ethereum-migrations/src/helpers/templates');
const Contract_deploy = require('@animoca/ethereum-migrations/src/templates/Contract/deploy');

module.exports = Contract_deploy('MyContract', {
  contract: 'MyContract',
  args: [
    {name: 'data', value: '0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead'},
    {name: 'ForwarderRegistry', value: getContractAddress('ForwarderRegistry@1.0')},
  ],
});
module.exports.skip = skipChainTypesExceptFor('polygon');
module.exports.dependencies = ['ForwarderRegistry@1.0_deploy'];
