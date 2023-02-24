import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { UserRegisterInformationAction } from "../../Redux/Actions/UserManageAction";
import { GROUPID } from "../../util/settings/config";

function Register(props) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        repeatPassword: '',
        name: '',
        email: '',
        phone: '',
      });
    
      const [errors, setErrors] = useState({
        password: '',
        repeatPassword: '',
        phone: '',
      });
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
    
        if (event.target.name === 'password') {
          if (event.target.value.length < 8) {
            setErrors({
              ...errors,
              password: 'Password must be at least 8 characters long',
            });
          } else {
            setErrors({
              ...errors,
              password: '',
            });
          }
        }
    
        if (event.target.name === 'repeatPassword') {
          if (event.target.value !== formData.password) {
            setErrors({
              ...errors,
              repeatPassword: 'Password does not match',
            });
          } else {
            setErrors({
              ...errors,
              repeatPassword: '',
            });
          }
        }
    
        if (event.target.name === 'phone') {
          if (!/^\d{10}$/.test(event.target.value)) {
            setErrors({
              ...errors,
              phone: 'Phone number must be 10 digits and contain only numbers',
            });
          } else {
            setErrors({
              ...errors,
              phone: '',
            });
          }
        }
      };
      const dispatch = useDispatch();
      const handleSubmit = (event) => {
        event.preventDefault();
        
        if (
          !username ||
          !password ||
          !repeatPassword ||
          !name ||
          !email ||
          !phone ||
          errors.password ||
          errors.repeatPassword ||
          errors.phone
        ) {
          return;
        }
            // Call API
            const action = UserRegisterInformationAction({
              taiKhoan: username,
              matKhau: password,
              email: email,
              soDt: phone,
              maNhom: GROUPID,
              hoTen: name
            })
            dispatch(action);


        alert('Đăng Ký Thành Công');
      };
    
      const { username, password, repeatPassword, name, email, phone } = formData;
  return (
    <div className="flex justify-center h-scr
    w-screen items-center">
     
    <form className="w-full md:w-1/2 flex flex-col items-center" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">Đăng Ký</h1>
       <div className="mb-4 w-1/2 ">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
          UserName
        </label>
        <input
          className="shadow border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4 w-1/2">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
          required
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic">{errors.password}</p>
        )}
      </div>
      <div className="mb-4 w-1/2">
        <label className="block  text-gray-700 font-medium mb-2" htmlFor="repeatPassword">
          Confirm Password
        </label>
        <input
          className="shadow border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          name="repeatPassword"
          id="repeatPassword"
          value={repeatPassword}
          onChange={handleChange}
          required
        />
        {errors.repeatPassword  && 
          <p className="text-red-500 text-xs italic">{errors.repeatPassword}</p>
        }
      </div>
      <div className="mb-4 w-1/2">
        <label className=" text-gray-700 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
          required
        />
        
      </div>

      <div className="mb-4 w-1/2">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          email
        </label>
        <input
          className="shadow border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
          required
        />
        
      </div>
      <div className="mb-4 w-1/2">
        <label className="block  text-gray-700 font-medium mb-2" htmlFor="phone">
        phone Number
        </label>
        <input
          className="shadow border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={handleChange}
          required
        />
         {errors.phone&& (
          <p className="text-red-500 text-xs italic">{errors.phone}</p>
        )}
      </div>
          <div className="flex w-1/2 justify-evenly">
            <button
              className="bg-indigo-500 text-white py-2 px-4 rounded-lg "
              type="submit"
            >
              Register
            </button>

            <NavLink
              className="bg-indigo-500 text-white py-2 px-4 rounded-lg "
              to='/login'
            >
              Sign in
            </NavLink>
          </div>

    </form>
    
    
   
    </div>
  );
}

export default Register;
