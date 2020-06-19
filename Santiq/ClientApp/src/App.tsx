import * as React from 'react';
import { Route } from 'react-router';
import DefaultLayout from './layouts/DefaultLayout';
import GuestLayout from './layouts/LoginLayout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Login from './components/Login';
import './custom.css'
import UserInfo from './components/UserInfo';
import AlertPage from './components/AlertPage';
import UserServiceDetail from './components/UserServiceDetail';

export default () => (
    <div>
        <DefaultLayout exact path='/' component={Home} />
        <GuestLayout  path='/Login' component={Login} />
        <DefaultLayout  path='/counter' component={Counter} />
        <DefaultLayout  path='/fetch-data/:startDateIndex?' component={FetchData} />
        <DefaultLayout  path='/user-info' component={UserInfo} />
        <DefaultLayout  path='/user-service/:startDateIndex?' component={UserServiceDetail} />
        <DefaultLayout  path='/alerts/:startDateIndex?' component={AlertPage} />
    </div>
);
