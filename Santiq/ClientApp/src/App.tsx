import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

import './custom.css'
import UserInfo from './components/UserInfo';
import AlertPage from './components/AlertPage';
import UserServiceDetail from './components/UserServiceDetail';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/user-info' component={UserInfo} />
        <Route path='/user-service/:startDateIndex?' component={UserServiceDetail} />
        <Route path='/alerts' component={AlertPage} />
    </Layout>
);
