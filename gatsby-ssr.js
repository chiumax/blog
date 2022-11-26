import React from "react";

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/ng.ttf"
      as="font"
      crossOrigin="anonymous"
      key="ng"
    />,
  ]);
  setHtmlAttributes({ lang: `en` });
};
