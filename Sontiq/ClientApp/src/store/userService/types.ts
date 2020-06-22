
export interface UserServiceState {
    isLoading: boolean;
    pageNo?: number;
    subscriptionDetailData?: SubscriptionDetail;
}

export const REQUEST_USER_SERVICE = 'REQUEST_USER_SERVICE'
export const RECEIVE_USER_SERVICE = 'RECEIVE_USER_SERVICE'

export interface RequestUserServiceAction {
    type: typeof REQUEST_USER_SERVICE;
    pageNo: number;
}

export interface ReceiveUserServiceAction {
    type: typeof RECEIVE_USER_SERVICE;
    pageNo: number;
    subscriptionDetailData: SubscriptionDetail;
}

export type UserServiceTypes = RequestUserServiceAction | ReceiveUserServiceAction;


 /*-----------------------------*/
export interface SubscriptionDetail {

    serviceList: UserService[];

    subscriptionType: string;
    subscriptionTotalPrice: number;
    packageModel: boolean;
    packageName: string;
    billingDate: string;
    partnerBilled: boolean;
    isBusinessUser: boolean;
    autoRenewTrialPeriod: boolean;
    isSSOUser: boolean;
    reacceptTermsAndConditions: boolean;
    associationText: string;
    providedByName: string;

    hasError: boolean;
    errors: [];
    caseId: string;
}


export interface UserService {
    displayName: string;
    serviceCode: string;
    active: boolean;
    readyForPurchase: boolean;
    isHidden: boolean;
    productType: string;
    partnerPaid: boolean;
    monthlyPrice: number;
    annualPrice: number;
    addon: boolean;
}