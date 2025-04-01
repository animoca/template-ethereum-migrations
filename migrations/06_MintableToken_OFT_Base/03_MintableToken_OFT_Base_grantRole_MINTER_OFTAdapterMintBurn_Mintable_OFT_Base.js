const {multiSkip, skipNetworksTagged, skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getContractAddress} = require('@animoca/ethereum-migrations/src/helpers/templates');
const {baseDeploymentName} = require('../../src/constants/MintableToken');
const AccessControl_grantRole = require('@animoca/ethereum-migrations/src/templates/access/AccessControl/grantRole');

const adapterDeploymentName = `OFTAdapterMintBurn_${baseDeploymentName}`;

module.exports = AccessControl_grantRole(baseDeploymentName, 'MINTER', getContractAddress(adapterDeploymentName));
module.exports.skip = multiSkip(
  skipChainTypesExceptFor('base'), //
  skipNetworksTagged('dev'),
);
module.exports.dependencies = [`${adapterDeploymentName}_deploy`];
module.exports.tags = [baseDeploymentName];
