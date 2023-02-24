import { CHUYEN_LAI_TAB, CHUYEN_TAB, DAT_GHE, DAT_GHE_HOAN_TAT, SET_DANH_SACH_PHONG_VE } from "../Types/TicketManageType"

const stateDefault = {

    chiTietPhongVe: {},
    danhSachGheChon:[
    ],
    tabActive: 1
}

export const TicketManageReduce = (state = stateDefault, action) => {
  switch (action.type) {

    case SET_DANH_SACH_PHONG_VE:
      {
        state.chiTietPhongVe = action.thongTinVe;
        return{...state};
      }
      case DAT_GHE :
        {
         const newState = [...state.danhSachGheChon];
          const index = newState.findIndex(item =>{
            return  (item).maGhe === action.gheChon.maGhe;
          })
          // Nếu k tìm thấy ghế thì sẽ push vô danhSachGheChon
          // còn nếu tìm thấy thì sẽ bỏ ra
          if(index === -1)
          {
            newState.push(action.gheChon);
          }else{
            newState.splice(index,1);
          }
          state.danhSachGheChon = newState;
          return {...state};
        }

      case DAT_GHE_HOAN_TAT :
        {
          state.danhSachGheChon = [];

          return {...state};
        }
       case CHUYEN_TAB :
        {
           state.tabActive = 2;
          return {...state};
        }
        case CHUYEN_LAI_TAB :
      {
          state.tabActive = action.tabKey ;
          return {...state}
      }


  default:
    return {...state}
  }
}
