import s from './style.module.css';

const COLOR_SCHEME_CONFIG = {
  target: ['', 'Back', 'Text', 'Border', 'Icon', 'Fancy'],
  category: ['Base', 'Faint', 'Accent', 'Complimentary', 'Error', 'Warning', 'Success'],
  degree: ['strong', 'weak'],
};

type ColorConfig = typeof COLOR_SCHEME_CONFIG;

function getVarName(target: string, category: string, degree: string, modificator: string) {
  return `--${target ? target.toLocaleLowerCase() + '-' : ''}${category.toLocaleLowerCase()}-${degree}${
    modificator ? '-' + modificator.toLocaleLowerCase() : ''
  }`;
}

function Color({ variableName }) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(variableName);
  return (
    <div
      data-name={variableName}
      onClick={() => navigator.clipboard.writeText(variableName)}
      className={`${s.color} ${s.cell}`}
      style={{ '--current-color': `var(${variableName})` } as React.CSSProperties}
    >
      <span className={value ? s.colorValue : s.emptyColorValue}>{value || 'none'}</span>
    </div>
  );
}

function ColorState({ degree, target, category }: { degree: string; target: string; category: string }) {
  return (
    <div className={s.colorState}>
      <Color variableName={getVarName(target, category, degree, 'up')} />
      <Color variableName={getVarName(target, category, degree, '')} />
      <Color variableName={getVarName(target, category, degree, 'down')} />
    </div>
  );
}

function ColorElement({
  target,
  category,
  config,
  caption,
}: {
  target: string;
  category: string;
  config: ColorConfig;
  caption: boolean;
}) {
  return (
    <div className={s.column}>
      {caption && (
        <>
          <div className={s.categoryCaption}>{category}</div>
          <div className={s.degree}>
            <div>S</div>
            <div>W</div>
          </div>
        </>
      )}
      <div className={s.row}>
        {config.degree.map((degree) => (
          <ColorState key={degree} target={target} category={category} degree={degree} />
        ))}
      </div>
    </div>
  );
}

function ColorContext({ config }: { config: ColorConfig }) {
  return (
    <div className={s.context}>
      <div className={s.palette}>
        {config.target.map((target, i) => (
          <div key={target} className={s.rowPadding}>
            <div className={s.targetCaption}>{target}</div>
            {config.category.map((category) => (
              <ColorElement caption={i === 0} key={category} target={target} category={category} config={config} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default (
  <div className={s.root}>
    <h1> Click on color for copy variable name </h1>
    <ColorContext config={COLOR_SCHEME_CONFIG} />
  </div>
);
