import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';
// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ILoggedInUserState {
    userInfo?: UserInfo;
}

export interface UserInfo {
    id?: number;
    fullName?: string;
    userType?: string;
    workCaseID?: string;
    partnerID?: string;
    subscriptionKey?: string;
}
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

interface SubmitLoginAction { type: 'SUBMIT_LOGIN', userInfo: UserInfo; }
interface LogoutAction { type: 'LOGOUT', userInfo: { }}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
 type KnownAction = SubmitLoginAction | LogoutAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {

    submitLogin: (loginId: string, provider: string): AppThunkAction<KnownAction> => (dispatch, getState) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                loginId: loginId,
                provider: provider,
            })
        };

        fetch(`api/login`, requestOptions)
            .then(response => response.json() as Promise<UserInfo>)
            .then(data => {
                dispatch({ type: 'SUBMIT_LOGIN', userInfo: data });
                console.log(data);
            });

    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.



export const reducer: Reducer<ILoggedInUserState> = (state: ILoggedInUserState | undefined, incomingAction: Action): ILoggedInUserState => {
    if (state === undefined) {
        return { userInfo: {}};
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'SUBMIT_LOGIN':
            return {
                userInfo: action.userInfo
            };
        case 'LOGOUT':
            return {
                userInfo: {}
            };
        default:
            return state;
    }
};  