import { GROUPID } from "../util/settings/config";
import { baseService } from "./BaseService";

export class TheaterManagerService extends baseService{

// khi can sua duong dan thi se sua trong nay
    constructor(){
        super()
    }

   
    layDanhSachCumRap = () =>{
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    layThongTinHeThongRap = () =>{
        return this.get('/api/QuanLyRap/LayThongTinHeThongRap');
    }
    layThongTinLichChieuPhim = (maPhim) =>{
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);

    }
}
const Manage = new TheaterManagerService();

export const {layDanhSachCumRap,layThongTinHeThongRap,layThongTinLichChieuPhim} = Manage;
