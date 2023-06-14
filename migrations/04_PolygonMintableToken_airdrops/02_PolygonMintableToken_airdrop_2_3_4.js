const {utils} = require('ethers');
const {multiSkip, skipChainTypesExceptFor, skipNetworksTagged} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getNamedGroups, getNamedAccount} = require('@animoca/ethereum-migrations/src/helpers/templates');
const ERC20MintBurn_sealedAirdrop = require('@animoca/ethereum-migrations/src/templates/token/ERC20/ERC20MintBurn_sealedAirdrop');

const airdrops = [
  {
    sealId: 2,
    recipients: getNamedGroups('QATeam'),
    amounts: [utils.parseEther('10000'), utils.parseEther('5000'), utils.parseEther('1000')],
  },
  {
    sealId: 3,
    recipients: [getNamedAccount('QA1')],
    amounts: utils.parseEther('10'),
  },
  {
    sealId: 4,
    recipients: [getNamedAccount('QA2')],
    amounts: [utils.parseEther('20')],
  },
];

module.exports = ERC20MintBurn_sealedAirdrop('PolygonMintableToken', 'PolygonMintableTokenSealedAirdrop', airdrops);
module.exports.skip = multiSkip(skipNetworksTagged('production'), skipChainTypesExceptFor('polygon'));
module.exports.dependencies = ['PolygonMintableToken_airdrop_1'];
module.exports.tags = ['PolygonMintableToken_airdrop_2_3_4'];
