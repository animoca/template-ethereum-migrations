const {mergeConfigs} = require('@animoca/ethereum-contract-helpers/src/config');
require('dotenv').config();

require('@animoca/ethereum-migrations/hardhat-plugins');
require('@animoca/ethereum-migrations/hardhat-plugins/hardhat-deploy-lz-integration');

module.exports = mergeConfigs(require('@animoca/ethereum-migrations/hardhat-config'), require('./hardhat-config'));
