import { CSSProperties, useCallback, useEffect, useState, memo } from 'react';
import styles from './tableHeading.module.css';
import cn from 'clsx';
import DenominatorIcon from './components/DenominatorIcon/DenominatorIcon';

const createGlobalState = (initialState) => {
  let globalState = initialState;
  const listeners = new Set<() => void>();

  const setGlobalState = (nextGlobalState) => {
    globalState = nextGlobalState;
    listeners.forEach((listener) => listener());
  };

  return () => {
    const [state, setState] = useState(globalState);
    useEffect(() => {
      const listener = () => {
        setState(globalState);
      };
      listeners.add(listener);
      listener(); // in case it's already changed
      return () => {
        listeners.delete(listener);
      }; // cleanup
    }, []);
    return [state, setGlobalState];
  };
};

const useGlobalState = createGlobalState({
  headingId: '',
});

const getHeadingPositionStyle = (isColum: boolean, index: number) => {
  const styles: any = {
    gridColumn: isColum ? `${index + 3} / ${index + 4}` : '1',
    gridRow: isColum ? '1' : `${index + 3} / ${index + 4}`,
  };

  return styles;
};

interface DenominatorItemProps {
  id: string;
  numinatorLabel?: string;
  denominatorLabel?: string;
  quality?: number | null;
  onSelectDenominator: (denId: string) => void;
}

const DenominatorItem = ({
  id,
  numinatorLabel,
  denominatorLabel,
  quality,
  onSelectDenominator,
}: DenominatorItemProps) => {
  const onClick = useCallback(
    (ev) => {
      ev.stopPropagation();
      onSelectDenominator(id);
    },
    [onSelectDenominator],
  );
  return (
    <div onClick={onClick}>
      <DenominatorIcon iconId={id} />
      <div className="qualityLabel">{quality !== null && quality !== undefined ? quality : '&nbsp;'}</div>
      <div className="denominatorLabel">{denominatorLabel}</div>
    </div>
  );
};

interface DenominatorsSelectorProps {
  isOpen: boolean;
  switchDenominatorsVisibility: (ev) => void;
  label: string;
  denominators: { id: string; label?: string; quality?: number }[];
  selectedDenominator?: { id: string; label?: string };
  onSelectDenominator: (denId: string) => void;
}

const DenominatorsSelector = memo(
  ({
    isOpen,
    switchDenominatorsVisibility,
    label,
    denominators,
    selectedDenominator,
    onSelectDenominator,
  }: DenominatorsSelectorProps) => {
    return (
      <div className={styles.denominators}>
        <div
          className={cn({ [styles.denominatorSelector]: true, [styles.disabled]: denominators.length <= 1 })}
          onClick={switchDenominatorsVisibility}
        >
          <i className="fas fa-caret-down"></i>
        </div>
        <div className={cn({ [styles.denominatorsContainer]: true, [styles.show]: isOpen })}>
          {denominators.map(({ id: denId, label: denLabel, quality }) =>
            denId !== selectedDenominator?.id ? (
              <DenominatorItem
                key={denId}
                onSelectDenominator={onSelectDenominator}
                quality={quality}
                id={denId}
                numinatorLabel={label}
                denominatorLabel={denLabel}
              />
            ) : null,
          )}
        </div>
      </div>
    );
  },
);

DenominatorsSelector.displayName = 'DenominatorsSelector';

interface HeadingEntryProps {
  index: number;
  vertical: boolean;
  className?: string;
  hoveredIndex?: number | null;
  selectedIndex?: number | null;
  headerCell: {
    label: string;
    selectedDenominator: { id: string; label?: string };
    quality?: number;
    denominators: { id: string; label?: string; quality?: number }[];
  };
  id: string;
  onCellHover: (cellIndex: number | null) => void;
  onCellClick: (cellIndex: number) => void;
  onSelectDenominator: (index: number, denId: string) => void;
  baseDimension: number;
  calculateHeadingsStyle: (baseDimension: number, vertical: boolean, index: number) => CSSProperties;
}

