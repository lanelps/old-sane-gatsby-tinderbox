import React from "react";
import { Helmet } from "react-helmet";

import useSanitySiteSettings from "../hooks/useSanitySiteSettings";

export default function SEO({ title, url }) {
  const {
    sanitySiteSettings: { siteTitle, author, domain, keywords, indexed },
  } = useSanitySiteSettings();

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={`${title} | ${siteTitle} `}
      meta={[
        {
          name: "google-site-verification",
          content: "",
        },
        { name: "description", content: description },
        { name: "author", content: author },
        {
          name: "keywords",
          content: `${keywords.map((keyword) => keyword)}`,
        },
        {
          name: "robots",
          content: `${indexed ? "index, follow" : "noindex, nofollow"}`,
        },
        {
          name: "googlebot",
          content: `${indexed ? "index, follow" : "noindex, nofollow"}`,
        },
      ].concat([])}
    >
      <link rel="canonical" href={`${domain}${url && url}`} />
    </Helmet>
  );
}
