function createTreads() {
  const treads: any = {};
  return {
    increment: (treadId: string | number) => {
      if (typeof treads[treadId] === 'number') {
        treads[treadId] += 1;
      } else {
        treads[treadId] = 0;
      }
      return treads[treadId];
    },
  };
}

export function fillTemplate(template: string[], data) {
  const order: {
    [key: string]: any;
    _position: { x: number, y: number };
  }[] = [];

  const treads = createTreads();

  template.forEach((row, y) => {
    row.split(' ').forEach((cell, x) => {
      const position = treads.increment(cell);

      const dataCell = data[cell] && data[cell][position];
      if (dataCell) {
        order.push({ ...dataCell, _position: { x, y } });
      }
    });
  });

  return order;
}
