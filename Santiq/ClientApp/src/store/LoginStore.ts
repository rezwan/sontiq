import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';
// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ILoggedInUserState {
    loggedInUser: string | null;
    loginId: string | null;
    isLoggedIn: boolean | null;
    provider: string | null;
}
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

 interface SubmitLoginAction { type: 'SUBMIT_LOGIN', loginId: string, provider: string }
 interface LogoutAction { type: 'LOGOUT' }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
 type KnownAction = SubmitLoginAction | LogoutAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {

    submitLogin: (loginId: string, provider: string): AppThunkAction<KnownAction> => (dispatch, getState) => {
        console.log("login");
        fetch(`login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                loginId: loginId,
                provider: provider,
            })
        })
            .then(response => response.json() as Promise<ILoggedInUserState>)
            .then(data => {
                dispatch({ type: 'SUBMIT_LOGIN', loginId, provider });
            });

    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<ILoggedInUserState> = (state: ILoggedInUserState | undefined, incomingAction: Action): ILoggedInUserState => {
    if (state === undefined) {
        return { loggedInUser: null, isLoggedIn: false, loginId: null, provider: null };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'SUBMIT_LOGIN':
            return {
                loggedInUser: state.loggedInUser,
                isLoggedIn: state.isLoggedIn,
                loginId: state.loginId,
                provider: state.provider
            };
        case 'LOGOUT':
            return {
                loggedInUser: null,
                isLoggedIn: false,
                loginId: null,
                provider: ''
            };
        default:
            return state;
    }
};  