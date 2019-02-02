import React, { memo } from "react";
import { Steps, Step, Line, StepInner } from "./Stepper.styled";
import { Props } from "./Stepper.type";

const Stepper = (props: any) => {
  const { steps, activeStep } = props;

  return (
    <Steps>
      {steps.map((step: any, index: number) => {
        const isActive = index + 1 <= activeStep;
        return (
          <>
            {index > 0 && <Line isActive={isActive} />}
            <Step isActive={isActive}>
              <StepInner>{step.children || index}</StepInner>
            </Step>
          </>
        );
      })}
    </Steps>
  );
};

export default memo(Stepper);
