import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import style from './style.styl';

interface HighlightedLinkProps {
  to: string;
  label: string;
  exact?: boolean;
}

function HighlightedLink({ to, label, exact }: HighlightedLinkProps) {
  const match = useRouteMatch({
    path: to,
    exact,
  });

  return (
    <div className={match ? style.activeLink : ''}>
      <Link to={to}>{label}</Link>
    </div>
  );
}

export default function NavigationMenu({ links }: { links: HighlightedLinkProps[] }) {
  return (
    <nav className={style.navigation}>
      {links.map((props) => (
        <HighlightedLink key={props.to} {...props} />
      ))}
    </nav>
  );
}
