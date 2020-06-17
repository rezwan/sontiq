import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as UserServiceStore from '../store/UserServiceStore';

// At runtime, Redux will merge together...
type UserServiceDetailProps =
    UserServiceStore.UserServiceState // ... state we've requested from the Redux store
    & typeof UserServiceStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>; // ... plus incoming routing parameters


class UserServiceDetail extends React.PureComponent<UserServiceDetailProps> {
    // This method is called when the component is first added to the document
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }

    public render() {
        return (
            <React.Fragment>
                <h1 id="tabelLabel">Services</h1>
                {this.renderUserServiceList()}
                {this.renderPagination()}
            </React.Fragment>
        );
    }

    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 1;
        this.props.requestUserServiceData(startDateIndex);
    }

    private renderUserServiceList() {

        console.log(this.props.subscriptionDetail);
        const serviceList = this.props.subscriptionDetail ? this.props.subscriptionDetail.serviceList : [];
        if (serviceList) {
            return (
                <React.Fragment>
                    <ul>
                        {serviceList.map((service: UserServiceStore.UserService) =>
                            <li key={service.serviceCode} className="subscription-list" >
                                <div className="input-group">
                                    <img src="finger-print.png" />
                                    <div>
                                        <span>{service.displayName}</span><br />
                                        <div className="service-status-bar"
                                        >{service.active ? "ACTIVE -" : "INACTIVE"}&nbsp;{(service.active && this.props.subscriptionDetail) ? this.props.subscriptionDetail.subscriptionType : ''}</div>
                                    </div>
                                </div>
                            </li>
                        )
                        }
                    </ul ><br />
                </React.Fragment>
            );
        }
        return ("");

    }

    private renderPagination() {
        const prevStartDateIndex = (this.props.startDateIndex || 0) - 1;
        const nextStartDateIndex = (this.props.startDateIndex || 0) + 1;

        return (
            <div className="d-flex justify-content-between">
                <Link className='btn btn-outline-secondary btn-sm' to={`/user-service/${prevStartDateIndex}`}>Previous</Link>
                {this.props.isLoading && <span>Loading...</span>}
                <Link className='btn btn-outline-secondary btn-sm' to={`/user-service/${nextStartDateIndex}`}>Next</Link>
            </div>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.userServiceData, // Selects which state properties are merged into the component's props
    UserServiceStore.actionCreators // Selects which action creators are merged into the component's props
)(UserServiceDetail as any);
