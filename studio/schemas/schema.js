// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas

//documents
import siteSettings from './documents/siteSettings'
import category from './documents/category'
import product from './documents/product'
import vendor from './documents/vendor'

//objects
import blockContent from './objects/blockContent'
import localeString from './objects/string'
import localeText from './objects/text'
import localeBlockContent from './objects/localeBlockContent'
import productVariant from './objects/productVariant'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.

    // documents
    siteSettings,
    category,
    product,
    vendor,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas

    //objects
    blockContent,
    localeString,
    localeText,
    localeBlockContent,
    productVariant,
  ]),
})
