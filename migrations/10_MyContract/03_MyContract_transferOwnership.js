const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const transferOwnership = require('@animoca/ethereum-migrations/src/templates/access/ContractOwnership/transferOwnership');
const {getNamedAccount} = require('@animoca/ethereum-migrations/src/helpers/templates');

module.exports = transferOwnership('MyContract', getNamedAccount('owner'));
module.exports.skip = skipChainTypesExceptFor('polygon');
module.exports.dependencies = ['MyContract_setData'];
