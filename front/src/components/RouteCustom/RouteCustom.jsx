import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {NavBar} from '../';

function RouteCustom({children, ...rest}){
    return (
        <>
            <NavBar />
            <Route {...rest} render={() => {
                return children ? children : <Redirect to="/not-found" />;
            }} />
            {/*<Footer />*/}
        </>
    )
}
export default RouteCustom;