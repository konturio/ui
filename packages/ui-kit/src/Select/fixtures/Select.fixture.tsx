import { Select } from '../index';
import { SelectItem } from '../types';

const items: SelectItem[] = [
  { title: 'Multiple Choice Questions', value: 1 },
  { title: 'True and False Statements', value: 2 },
  { title: 'Pair Matching', value: 3 },
  { title: 'Essay Writing', value: 4 },
  { title: 'Oral Questions', value: 5 },
  { title: 'Short questions and answers', value: 6 },
  { title: 'Computational Questions', value: 7 },
];

function itemToString(item) {
  return item ? item.title : '';
}

export default {
  Base: (
    <Select label="Select Label" items={items} itemToString={itemToString}>
      Select Example
    </Select>
  ),
};
