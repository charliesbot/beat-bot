import { css } from "styled-components";

export const sizes: any = {
  mobile: 500,
  tablet: 1024
};

export const mediaQuery = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
      css`
        @media (max-width: ${sizes[label]}px) {
          ${css(literals, ...placeholders)};
        }
      `.join("");
    return acc;
  },
  {} as Record<
    keyof typeof sizes,
    (l: TemplateStringsArray, ...p: any[]) => string
  >
);

export const textOverflow = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
