import { Action, Reducer } from 'redux';
import { AppThunkAction } from '../'; 
import { REQUEST_ALERTS, RECEIVE_ALERTS, AlertTypes, Alert } from './types';


export const actionCreators = {
    requestAlerts: (pageNo: number): AppThunkAction<AlertTypes> => (dispatch, getState) => {

        const appState = getState();

        if (appState && appState.alertData && pageNo !== appState.alertData.pageNo) {
            fetch(`api/alerts?pageNo=${pageNo}`)
                .then(response => response.json() as Promise<Alert[]>)
                .then(data => {
                    /*dispatch(receiveAlerts(pageNo, data));*/
                    dispatch({ type: 'RECEIVE_ALERTS', pageNo: pageNo, alertData: data });
                });

            /* dispatch(requestAlerts(pageNo));*/
            dispatch({ type: 'REQUEST_ALERTS', pageNo: pageNo });
        }
    }
};

