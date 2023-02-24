import { Fragment, useEffect } from "react";
import {Route,Redirect} from "react-router"
import { USER_LOGIN } from "../../util/settings/config";


export const CheckoutTemplate = (props) =>{ // props == { path, exact, component}


    useEffect(() =>{
        window.scrollTo(0,0);
    })


    const {Component,...restProps} = props;


    if(!localStorage.getItem(USER_LOGIN) )
    {
        return <Redirect to='/login' />
    }else{

        return (
        
            <Route {...restProps} render={(propsRoute) =>{
        
            return <Fragment>
                <Component {...propsRoute} />       
            </Fragment>
        }} />)
    }

}