import React from "react";
import styled from "styled-components";

function Header() {
  const imagesUrl = "/media/images/";
  return (
    <Nav>
      <Logo>
        <img src={`${imagesUrl}logo.svg`} alt="" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src={`${imagesUrl}home-icon.svg`} alt="" />
        </a>
        <span>HOME</span>
      </NavMenu>
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
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

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
    padding: 0 12;
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
  }

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

  &:hover {
    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1;
      opacity: 1 !important;
    }
  }
`;
export default Header;
