const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {mainnetDeploymentName, tokenName, tokenSymbol, tokenDecimals} = require('../../src/constants/MintableToken');
const ERC20MintBurn_deploy = require('@animoca/ethereum-migrations/src/templates/token/ERC20/ERC20MintBurn_deploy');

module.exports = ERC20MintBurn_deploy(mainnetDeploymentName, tokenName, tokenSymbol, tokenDecimals);
module.exports.skip = skipChainTypesExceptFor('ethereum');
