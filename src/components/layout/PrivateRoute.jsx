import {Redirect,Route,RouteComponentProps,RouteProps} from "react-router";
import { useSelector } from "react-redux";


export default function PrivateRoute({Component, ...rest}){


    const {user} = useSelector(state => state.account);

    return (
     
        <Route
            {...rest}
            render={props => 
            user? (

               <Component {...props}/>

            )  : (

                <Redirect to={{pathname: "/login", state: {from:props.location}}}/>
            )}
        
        
        />
    );
}