const {multiSkip, skipChainTypesExceptFor, skipNetworksTagged} = require('@animoca/ethereum-migrations/src/helpers/common');
const {getNamedAccount} = require('@animoca/ethereum-migrations/src/helpers/templates');
const registerAndSubscribe = require('@animoca/ethereum-migrations/src/templates/token/royalty/OperatorFilterRegistry/registerAndSubscribe');

module.exports = registerAndSubscribe('NFT', getNamedAccount('OpenSea_OperatorFilter_Subscription'));
module.exports.skip = multiSkip(skipNetworksTagged('dev'), skipChainTypesExceptFor('polygon'));
