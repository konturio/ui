import GithubCorner from 'react-github-corner';

export default ({ children }) => (
  <>
    {children}
    <GithubCorner size={40} href="https://github.com/konturio/ui" target="_blank" />
  </>
);
