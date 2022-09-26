import { fillTemplate } from './gridTemplate';

describe('fillTemplate fill array with elements according to template', () => {
  it('Should calc correct position', () => {
    // prettier-ignore
    const TEMPLATE = [
      'x x',
      'x x ',
    ];

    const DATA = {
      x: [{ value: 'x1' }, { value: 'x2' }, { value: 'x3' }, { value: 'x4' }],
    };

    const output = fillTemplate(TEMPLATE, DATA);

    expect(output.map((o) => o._position)).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ]);
  });

  it('Should select right value', () => {
    // prettier-ignore
    const TEMPLATE = [
      'x y c',
    ];

    const DATA = {
      x: [{ value: 'x1' }],
      y: [{ value: 'y1' }],
      c: [{ value: 'c1' }],
    };

    const output = fillTemplate(TEMPLATE, DATA);

    expect(output.map((o) => o.value)).toEqual(['x1', 'y1', 'c1']);
  });

  it('Should ignore unavailable values', () => {
    // prettier-ignore
    const TEMPLATE = ['x . c', '. y .'];

    const DATA = {
      x: [{ value: 'x1' }],
      y: [{ value: 'y1' }],
      c: [{ value: 'c1' }],
    };

    const output = fillTemplate(TEMPLATE, DATA);

    expect(output.map((o) => o._position)).toEqual([
      { x: 0, y: 0 },
      { x: 2, y: 0 },
      { x: 1, y: 1 },
    ]);
  });

  it('Integration test', () => {
    // prettier-ignore
    const TEMPLATE = ['y . . . .', 'y c c c .', '. x x x x'];

    const DATA = {
      x: [{ value: 'x1' }, { value: 'x2' }, { value: 'x3' }, { value: 'x4' }],
      y: [{ value: 'y1' }, { value: 'y2' }, { value: 'y3' }, { value: 'y4' }],
      c: [{ value: 'c1' }, { value: 'c2' }, { value: 'c3' }, { value: 'c4' }],
    };

    const output = fillTemplate(TEMPLATE, DATA);
    expect(output).toEqual([
      { value: 'y1', _position: { x: 0, y: 0 } },
      { value: 'y2', _position: { x: 0, y: 1 } },
      { value: 'c1', _position: { x: 1, y: 1 } },
      { value: 'c2', _position: { x: 2, y: 1 } },
      { value: 'c3', _position: { x: 3, y: 1 } },
      { value: 'x1', _position: { x: 1, y: 2 } },
      { value: 'x2', _position: { x: 2, y: 2 } },
      { value: 'x3', _position: { x: 3, y: 2 } },
      { value: 'x4', _position: { x: 4, y: 2 } },
    ]);
  });
});
