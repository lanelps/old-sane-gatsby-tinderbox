export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  initialValue: {
    indexed: false,
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'author',
    },
    {
      name: 'domain',
      title: 'Site Domain',
      type: 'string',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    { name: 'indexed', title: 'Is Indexed?', type: 'boolean' },
  ],
}
