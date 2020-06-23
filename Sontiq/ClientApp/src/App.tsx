import * as React from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import GuestLayout from './layouts/LoginLayout';
import Home from './components/Home';
import Login from './components/Login';
import './custom.css'
import UserInfo from './components/UserInfo';
import Alert from './components/Alert';
import UserServiceDetail from './components/UserServiceDetail';

export default () => (
    <div className="pl-5 pr-5">
        <DefaultLayout exact path='/' component={Home} />
        <GuestLayout  path='/Login' component={Login} />
        <DefaultLayout  path='/user-info' component={UserInfo} />
        <DefaultLayout path='/user-service/:pageNo?' component={UserServiceDetail} />
        <DefaultLayout path='/alerts/:pageNo?' component={Alert} />
    </div>
);
