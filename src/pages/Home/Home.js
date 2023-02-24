import React, {  useEffect } from 'react';
import HomeMemu from './HomeMenu/HomeMemu';
import {useDispatch,useSelector} from 'react-redux'
import MultipleRowSlick from '../../components/React-Slick/MultipleRowSlick';
import { MovieManageActions } from '../../Redux/Actions/MovieManageActions';
import { layDanhSachHeThongRapAction } from '../../Redux/Actions/TheaterManageAction';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
function Home(props) {

    const dispatch = useDispatch();
    const {arrFilm} = useSelector(state => state.MovieManageReducer);
    const {heThongRapChieu} = useSelector(state => state.TheaterManagerReducer);


    useEffect(
        () =>{
            const action = MovieManageActions();
            dispatch(action);       
            dispatch(layDanhSachHeThongRapAction());
            
        }
        
        ,[])
   
        return (
            
            <div >
            <HomeCarousel   />
            <section className="text-gray-600 body-font" >
                <div className="container px-5 py-24 mx-auto " >
                    <MultipleRowSlick arrFilm={arrFilm}/>
                </div>
            </section>

            <div className="mx-36">
                <HomeMemu quanLyRapChieu={heThongRapChieu} />

            </div>
        </div>
    );
}

export default Home;