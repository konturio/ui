import s from './style.module.css';

const COLOR_SCHEME_CONFIG = {
  contexts: ['Primary', 'Invert', 'Primary-Outline', 'Invert-Outline', 'Danger'],
  elements: ['Surface', 'Text', 'Icon', 'Border', 'Faint-Border', 'Placeholder', 'Focus-outline'],
  states: ['Regular', 'Hover', 'Active', 'Disabled'],
};

type ColorConfig = typeof COLOR_SCHEME_CONFIG;

function getVarName(context: string, element: string, state: string) {
  return `--${context.toLocaleLowerCase()}-${element.toLocaleLowerCase()}-${state.toLocaleLowerCase()}`;
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

function ColorState({ context, element, state }: { context: string; element: string; state: string }) {
  return (
    <div className={s.colorState}>
      <Color variableName={getVarName(context, element, state)} />
    </div>
  );
}

function ColorElement({ context, element, config }: { context: string; element: string; config: ColorConfig }) {
  return (
    <div className={s.colorElement}>
      <div className={`${s.label} ${s.cell}`}>{element}</div>
      {config.states.map((state) => (
        <ColorState key={state} context={context} element={element} state={state} />
      ))}
    </div>
  );
}

function ColorContext({ name, config }: { name: string; config: ColorConfig }) {
  return (
    <div className={s.context}>
      <h2 className={s.label}>{name}</h2>
      <div className={s.palette}>
        <div className={s.statesLabels}>
          <div className={s.cell}>State / Element</div>
          {config.states.map((state) => (
            <div className={s.cell} key={state}>
              {state}
            </div>
          ))}
        </div>

        {config.elements.map((element) => (
          <ColorElement key={element} context={name} element={element} config={config} />
        ))}
      </div>
    </div>
  );
}

function ColorScheme({ config }: { config: ColorConfig }) {
  const vars: string[] = [];
  COLOR_SCHEME_CONFIG.contexts.forEach((context) => {
    COLOR_SCHEME_CONFIG.elements.forEach((element) => {
      COLOR_SCHEME_CONFIG.states.forEach((state) => {
        vars.push(getVarName(context, element, state));
      });
    });
  });
  console.log(vars.join('\n'));
  return (
    <>
      {config.contexts.map((context) => (
        <ColorContext key={context} name={context} config={config} />
      ))}
    </>
  );
}

export default (
  <div className={s.root}>
    <h1> Click on color for copy variable name </h1>
    <ColorScheme config={COLOR_SCHEME_CONFIG} />
  </div>
);
