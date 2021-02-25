import React, { useCallback, useEffect, useState } from 'react';
import styles from './tableHeading.module.css';
import clsx from 'clsx';

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

interface TableHeadingProps {
  className?: string;
  selectedIndex?: number;
  hoveredIndex?: number;
  entries: { label: string; selectedDenominator: string; quality?: number }[];
  vertical?: boolean;
  onCellHover: (cellIndex: number | null) => void;
  onCellClick: (cellIndex: number) => void;
}

const calculateHeadingsStyle = (vertical: boolean, index: number) => {
  return vertical ? { height: `${220 + index * 25.5}px` } : { width: `${220 + index * 25.5}px` };
};

interface DenominatorItemProps {
  id: string;
  numinatorLabel: string;
  denominatorLabel: string;
  quality?: number | null;
}

const DenominatorItem = ({ id, numinatorLabel, denominatorLabel, quality }: DenominatorItemProps) => {
  return (
    <div>
      {quality !== null && quality !== undefined ? <div className="qualityLabel">{quality}</div> : null}
      {numinatorLabel} / {denominatorLabel}
    </div>
  );
};

interface DenominatorsSelectorProps {
  isOpen: boolean;
  switchDenominatorsVisibility: () => void;
  label: string;
  denominators: { id: string; label?: string }[];
}

const DenominatorsSelector = React.memo(
  ({ isOpen, switchDenominatorsVisibility, label, denominators }: DenominatorsSelectorProps) => {
    return (
      <div className={styles.denominators}>
        <div className={styles.denominatorSelector} onClick={switchDenominatorsVisibility}>
          <i className="fas fa-caret-down"></i>
        </div>
        <div className={clsx({ [styles.denominatorsContainer]: true, [styles.show]: isOpen })}>
          {denominators.map(({ id: denId, label: denLabel }) => (
            <DenominatorItem key={denId} quality={97} id={denId} numinatorLabel={label} denominatorLabel={denLabel} />
          ))}
        </div>
      </div>
    );
  },
);

interface HeadingEntryProps {
  index: number;
  vertical: boolean;
  className?: string;
  hoveredIndex: number;
  selectedIndex: number;
  headerCell: {
    label: string;
    selectedDenominator: string;
    quality?: number;
    denominators: { id: string; label?: string }[];
  };
  id: string;
  onCellHover: (cellIndex: number | null) => void;
  onCellClick: (cellIndex: number) => void;
}

const HeadingEntry = React.memo(
  ({
    index,
    vertical,
    className,
    hoveredIndex,
    selectedIndex,
    headerCell,
    id,
    onCellHover,
    onCellClick,
  }: HeadingEntryProps) => {
    const [headingState, setHeadingState] = useGlobalState();

    const switchDenominatorsVisibility = useCallback(() => {
      if (headingState.headingId === id) {
        setHeadingState({ headingId: '' });
      } else {
        setHeadingState({ headingId: id });
      }
    }, [headingState, id, setHeadingState]);

    const onMouseOver = useCallback(() => {
      onCellHover(index);
    }, [onCellHover, index]);

    const onMouseOut = useCallback(() => {
      onCellHover(null);
    }, [onCellHover]);

    const onClick = useCallback(() => {
      onCellClick(index);
    }, [onCellClick, index]);

    return (
      <div
        onMouseEnter={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onClick}
        style={getHeadingPositionStyle(vertical, index)}
        className={clsx({
          [className || '']: className,
          [styles.axisRecord]: true,
          [styles.hovered]: hoveredIndex === index,
          [styles.selected]: selectedIndex === index,
          [styles.column]: vertical,
          [styles.row]: !vertical,
          [styles.verticalText]: vertical,
          [styles.denominatorsShown]: headingState.headingId === id,
        })}
      >
        <div style={calculateHeadingsStyle(vertical, index)} className={styles.container}>
          <div className={styles.corner}></div>
          <DenominatorsSelector
            denominators={headerCell.denominators}
            label={headerCell.label}
            isOpen={headingState.headingId === id}
            switchDenominatorsVisibility={switchDenominatorsVisibility}
          />
          {headerCell.quality ? <div className="qualityLabel">{headerCell.quality}</div> : null}
          {headerCell.label}
        </div>
      </div>
    );
  },
);

const TableHeading = ({
  className,
  entries,
  vertical = false,
  selectedIndex = -1,
  hoveredIndex = -1,
  onCellHover,
  onCellClick,
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
        />,
      );
    }
  }

  return <>{elementsArray.map((el) => el)}</>;
};

export default React.memo(TableHeading);
