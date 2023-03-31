const {mergeConfigs} = require('@animoca/ethereum-contract-helpers/src/config');
require('dotenv').config();

require('@animoca/ethereum-migrations/hardhat-plugins');

module.exports = mergeConfigs(require('@animoca/ethereum-migrations/hardhat-config'), require('./hardhat-config'));
