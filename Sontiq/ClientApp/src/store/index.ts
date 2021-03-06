import * as WeatherForecasts from './WeatherForecasts';
import * as Counter from './Counter';
import * as UserInformationStore from './UserInformationStore';
import * as UserServiceStore from './UserServiceStore';
import * as Alert from './Alert';
import * as LoginStore from "./LoginStore";

// The top-level state object
export interface ApplicationState {
    counter: Counter.CounterState | undefined;
    weatherForecasts: WeatherForecasts.WeatherForecastsState | undefined;
    userInformation: UserInformationStore.UserInfoState | undefined;
    alerts: Alert.AlertState | undefined;
    userServiceData: UserServiceStore.UserServiceState | undefined;
    loggedInUser: LoginStore.ILoggedInUserState | undefined;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer,
    userInformation: UserInformationStore.reducer,
    alerts: Alert.reducer,
    userServiceData: UserServiceStore.reducer,
    loggedInUser: LoginStore.reducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
