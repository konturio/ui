/* Find container size after transform rotation */
export function calculateSize(
  el: HTMLElement | null,
  angle: number,
  findBBox = false,
): { width: string; height: string; findBBox?: boolean } {
  if (el === null) return { width: 'unset', height: 'unset' };
  const { width, height } = el.getBoundingClientRect();
  console.log(el, width, height);
  if (findBBox) {
    const t = Math.abs((angle * Math.PI) / 180); // Convert to radians
    return {
      width: `${Math.round(Math.sin(t) * height + Math.cos(t) * width)}px`,
      height: `${Math.round(Math.sin(t) * width + Math.cos(t) * height)}px`,
    };
  } else {
    return { width: `${width}px`, height: `${height}px` };
  }
}
