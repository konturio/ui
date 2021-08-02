export function setOffset(offsetX = 0, offsetY = 0) {
  return {
    col: (index: number) => index + offsetX,
    row: (index: number) => index + offsetY,
  };
}

export function attachPositionToCb(position: { x: number; y: number }) {
  return (cb?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, position: { x: number; y: number }) => unknown) =>
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
      cb && cb(e, position);
}
