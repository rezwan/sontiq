import { REQUEST_ALERTS, RECEIVE_ALERTS, AlertState, AlertTypes, Alert } from './types';

const initialState: AlertState = { pageNo: 0, alertData: [] };

export function alertReducer(
    state = initialState,
    action: AlertTypes
): AlertState {

    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case REQUEST_ALERTS: {
            return {
                pageNo: action.pageNo,
                alertData: state.alertData
            }
        };
        case RECEIVE_ALERTS: {
            return {
                pageNo: action.pageNo,
                alertData: action.alertData
            }
        };
        default:
            return state;
    }
}
