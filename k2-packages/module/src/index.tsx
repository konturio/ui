import React from 'react';
import { connect } from 'react-redux';

const Module = ({ temperature }) => (<div>Hello world, Module!, { temperature }</div>);

const mapStateToProps = state => {
  if (!state.geocoderState) {
    return {
      loading: true,
    };
  }

  return {
    temperature: Math.round(state.geocoderState.weather.main.temp),
  };
};

const ConnectedModule = connect(mapStateToProps)(Module);
export default ConnectedModule;
