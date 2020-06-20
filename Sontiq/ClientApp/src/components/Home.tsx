import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
    <div>
        <React.Fragment>
            <h1>Dashboard</h1>
        </React.Fragment>
    </div>
);

export default connect()(Home);
