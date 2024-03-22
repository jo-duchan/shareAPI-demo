import { css } from "styled-components";

const Heading = {
  H1: css`
    font-size: 42px;
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.25em;
  `,
  H2: css`
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.25em;
  `,
  H4: css`
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.25em;
  `,
};

const Body = {
  Bold: {
    M: css`
      font-size: 14px;
      font-weight: 700;
      letter-spacing: -0.01em;
      line-height: 1.25em;
    `,
  },
  Reqular: {
    M: css`
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.01em;
      line-height: 1.25em;
    `,
    S: css`
      font-size: 12px;
      font-weight: 400;
      letter-spacing: -0.01em;
      line-height: 1.25em;
    `,
  },
};

const Fonts = {
  Heading,
  Body,
};

export default Fonts;
