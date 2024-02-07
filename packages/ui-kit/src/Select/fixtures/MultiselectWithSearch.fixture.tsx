import { useValue } from 'react-cosmos/fixture';
import { MultiselectChipWithSearch } from '../components/MultiselectChipWithSearch';
import type { SelectableItem } from '../types';

const items: SelectableItem[] = [
  { title: 'Multiple Choice Questions', value: 1 },
  { title: 'True and False Statements', value: 2 },
  { title: 'Pair Matching', value: 3 },
  { title: 'Essay Writing', value: 4, hasDivider: true },
  { title: 'Oral Questions', value: 5, disabled: true },
  { title: 'Short questions and answers', value: 6 },
  { title: 'Computational Questions', value: 7 },
  { title: 'Test with an incredibly long name', value: 8 },
];

export default {
  Regular: () => {
    const [state, setState] = useValue('selected', { defaultValue: [items[3]] } as {
      defaultValue: Array<SelectableItem>;
    });

    return (
      <MultiselectChipWithSearch
        selectedItems={state}
        onChange={(e) => setState(e.selectedItems ?? [])}
        label="Multi select with search"
        placeholder="Select something"
        items={items}
        noOptionsText="No options"
      ></MultiselectChipWithSearch>
    );
  },
  MultiselectLimitedWidth,
};

export function MultiselectLimitedWidth() {
  const [state, setState] = useValue('selected', { defaultValue: [items[3]] } as {
    defaultValue: Array<SelectableItem>;
  });

  return (
    <div style={{ width: '210px', border: '2px solid hsla(0, 0%, 0%, 0.2)', padding: '8px', borderRadius: '8px' }}>
      <MultiselectChipWithSearch
        selectedItems={state}
        onChange={(e) => setState(e.selectedItems ?? [])}
        label="Multi select with search"
        placeholder="Select something"
        items={items}
        noOptionsText="No options"
      ></MultiselectChipWithSearch>
    </div>
  );
}
