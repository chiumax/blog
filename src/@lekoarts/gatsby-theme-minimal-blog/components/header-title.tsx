/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";

import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import React from "react";

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata();
  const { basePath } = useMinimalBlogConfig();

  const [hovered, setHovered] = React.useState<boolean>(false);

  return (
    <div>
      <div
        sx={{
          my: 0,
          fontWeight: `semibold`,
          fontSize: [3, 4],
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <span
          sx={{
            fontWeight: "normal",
            color: hovered ? "muted" : "secondary",
            transition: "color 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            ":hover": { color: "primary" },
            ":hover ~ span": { color: "muted" },
            "~ span": {
              transition: "color 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            },
          }}
        >
          <Link
            to={`https://chiu.fyi`}
            target="_blank"
            aria-label={`parent site`}
            sx={{
              textDecoration: "none",
              color: "inherit",
              transition: "color 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            chiu.fyi
          </Link>
        </span>
        <span
          sx={{
            color: "secondary",
            fontWeight: "normal",
            transition: "color 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
          }}
        >
          .
        </span>
        <span
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          sx={{ transition: "color 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <Link
            to={replaceSlashes(`/${basePath}`)}
            aria-label={`${siteTitle} - Back to home`}
            sx={{
              textDecoration: "none",
              color: "inherit",
              transition: "color 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            blog
          </Link>
        </span>
      </div>
    </div>
  );
};

export default HeaderTitle;
