import { layDanhSachPhim } from "../../services/MovieManageService";
import { SET_MOVIE } from "../Types/MovieManageType";



export const MovieManageActions = () =>{

    return  async (dispatch) =>{
        try{
            const result = await layDanhSachPhim();

            // sau khi lay du lieu ve se gui len reducer
            dispatch({
                type : SET_MOVIE,
                arrFilm : result.data.content,

            })
        }catch(errors){
            console.log('errors',errors);
        }
    };
}