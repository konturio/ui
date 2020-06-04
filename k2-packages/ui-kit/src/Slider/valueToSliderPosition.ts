export function valueToSliderPosition(value, steps): number {
  const factor = (steps.length - 1) / 100;
  const stepIndex = steps.findIndex(s => s.value === value);
  return stepIndex / factor;
}
