"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
function requestAlerts(pageNo) {
    return {
        type: types_1.REQUEST_ALERTS,
        pageNo: pageNo
    };
}
exports.requestAlerts = requestAlerts;
function receiveAlerts(pageNo, alertData) {
    return {
        type: types_1.RECEIVE_ALERTS,
        pageNo: pageNo,
        alertData: alertData
    };
}
exports.receiveAlerts = receiveAlerts;
exports.actionCreators = {
    requestAlerts: function (pageNo) { return function (dispatch, getState) {
        var appState = getState();
        if (appState && appState.alertData && pageNo !== appState.alertData.pageNo) {
            fetch("api/alerts?pageNo=" + pageNo)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                /*dispatch(receiveAlerts(pageNo, data));*/
                dispatch({ type: 'RECEIVE_ALERTS', pageNo: pageNo, alertData: data });
            });
            /* dispatch(requestAlerts(pageNo));*/
            dispatch({ type: 'REQUEST_ALERTS', pageNo: pageNo });
        }
    }; }
};
//# sourceMappingURL=actions.js.map