import { GROUPID } from "../util/settings/config";
import { baseService } from "./BaseService";

export class MovieManageService extends baseService{

// khi can sua duong dan thi se sua trong nay
    constructor(){
        super()
    }

    layDanhSachBanner = () =>{
        return this.get('/api/QuanLyPhim/LayDanhSachBanner')
    }
    layDanhSachPhim = () =>{
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
}
const Manage = new MovieManageService();

export const {layDanhSachBanner,layDanhSachPhim} = Manage;
