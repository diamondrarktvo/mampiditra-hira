import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import './RouteCustom.css';
import {NavBar} from '../';
import {Footer} from '../'

function RouteCustom({children, ...rest}){
    return (
        <div className='container_route_custom'>
            <NavBar />
            <Route {...rest} render={() => {
                return children ? children : <Redirect to="/not-found" />;
            }} />
            <Footer />
        </div>
    )
}
export default RouteCustom;