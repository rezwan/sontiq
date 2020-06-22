"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var initialState = {
    userInfoData: new types_1.UserInfo()
};
function userInfoReducer(state, action) {
    if (state === void 0) { state = initialState; }
    if (state === undefined) {
        return initialState;
    }
    switch (action.type) {
        case types_1.GET_USER_INFO:
            {
                return {
                    userInfoData: action.userInfoData
                };
            }
            ;
        default:
            return state;
    }
}
exports.userInfoReducer = userInfoReducer;
//# sourceMappingURL=reducers.js.map