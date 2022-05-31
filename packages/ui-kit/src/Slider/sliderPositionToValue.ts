interface Step {
  label: string | number;
  value: any;
}

export function sliderPositionToValue(steps: Step[]) {
  return (position: number): Step['value'] => {
    const factor = 100 / (steps.length - 1);
    const closestStepIndex = Math.min(Math.round(position / factor), steps.length - 1);
    return steps[closestStepIndex].value;
  };
}
