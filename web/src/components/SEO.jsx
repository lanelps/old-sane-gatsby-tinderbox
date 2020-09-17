import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function SEO({ title, url }) {
  const {
    sanitySiteSettings: {
      siteTitle,
      description,
      author,
      domain,
      keywords,
      indexed,
    },
  } = useStaticQuery(graphql`
    query {
      sanitySiteSettings {
        siteTitle: title
        description
        author
        domain
        keywords
        indexed
      }
    }
  `)
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={`${title} | ${siteTitle} `}
      meta={[
        {
          name: 'google-site-verification',
          content: '',
        },
        { name: 'description', content: description },
        { name: 'author', content: author },
        {
          name: 'keywords',
          content: `${keywords.map((keyword) => keyword)}`,
        },
        {
          name: 'robots',
          content: `${indexed ? 'index, follow' : 'noindex, nofollow'}`,
        },
        {
          name: 'googlebot',
          content: `${indexed ? 'index, follow' : 'noindex, nofollow'}`,
        },
      ].concat([])}>
      <link rel='canonical' href={`${domain}${url && url}`} />
    </Helmet>
  )
}