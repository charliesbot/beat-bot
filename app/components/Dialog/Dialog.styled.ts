import styled from "@emotion/styled";
import prop from "lodash/fp/prop";
import { mediaQuery } from "../../utils/style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 800px;
  height: ${prop("height")}vh;
  max-height: 90vh;
  border-radius: 4px;
  background-color: white;
  overflow: hidden;
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  transform: translateZ(10000px);
  background-color: rgba(0, 0, 0, 0.7);
  ${mediaQuery("mobile")} {
    justify-content: flex-start;
    align-items: flex-start;
    ${Container} {
      height: 100%;
      max-height: 100%;
      width: 100%;
    }
  }
`;
