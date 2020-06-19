import React from 'react';
import { Route } from "react-router-dom";
import NavMenu from './NavMenu';
interface IDefaultProps {
    component: any;
    path?: string;
    exact?: boolean;
}

const Default: React.SFC<IDefaultProps> = (props) => {
    const { component: Component, ...rest } = props;
    return <Route {...rest} render={matchProps => (
        <div className="defaultLayout">
            <NavMenu/>
            <Component {...matchProps} />
        </div>
    )}/>;
};

export default Default;