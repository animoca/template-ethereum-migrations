const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const setBaseMetadataURI = require('@animoca/ethereum-migrations/src/templates/token/metadata/TokenMetadataResolverWithBaseURI/setBaseMetadataURI');

const baseMetadataURI = 'https://metadata.nft.com/';

module.exports = setBaseMetadataURI('NFT', 'TokenMetadataResolverWithBaseURI@4.1', baseMetadataURI);
module.exports.skip = skipChainTypesExceptFor('polygon');
