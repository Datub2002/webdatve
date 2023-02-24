import { datVe, LayDanhSachPhongVe } from "../../services/TicketManageService"
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { DISPLAY_LOADING, HIDE_LOADING } from "../Types/LoadingTypes";
import { CHUYEN_TAB, DAT_GHE_HOAN_TAT, DAT_VE, SET_DANH_SACH_PHONG_VE } from "../Types/TicketManageType";




export const TicketManageAction = (maLichChieu) =>{
    return async dispatch =>{
        try{
            const result = await LayDanhSachPhongVe(maLichChieu);
            if(result.status === 200)
            {
                dispatch({
                    type : SET_DANH_SACH_PHONG_VE,
                    thongTinVe : result.data.content
                }) 
            }
            console.log("result",result);
        }catch(errors)
        {
            console.log('errors' , errors);
        }

    }
}


export const booKingTicketAction = (thongTinDatVe = new ThongTinDatVe()) =>{
        return async dispatch =>{



            try{

                dispatch({
                    type : DISPLAY_LOADING
                })

                const result = await datVe(thongTinDatVe);
                if(result.data.statusCode === 200)
                {
                    dispatch({
                        type: DAT_VE,
                        thongTinVe : result.data.content,
                    })
                    
                }
                
                await dispatch(TicketManageAction(thongTinDatVe.maLichChieu));


                await dispatch({
                      type: DAT_GHE_HOAN_TAT
                  })
               await dispatch({
                    type : HIDE_LOADING
                })
               await dispatch({
                    type : CHUYEN_TAB
                })



                console.log("result", result);
            }catch(errors)
            {
                console.log('errors',errors);
            }
        }
}

