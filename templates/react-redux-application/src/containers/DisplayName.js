// @flow

import type { AllStates } from '../types';

import { connect } from 'react-redux';
import Label from '../components/Label';

type State = {
  name: string;
};

type Dispatch = {};

/**
 * @param {Allstates} state
 */
const mapStateToProps: {
  name: string;
} = (state: AllStates): State => {
  const {
    users
  } = state;

  return {
    name: users.name
  };
};

/**
 * @param {Function} dispatch
 * @param {Object} props
 */
const mapDispatchToProps = (): Dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Label);