import { Animation } from '.';

export default (
  <div style={{ display: 'flex', flexFlow: 'column nowrap', gap: '2em', maxWidth: '400px' }}>
    <Animation variant="fade-in" direction="bottom-top">Some content</Animation>
    <Animation variant="fade-in" direction="top-bottom">Some content</Animation>
    <Animation variant="fade-in" direction="left-right">Some content</Animation>
    <Animation variant="fade-in" direction="right-left">Some content</Animation>
    <Animation variant="fade-in">Some content</Animation>
  </div>
);
