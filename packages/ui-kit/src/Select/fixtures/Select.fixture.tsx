import { useValue } from 'react-cosmos/fixture';
import { Select } from '../index';
import { SelectItemType } from '../types';

const items: SelectItemType[] = [
  { title: 'Multiple Choice Questions', value: 1 },
  { title: 'True and False Statements', value: 2 },
  { title: 'Pair Matching', value: 3 },
  { title: 'Essay Writing', value: 4, hasDivider: true },
  { title: 'Oral Questions', value: 5, disabled: true },
  { title: 'Short questions and answers', value: 6 },
  { title: 'Computational Questions', value: 7 },
];

function itemToString(item) {
  return item ? item.title : '';
}

export default {
  Interactive: () => {
    const [state, setState] = useValue('selected', { defaultValue: {} } as {
      defaultValue: SelectItemType | null | undefined;
    });

    return (
      <Select
        onChange={(e) => {
          setState(e.selectedItem);
        }}
        label="Select Base"
        items={items}
        itemToString={itemToString}
      >
        Select Example
      </Select>
    );
  },
  Disabled: (
    <Select label="Select Disabled" items={items} itemToString={itemToString} disabled>
      Select Example
    </Select>
  ),
  WithError: (
    <Select label="Select With Error" items={items} itemToString={itemToString} error="Error messaqge">
      Select Example
    </Select>
  ),
  Inline: (
    <Select label="Inline Select" items={items} type="inline" itemToString={itemToString}>
      Select Example
    </Select>
  ),
};
