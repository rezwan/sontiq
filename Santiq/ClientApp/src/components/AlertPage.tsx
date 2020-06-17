import * as React from 'react';
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
                    <th>User First Name</th>
                    <th>User Last Name</th>
                    <th>Service Key</th>
                </tr>
                </thead>
                <tbody>
                {this.props.alerts.map((alert: Alert.Alert) =>
                    <tr key={alert.id}>
                        <td>{alert.id}</td>
                        <td>{alert.userFirstName}</td>
                        <td>{alert.userLastName}</td>
                        <td>{alert.serviceKey}</td>
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