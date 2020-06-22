
export interface UserInfoState {
    userInfoData: UserInfo;
}

export const GET_USER_INFO = 'GET_USER_INFO'

export interface GetUserInfoAction {
    type: typeof GET_USER_INFO;
    userInfoData: UserInfo;
}


export type UserInfoTypes = GetUserInfoAction;


/*-----------------------------*/
export class UserInfo {
    userId: string;
    firstName: string;
    middleInitial: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    dateOfBirth: string;
    emailAddress: string;
    homePhone: string;
    workPhone: string;
    mobilePhone: string;
    nationalId: string;
    drivingLicenceNo: string;
    passportNo: string;
    medicalInsuranceNo: string;
    mothersMaidenName: string;

    constructor() {
        this.userId = '';
        this.firstName = '';
        this.middleInitial = '';
        this.lastName = '';
        this.address1 = '';
        this.address2 = '';
        this.city = '';
        this.state = '';
        this.zip = '';
        this.dateOfBirth = '';
        this.emailAddress = '';
        this.homePhone = '';
        this.workPhone = '';
        this.mobilePhone = '';
        this.nationalId = '';
        this.drivingLicenceNo = '';
        this.passportNo = '';
        this.medicalInsuranceNo = '';
        this.mothersMaidenName = '';
    }
}