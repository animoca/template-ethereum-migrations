// eslint-disable-next-line max-len
const ERC20FixedSupply_OFT_secondaryChain_deploy = require('@animoca/ethereum-migrations/src/templates/token/ERC20/layerzero_bridging/ERC20FixedSupply_OFT_secondaryChain_deploy');
const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {mainnetDeploymentName, baseDeploymentName, primaryChainType, tokenName, tokenSymbol, tokenDecimals} = require('../../src/constants/Token');

module.exports = ERC20FixedSupply_OFT_secondaryChain_deploy(
  baseDeploymentName,
  mainnetDeploymentName,
  primaryChainType,
  tokenName,
  tokenSymbol,
  tokenDecimals,
);
module.exports.skip = skipChainTypesExceptFor('base');
