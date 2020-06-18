﻿import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as Alert from '../store/Alert';


type UserInfoProps =
    Alert.AlertState
    & typeof Alert.actionCreators;

class AlertPage extends React.PureComponent<UserInfoProps> {

    public componentDidMount() {
        this.ensureDataFetched();
    }


    public componentDidUpdate() {
    }

    public render() {
        return (
            <React.Fragment>
                <h1 id="tabelLabel">Alerts</h1>
                {this.renderForecastsTable()}
            </React.Fragment>
        );
    }

    private ensureDataFetched() {
        this.props.requestAlerts();
    }

    private renderForecastsTable() {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Type</th>

                    <th>Display Name</th>
                    <th>Generated On</th>
                    <th>Created</th>

                    <th>Acknowledge On</th>
                    <th>Threat Date</th>
                    <th>Resolve Date</th>
                    <th>Status</th>
                    <th>Viewed</th>
                    <th>User First Name</th>
                    <th>User Last Name</th>
                    <th>User ID</th>
                    <th>User Is Child</th>
                    <th>Service Key</th>
                    <th>Is Thread</th>
                    <th>Viewed</th>
                        <th>Alert Type Name</th>
                    <th>Case ID</th>
                    <th>Service Type</th>
                    <th>Category</th>
                    <th>Available Sub Resource</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {this.props.alerts.map((alert: Alert.Alert) =>
                    <tr key={alert.id}>
                        <td>{alert.id}</td>
                        <td>{alert.title}</td>
                        <td>{alert.type}</td>
                        <td>{alert.displayName}</td>
                        <td>{alert.generatedOn}</td>
                        <td>{alert.createdDate + " " + alert.createdTime}</td>
                        <td>{alert.acknowledgedOn}</td>
                        <td>{alert.threatDate}</td>
                        <td>{alert.resolveDate}</td>
                        <td>{alert.status}</td>
                        <td>{alert.viewed ? "Yes" : "No"}</td>
                        <td>{alert.userFirstName}</td>
                        <td>{alert.userLastName}</td>
                        <td>{alert.userId}</td>
                        <td>{alert.userIsChild ? "Yes" : "No"}</td>
                        <td>{alert.serviceKey}</td>
                        <td>{alert.isThreat ? "Yes" : "No"}</td>
                        <td>{alert.viewed}</td>
                        <td>{alert.alertTypeName}</td>
                        <td>{alert.caseId}</td>
                        <td>{alert.serviceType}</td>
                        <td>{alert.category}</td>
                        <td>{alert.availableSubResource}</td>
                        <td>{alert.description}</td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.alerts,
    Alert.actionCreators
)(AlertPage as any);

