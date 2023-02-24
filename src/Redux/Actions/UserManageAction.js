import { layDanhSachNguoiDung, layThongTinDangKi, layThongTinNguoiDung } from "../../services/UserManagerService";
import { SET_TAI_KHOAN_DANG_NHAP, SET_THONG_TIN_DANG_KI, SET_THONG_TIN_NGUOI_DUNG } from "../Types/UserManageType";
import {history} from '../../App'
export const UserManageAction =(thongTinUser) =>{


    return async dispatch =>{
            try{
                 const result = await layDanhSachNguoiDung(thongTinUser);
                if(result.data.statusCode === 200)
                {
                    dispatch({
                        type: SET_TAI_KHOAN_DANG_NHAP,
                        thongTinDangNhap : result.data.content                       
                    })
                    history.push('/home')
                   
                }
                console.log("result", result);

            }catch(errors)
            {
                console.log('errors',errors);
            }
    }    
}


export const UserInformationAction =() =>{
    return async dispatch =>{
            try{
                 const result = await layThongTinNguoiDung();
                if(result.data.statusCode === 200)
                {
                    dispatch({
                        type: SET_THONG_TIN_NGUOI_DUNG,
                        thongTinNguoiDung : result.data.content                       
                    })
                  
                }
                console.log("result", result);

            }catch(errors)
            {
                console.log('errors',errors);
            }
    }    
}


export const UserRegisterInformationAction =(DangKi) =>{
    return async dispatch =>{
            try{
                 const result = await layThongTinDangKi(DangKi);
                if(result.data.statusCode === 200)
                {
                    dispatch({
                        type: SET_THONG_TIN_DANG_KI,
                        thongTinDangKi : result.data.content                       
                    })
                  
                }
                console.log("result", result);

            }catch(errors)
            {
                console.log('errors',errors);
            }
    }    
}