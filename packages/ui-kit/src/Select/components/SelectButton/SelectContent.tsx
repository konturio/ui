import { MultiselectChip } from '../MultiselectChip';
import { SELECTION_NODES } from '../../types';
import style from './style.module.css';
import type { SelectMode } from '../../types';

export function SelectContent({
  selectMode,
  onReset,
  children,
}: {
  selectMode: SelectMode;
  onReset?: (val?: string | number | undefined) => void;
  children: Array<{ value: string | number | undefined; title: React.ReactNode }> | React.ReactNode;
}) {
  if (children === null) return null;

  switch (selectMode) {
    // < (item1, item2, item3) >
    case SELECTION_NODES.MULTI_AGGREGATED_CHIPS:
      if (typeof children !== 'string' && typeof children !== 'number' && typeof children !== 'boolean') {
        console.error(`Wrong children type in <MultiselectContent />. Primitive expected`);
        return null;
      }
      return <MultiselectChip onBtnClick={onReset}>{String(children)}</MultiselectChip>;

    // < (item1), (items2), (item3) >
    case SELECTION_NODES.MULTI_CHIPS:
      if (!Array.isArray(children)) {
        console.error(`Wrong children type in <MultiselectContent />. Array expected`);
        return null;
      }
      return (
        <>
          {children.map((itm, index) => (
            <MultiselectChip key={`${itm.value}_${index}`} value={itm.value} onBtnClick={onReset}>
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
        return null;
      }

      return <span className={style.textContent}>{children}</span>;
  }
}
