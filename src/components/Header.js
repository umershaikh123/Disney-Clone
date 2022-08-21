/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";

import logo from "./img/logo.svg";
import profile from "./img/p.jpg";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [SideMenuStatus, setSideMenuStatus] = useState(false);

  const [state, SetState] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // navigate("/");
        navigate("/home");
        SetState(true);
      } else {
        SetState(false);
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);

          SetState(true);
        })
        .catch((error) => {
          console.log("Error durin SignIn");
        });
    } else if (userName) {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState());
          // navigate('/login');
          navigate("/");
        })
        .catch((error) => {
          console.log("Error durin SignOut");
        });
      SetState(false);
    }

    setSideMenuStatus(false);
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <div className=" bg-black flex flex-row mx-auto px-3 pb-1 justify-between items-center  overflow-hidden  ">
      <IconStyle className=" w-full-screen">
        {!userName ? (
          <div className="flex items-center justify-between  ">
            <img src={logo} alt="logo" className=" h-12 ml-8 mb-4  " />

            <HoverButton>
              <button
                onClick={handleAuth}
                className=" justify-end tracking-widest bg-black border-2 border-gray-500 text-white  mr-4 px-5 py-2 rounded-md uppercase "
              >
                Login
              </button>
            </HoverButton>
          </div>
        ) : (
          <div className="flex items-center justify-between  ">
            <img
              src={logo}
              alt="logo"
              className=" h-12 ml-8 mb-4 flex  lg:hidden"
            />

            <div
              className=" text-white list-none  items-center  max-w-3xl  hidden lg:flex mt-1 space-x-5 text-center  w-full-screen   "
              id="header"
            >
              <img src={logo} alt="logo" className=" h-12 ml-8 mb-4  " />

              <div className="flex space-x-3">
                <div className="flex " id="d">
                  <span className="material-symbols-outlined text-md  ">
                    home
                  </span>
                  <a href="#home" className=" text-sm ">
                    Home
                  </a>
                </div>

                <div className="flex ">
                  <span className="material-symbols-outlined text-md ">
                    search
                  </span>
                  <a href="#search" className=" text-sm ">
                    Search
                  </a>
                </div>

                <div className="flex ">
                  <span className="material-symbols-outlined text-md ">
                    add
                  </span>
                  <a href="#watchLists" className=" text-sm ">
                    WatchLists
                  </a>
                </div>

                <div className="flex ">
                  <span className="material-symbols-outlined text-md ">
                    star
                  </span>
                  <a href="#originals" className=" text-sm ">
                    Originals
                  </a>
                </div>

                <div className="flex ">
                  <span className="material-symbols-outlined text-md ">
                    movie
                  </span>
                  <a href="#movies" className=" text-sm ">
                    Movies
                  </a>
                </div>

                <div className="flex ">
                  <span className="material-symbols-outlined text-md ">tv</span>
                  <a href="#series" className=" text-sm ">
                    Series
                  </a>
                </div>
              </div>
            </div>

            <div className=" justify-end flex flex-row items-center  ">
              <Img src={userPhoto} alt={userName} />

              <div className="mt-2 items-center">
                <button
                  onClick={() => setSideMenuStatus(true)}
                  style={{ display: SideMenuStatus ? "none" : "block" }}
                >
                  <span className="material-symbols-outlined text-gray-300 lg:hidden text-3xl items-center ml-3 menuBtn">
                    menu
                  </span>
                </button>

                <button
                  onClick={() => setSideMenuStatus(true)}
                  style={{ display: SideMenuStatus ? "none" : "block" }}
                >
                  <span className="material-symbols-outlined text-gray-300 lg:flex hidden text-3xl items-center ml-3  dropBtn">
                    arrow_drop_down
                  </span>
                </button>

                <button
                  onClick={() => setSideMenuStatus(false)}
                  style={{ display: SideMenuStatus ? "block" : "none" }}
                >
                  <span className="material-symbols-outlined text-gray-300 text-3xl items-center ml-3 closeBtn">
                    close
                  </span>
                </button>
              </div>

              <Menu show={SideMenuStatus}>
                <div className="lg:flex hidden px-4">
                  <span className="material-symbols-outlined">logout</span>
                  <a href="#logout" className=" text-sm " onClick={handleAuth}>
                    Logout
                  </a>
                </div>

                <ul className=" space-y-5 w-36 lg:hidden">
                  <li>
                    <span className="material-symbols-outlined">logout</span>
                    <a
                      href="#logout"
                      className=" text-sm "
                      onClick={handleAuth}
                    >
                      Logout
                    </a>
                  </li>

                  <li className="-ml-2">
                    <span className="material-symbols-outlined text-md  ">
                      home
                    </span>
                    <a href="#home" className=" text-sm ">
                      Home
                    </a>
                  </li>

                  <li className="">
                    <span className="material-symbols-outlined text-md ">
                      search
                    </span>
                    <a href="#search" className=" text-sm ">
                      Search
                    </a>
                  </li>

                  <li className="ml-4">
                    <span className="material-symbols-outlined text-md ">
                      add
                    </span>
                    <a href="#watchLists" className=" text-sm ">
                      WatchLists
                    </a>
                  </li>

                  <li className="ml-2">
                    <span className="material-symbols-outlined text-md ">
                      star
                    </span>
                    <a href="#originals" className=" text-sm ">
                      Originals
                    </a>
                  </li>

                  <li className="">
                    <span className="material-symbols-outlined text-md ">
                      movie
                    </span>
                    <a href="#movies" className=" text-sm ">
                      Movies
                    </a>
                  </li>

                  <li className="-ml-1">
                    <span className="material-symbols-outlined text-md ">
                      tv
                    </span>
                    <a href="#series" className=" text-sm ">
                      Series
                    </a>
                  </li>
                </ul>
              </Menu>
            </div>
          </div>
        )}
      </IconStyle>

      <Img src={profile} className="hidden"></Img>
    </div>
  );
};

export default Header;

const IconStyle = styled.span`
  span {
    margin-top: -0.25rem;
    padding-left: 6px;
    padding-right: 6px;
    opacity: 1;
  }

  a {
    opacity: 0.9;
  }

  .material-symbols-outlined {
    font-variation-settings: "FILL" 1, "wght" 500, "GRAD" 0, "opsz" 48;
  }
`;

const Img = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;

const HoverButton = styled.div`
  button:hover {
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;

const Menu = styled.div`
  padding: 1rem 1rem 1rem 0rem;
  display: flex;
  flex-direction: column;
  color: white;
  position: absolute;
  z-index: 100;
  background-color: #161414;

  top: 5rem;
  right: 0rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    margin-left: 0.3rem;
  }

  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
`;
