import { Action, Reducer } from 'redux';
import { AppThunkAction } from '../';
import { GET_USER_INFO, UserInfoTypes, UserInfo } from './types';

export const actionCreators = {
    getUserInfo: (): AppThunkAction<UserInfoTypes> => (dispatch, getState) => {

        const appState = getState();
        if (appState && appState.userInfoData) {
            fetch(`api/userinfo`)
                .then(response => response.json() as Promise<UserInfo>)
                .then(data => {
                    dispatch({ type: GET_USER_INFO, userInfoData: data });
                });
        }
    }
};

