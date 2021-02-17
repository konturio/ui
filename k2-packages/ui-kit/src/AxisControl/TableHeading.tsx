import React, { useEffect, useState } from 'react';
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
  entries: (string | React.ReactElement)[];
  vertical?: boolean;
}

const calculateHeadingsStyle = (vertical: boolean, index: number) => {
  return vertical ? { height: `${240 + index * 25.5}px` } : { width: `${240 + index * 25.5}px` };
};

interface DenominatorsSelectorProps {
  id: string;
}

const DenominatorsSelector = React.memo(({ id }: DenominatorsSelectorProps) => {
  const [selectedHeading, setSelectedHeading] = useGlobalState();

  const switchDenominatorsVisibility = () => {
    setSelectedHeading({ headingId: id });
  };

  return (
    <div className={styles.denominators}>
      <div className={styles.denominatorSelector} onClick={switchDenominatorsVisibility}>
        <i className="fas fa-caret-down"></i>
      </div>
      <div className={clsx({ [styles.denominatorsContainer]: true, [styles.show]: selectedHeading.headingId === id })}>
        <div>
          <div className="qualityLabel">97</div>Gross Domestic Product
        </div>
        <div>
          <div className="qualityLabel">98</div>Total Buildings Estimate
        </div>
        <div>
          <div className="qualityLabel">81</div>Population
        </div>
        <div>
          <div className="qualityLabel">74</div>Area
        </div>
        <div>
          <div className="qualityLabel">93</div>1
        </div>
      </div>
    </div>
  );
});

interface HeadingEntryProps {
  index: number;
  vertical: boolean;
  className?: string;
  hoveredIndex: number;
  selectedIndex: number;
  headerCell: string | React.ReactElement;
  id: string;
}

const HeadingEntry = React.memo(
  ({ index, vertical, className, hoveredIndex, selectedIndex, headerCell, id }: HeadingEntryProps) => (
    <div
      style={getHeadingPositionStyle(vertical, index)}
      className={clsx({
        [className || '']: className,
        [styles.axisRecord]: true,
        [styles.hovered]: hoveredIndex === index,
        [styles.selected]: selectedIndex === index,
        [styles.column]: vertical,
        [styles.row]: !vertical,
        [styles.verticalText]: vertical,
      })}
    >
      <div style={calculateHeadingsStyle(vertical, index)} className={styles.container}>
        <div className={styles.corner}></div>
        <DenominatorsSelector id={id} />
        {headerCell}
      </div>
    </div>
  ),
);

const TableHeading = ({
  className,
  entries,
  vertical = false,
  selectedIndex = -1,
  hoveredIndex = -1,
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
        />,
      );
    }
  }

  return <>{elementsArray.map((el) => el)}</>;
};

export default React.memo(TableHeading);
