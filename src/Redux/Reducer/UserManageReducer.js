import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { SET_TAI_KHOAN_DANG_NHAP, SET_THONG_TIN_DANG_KI, SET_THONG_TIN_NGUOI_DUNG } from "../Types/UserManageType"


let user ={};
if(localStorage.getItem(USER_LOGIN)){
  user = JSON.parse(localStorage.getItem(USER_LOGIN));

}

const initialState = {
    userLogin : user,
    thongTinNguoiDung : {
      
    },
    thongTinDangKi :{
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      maNhom: '',
      hoTen: ''
    }
}



export const UserManageReducer =  (state = initialState, action) => {
  switch (action.type) {

  case SET_TAI_KHOAN_DANG_NHAP:
{
      const {thongTinDangNhap} = action;
      localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN,thongTinDangNhap.accessToken);
      
      return {...state,userLogin: thongTinDangNhap}
}
  case SET_THONG_TIN_NGUOI_DUNG:{

    state.thongTinNguoiDung = action.thongTinNguoiDung;
    return {...state}

  }
    case SET_THONG_TIN_DANG_KI : {
        state.thongTinDangKi = action.thongTinDangKi;
    }
  default:
    return {...state}
  }


  
}
