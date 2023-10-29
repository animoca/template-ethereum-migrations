const {multiSkip, skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');

let data;

module.exports = async (hre) => {
  const {deployments, getNamedAccounts} = hre;
  const {execute, log} = deployments;
  const {deployer} = await getNamedAccounts();

  log(`MyContract: setting data to ${data}...`);
  await execute('MyContract', {from: deployer, log: true}, 'setData', data);
};

module.exports.skip = multiSkip(
  skipChainTypesExceptFor('polygon'), //
  async (hre) => {
    const {deployments, getNamedAccounts} = hre;
    const {read, log} = deployments;
    const {deployer} = await getNamedAccounts();

    data = deployer;

    log(`MyContract: retrieving current data`);
    const currentData = await read('MyContract', 'myData');

    if (currentData == data) {
      log(`MyContract: current data is already ${currentData}`);
      return true;
    }

    return false;
  },
);
module.exports.dependencies = ['MyContract_deploy'];
