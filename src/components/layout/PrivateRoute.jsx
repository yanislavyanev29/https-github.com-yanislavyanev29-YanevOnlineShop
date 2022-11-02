import {Redirect,Route} from "react-router";
import { useSelector } from "react-redux";
import { Component } from "react";


export default function PrivateRoute({component, roles,...rest}){

    const user = useSelector(state => state.account);

    return (

        <Route {...rest} render={props => {
            if(!user){
                return <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
            }

            if(roles && !roles.some(r => user.roles?.include(r))){
                // toast.error('Not authorised to access this area');
                return <Redirect to={{pathname: "/catalog"}} />

            }
            return <Component {...props}/>
        }}  />
    );
}