import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import style from './style.styl';

import { I{{moduleName}}State, {{moduleName}}StateField } from './redux/types';

interface IComponentProps {
  className: string,
  onChange: () => void
}

function {{moduleName}}Component({
  className,
  onChange
}: IComponentProps) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    onChange(counter)
  }, [counter]);

  return (
    <div
      className={clsx(style.root, className)}
    >
      Hello world, I am {{ moduleName }}
      Counter: { counter }
      <button type="button" onClick={() => setCounter(c => c + 1)}> Increment </button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const {{moduleName}}State: I{{moduleName}}State = state[{{moduleName}}StateField];
  return {
    foo: {{moduleName}}State.foo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (text: string) => dispatch(/* some action */),
});

const Connected{{moduleName}}Component = connect(
  mapStateToProps,
  mapDispatchToProps,
)({{moduleName}}Component);
export default Connected{{moduleName}}Component;
