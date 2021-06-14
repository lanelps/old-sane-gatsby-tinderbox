import React from "react";
import SEO from "../components/SEO";
import { GlobalStyles } from "twin.macro";

export default function Layout({ title, url, page, children }) {
  return (
    <>
      <GlobalStyles />
      <div className={`page ${page && page}`}>
        <SEO title={title} url={url} />
        <main id="content" className="content">
          {children}
        </main>
      </div>
    </>
  );
}
