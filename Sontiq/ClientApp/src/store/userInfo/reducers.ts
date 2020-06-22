import { UserInfoState, UserInfo, UserInfoTypes, GET_USER_INFO } from './types';

const initialState: UserInfoState = {
    userInfoData: new UserInfo()
};

export function userInfoReducer(
    state = initialState,
    action: UserInfoTypes
): UserInfoState {

    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case GET_USER_INFO: {
            return {
                userInfoData: action.userInfoData
            }
        };

        default:
            return state;
    }
}
