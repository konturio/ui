import { useValue } from 'react-cosmos/fixture';
import { Select } from '../index';
import type { SelectItemType } from '../types';

const items: SelectItemType[] = [
  { title: 'Multiple Choice Questions', value: 1 },
  { title: 'True and False Statements', value: 2 },
  { title: 'Pair Matching', value: 3 },
  { title: 'Essay Writing', value: 4, hasDivider: true },
  { title: 'Oral Questions', value: 5, disabled: true },
  { title: 'Short questions and answers', value: 6 },
  { title: 'Computational Questions', value: 7 },
];

function customItemToString(item: SelectItemType | SelectItemType[] | null): string {
  if (Array.isArray(item)) {
    return item.length ? item.map((itm) => `${itm.value}_${itm.title}`).join(', ') : '';
  }
  return item ? `${item.value}_${item.title}` : '';
}

export default {
  Interactive: () => {
    const [state, setState] = useValue('selected', { defaultValue: {} } as {
      defaultValue: SelectItemType | null | undefined;
    });

    return (
      <Select
        value={state?.value}
        onChange={(e) => {
          setState(e.selectedItem);
        }}
        label="Interactive Select"
        items={items}
      >
        Select Example
      </Select>
    );
  },
  InteractiveWithDefaultValue: () => {
    const [state, setState] = useValue('selected', { defaultValue: {} } as {
      defaultValue: SelectItemType | SelectItemType[] | null | undefined;
    });

    return (
      <Select
        value={Array.isArray(state) ? state[0].value : state?.value}
        defaultValue={items[2].value}
        onSelect={setState}
        label="Interactive Select With Default Value"
        items={items}
        itemToString={customItemToString}
      >
        Select Example
      </Select>
    );
  },
  InteractiveWithInitialValue: () => {
    const [state, setState] = useValue('selected', { defaultValue: items[3] } as {
      defaultValue: SelectItemType | null | undefined;
    });

    return (
      <Select
        value={state?.value}
        onChange={(e) => {
          setState(e.selectedItem);
        }}
        label="Interactive Select With Initial Value"
        items={items}
      >
        Select Example
      </Select>
    );
  },
  WithEntryIcons: (
    <Select label="Select With Entry Icons" items={items} showEntryIcon>
      Select Example
    </Select>
  ),
  Disabled: (
    <Select label="Disabled Select" items={items} disabled>
      Select Example
    </Select>
  ),
  WithError: (
    <Select label="Select With Error" items={items} error="Error message" showSelectedIcon={false}>
      Select Example
    </Select>
  ),
  Inline: (
    <Select label="Inline Select" items={items} type="inline">
      Select Example
    </Select>
  ),
  StickyLabel: (
    <Select label="StickyLabel Select" items={items}
      showTopPlaceholder placeholder='POPS'
    >
    </Select>
  ),
  Multiselect: (
    <Select style={{ width: 250 }} label="Multiselect" items={items} multiselect>
      Select Example
    </Select>
  ),
  MultiselectWithAggregate: (
    <Select label="Multiselect With Aggregate" items={items} multiselect="aggregate">
      Select Example
    </Select>
  ),
  MultiselectWithOverflow: (
    <Select style={{ width: 270 }} label="Multiselect With Overflow" items={items} multiselect="aggregate">
      Select Example
    </Select>
  ),
  MultiselectWithChips: (
    <Select label="Multiselect With Chips" items={items} multiselect="chips">
      Select Example
    </Select>
  ),
};
