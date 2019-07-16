import styled from "@emotion/styled";
import { mediaQuery } from "../../utils/style";

export const EmptyPlaceholder = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #022f4e;
`;

export const SeedCounter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: white;
  box-shadow: 2px 3px 4px 1px rgba(0, 0, 0, 0.2);
}
`;

export const Body = styled.ul`
  color: black;
  overflow: hidden;
  background: white;
  margin: 0;
  margin-top: 0.5rem;
  padding: 0.75rem;
`;

export const BaseButton = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  outline: none;
  appearance: none;
  background-color: transparent;
  border: none;
`;

export const RemoveButton = styled(BaseButton)`
  margin-left: auto;
  &:hover {
    color: red;
  }
`;

export const RecommendationsButton = styled(BaseButton)`
  --recommendation-color: #0e0e6f;
  width: 100%;
  height: 3.25rem;
  background-color: red;
  font-weight: bold;
  color: white;
  transition: ease all 200ms;
  &:disabled {
    cursor: not-allowed;
    background-color: grey;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  color: black;
  position: fixed;
  overflow: hidden;
  margin: 0.75rem;
  width: 25rem;
  z-index: 1000;
  transform: translateZ(1000px);
  color: white;
  border-radius: 0.3rem;
  ${mediaQuery("mobile")} {
    width: 94vw;
  }
`;
