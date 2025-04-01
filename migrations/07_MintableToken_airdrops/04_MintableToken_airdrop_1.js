const {ethers} = require('hardhat');
const {multiSkip, skipChainTypesExceptFor, skipNetworksTagged} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getNamedGroups} = require('@animoca/ethereum-migrations/src/helpers/templates');
const ERC20MintBurn_sealedAirdrop = require('@animoca/ethereum-migrations/src/templates/token/ERC20/ERC20MintBurn_sealedAirdrop');

const amount = ethers.parseEther('50000000').toString();

const airdrop = {
  sealId: 1,
  recipients: getNamedGroups('QATeam'),
  amounts: amount,
};

module.exports = ERC20MintBurn_sealedAirdrop('MintableToken', 'MintableTokenSealedAirdrop', airdrop);
module.exports.skip = multiSkip(skipNetworksTagged('production'), skipChainTypesExceptFor('ethereum'));
module.exports.tags = ['MintableToken_airdrop_1'];
module.exports.dependencies = ['MintableToken_grantRole_MINTER_MintableTokenSealedAirdrop'];
