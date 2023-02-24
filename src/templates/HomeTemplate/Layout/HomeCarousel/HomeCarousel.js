import { Carousel } from 'antd';
import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getCarouselAction } from '../../../../Redux/Actions/CarouselActions';
import './HomeCarousel.css'
const contentStyle = {
  
  height: '600px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundPosition : 'center',
  backgroundSize : '100%',
  backgroundRepeat : 'no-repeat'
  
};   


function HomeCarousel(props) {

  const {content} = useSelector(state =>state.CarouselReducer)
  const dispatch = useDispatch()
  useEffect(

    () =>{

      // 1 action = {type : '',data},
      //2 (phai co middleware): callBackfunc (dispatch)

      dispatch(getCarouselAction());
    }
    
    ,[])
  

  const renderImg = () =>{
    return content.map((item,i) =>{  
      return <div key={i} >
              <div style={{...contentStyle,backgroundImage : `url(${item.hinhAnh})`} }>
                <img src={item.hinhAnh} className='w-full opacity-0' alt='123'/>
              </div>
        </div>    
    })
  }



    return (
        <Carousel  autoplay>
           {renderImg()}
      </Carousel>
    );
}

export default HomeCarousel;