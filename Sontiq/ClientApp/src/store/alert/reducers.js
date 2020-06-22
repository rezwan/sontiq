"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var initialState = { pageNo: 0, alertData: [] };
function alertReducer(state, action) {
    if (state === void 0) { state = initialState; }
    if (state === undefined) {
        return initialState;
    }
    switch (action.type) {
        case types_1.REQUEST_ALERTS:
            {
                return {
                    pageNo: action.pageNo,
                    alertData: state.alertData
                };
            }
            ;
        case types_1.RECEIVE_ALERTS:
            {
                return {
                    pageNo: action.pageNo,
                    alertData: action.alertData
                };
            }
            ;
        default:
            return state;
    }
}
exports.alertReducer = alertReducer;
//# sourceMappingURL=reducers.js.map