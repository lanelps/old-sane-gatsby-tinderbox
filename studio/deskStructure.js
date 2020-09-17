import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(() => <Emoji style={{ fontSize: 30 }} text='⚙️' />)
        .child(
          S.editor()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),
    ])
