"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
exports.actionCreators = {
    requestUserService: function (pageNo) { return function (dispatch, getState) {
        var appState = getState();
        if (appState && appState.userServiceData && pageNo !== appState.userServiceData.pageNo) {
            fetch("api/userservice?pageNo=" + pageNo)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: types_1.RECEIVE_USER_SERVICE, pageNo: pageNo, subscriptionDetailData: data });
            });
            dispatch({ type: types_1.REQUEST_USER_SERVICE, pageNo: pageNo });
        }
    }; }
};
//# sourceMappingURL=actions.js.map