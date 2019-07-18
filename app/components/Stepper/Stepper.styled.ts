import styled from "@emotion/styled";

export const Steps = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  list-style-type: none;
`;

export const Step = styled.li<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  --step-color: ${props => (props.isActive ? "black" : "gray")};
`;

export const StepInner = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background-color: var(--step-color);
`;

export const StepTitle = styled.section`
  position: absolute;
`;

export const Line = styled.section<{ isActive: boolean }>`
  flex: 1;
  height: 3px;
  background-color: ${props => (props.isActive ? "black" : "gray")};
`;
