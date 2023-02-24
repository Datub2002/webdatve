import { GROUPID } from "../util/settings/config";
import { baseService } from "./BaseService";

export class UserManagerService extends baseService{

// khi can sua duong dan thi se sua trong nay
   
    layDanhSachNguoiDung = (thongTinUser) =>{
        return this.post('/api/QuanLyNguoiDung/DangNhap',thongTinUser);
    }

    layThongTinNguoiDung = () =>{
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }

    layThongTinDangKi = (thongTinDangKi) =>{
        return this.post('/api/QuanLyNguoiDung/DangKy',thongTinDangKi);
    }


}
const Manage = new UserManagerService();

export const {layDanhSachNguoiDung,layThongTinNguoiDung,layThongTinDangKi} = Manage;
