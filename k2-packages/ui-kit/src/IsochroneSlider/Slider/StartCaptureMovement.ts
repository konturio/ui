function sliderValueCalculator(totalWidth: number, offsetLeft: number): (newPosition: number) => number {
  return (newPosition): number => Math.min(Math.max((newPosition - offsetLeft) / (totalWidth / 100), 0), 100);
}

export function startCaptureMovement(
  isClickOnStick: boolean,
  { currentTarget, clientX }: React.MouseEvent<HTMLDivElement, MouseEvent>,
  cb: (sliderValue: number) => void,
): void {
  const parent = currentTarget.offsetParent as HTMLDivElement;
  const parentOffset = parent && parent.offsetLeft;
  const offset = currentTarget.offsetLeft;

  const getSliderValue = sliderValueCalculator(currentTarget.clientWidth, offset + parentOffset);

  if (isClickOnStick) {
    cb(getSliderValue(clientX));
    return;
  }

  const move = (e: MouseEvent): void => {
    requestAnimationFrame(() => {
      cb(getSliderValue(e.clientX));
    });
  };

  const cancelDrag = (e: MouseEvent): void => {
    e.preventDefault();
  };

  const endDragging = (e: MouseEvent): void => {
    window.removeEventListener('dragstart', cancelDrag, true);
    window.removeEventListener('mousemove', move, false);
    window.removeEventListener('mouseup', endDragging, false);

    cb(getSliderValue(e.clientX));
  };

  window.addEventListener('mouseup', endDragging, false);
  window.addEventListener('mousemove', move, false);
  window.addEventListener('dragstart', cancelDrag, true);
}
