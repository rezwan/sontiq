import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface AlertState {
    isLoading: boolean;
    startDateIndex?: number;
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
    startDateIndex: number;
}

interface ReceiveAlertsAction {
    type: 'RECEIVE_ALERTS';
    startDateIndex: number;
    alerts: Alert[];
}


type KnownAction = RequestAlertsAction | ReceiveAlertsAction;

export const actionCreators = {
    requestAlerts: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {

        


        const appState = getState();

        console.log(startDateIndex);
        console.log(appState);


        if (appState && appState.alerts && startDateIndex !== appState.alerts.startDateIndex) {
            fetch(`api/alerts?pageNo=${startDateIndex}`)
                .then(response => response.json() as Promise<Alert[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_ALERTS', startDateIndex: startDateIndex, alerts: data });
                });

            dispatch({ type: 'REQUEST_ALERTS', startDateIndex: startDateIndex });
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
                startDateIndex: action.startDateIndex,
                alerts: state.alerts,
                isLoading: true
            };
        case 'RECEIVE_ALERTS':
            return {
                startDateIndex: action.startDateIndex,
                alerts: action.alerts,
                isLoading: false
            };
        default:
            break;
    }

    return state;
};
