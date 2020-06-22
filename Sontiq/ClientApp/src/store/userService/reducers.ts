import { REQUEST_USER_SERVICE, RECEIVE_USER_SERVICE, UserServiceState, UserServiceTypes, SubscriptionDetail } from './types';

const initialState: UserServiceState = { isLoading: false };

export function userServiceReducer(
    state = initialState,
    action: UserServiceTypes
): UserServiceState {

    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case REQUEST_USER_SERVICE: {
            return {
                isLoading: true,
                pageNo: action.pageNo,
                subscriptionDetailData: state.subscriptionDetailData
            }
        };
        case RECEIVE_USER_SERVICE: {
            return {
                isLoading: false,
                pageNo: action.pageNo,
                subscriptionDetailData: action.subscriptionDetailData
            }
        };
        default:
            return state;
    }
}
