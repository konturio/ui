import { useValue } from 'react-cosmos/fixture';
import { AutocompleteItemType } from '../types';
import { Autocomplete } from '../index';

const items: AutocompleteItemType[] = [
  { title: 'Multiple Choice Questions', value: 1 },
  { title: 'True and False Statements', value: 2 },
  { title: 'Pair Matching', value: 3 },
  { title: 'Essay Writing', value: 4, hasDivider: true },
  { title: 'Oral Questions', value: 5, disabled: true },
  { title: 'Short questions and answers', value: 6 },
  { title: 'Computational Questions', value: 7 },
];

function customItemToString(item: AutocompleteItemType | AutocompleteItemType[] | null): string {
  if (Array.isArray(item)) {
    return item.length ? item.map((itm) => `${itm.value}_${itm.title}`).join(', ') : '';
  }
  return item ? `${item.value}_${item.title}` : '';
}

export default {
  Interactive: () => {
    const [state, setState] = useValue('selected', { defaultValue: {} } as {
      defaultValue: AutocompleteItemType | null | undefined;
    });

    return (
      <Autocomplete
        value={state?.value}
        onChange={(e) => {
          setState(e.selectedItem);
        }}
        label="Interactive Autocomplete"
        items={items}
      >
        Autocomplete Example
      </Autocomplete>
    );
  },
  InteractiveWithDefaultValue: () => {
    const [state, setState] = useValue('selected', { defaultValue: {} } as {
      defaultValue: AutocompleteItemType | AutocompleteItemType[] | null | undefined;
    });

    return (
      <Autocomplete
        value={Array.isArray(state) ? state[0].value : state?.value}
        defaultValue={items[2].value}
        onSelect={setState}
        label="Interactive Autocomplete With Default Value"
        items={items}
        itemToString={customItemToString}
      >
        Autocomplete Example
      </Autocomplete>
    );
  },
  InteractiveWithInitialValue: () => {
    const [state, setState] = useValue('selected', { defaultValue: items[3] } as {
      defaultValue: AutocompleteItemType | null | undefined;
    });

    return (
      <Autocomplete
        value={state?.value}
        onChange={(e) => {
          setState(e.selectedItem);
        }}
        label="Interactive Autocomplete With Initial Value"
        items={items}
      >
        Autocomplete Example
      </Autocomplete>
    );
  },
  WithEntryIcons: (
    <Autocomplete label="Autocomplete With Entry Icons" items={items} showEntryIcon>
      Autocomplete Example
    </Autocomplete>
  ),
  Disabled: (
    <Autocomplete label="Disabled Autocomplete" items={items} disabled>
      Autocomplete Example
    </Autocomplete>
  ),
  WithError: (
    <Autocomplete label="Autocomplete With Error" items={items} error="Error message" showSelectedIcon={false}>
      Autocomplete Example
    </Autocomplete>
  ),
  Inline: (
    <Autocomplete label="Inline Autocomplete" items={items} type="inline">
      Autocomplete Example
    </Autocomplete>
  ),
};
