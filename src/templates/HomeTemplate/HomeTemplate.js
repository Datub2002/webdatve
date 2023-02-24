import { Fragment, useEffect } from "react";
import {Route} from "react-router"
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";


export const HomeTemplate = (props) =>{ // props == { path, exact, component}
    useEffect(() =>{
        window.scrollTo(0,0);
    })
    const {Component,...restProps} = props;

    return <Route {...restProps} render={(propsRoute) =>{
        // props.location,props.history,props.match
        // propsRoute dùng đê lấy các dữ liệu trên url và từ đó được dùng để điều hướng trang 
        return <Fragment>
           <Header {...propsRoute} />
            <Component {...propsRoute} />

           <Footer />
        </Fragment>
    }} />
}