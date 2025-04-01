const {ethers} = require('hardhat');
const {multiSkip, skipChainTypesExceptFor, skipNetworksTagged} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getNamedGroups, getNamedAccount} = require('@animoca/ethereum-migrations/src/helpers/templates');
const ERC20MintBurn_sealedAirdrop = require('@animoca/ethereum-migrations/src/templates/token/ERC20/ERC20MintBurn_sealedAirdrop');

const airdrops = [
  {
    sealId: 2,
    recipients: getNamedGroups('QATeam'),
    amounts: [ethers.parseEther('10000'), ethers.parseEther('5000'), ethers.parseEther('1000')],
  },
  {
    sealId: 3,
    recipients: [getNamedAccount('QA1')],
    amounts: ethers.parseEther('10'),
  },
  {
    sealId: 4,
    recipients: [getNamedAccount('QA2')],
    amounts: [ethers.parseEther('20')],
  },
];

module.exports = ERC20MintBurn_sealedAirdrop('MintableToken', 'MintableTokenSealedAirdrop', airdrops);
module.exports.skip = multiSkip(skipNetworksTagged('production'), skipChainTypesExceptFor('ethereum'));
module.exports.dependencies = ['MintableToken_airdrop_1'];
module.exports.tags = ['MintableToken_airdrop_2_3_4'];
