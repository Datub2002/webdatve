import { layDanhSachCumRap, layThongTinLichChieuPhim } from "../../services/TheaterManageService";
import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from "../Types/TheaterManageType";



export const layDanhSachHeThongRapAction = () =>{
    return async dispatch =>{
        try{
            const result = await layDanhSachCumRap();
            if(result.status === 200)
            {
                dispatch({
                   type : SET_HE_THONG_RAP_CHIEU,
                   danhSachRap: result.data.content,

                })
            }
        }catch(errors)
        {
             console.log('errors',errors);
        }

    }

}
export const layThongTinChiTietPhim = (id) =>{

    return async dispatch =>{
        try{
            const result = await layThongTinLichChieuPhim(id);
            console.log('result',result);
            if(result.status === 200)
            {
                dispatch({
                    type : SET_CHI_TIET_PHIM,
                    filmData : result.data.content
                })
            }
        }
        catch(errors) {
            console.log('errors',errors.response.data);
        }


    }

}