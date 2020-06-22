import * as AlertReducer from './alert/reducers'
import * as AlertType from './alert/types'
import * as UserInfoReducer from './userInfo/reducers'
import * as UserInfo from './userInfo/types'
import * as UserServiceReducer from './userService/reducers'
import * as UserService from './userService/types'
import * as LoginStore from "./LoginStore";

// The top-level state object
export interface ApplicationState {
    loggedInUser: LoginStore.ILoggedInUserState | undefined;
    alertData: AlertType.AlertState | undefined;
    userInfoData: UserInfo.UserInfoState | undefined;
    userServiceData: UserService.UserServiceState | undefined;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    loggedInUser: LoginStore.reducer,
    alertData: AlertReducer.alertReducer,
    userInfoData: UserInfoReducer.userInfoReducer,
    userServiceData: UserServiceReducer.userServiceReducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
