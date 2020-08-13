export function updateTableOnHover(table, { x, y }) {
  const newTable = { ...table };
  newTable.x.forEach((n, i) => {
    n.highlight = i === x;
  });

  newTable.y.forEach((n, i) => {
    n.highlight = i === y;
  });
  return newTable;
}

export function updateTableOnClick(table, { x, y }) {
  const newTable = { ...table };
  newTable.selectedCell = { x, y };
  newTable.x.forEach((n, i) => {
    n.selected = i === x;
  });

  newTable.y.forEach((n, i) => {
    n.selected = i === y;
  });
  return newTable;
}
