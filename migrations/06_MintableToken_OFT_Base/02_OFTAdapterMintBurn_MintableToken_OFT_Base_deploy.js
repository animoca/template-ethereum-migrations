const OFTAdapterMintBurn_deploy = require('@animoca/ethereum-migrations/src/templates/token/ERC20/layerzero_bridging/OFTAdapterMintBurn_deploy');
const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {baseDeploymentName} = require('../../src/constants/Token');

module.exports = OFTAdapterMintBurn_deploy(baseDeploymentName, 'deployer');
module.exports.skip = skipChainTypesExceptFor('base');
