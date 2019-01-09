import { bindActionCreators } from 'redux';
import * as Actions from './actions';

export const mapStateToProps = state => ({
  events: state.app.events
});

export const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);
