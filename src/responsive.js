import { css } from "styled-components";

export const mobile960 = (props) => {
  return css`
    @media only screen and (max-width: 960px) {
      ${props}
    }
  `;
};

export const mobile795 = (props) => {
    return css`
      @media only screen and (max-width: 795px) {
        ${props}
      }
    `;
  };

  export const mobile430 = (props) => {
    return css`
      @media only screen and (max-width: 430px) {
        ${props}
      }
    `;
  };