
export interface AlertState {
    pageNo?: number;
    alertData: Alert[];
}

export const REQUEST_ALERTS = 'REQUEST_ALERTS'
export const RECEIVE_ALERTS = 'RECEIVE_ALERTS'

export interface RequestAlertsAction {
    type: typeof REQUEST_ALERTS;
    pageNo: number;
}

export interface ReceiveAlertsAction {
    type: typeof RECEIVE_ALERTS;
    pageNo: number;
    alertData: Alert[];
}

export type AlertTypes = RequestAlertsAction | ReceiveAlertsAction;



 /*-----------------------------*/
export interface Alert {
    id: number;
    isThreat: boolean;
    userFirstName: string;
    userLastName: string;
    serviceKey: string;
    userId: string;
    userIsChild: boolean;
    generatedOn: string;
    acknowledgedOn: string;
    viewed: number;
    alertTypeName: string;
    category: string;
    availableSubResource: string;
    status: string;
    description: string;
    title: string;
    displayName: string;
    resolveDate: string;
    threatDate: string;
    serviceType: string;
    createdDate: string;
    createdTime: string;
    type: string;
    firstViewDate: string;
    hasError: boolean;
    caseId: string;
    alertCategory: string;
    errors: any;
    titleFields: any;
    monitorTypes: any;
}