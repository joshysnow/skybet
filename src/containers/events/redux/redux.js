import { bindActionCreators } from 'redux';
import * as Actions from './actions';

export const mapStateToProps = state => ({
  events: state.events.events
});

export const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);
