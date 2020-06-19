import React from 'react';
import { Route } from "react-router-dom";
import NavMenu from './NavMenu';
interface IDefaultProps {
    component: any;
    path?: string;
    exact?: boolean;
}

const Guest: React.SFC<IDefaultProps> = (props) => {
    const { component: Component, ...rest } = props;
    return <Route {...rest} render={matchProps => (
        <div className="defaultLayout">
            <Component {...matchProps} />
        </div>
    )}/>;
};

export default Guest;