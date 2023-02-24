import { layThongTinHeThongRap } from "../../services/TheaterManageService";
import { SET_THONG_TIN_RAP } from "../Types/TheaterManageType";





export const layThongTinRapAction = () =>{
    return async dispatch =>{
        try{
            const result = await layThongTinHeThongRap();
            console.log(result.data);
            if(result.status === 200)
            {
                dispatch({
                    type : SET_THONG_TIN_RAP,
                    danhSachTenRap : result.data.content,
                    
                })
            }
        }catch(errors)
        {
            console.log('errors',errors);
        }
    }
}


