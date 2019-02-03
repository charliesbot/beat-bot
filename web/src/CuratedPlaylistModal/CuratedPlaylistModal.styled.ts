import styled from "styled-components";
import { mediaQuery } from "../utils/style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 4rem;
`;

export const Body = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  flex: 1;
  overflow: auto;
  ${mediaQuery.mobile`
      grid-template-columns: 100%;
    `};
`;
