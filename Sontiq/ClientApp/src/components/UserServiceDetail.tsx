import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as UserServiceType from '../store/userService/types';
import * as UserServiceActions from '../store/userService/actions';

type UserServiceDetailProps =
    UserServiceType.UserServiceState
    & typeof UserServiceActions.actionCreators
    & RouteComponentProps<{ pageNo: string }>;


class UserServiceDetail extends React.PureComponent<UserServiceDetailProps> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

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
        const pageNo = parseInt(this.props.match.params.pageNo, 10) || 1;
        this.props.requestUserService(pageNo);
    }

    private renderUserServiceList() {

        const serviceList = this.props.subscriptionDetailData ? this.props.subscriptionDetailData.serviceList : [];
        if (serviceList) {
            return (
                <React.Fragment>
                    <ul>
                        {serviceList.map((service: UserServiceType.UserService) =>
                            <li key={service.serviceCode} className="subscription-list" >
                                <div className="input-group">
                                    <img src="finger-print.png" />
                                    <div>
                                        <span>{service.displayName}</span><br />
                                        <div className="service-status-bar"
                                        >{service.active ? "ACTIVE -" : "INACTIVE"}&nbsp;{(service.active && this.props.subscriptionDetailData) ? this.props.subscriptionDetailData.subscriptionType : ''}</div>
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
        const prevPageIndex = (this.props.pageNo || 0) - 1;
        const nextPageIndex = (this.props.pageNo || 0) + 1;

        return (
            <div className="d-flex justify-content-between">
                <Link className='btn btn-outline-secondary btn-sm' to={`/user-service/${prevPageIndex}`}>Previous</Link>
                {this.props.isLoading && <span>Loading...</span>}
                <Link className='btn btn-outline-secondary btn-sm' to={`/user-service/${nextPageIndex}`}>Next</Link>
            </div>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.userServiceData,
    UserServiceActions.actionCreators
)(UserServiceDetail as any);
