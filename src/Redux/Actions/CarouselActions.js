import { layDanhSachBanner } from '../../services/MovieManageService';
import { SET_CAROUSEL } from '../Types/CarouselTypes';



export const getCarouselAction = () =>{

    return async (dispatch) =>{
        try{
            const result = await layDanhSachBanner();
            dispatch({
                type : SET_CAROUSEL,
                content : result.data.content,

            })
        }catch(errors){
            console.log('errors',errors);
        }
    };
}