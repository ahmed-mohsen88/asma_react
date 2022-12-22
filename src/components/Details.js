import React, { useEffect, useState } from "react";
import styled from "styled-components";
import db from "../firebase";
import { useParams } from "react-router-dom";

function Details() {
  const { pid } = useParams();

  console.log("this.context:", pid);
  const [details, setdetails] = useState({});
  useEffect(() => {
    db.collection("movies")
      .doc(pid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setdetails(doc.data());
        } else {
          console.log("no such document ");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pid]);

  return (
    <Container>
      <Background>
        <img src={details.backgroundImg} alt={details?.title} />
      </Background>
      <ImageTitle>
        <img src={details?.titleImg} alt={details?.title} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/media/images/play-icon-black.png" alt="" />
            <span>Player</span>
          </Player>
          <Tailers>
            <img src="/media/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Tailers>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/media/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>
          <p>{details?.subTitle}</p>
        </SubTitle>
        <Description>{details?.description}</Description>
      </ContentMeta>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0;
  opacity: 0.8;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;
  }

  @media (max-width: 768px) {
    width: initial;
  }
`;

const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  -webkit-box-pack: start;
  margin: 50px auto;
  width: 100%;
  height: 30vh;
  min-height: 170px;
  padding-bottom: 24px;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 25vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  display: flex;
  align-items: center;
  justify-content:center;
  letter-spacing: 1.8
  font-size: 15px;
  margin: 0 22px 0 0;
  padding: 0 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  text-transform:uppercase;
  background: rgb(249 , 249 , 249 );
  border: none;
  color : rgb(0,0,0);


  img{
    width: 32px;

  }


  &:hover{
    background: rgb(198,198,198);
  }

  @media (max-width : 768px){
    height: 45px;
    padding: 0 22px;
    font-size : 12px;
    margin: 0 10px 0 0 ;
    img{
        width:25px;
    }
  }
`;

const Tailers = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  div {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: rgb(0, 0, 0);
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width:768px){
    font-size 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0;
  color: rgb(249, 249, 249);


  @media (max-width:768px){
    font-size 14px;
  }
`;
export default Details;
