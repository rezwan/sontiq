import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as UserInfoType from '../store/userInfo/types';
import * as UserInfoActions from '../store/userInfo/actions';

type UserInfoProps =
    UserInfoType.UserInfoState
    & typeof UserInfoActions.actionCreators;

class UserInfo extends React.PureComponent<UserInfoProps> {

    public componentDidMount() {
        this.ensureDataFetched();
    }

    public render() {
        return (
            <React.Fragment>
                <h1 id="tabelLabel">User Info</h1>
                {this.renderUserInfoTable()}
            </React.Fragment>
        );
    }

    private ensureDataFetched() {
        this.props.getUserInfo();
    }

    private renderUserInfoTable() {
        return (
            <React.Fragment>
                {/*this.props.isLoading && <span className="text-center"><h2>Loading...</h2></span>*/}
                {this.props.userInfoData.firstName == null ? '' : <table className='table' aria-labelledby="tabelLabel">

                    <tbody>
                        <tr>
                            <td>User Name: </td>
                            <td>{this.props.userInfoData != null ? this.props.userInfoData.firstName + ' ' + this.props.userInfoData.lastName : ''}</td>
                        </tr>
                        <tr>
                            <td>Address: </td>
                            <td>{this.props.userInfoData != null ? this.props.userInfoData.address1 + ', ' + this.props.userInfoData.address2 : ''}</td>
                        </tr>
                        <tr>
                            <td>Date of Birth: </td>
                            <td>{this.props.userInfoData != null && this.props.userInfoData.dateOfBirth !== '' ? this.props.userInfoData.dateOfBirth : 'Not Monitored'}</td>
                        </tr>
                        <tr>
                            <td>Email Addresses: </td>
                            <td>{this.props.userInfoData != null && this.props.userInfoData.emailAddress !== '' ? this.props.userInfoData.emailAddress : 'Not Monitored'}</td>
                        </tr>
                        <tr>
                            <td>Phone Numberss: </td>
                            <td>{this.props.userInfoData != null && this.props.userInfoData.mobilePhone !== '' ? this.props.userInfoData.mobilePhone : 'Not Monitored'}</td>
                        </tr>
                        <tr>
                            <td>National ID: </td>
                            <td>{this.props.userInfoData != null && this.props.userInfoData.nationalId !== '' ? this.props.userInfoData.nationalId : 'Not Monitored'}</td>
                        </tr>
                        <tr>
                            <td>Driver's License #: </td>
                            <td>{this.props.userInfoData != null && this.props.userInfoData.drivingLicenceNo !== '' ? this.props.userInfoData.drivingLicenceNo : 'Not Monitored'}</td>
                        </tr>
                        <tr>
                            <td>Passport: </td>
                            <td>{this.props.userInfoData != null && this.props.userInfoData.passportNo !== '' ? this.props.userInfoData.passportNo : 'Not Monitored'}</td>
                        </tr>
                        <tr>
                            <td>Medical Insurance: </td>
                            <td>{this.props.userInfoData != null && this.props.userInfoData.medicalInsuranceNo !== '' ? this.props.userInfoData.medicalInsuranceNo : 'Not Monitored'}</td>
                        </tr>
                        <tr>
                            <td>Mother's Maiden Name: </td>
                            <td>{this.props.userInfoData != null && this.props.userInfoData.mothersMaidenName !== '' ? this.props.userInfoData.mothersMaidenName : 'Not Monitored'}</td>
                        </tr>
                    </tbody>
                </table>}
            </React.Fragment>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.userInfoData,
    UserInfoActions.actionCreators
)(UserInfo as any);
