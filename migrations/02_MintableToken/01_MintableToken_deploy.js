const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const ERC20MintBurn_deploy = require('@animoca/ethereum-migrations/src/templates/token/ERC20/ERC20MintBurn_deploy');

module.exports = ERC20MintBurn_deploy('MintableToken', 'MintableToken', 'MTOK', 18);
module.exports.skip = skipChainTypesExceptFor('ethereum');
