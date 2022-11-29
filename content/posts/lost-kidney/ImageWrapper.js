/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */

/**
 * Spotify player iframe widget
 *
 * @author Alexander Wallin <office@alexanderwallin.com>
 * @see https://developer.spotify.com/technologies/widgets/spotify-play-button/
 */

import * as React from "react";
import "./style.css";
import styled from "styled-components";

function Wrapper({ children }) {
  const Container = styled.div`
    height: 535px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    & > * {
      height: 500px;
      width: 400px;
      margin: 0 !important;
    }

    & > * > * {
      margin: 0 !important;
    }
  `;

  return <Container>{children}</Container>;
}

export default Wrapper;
