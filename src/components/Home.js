import React from "react";
import styled from "styled-components";
import ImageSlide from "./ImageSlide";
import Viewers from "./Viewers";

function Home() {
  //   const imageurl = "/media/images/";
  return (
    <Container>
      <ImageSlide />
      <Viewers />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vh + 5px);

  &:after {
    content: "";
    background: url("/media/images/home-background.png") center center / cover;
    no-repeat: fixed;
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
