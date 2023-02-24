
import { SET_CAROUSEL } from '../Types/CarouselTypes';

const initialState = {
    "statusCode": 200,
    "message": "Xử lý thành công!",
    "content": [
      {
        "maBanner": 1,
        "maPhim": 1282,
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"
      },    
    ],
    "dateTime": "2022-10-12T23:21:15.696122+07:00",
    "messageConstants": null
  }

export const CarouselReducer =  (state = initialState, action) => {
  switch (action.type) {

  case SET_CAROUSEL:
    state.content = action.content;
    return { ...state }

  default:
    return state
  }
}
