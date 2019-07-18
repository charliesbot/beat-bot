import React, { memo } from "react";
import { Steps, Step, Line, StepInner } from "./Stepper.styled";

interface Props {
  steps: any[];
  activeStep: number;
}

const Stepper: React.FC<Props> = props => {
  const { steps, activeStep } = props;

  return (
    <Steps>
      {steps.map((step, index) => {
        const isActive = index <= activeStep;
        return (
          <>
            {index > 0 && <Line isActive={isActive} />}
            <Step isActive={isActive} key={index}>
              <StepInner>{step.children || index}</StepInner>
            </Step>
          </>
        );
      })}
    </Steps>
  );
};

export default memo(Stepper);
