import { SET_MOVIE, SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../Types/MovieManageType"
import { SET_CHI_TIET_PHIM } from "../Types/TheaterManageType";

const initialState = {
    arrFilm : [
        {
          "maPhim": 10735,
          "tenPhim": "Môn Phái Võ Mèo: Huyền Thoại Một Chú Chó 1",
          "biDanh": "mon-phai-vo-meo-huyen-thoai-mot-chu-cho-1",
          "trailer": "",
          "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/mon-phai-vo-meo-huyen-thoai-mot-chu-cho_gp00.jpg",
          "moTa": "Từ một chú chó gầy gò nhỏ con hay bị bắt nạt, tôi bất đắc dĩ trở thành samurai cứu cả làng mều! 2",
          "maNhom": "GP00",
          "ngayKhoiChieu": "2022-10-06T19:54:43.807",
          "danhGia": 6,
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        }
    ],
    dangChieu : true,
    sapChieu : true,
    arrFilmDef : [],
    filmDetail : {}

}

export const MovieManageReducer =  (state = initialState, action) => {
  switch (action.type) {

  case SET_MOVIE:
    state.arrFilm = action.arrFilm;
    state.arrFilmDef = action.arrFilm;
    return { ...state }
  case SET_PHIM_DANG_CHIEU :
    state.dangChieu = !state.dangChieu;
    state.arrFilm = state.arrFilmDef.filter(item =>item.dangChieu === state.dangChieu);
    return {...state};
  case SET_PHIM_SAP_CHIEU :
    state.sapChieu = !state.sapChieu;
    state.arrFilm = state.arrFilmDef.filter(item =>item.sapChieu === state.sapChieu)  
    return {...state};
    case SET_CHI_TIET_PHIM :
      {

        state.filmDetail = action.filmData;
        return {...state};
      }
  default:
    return {...state}
  }
}
