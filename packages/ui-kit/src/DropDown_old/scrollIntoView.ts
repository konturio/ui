export function scrollIntoView(element, options = { block: 'nearest', behavior: 'smooth' }): void {
  if (!element || !element.scrollIntoView) return;
  element.scrollIntoView(options);
}
