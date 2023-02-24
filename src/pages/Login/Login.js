import React from "react";
import {NavLink} from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { UserManageAction } from "../../Redux/Actions/UserManageAction";
import { history } from "../../App";
function Login(props) {

    const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau:'',
    },
    onSubmit: values =>{

      const action = UserManageAction(values);
      dispatch(action);


      console.log('values',values);

    },

  });
  return (
   

      <form onSubmit={formik.handleSubmit} className="w-full md:w-1/2 flex flex-col items-center ">
          {/* text login */}
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">
            Đăng Nhập
          </h1>
          {/* email input */}
          <div className="w-3/4 mb-6">
            <input
              type="text"
              name="taiKhoan"
              onChange={formik.handleChange}
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="Tài khoản"
            />
          </div>
          {/* password input */}
          <div className="w-3/4 mb-6">
            <input 
              type="password"
              name="matKhau"
              onChange={formik.handleChange}
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
              placeholder="Mật khẩu"
            />
          </div>
          {/* remember input */}
          <div className="w-3/4 flex flex-row justify-between">
            <div className=" flex items-center gap-x-1">
              <input type="checkbox" name="remember"  className=" w-4 h-4  " />
              <label htmlFor="true" className="text-sm text-slate-400">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="text-sm text-slate-400 hover:text-blue-500">
                Quên mật khẩu ?
              </a>
            </div>
          </div>
          {/* button */}
          <div className="w-3/4 mt-8">
            <button
              type="submit"
              className="py-4 text-base bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
            >
              Đăng Nhập
            </button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm font-medium">
              Không có tài khoản? <NavLink to="register">Đăng Kí</NavLink>
            </h3>
          </div>
        </form>
    
  );
}

export default Login;
