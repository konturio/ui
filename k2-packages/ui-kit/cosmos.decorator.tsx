const css = (s: { raw: readonly string[] }) => s.raw[0]; // Do nothing, just allow use css`` tag for syntax highlight in ide

const style = css`
  .cosmos-ui-kit-decorator {
    padding: 1em;
    display: flex;
    gap: 2em;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    box-sizing: border-box;
  }
`;

export default ({ children }) => (
  <>
    <style dangerouslySetInnerHTML={{ __html: style }}></style>
    <div className="cosmos-ui-kit-decorator">{children}</div>
  </>
);
