import { memo, useCallback } from 'react';
import DenominatorIcon from '../DenominatorIcon/DenominatorIcon';
import cn from 'clsx';
import styles from './QuotientSelector.module.css';

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
  type: 'horizontal' | 'vertical';
}

export const QuotientSelector = memo(
  ({
    isOpen,
    switchDenominatorsVisibility,
    quotients,
    selectedQuotient,
    onSelectDenominator,
    type,
  }: QuotientSelectorProps) => {
    return (
      <div
        className={cn({
          [styles.denominators]: true,
          [styles.row]: type === 'horizontal',
          [styles.column]: type === 'vertical',
        })}
      >
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
