import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface AlertState {
    isLoading: boolean;
    alerts: Alert[];
}

export interface Alert {
    id: number;
    isThreat: boolean;
    userFirstName: string;
    userLastName: string;
    serviceKey: string;
    userId: string;
    userIsChild: boolean;
    generatedOn: string;
    acknowledgedOn: string;
    viewed: number;
    alertTypeName: string;
    category: string;
    availableSubResource: string;
    status: string;
    description: string;
    title: string;
    displayName: string;
    resolveDate: string;
    threatDate: string;
    serviceType: string;
    createdDate: string;
    createdTime: string;
    type: string;
    firstViewDate: string;
    hasError: boolean;
    caseId: string;
    alertCategory: string;
    errors: any;
    titleFields: any;
    monitorTypes: any;
}

interface RequestAlertsAction {
    type: 'REQUEST_ALERTS';
}

interface ReceiveAlertsAction {
    type: 'RECEIVE_ALERTS';
    alerts: any;
}


type KnownAction = RequestAlertsAction | ReceiveAlertsAction;

export const actionCreators = {
    requestAlerts: (): AppThunkAction<KnownAction> => (dispatch, getState) => {

        const appState = getState();
        if (appState && appState.alerts) {
            fetch(`api/alerts`)
                .then(response => response.json() as Promise<Alert[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_ALERTS', alerts: data });
                });

            dispatch({ type: 'REQUEST_ALERTS' });
        }
    }
};

const unloadedState: AlertState = { alerts: [], isLoading: false };

export const reducer: Reducer<AlertState> = (state: AlertState | undefined, incomingAction: Action): AlertState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_ALERTS':
            return {
                alerts: state.alerts,
                isLoading: true
            };
        case 'RECEIVE_ALERTS':
            return {
                alerts: action.alerts,
                isLoading: false
            };
        default:
            break;
    }

    return state;
};
