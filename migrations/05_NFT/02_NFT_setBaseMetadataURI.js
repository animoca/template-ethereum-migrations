const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const setBaseMetadataURI = require('@animoca/ethereum-migrations/src/templates/token/metadata/setBaseMetadataURI');

const baseMetadataURI = 'https://metadata.nft.com/';

module.exports = setBaseMetadataURI('NFT', baseMetadataURI);
module.exports.skip = skipChainTypesExceptFor('polygon');
