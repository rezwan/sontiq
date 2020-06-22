"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
exports.actionCreators = {
    getUserInfo: function () { return function (dispatch, getState) {
        var appState = getState();
        if (appState && appState.userInfoData) {
            fetch("api/userinfo")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: types_1.GET_USER_INFO, userInfoData: data });
            });
        }
    }; }
};
//# sourceMappingURL=actions.js.map