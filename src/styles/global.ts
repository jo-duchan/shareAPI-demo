import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import media from "./media";

const fontFamily =
  '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif';

const GlobalStyle = createGlobalStyle`
${reset};

html, body, #root {
    width: 100%;
    min-width: 1000px;
    height: 100%;
    font-family: ${fontFamily};
};

#overlays {
    pointer-events: none;
}

${media.small`
  html, body, #root {
    min-width: initial;
  }
`};

`;

export default GlobalStyle;
