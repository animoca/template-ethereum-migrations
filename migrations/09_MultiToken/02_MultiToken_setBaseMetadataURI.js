const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const setBaseMetadataURI = require('@animoca/ethereum-migrations/src/templates/token/metadata/TokenMetadataResolverWithBaseURI/setBaseMetadataURI');

const baseMetadataURI = 'https://metadata.multitoken.com/';

module.exports = setBaseMetadataURI('MultiToken', 'TokenMetadataResolverWithBaseURI@4.1', baseMetadataURI);
module.exports.skip = skipChainTypesExceptFor('arb1');
