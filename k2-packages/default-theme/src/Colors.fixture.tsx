import s from './style.module.css';

function getVarName(family: string, context: string, shift?: string) {
  return `var(--${family}-${context}${shift ? `-${shift}` : ''})`;
}

function Color({ variableName, small }: { variableName: string; small?: boolean }) {
  return (
    <div
      data-name={variableName}
      onClick={() => navigator.clipboard.writeText(variableName)}
      className={`${s.color} ${small ? s.small : ''}`}
      style={{ '--current-color': variableName } as React.CSSProperties}
    ></div>
  );
}

function ColorSet({ family, context }) {
  return (
    <div className={s.colorSet}>
      <Color variableName={getVarName(family, context, 'up')} small />
      <Color variableName={getVarName(family, context)} />
      <Color variableName={getVarName(family, context, 'down')} small />
    </div>
  );
}

function ColorFamily({ name }) {
  return (
    <>
      <div className={s.familyName}>{name}</div>
      <ColorSet family={name.toLowerCase()} context={'strong'} />
      <ColorSet family={name.toLowerCase()} context={'weak'} />
      <ColorSet family={name.toLowerCase()} context={'back'} />
      <ColorSet family={name.toLowerCase()} context={'text'} />
      <ColorSet family={name.toLowerCase()} context={'line'} />
      <ColorSet family={name.toLowerCase()} context={'icon'} />
      <ColorSet family={name.toLowerCase()} context={'fancy'} />
    </>
  );
}

export default (
  <div className={s.root}>
    <h1> Click on color for copy variable name </h1>
    <div className={s.pallette}>
      <span> Family </span>
      <span> Strong </span>
      <span> Weak </span>
      <span> Back </span>
      <span> Text </span>
      <span> Line </span>
      <span> Icon </span>
      <span> Fancy </span>
      <ColorFamily name="Base" />
      <ColorFamily name="Faint" />
      <ColorFamily name="Accent" />
      <ColorFamily name="Compl" />
      <ColorFamily name="Critic" />
      <ColorFamily name="Warning" />
      <ColorFamily name="Success" />
    </div>
  </div>
);
