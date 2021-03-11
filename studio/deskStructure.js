import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
      .title('Site Settings')
      .child(
        S.document()
          .schemaType('siteSettings')
          .documentId('siteSettings')
          .title('Site Settings')
      ),
      ...S.documentTypeListItems().filter(listItem => !['siteSettings'].includes(listItem.getId()))
    ])
