import { GROUPID } from "../util/settings/config";
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { baseService } from "./BaseService";

export class MovieManageService extends baseService{

// khi can sua duong dan thi se sua trong nay
    constructor(){
        super()
    }

   
   
    LayDanhSachPhongVe = (maLichChieu) =>{
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }


    datVe = (thongTinDatVe = new ThongTinDatVe()) =>{
        return this.post(`/api/QuanLyDatVe/DatVe`,thongTinDatVe);
    }

}
const Manage = new MovieManageService();

export const {LayDanhSachPhongVe,datVe} = Manage;
