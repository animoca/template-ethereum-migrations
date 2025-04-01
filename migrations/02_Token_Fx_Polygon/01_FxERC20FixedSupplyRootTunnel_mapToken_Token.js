const {mainnetDeploymentName, polygonDeploymentName} = require('../../src/constants/Token');
const RootTunnel_mapToken = require('@animoca/ethereum-migrations/src/templates/token/ERC20/polygon_bridging/fx-portal/FxERC20RootTunnel_mapToken');

module.exports = RootTunnel_mapToken('FxERC20FixedSupplyRootTunnel@2.0', mainnetDeploymentName, polygonDeploymentName);
