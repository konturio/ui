import { useValue } from 'react-cosmos/fixture';
import { Select } from '../index';
import type { SelectableItem } from '../types';

const items: SelectableItem[] = [
  { title: 'Multiple Choice Questions', value: 1 },
  { title: 'True and False Statements', value: 2 },
  { title: 'Pair Matching', value: 3 },
  { title: 'Essay Writing', value: 4, hasDivider: true },
  { title: 'Oral Questions', value: 5, disabled: true },
  { title: 'Short questions and answers', value: 6 },
  { title: 'Computational Questions', value: 7 },
];

function customItemToString(item: SelectableItem | SelectableItem[] | null): string {
  if (Array.isArray(item)) {
    return item.length ? item.map((itm) => `${itm.value}_${itm.title}`).join(', ') : '';
  }
  return item ? `${item.value}_${item.title}` : '';
}

export default {
  Interactive: () => {
    const [state, setState] = useValue('selected', { defaultValue: {} } as {
      defaultValue: SelectableItem | null | undefined;
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
        Placeholder example
      </Select>
    );
  },
  InteractiveWithDefaultValue: () => {
    const [state, setState] = useValue('selected', { defaultValue: {} } as {
      defaultValue: SelectableItem | SelectableItem[] | null | undefined;
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
        Never Visible
      </Select>
    );
  },
  InteractiveWithInitialValue: () => {
    const [state, setState] = useValue('selected', { defaultValue: items[3] } as {
      defaultValue: SelectableItem | null | undefined;
    });

    return (
      <Select
        value={state?.value}
        onChange={(e) => {
          setState(e.selectedItem);
        }}
        label="Interactive Select With Initial Value"
        items={items}
      ></Select>
    );
  },
  AlwaysShowPlacehoder: (
    <Select label="Show placeholder on top when value selected" items={items} alwaysShowPlaceholder>
      Placeholder
    </Select>
  ),
  WithEntryIcons: (
    <Select label="Select With Entry Icons" items={items} showEntryIcon>
      Placeholder
    </Select>
  ),
  Disabled: (
    <Select label="Disabled Select" items={items} disabled>
      Placeholder
    </Select>
  ),
  WithError: (
    <Select label="Select With Error" items={items} error="Error message" showSelectedIcon={false}>
      Placeholder
    </Select>
  ),
  Inline: (
    <Select label="Inline Select" items={items} type="inline">
      Placeholder
    </Select>
  ),
  Multiselect: (
    <Select style={{ width: 250 }} label="Multiselect" items={items} multiselect>
      Placeholder
    </Select>
  ),
  MultiselectWithAggregate: (
    <Select label="Multiselect With Aggregate" items={items} multiselect="aggregate">
      Placeholder
    </Select>
  ),
  MultiselectWithOverflow: (
    <Select style={{ width: 270 }} label="Multiselect With Overflow" items={items} multiselect="aggregate">
      Placeholder
    </Select>
  ),
  MultiselectWithChips: (
    <Select label="Multiselect With Chips" items={items} multiselect="chips">
      Placeholder
    </Select>
  ),
};
