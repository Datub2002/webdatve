import { Fragment, useEffect } from "react";
import {Route} from "react-router";


export const UserTemplate = (props) =>{ // props == { path, exact, component}


    useEffect(() =>{
        window.scrollTo(0,0);
    })

    const {Component,...restProps} = props;


   
   

        return (
        
            <Route {...restProps} render={(propsRoute) =>{
        
            return <Fragment>
                <div className="flex justify-center h-screen w-screen items-center">
                    <Component {...propsRoute} />
      
                </div>       
            </Fragment>
        }} />)
    

}