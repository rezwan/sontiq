import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as UserInfoStore from '../store/UserInfoStore';

// At runtime, Redux will merge together...
type UserInfoProps =
    UserInfoStore.UserInfoState // ... state we've requested from the Redux store
    & typeof UserInfoStore.actionCreators;

class UserInfo extends React.PureComponent<UserInfoProps> {
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
        <h1 id="tabelLabel">User Info</h1>
        {this.renderForecastsTable()}
      </React.Fragment>
    );
  }

    private ensureDataFetched() {
      this.props.requestUserInfo(1);
  }

  private renderForecastsTable() {
      return (
          <table className='table table-striped' aria-labelledby="tabelLabel">
             
              <tbody>
                  <tr>
                      <td>User Name</td>
                      <td>{this.props.userInfo != null ? this.props.userInfo.firstName : ''}</td>
                  </tr>
              </tbody>
          </table>
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
    (state: ApplicationState) => state.userInfoData, // Selects which state properties are merged into the component's props
    UserInfoStore.actionCreators // Selects which action creators are merged into the component's props
)(UserInfo as any);
