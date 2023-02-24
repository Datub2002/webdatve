import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import { Select, Space } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import _ from "lodash";
import { TOKEN, USER_LOGIN } from "../../../../util/settings/config";

function Header(props) {
  const { userLogin } = useSelector((state) => state.UserManageReducer);

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button
              onClick={() => {
                history.push("/login");
              }}
              className="self-center px-8 py-3 rounded"
            >
              {t("Sign In")}
            </button>
            <button
              onClick={() => {
                history.push("/register");
              }}
              className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              {t("Sign Up")}
            </button>
            <div className="ml-5">
              <Select
                defaultValue="en"
                style={{
                  width: 100,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "en",
                    label: "Eng",
                  },
                  {
                    value: "vi",
                    label: "Vi",
                  },
                ]}
              />
            </div>
          </div>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button
            onClick={() => {
              history.push("/profile");
            }}
            className="self-center rounded"
          >
            Hello ! {userLogin.taiKhoan}
          </button>
          <div className="ml-5 mr-5">
              <Select
                defaultValue="en"
                style={{
                  width: 100,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "en",
                    label: "Eng",
                  },
                  {
                    value: "vi",
                    label: "Vi",
                  },
                ]}
              />
            </div>
          <button
            onClick={() => {
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(TOKEN);
              history.push("/home");
              window.location.reload();
            }}
            className="bg-red-600 p-2 text-white"
          >
            Log Out
          </button>
        </div>
      </Fragment>
    );
  };

  const { t, i18n } = useTranslation();
  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <header className="p-4  text-gray-100 fixed w-full z-10 bg-opacity-40 bg-black ">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          to="/"
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
            className="w-20"
            alt="logo"
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 text-lg lg:flex">
          <li className="flex">
            <NavLink
              to="/home"
              className="flex items-center text-white px-4 -mb-1 border-b-2 dark:border-transparent   hover:opacity-70 hover:text-white "
              activeClassName="border-b-2 dark:border-violet-400 dark:text-violet-400"
            >
              {t("Home")}
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/news"
              className="flex items-center text-white px-4 -mb-1 border-b-2 dark:border-transparent hover:opacity-70 hover:text-white"
              activeClassName="border-b-2 dark:border-violet-400 dark:text-violet-400"
            >
              {t("News")}
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/contact"
              className="flex items-center text-white px-4 -mb-1 border-b-2 dark:border-transparent hover:opacity-70 hover:text-white"
              activeClassName="border-b-2 dark:border-violet-400 dark:text-violet-400"
            >
              {t("Contact")}
            </NavLink>
          </li>
        </ul>
        {renderLogin()}

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
