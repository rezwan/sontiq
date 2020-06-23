import React, {useState, useEffect} from 'react';
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

const UserServiceDetail: React.SFC<UserServiceDetailProps> = ({
    match,
    isLoading,
    requestUserService,
    subscriptionDetailData
}) => {

    useEffect(() => {
        ensureDataFetched();
    });

    function ensureDataFetched() {
        const pageNo = parseInt(match.params.pageNo, 10) || 1;
        requestUserService(pageNo);
    }

    function renderPagination() {
        const prevPageIndex = (parseInt(match.params.pageNo, 10) || 0) - 1;
        const nextPageIndex = (parseInt(match.params.pageNo, 10) || 0) + 1;

        return (
            <div className="d-flex justify-content-between">
                <Link className='btn btn-outline-secondary btn-sm' to={`/user-service/${prevPageIndex}`}>Previous</Link>
                {isLoading && <span>Loading...</span>}
                <Link className='btn btn-outline-secondary btn-sm' to={`/user-service/${nextPageIndex}`}>Next</Link>
            </div>
        );
    }

    function renderUserServiceList() {
        const serviceList = subscriptionDetailData ? subscriptionDetailData.serviceList : [];
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
                                        >{service.active ? "ACTIVE -" : "INACTIVE"}&nbsp;{(service.active && subscriptionDetailData) ? subscriptionDetailData.subscriptionType : ''}</div>
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

    return (
        <React.Fragment>
            <h1 id="tabelLabel">Services</h1>
            {renderUserServiceList()}
            {renderPagination()}
        </React.Fragment>
    );

};

export default connect(
    (state: ApplicationState) => state.userServiceData,
    UserServiceActions.actionCreators
)(UserServiceDetail as any);
