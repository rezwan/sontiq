import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';
import UserInfo from '../components/UserInfo';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface UserInfoState {
    isLoading: boolean;
    userInfo: UserInfo;
}

export interface UserInfo {
    userId?: string;
    firstName?: string;
    middleInitial?: string; 
    lastName?: string;
    address1?: string; 
    address2?: string; 
    city?: string;
    state?: string;
    zip?: string;
    dateOfBirth?: string;
    emailAddress?: string; 
    homePhone?: string;
    workPhone?: string;
    mobilePhone?: string; 
    nationalId?: string;
    drivingLicenceNo?: string; 
    passportNo?: string;
    medicalInsuranceNo?: string;
    mothersMaidenName?: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestUserInfoAction {
    type: 'REQUEST_USER_INFO';
    userInfo?: UserInfo; 
}

interface ReceiveUserInfoAction {
    type: 'RECEIVE_USER_INFO';
    userInfo: UserInfo;
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestUserInfoAction | ReceiveUserInfoAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestUserInfo: (startDateIndex: number) : AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
       // if (appState && appState.weatherForecasts && startDateIndex !== appState.weatherForecasts.startDateIndex) {
            fetch(`userinfo`)
                .then(response => response.json() as Promise<UserInfo>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_USER_INFO', userInfo: data });
                });

            dispatch({ type: 'REQUEST_USER_INFO'});
       // }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: UserInfoState = { userInfo: {}, isLoading: false };

export const reducer: Reducer<UserInfoState> = (state: UserInfoState | undefined, incomingAction: Action): UserInfoState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;

    console.log(action.type +": " + action.userInfo);

   
    switch (action.type) {
        case 'REQUEST_USER_INFO':
            return {
                isLoading: true,
                userInfo: state.userInfo
            };
        case 'RECEIVE_USER_INFO':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            return {
                userInfo: action.userInfo,
                isLoading: false
            };
        default:
            break;
    }

    return state;
};
