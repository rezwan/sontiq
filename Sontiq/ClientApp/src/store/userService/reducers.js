"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var initialState = { isLoading: false };
function userServiceReducer(state, action) {
    if (state === void 0) { state = initialState; }
    if (state === undefined) {
        return initialState;
    }
    switch (action.type) {
        case types_1.REQUEST_USER_SERVICE:
            {
                return {
                    isLoading: true,
                    pageNo: action.pageNo,
                    subscriptionDetailData: state.subscriptionDetailData
                };
            }
            ;
        case types_1.RECEIVE_USER_SERVICE:
            {
                return {
                    isLoading: false,
                    pageNo: action.pageNo,
                    subscriptionDetailData: action.subscriptionDetailData
                };
            }
            ;
        default:
            return state;
    }
}
exports.userServiceReducer = userServiceReducer;
//# sourceMappingURL=reducers.js.map