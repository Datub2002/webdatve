import { SET_THONG_TIN_RAP } from "../Types/TheaterManageType"

const initialState = {
    infoTheater : [],

}

export const InfoTheaterReducer = (state = initialState, action) => {
  switch (action.type) {

  case SET_THONG_TIN_RAP:
        state.infoTheater = action.danhSachTenRap;
    return { ...state};

  default:
    return {...state}
  }
}
