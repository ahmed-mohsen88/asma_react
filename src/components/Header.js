import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";

function Header() {
  const [imageUrl, setimageUrl] = useState("");
  const dispatch = useDispatch();
  const history = useNavigate();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  useEffect(() => {
    setimageUrl(userPhoto);
  }, [userPhoto]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history("/home");
      }
    });
  }, [username]);

  const imagesUrl = "/media/images/";
  const handelAuth = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
          console.log(result);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
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
    <Nav>
      <Link to="/home">
        <Logo>
          <img src={`${imagesUrl}logo.svg`} alt="" />
        </Logo>
      </Link>
      {!username ? (
        <Login onClick={handelAuth}>LOGIN</Login>
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <img src={`${imagesUrl}home-icon.svg`} alt="" />
              <span>HOME</span>
            </Link>
            <Link to="/home">
              <img src={`${imagesUrl}search-icon.svg`} alt="" />
              <span>SEARCH</span>
            </Link>
            <Link to="/home">
              <img src={`${imagesUrl}watchlist-icon.svg`} alt="" />
              <span>WATCH LIST</span>
            </Link>
            <Link to="/home">
              <img src={`${imagesUrl}original-icon.svg`} alt="" />
              <span>ORIGINALS</span>
            </Link>
            <Link to="/home">
              <img src={`${imagesUrl}movie-icon.svg`} alt="" />
              <span>MOVIES</span>
            </Link>
            <Link to="/home">
              <img src={`${imagesUrl}series-icon.svg`} alt="" />
              <span>SERIES</span>
            </Link>
          </NavMenu>
          <SignOut>
            <UserImg src={`${userPhoto}`} alt={username} />
            <DropDown>
              <span onClick={handelAuth}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  position: "fixed";
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;
  img {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  margin: 0;
  padding: 0;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 768px) {
    display: none;
  }
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  img {
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
  }
  span {
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42;
    line-height: 1.08;
    padding: 2px 0;
    whitespace: nowrap;
    position: relative;

    &:before {
      content: "";
      display: block;
      height: 2px;
      opacity: 0;
      border-radius: 0 0 4px 4px;
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: -6px;
      background-color: rgb(249, 249, 249);
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
  }
`;
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
  border-radius: 50%;
  margin-right: 5px;
`;

const DropDown = styled.div`
position: absolute;
top: 48px;
right: 2 ;
background-color: rgb(19,19,19);
border: 1px solid rgba(151,151,151,0.34)
border-radius:4px;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px ;
padding: 10px;
letter-spacing: 3px;
font-size: 14px;
width: 100px;
opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
