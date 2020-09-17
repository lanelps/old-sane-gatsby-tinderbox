import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

//documents
import siteSettings from '/documents/siteSettings.js'

//objects
import blockContent from './blockContent'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    //documents
    siteSettings,

    //objects
    blockContent,
  ]),
})
