/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
*/

import './src/styles/main.css'

import React from "react";
import AppProvider from "~context/AppContext.jsx";

import "./src/assets/css/tailwind.build.css";

export const wrapRootElement = ({ element }) => (
  <>
    <AppProvider>
        {element}
    </AppProvider>
  </>
);
