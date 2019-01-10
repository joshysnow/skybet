import { bindActionCreators } from 'redux';
import * as Actions from './actions';

export const mapStateToProps = state => ({
  eventDetails: state.events.eventDetails
});

export const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);
