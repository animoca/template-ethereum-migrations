const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const ERC1155_deploy = require('@animoca/ethereum-migrations/src/templates/token/ERC1155/ERC1155_deploy');

const name = 'Multi Token';
const symbol = 'MultiToken';

module.exports = ERC1155_deploy('MultiToken', 'ERC1155FullBurn', name, symbol, 'TokenMetadataResolverWithBaseURI@4.1');
module.exports.skip = skipChainTypesExceptFor('arb1');
