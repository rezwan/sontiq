import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as UserInformationStore from '../store/UserInformationStore';
// At runtime, Redux will merge together...
//type UserInfoProps =
//    UserInfoStore.UserInfoState // ... state we've requested from the Redux store
//    & typeof UserInfoStore.actionCreators;
type UserInfoProps =
    UserInformationStore.UserInfoState // ... state we've requested from the Redux store
    & typeof UserInformationStore.actionCreators; // ... plus incoming routing parameters

class UserInfo extends React.PureComponent<UserInfoProps> {

    // This method is called when the component is first added to the document
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        // this.ensureDataFetched();
    }

    public render() {
        return (
            <React.Fragment>
                <h1 id="tabelLabel">User Info</h1>
                {this.renderForecastsTable()}
            </React.Fragment>
        );
    }

    private ensureDataFetched() {
        this.props.requestUserInfoData();
    }

    private renderForecastsTable() {
        return (
            <React.Fragment>
                {this.props.isLoading && <span className="text-center"><h2>Loading...</h2></span>}
                {this.props.userInfo.firstName == null ? '' : <table className='table' aria-labelledby="tabelLabel">

                    <tbody>
                        <tr>
                            <td>User Name: </td>
                            <td>{this.props.userInfo != null ? this.props.userInfo.firstName + ' ' + this.props.userInfo.lastName : ''}</td>
                        </tr>
                        <tr>
                            <td>Address: </td>
                            <td>{this.props.userInfo != null ? this.props.userInfo.address1 + ', ' + this.props.userInfo.address2 : ''}</td>
                        </tr>
                        <tr>
                            <td>Date of Birth: </td>
                            <td>{this.props.userInfo != null && this.props.userInfo.dateOfBirth !== '' ? this.props.userInfo.dateOfBirth : 'Not Monitored'}</td>
                        </tr>
                        <tr>
                            <td>Email Addresses: </td>
                            <td>{this.props.userInfo != null && this.props.userInfo.emailAddress !== '' ? this.props.userInfo.emailAddress : 'Not Monitored'}</td>
                        </tr>
                        <tr>
                            <td>Phone Numberss: </td>
                            <td>{this.props.userInfo != null && this.props.userInfo.mobilePhone !== '' ? this.props.userInfo.mobilePhone : 'Not Monitored'}</td>
                        </tr>
                        <tr>
                            <td>National ID: </td>
                            <td>{this.props.userInfo != null && this.props.userInfo.nationalId !== '' ? this.props.userInfo.nationalId : 'Not Monitored'}</td>
                        </tr>
                        <tr>
                            <td>Driver's License #: </td>
                            <td>{this.props.userInfo != null && this.props.userInfo.drivingLicenceNo !== '' ? this.props.userInfo.drivingLicenceNo : 'Not Monitored'}</td>
                        </tr>
                        <tr>
                            <td>Passport: </td>
                            <td>{this.props.userInfo != null && this.props.userInfo.passportNo !== '' ? this.props.userInfo.passportNo : 'Not Monitored'}</td>
                        </tr>
                        <tr>
                            <td>Medical Insurance: </td>
                            <td>{this.props.userInfo != null && this.props.userInfo.medicalInsuranceNo !== '' ? this.props.userInfo.medicalInsuranceNo : 'Not Monitored'}</td>
                        </tr>
                        <tr>
                            <td>Mother's Maiden Name: </td>
                            <td>{this.props.userInfo != null && this.props.userInfo.mothersMaidenName !== '' ? this.props.userInfo.mothersMaidenName : 'Not Monitored'}</td>
                        </tr>
                    </tbody>
                </table>}
            </React.Fragment>
        );
    }



    //private renderPagination() {
    //  const prevStartDateIndex = (this.props.startDateIndex || 0) - 5;
    //  const nextStartDateIndex = (this.props.startDateIndex || 0) + 5;

    //  return (
    //    <div className="d-flex justify-content-between">
    //      <Link className='btn btn-outline-secondary btn-sm' to={`/fetch-data/${prevStartDateIndex}`}>Previous</Link>
    //      {this.props.isLoading && <span>Loading...</span>}
    //      <Link className='btn btn-outline-secondary btn-sm' to={`/fetch-data/${nextStartDateIndex}`}>Next</Link>
    //    </div>
    //  );
    //}
}

export default connect(
    (state: ApplicationState) => state.userInformation, // Selects which state properties are merged into the component's props
    UserInformationStore.actionCreators // Selects which action creators are merged into the component's props
)(UserInfo as any);
