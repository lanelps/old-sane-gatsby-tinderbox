import React from 'react'
import SEO from '../components/SEO'

export default function Layout({ title, url, page, children }) {
  return (
    <div className={`page ${page && page}`}>
      <SEO title={title} url={url} />
      <main id='content' className='content'>
        {children}
      </main>
    </div>
  )
}
