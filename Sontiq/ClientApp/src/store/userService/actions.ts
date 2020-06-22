import { AppThunkAction } from '../'; 
import { REQUEST_USER_SERVICE, RECEIVE_USER_SERVICE, UserServiceTypes, SubscriptionDetail } from './types';


export const actionCreators = {
    requestUserService: (pageNo: number): AppThunkAction<UserServiceTypes> => (dispatch, getState) => {

        const appState = getState();

        if (appState && appState.userServiceData && pageNo !== appState.userServiceData.pageNo) {
            fetch(`api/userservice?pageNo=${pageNo}`)
                .then(response => response.json() as Promise<SubscriptionDetail>)
                .then(data => {
                    dispatch({ type: RECEIVE_USER_SERVICE, pageNo: pageNo, subscriptionDetailData: data });
                });

            dispatch({ type: REQUEST_USER_SERVICE, pageNo: pageNo });
        }
    }
};

