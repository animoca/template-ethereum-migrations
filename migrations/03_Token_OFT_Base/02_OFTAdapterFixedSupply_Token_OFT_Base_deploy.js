// eslint-disable-next-line max-len
const OFTAdapterFixedSupply_deploy = require('@animoca/ethereum-migrations/src/templates/token/ERC20/layerzero_bridging/OFTAdapterFixedSupply_deploy');
const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {baseDeploymentName} = require('../../src/constants/Token');

module.exports = OFTAdapterFixedSupply_deploy(baseDeploymentName, 'deployer');
module.exports.skip = skipChainTypesExceptFor('base');
