import { MultiselectChip } from '../MultiselectChip';
import { SELECTION_NODES } from '../../types';
import style from './style.module.css';
import type { SelectMode, SelectableItem } from '../../types';

export function SelectContent<I extends SelectableItem>({
  selectMode,
  onRemove,
  children,
  alwaysShowPlaceholder,
  placeholder = null,
  onReset,
}: {
  selectMode: SelectMode;
  onRemove?: (item: I) => void;
  onReset?: () => void;
  children: Array<I> | React.ReactNode;
  placeholder?: JSX.Element | null;
  alwaysShowPlaceholder?: boolean;
}): JSX.Element | null {
  if (children === null || children === '' || children === undefined) return placeholder;

  switch (selectMode) {
    // < (item1, item2, item3) >
    case SELECTION_NODES.MULTI_AGGREGATED_CHIPS:
      if (typeof children !== 'string' && typeof children !== 'number' && typeof children !== 'boolean') {
        console.error(`Wrong children type in <MultiselectContent />. Primitive expected`);
        return placeholder;
      }
      return (
        <MultiselectChip onBtnClick={() => onReset?.()} value={null}>
          {String(children)}
        </MultiselectChip>
      );

    // < (item1), (items2), (item3) >
    case SELECTION_NODES.MULTI_CHIPS:
      if (!Array.isArray(children)) {
        console.error(`Wrong children type in <MultiselectContent />. Array expected`);
        return placeholder;
      }
      return (
        <>
          {children.map((itm, index) => (
            <MultiselectChip key={`${itm.value}_${index}`} value={itm} onBtnClick={onRemove}>
              {itm.title}
            </MultiselectChip>
          ))}
        </>
      );

    // < item1, items2, item3 >
    case SELECTION_NODES.MULTI_AGGREGATED_STRING:
      return <span className={style.textContent}>{String(children)}</span>;

    // < RectNode >
    case SELECTION_NODES.SINGLE:
      if (Array.isArray(children)) {
        console.error(`Wrong children type in <MultiselectContent />. ReactNode expected`);
        return placeholder;
      }

      return (
        <>
          {alwaysShowPlaceholder && placeholder}
          <span className={style.textContent}>{children}</span>
        </>
      );
  }
}
