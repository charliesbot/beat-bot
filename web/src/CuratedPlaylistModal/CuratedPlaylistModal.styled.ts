import styled from "styled-components";
import { mediaQuery } from "../utils/style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Body = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 4rem;
  overflow: auto;
  ${mediaQuery.mobile`
      grid-template-columns: 100%;
    `};
`;
