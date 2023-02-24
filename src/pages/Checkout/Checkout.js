import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  booKingTicketAction,
  TicketManageAction,
} from "../../Redux/Actions/TicketManageAction";
import { CloseOutlined,HomeOutlined } from "@ant-design/icons";
import style from "./CheckOut.module.css";
import "./CheckOut.css";
import { CHUYEN_LAI_TAB, DAT_GHE } from "../../Redux/Types/TicketManageType";
import _ from "lodash";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { Tabs } from "antd";
import { UserInformationAction } from "../../Redux/Actions/UserManageAction";
import moment from "moment";
import { history } from "../../App";
import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { NavLink } from "react-router-dom";

function Checkout(props) {
  const { userLogin } = useSelector((state) => state.UserManageReducer);
  const { chiTietPhongVe, danhSachGheChon } = useSelector(
    (state) => state.TicketManageReduce
  );
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;

    const action = TicketManageAction(id);
    dispatch(action);
  }, []);

  const renderGhe = () => {
    return danhSachGhe?.map((item, i) => {
      let seatClass = item.loaiGhe === "Vip" ? "gheVip" : "";
      let chosenSeat = item.daDat === true ? "gheDaDat" : "";
      let choosingSeat = "";
      const index = danhSachGheChon.findIndex((ghe) => {
        return ghe.maGhe === item.maGhe;
      });
      if (index !== -1) {
        // tim thay
        choosingSeat = "gheDangDat";
      }

      return (
        <Fragment key={i}>
          <button
            onClick={() => {
              dispatch({
                type: DAT_GHE,
                gheChon: item,
              });
            }}
            disabled={item.daDat}
            className={`${seatClass} ${chosenSeat} ${choosingSeat} ghe`}
          >
            {item.daDat ? <CloseOutlined className="mb-2" /> : item.stt}
          </button>
          {item.stt % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };



  return (
    <div className="min-h-screen mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div className="bg-black w-3/4 h-4"></div>

            <div className={`${style["trapezoid"]} text-center`}>
              <h3 className="pt-3 text-black">Màn Hình</h3>
            </div>
            <div className="mt-5">{renderGhe()}</div>
          </div>
          <div className="flex mt-7 justify-center">
            <table className="divide-y divide-gray-200 w-2/3">
              <thead className="bg-gray-50 p-5">
                <tr>
                  <th className="font-bold text-lg">Ghế đã đặt</th>
                  <th className="font-bold text-lg">Ghế trống</th>
                  <th className="font-bold text-lg">Ghế Vip</th>
                  <th className="font-bold text-lg">Ghế đang đặt</th>
                </tr>
              </thead>
              <tbody className="bg-white  divide-y divide-gray-200">
                <tr>
                  <th>
                    <button className="ghe disable gheDaDat text-center ">
                      X
                    </button>
                  </th>
                  <th>
                    <button className="ghe disable"></button>
                  </th>
                  <th>
                    <button className="ghe disable gheVip "></button>
                  </th>
                  <th>
                    <button className="ghe disable gheDangDat "></button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-3  ">
          <h3 className="text-2xl text-green-400 text-center">
          {danhSachGheChon
                  .reduce((tongTien, ghe) => {
                    return (tongTien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}{" "}
                đ

          </h3>
          <hr />
          <h3 className="text-4xl font-bold mt-1 text-blue-400 text-center">{thongTinPhim?.tenPhim}</h3>

          <p className="text-base font-bold">
            Địa Điểm: {thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}
          </p>
          <p className="text-base font-bold">
            Ngày Chiếu : {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}
          </p>
          <hr />
          <div className="flex my-5 justify-between">
            <div>
              <span className="text-red-400 text-xl font-semibold">Ghế</span>
              {_.sortBy(danhSachGheChon, ["stt"]).map((item, i) => {
                return (
                  <span
                    className="text-green-400 font-semibold text-lg ml-2"
                    key={i}
                  >
                    {item.stt}
                  </span>
                );
              })}
            </div>
            <div>
              <span className="text-green-400 text-xl font-semibold">
                {danhSachGheChon
                  .reduce((tongTien, ghe) => {
                    return (tongTien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}{" "}
                đ
              </span>
            </div>
          </div>
          <hr />
          <div className="my-5">
            <div className="text-base font-semibold italic">E-Mail</div>
            <div className="font-semibold">{userLogin.email}</div>
          </div>
          <hr />
          <div className="my-5">
            <div className="text-base font-semibold italic">Phone Number</div>
            <div className="font-semibold">{userLogin.soDT}</div>
          </div>
          <hr />
          {/* <div className="my-5 flex justify-between">
            <div>
              <div className="text-base">Mã giảm giá</div>
              <div className="font-semibold">Nhập tại đây...</div>
            </div>
            <div className="mt-1">
                <button className="text-white p-2 bg-slate-500 rounded-lg">
                    Áp dụng
                </button>
            </div>
          </div>
          <hr/>
          <div className="my-5">
            <div>
                <p className="text-lg">Hình thức thanh toán</p>
            </div>
            <div>
                <p className="text-base text-red-500">Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.</p>
            </div>
          </div>
          <hr/> */}
          <div className="h-1/2 mb-0 flex justify-center items-center ">
            <button
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = props.match.params.id;
                thongTinDatVe.danhSachVe = danhSachGheChon;
                console.log("thong tin ve", thongTinDatVe);

                dispatch(booKingTicketAction(thongTinDatVe));
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
            >
              Đặt Vé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Function = (props) => {
  const dispatch = useDispatch();
  const {userLogin} = useSelector(state =>state.UserManageReducer);
  const { tabActive } = useSelector((state) => state.TicketManageReduce);

  useEffect(() =>{
      return () =>{
        dispatch({
          type: CHUYEN_LAI_TAB,
          tabKey: 1,
        });
      }
  },[])

  const operations = <Fragment>
    {!_.isEmpty(userLogin) ?
    <Fragment>
     <button
     className="mr-2"
      onClick={() =>{
        history.push('/profile')
      }}
    >
      <div className="rounded-full text-base w-10 h-10 bg-pink-300 flex justify-center items-center ">
        {userLogin.taiKhoan.substr(0,1)}
      </div>
      </button> 
      <button
        onClick={() =>{
          localStorage.removeItem(USER_LOGIN);
          localStorage.removeItem(TOKEN);
          history.push('/home');
          window.location.reload();
        }}
       className="bg-red-600 p-2 text-white">Log Out</button>
    </Fragment>
    : ''}
  </Fragment>



  return (
    <div className="pl-3">
      <Tabs
        tabBarExtraContent={operations}
        activeKey={tabActive}
        defaultActiveKey="1"
        onChange={(key) => {
          dispatch({
            type: CHUYEN_LAI_TAB,
            tabKey: key,
          });
        }}
        items={[
          {
            label: `01 CHỌN GHẾ & THANH TOÁN`,
            key: 1,
            children: <Checkout {...props} />,
          },
          {
            label: `02 KẾT QUẢ ĐẶT VÉ`,
            key: 2,
            children: <KetQuaDatVe {...props} />,
          },,
          {
            label:<div className="  ml-2 ">
              <NavLink to='/home'><HomeOutlined style={{
                fontSize: 25

              }} /></NavLink>
            </div>,
            key: 3,
            
          },
        ]}
      />
    </div>
  );
};

function KetQuaDatVe(props) {
  const { thongTinNguoiDung } = useSelector((state) => state.UserManageReducer);
  const dispatch = useDispatch();
  const {danhSachGheChon } = useSelector(
    (state) => state.TicketManageReduce
  );
  useEffect(() => {
    const action = UserInformationAction();
    dispatch(action);
  }, []);

  console.log("thong tin nguoi dung", thongTinNguoiDung);

  const renderItemTickets = () => {
    return thongTinNguoiDung.thongTinDatVe?.map((item, i) => {
      const seats = _.first(item.danhSachGhe);
      return (
        <div key={i} className=" p-4 lg:w-1/4 md:w-1/2   ">
          <div className="h-full flex flex-col items-center  text-center">
            <img
              alt="team"
              className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
              src={item.hinhAnh}
            />
            <div className="w-full">
              <h2 className="title-font font-medium text-xl text-gray-900">
                {item.tenPhim}
              </h2>
              <p className="mb-4  text-base">
                Ngày chiếu: {moment(item.ngayDat).format("DD-MM-YYYY")} - Giờ
                chiếu: {moment(item.ngayDat).format("hh:mm A")}
              </p>
              <p className="text-base">Địa điểm: {seats.tenHeThongRap}</p>
              <p className="text-base">
                Tên Rạp : {seats.tenCumRap} - Ghế:{" "}
                {item.danhSachGhe.map((ghe, i) => {
                  return <span key={i}>[{ghe.tenGhe}]</span>;
                })}
              </p>

              <p className="text-base">
               Tổng tiền :  {danhSachGheChon
                  .reduce((tongTien, ghe) => {
                    return (tongTien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}{" "}
                đ
              </p>


            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold title-font mb-4 text-gray-900">
            Thông Tin Vé
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
            Chi tiết vé ở bên dưới
          </p>
        </div>
        <div className=" flex items-center   text-center w-full mb-20">
          {renderItemTickets()}
        </div>
      </div>
    </section>
  );
}

export default Function;
