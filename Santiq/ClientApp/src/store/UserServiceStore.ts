import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface UserServiceState {
    isLoading: boolean;
    startDateIndex?: number;
    subscriptionDetail?: SubscriptionDetail;
}

export interface SubscriptionDetail {

    serviceList: UserService[];

    subscriptionType: string;
    subscriptionTotalPrice: number;
    packageModel: boolean;
    packageName: string;
    billingDate: string;
    partnerBilled: boolean;
    isBusinessUser: boolean;
    autoRenewTrialPeriod: boolean;
    isSSOUser: boolean;
    reacceptTermsAndConditions: boolean;
    associationText: string;
    providedByName: string;

    hasError: boolean;
    errors: [];
    caseId: string;
}


export interface UserService {
    displayName: string;
    serviceCode: string;
    active: boolean;
    readyForPurchase: boolean;
    isHidden: boolean;
    productType: string;
    partnerPaid: boolean;
    monthlyPrice: number;
    annualPrice: number;
    addon: boolean;
}


// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestUserServiceAction {
    type: 'REQUEST_USER_SERVICE';
    startDateIndex: number;
    subscriptionDetail?: SubscriptionDetail;
}

interface ReceiveUserServiceAction {
    type: 'RECEIVE_USER_SERVICE';
    startDateIndex: number;
    subscriptionDetail: SubscriptionDetail;
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestUserServiceAction | ReceiveUserServiceAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestUserServiceData: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.userServiceData && startDateIndex !== appState.userServiceData.startDateIndex) {
            console.log("inside action creator");
            fetch(`userservice?pageNo=${startDateIndex}`)
                .then(response => response.json() as Promise<SubscriptionDetail>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_USER_SERVICE', startDateIndex: startDateIndex, subscriptionDetail: data });
                });

            dispatch({ type: 'REQUEST_USER_SERVICE', startDateIndex: startDateIndex });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
const unloadedState: UserServiceState = { isLoading: false };

export const reducer: Reducer<UserServiceState> = (state: UserServiceState | undefined, incomingAction: Action): UserServiceState => {

    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;

    switch (action.type) {
        case 'REQUEST_USER_SERVICE':
            return {
                startDateIndex: action.startDateIndex,
                subscriptionDetail: state.subscriptionDetail,
                isLoading: true
            };
        case 'RECEIVE_USER_SERVICE':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            //if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    subscriptionDetail: action.subscriptionDetail,
                    isLoading: false
                };
        //}
        default:
            break;
    }

    return state;
};
