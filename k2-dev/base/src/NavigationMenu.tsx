import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './index.styl';

interface ILink {
  to: string;
  label: string;
  exact?: boolean;
}

function HighlightedLink({ to, label, exact }: ILink) {
  const match = useRouteMatch({
    path: to,
    exact,
  });

  return (
    <div className={match ? styles.activeLink : ''}>
      <Link to={to}>{label}</Link>
    </div>
  );
}

export default function NavigationMenu({ links }: { links: ILink[] }) {
  return (
    <nav className={styles.navigation}>
      {links.map(props => <HighlightedLink key={props.to} {...props} />)}
    </nav>
  );
}
