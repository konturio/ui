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

interface QuotientItemProps {
  numeratorId: string;
  denominatorId: string;
  numeratorLabel?: string;
  quality?: number | null;
  onSelectDenominator: (numId: string, denId: string) => void;
}

const QuotientItem = ({
  numeratorId,
  denominatorId,
  numeratorLabel,
  quality,
  onSelectDenominator,
}: QuotientItemProps) => {
  const onClick = useCallback(
    (ev) => {
      ev.stopPropagation();
      onSelectDenominator(numeratorId, denominatorId);
    },
    [onSelectDenominator, numeratorId, denominatorId],
  );
  return (
    <div onClick={onClick}>
      <DenominatorIcon iconId={denominatorId} />
      <div className="qualityLabel">{quality !== null && quality !== undefined ? quality : '&nbsp;'}</div>
      <div className="quotientLabel">{numeratorLabel}</div>
    </div>
  );
};

interface QuotientSelectorProps {
  isOpen: boolean;
  switchDenominatorsVisibility: (ev) => void;
  label: string;
  quotients: {
    id: [string, string];
    label?: string;
    quality?: number;
  }[];
  selectedQuotient: {
    id: [string, string];
    label?: string;
  };
  onSelectDenominator: (numId: string, denId: string) => void;
}

const QuotientSelector = memo(
  ({
    isOpen,
    switchDenominatorsVisibility,
    label,
    quotients,
    selectedQuotient,
    onSelectDenominator,
  }: QuotientSelectorProps) => {
    return (
      <div className={styles.denominators}>
        <div
          className={cn({ [styles.denominatorSelector]: true, [styles.disabled]: quotients.length <= 1 })}
          onClick={switchDenominatorsVisibility}
        >
          <i className="fas fa-caret-down"></i>
        </div>
        <div className={cn({ [styles.denominatorsContainer]: true, [styles.show]: isOpen })}>
          {quotients.map(({ id, label: numeratorLabel, quality }) =>
            JSON.stringify(id) !== JSON.stringify(selectedQuotient.id) ? (
              <QuotientItem
                key={JSON.stringify(id)}
                onSelectDenominator={onSelectDenominator}
                quality={quality}
                numeratorId={id[0]}
                denominatorId={id[1]}
                numeratorLabel={numeratorLabel}
              />
            ) : null,
          )}
        </div>
      </div>
    );
  },
);

QuotientSelector.displayName = 'QuotientSelector';

interface HeadingEntryProps {
  index: number;
  vertical: boolean;
  className?: string;
  hoveredIndex?: number | null;
  selectedIndex?: number | null;
  headerCell: {
    label: string;
    selectedQuotient: {
      id: [string, string];
      label?: string;
    };
    quality?: number;
    quotients: {
      id: [string, string];
      label?: string;
      quality?: number;
    }[];
  };
  id: string;
  onCellHover: (cellIndex: number | null) => void;
  onCellClick: (cellIndex: number) => void;
  onSelectDenominator: (index: number, numId: string, denId: string) => void;
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
      (numId: string, denId: string) => {
        setHeadingState({ headingId: '' });
        onSelectDenominator(index, numId, denId);
      },
      [onSelectDenominator, setHeadingState, index],
    );

    const numberOfAdditionalQuotientsInGroup =
      headerCell.quotients.length > 1 ? (
        <div className={styles.quotientsCountLabel}>+{headerCell.quotients.length - 1} layers</div>
      ) : null;

    return (
      <div
        onMouseEnter={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onClick}
        style={getHeadingPositionStyle(vertical, index)}
        className={cn({
          [className || '']: className,
          [styles.headingEntry]: true,
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
          <DenominatorIcon iconId={headerCell.selectedQuotient.id[1]} />
          <div className="qualityLabel">{headerCell.quality ? headerCell.quality : '&nbsp;'}</div>
          <QuotientSelector
            onSelectDenominator={onSelectDenominatorWrapper}
            selectedQuotient={headerCell.selectedQuotient}
            quotients={headerCell.quotients}
            label={headerCell.label}
            isOpen={headingState.headingId === id}
            switchDenominatorsVisibility={switchDenominatorsVisibility}
          />
          {headerCell.label}
          {numberOfAdditionalQuotientsInGroup}
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
    selectedQuotient: {
      id: [string, string];
      label?: string;
    };
    quality?: number;
    quotients: {
      id: [string, string];
      label?: string;
      quality?: number;
    }[];
  }[];
  vertical?: boolean;
  onCellHover: (cellIndex: number | null) => void;
  onCellClick: (cellIndex: number) => void;
  onSelectDenominator: (index: number, numId: string, denId: string) => void;
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
