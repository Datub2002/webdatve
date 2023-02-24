import { SET_HE_THONG_RAP_CHIEU } from "../Types/TheaterManageType"

const initialState = {
        heThongRapChieu : [],
        
        
}

export const TheaterManagerReducer = (state = initialState, action) => {
  switch (action.type) {

  case SET_HE_THONG_RAP_CHIEU:
        state.heThongRapChieu = action.danhSachRap;
    return { ...state}

  default:
    return {...state}
  }
}