const HeadingEntry = memo(
  ({
    index,
    vertical,
    className,
    hoveredIndex = -1,
    selectedIndex = -1,
    headerCell,
    id,
    onCellHover,
    onCellClick,
    onSelectDenominator,
    baseDimension,
    calculateHeadingsStyle,
  }: HeadingEntryProps) => {
    const [headingState, setHeadingState] = useGlobalState();

    const switchDenominatorsVisibility = useCallback(
      (ev: Event) => {
        if (headingState.headingId === id) {
          setHeadingState({ headingId: '' });
        } else {
          setHeadingState({ headingId: id });
        }
      },
      [headingState, id, setHeadingState],
    );

    const onMouseOver = useCallback(() => {
      onCellHover(index);
    }, [onCellHover, index]);

    const onMouseOut = useCallback(() => {
      onCellHover(null);
    }, [onCellHover]);

    const onClick = useCallback(
      (ev) => {
        // hack to not select axis on denominators menu open
        // TODO: find less cheating way implement this functionality and get rid of hack
        const target: any = ev.target;
        if (
          target.tagName === 'svg' ||
          target.tagName === 'path' ||
          (target.className && target.className.indexOf && target.className.indexOf('denominator') !== -1)
        )
          return;

        onCellClick(index);
      },
      [onCellClick, index],
    );

    const onSelectDenominatorWrapper = useCallback(
      (denId: string) => {
        setHeadingState({ headingId: '' });
        onSelectDenominator(index, denId);
      },
      [onSelectDenominator, index],
    );

    return (
      <div
        onMouseEnter={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onClick}
        style={getHeadingPositionStyle(vertical, index)}
        className={cn({
          [className || '']: className,
          [styles.axisRecord]: true,
          [styles.hovered]: hoveredIndex === index,
          [styles.selected]: selectedIndex === index,
          [styles.column]: vertical,
          [styles.row]: !vertical,
          [styles.verticalText]: vertical,
          [styles.denominatorsShown]: headingState.headingId === id,
          horizontal: !vertical,
          vertical: vertical,
        })}
      >
        <div style={calculateHeadingsStyle(baseDimension, vertical, index)} className={styles.container}>
          <div className={styles.corner}></div>
          <DenominatorIcon iconId={headerCell.selectedDenominator.id} />
          <div className="qualityLabel">{headerCell.quality ? headerCell.quality : '&nbsp;'}</div>
          <DenominatorsSelector
            onSelectDenominator={onSelectDenominatorWrapper}
            selectedDenominator={headerCell.selectedDenominator}
            denominators={headerCell.denominators}
            label={headerCell.label}
            isOpen={headingState.headingId === id}
            switchDenominatorsVisibility={switchDenominatorsVisibility}
          />
          {headerCell.label}
        </div>
      </div>
    );
  },
);

HeadingEntry.displayName = 'HeadingEntry';

interface TableHeadingProps {
  className?: string;
  selectedIndex?: number | null;
  hoveredIndex?: number | null;
  entries: {
    label: string;
    selectedDenominator: { id: string; label?: string };
    quality?: number;
    denominators: { id: string; label?: string; quality?: number }[];
  }[];
  vertical?: boolean;
  onCellHover: (cellIndex: number | null) => void;
  onCellClick: (cellIndex: number) => void;
  onSelectDenominator: (index: number, denId: string) => void;
  baseDimension: number;
  calculateHeadingsStyle: (baseDimension: number, vertical: boolean, index: number) => CSSProperties;
}

const TableHeading = ({
  className,
  entries,
  vertical = false,
  selectedIndex = -1,
  hoveredIndex = -1,
  onCellHover,
  onCellClick,
  onSelectDenominator,
  baseDimension,
  calculateHeadingsStyle,
}: TableHeadingProps) => {
  const elementsArray: React.ReactElement[] = [];
  if (vertical) {
    for (let i = 0; i < entries.length; i++) {
      const id = `vert_${i}`;
      elementsArray.push(
        <HeadingEntry
          key={id}
          id={id}
          index={i}
          vertical={vertical}
          className={className}
          selectedIndex={selectedIndex}
          hoveredIndex={hoveredIndex}
          headerCell={entries[i]}
          onCellHover={onCellHover}
          onCellClick={onCellClick}
          onSelectDenominator={onSelectDenominator}
          baseDimension={baseDimension}
          calculateHeadingsStyle={calculateHeadingsStyle}
        />,
      );
    }
  } else {
    for (let i = entries.length - 1; i >= 0; i--) {
      const id = `hor_${i}`;
      elementsArray.push(
        <HeadingEntry
          key={id}
          id={id}
          index={i}
          vertical={vertical}
          className={className}
          selectedIndex={selectedIndex}
          hoveredIndex={hoveredIndex}
          headerCell={entries[i]}
          onCellHover={onCellHover}
          onCellClick={onCellClick}
          onSelectDenominator={onSelectDenominator}
          baseDimension={baseDimension}
          calculateHeadingsStyle={calculateHeadingsStyle}
        />,
      );
    }
  }

  return <>{elementsArray.map((el) => el)}</>;
};

export default memo(TableHeading);
