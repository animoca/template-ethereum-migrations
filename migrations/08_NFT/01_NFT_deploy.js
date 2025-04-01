const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const ERC721_deploy = require('@animoca/ethereum-migrations/src/templates/token/ERC721/ERC721_deploy');

const name = 'Non Fungible Token';
const symbol = 'NFT';

module.exports = ERC721_deploy('NFT', 'ERC721Full', name, symbol, 'TokenMetadataResolverWithBaseURI@4.1');
module.exports.skip = skipChainTypesExceptFor('polygon');
