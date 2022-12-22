import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSlide from "./ImageSlide";
import Viewers from "./Viewers";
import Reccomendations from "./Reccomendations";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

function Home() {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);

  useEffect(() => {
    let recommend = [];
    let newDisney = [];
    let Original = [];
    let trending = [];
    db.collection("movies").onSnapshot((snapshot) => {
      // eslint-disable-next-line array-callback-return
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommend = [...recommend, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            Original = [...Original, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
        }
      });

      dispatch(
        setMovies({
          recommend: recommend,
          newDisney: newDisney,
          Original: Original,
          trending: trending,
        })
      );
    });
  }, [username]);

  //   const imageurl = "/media/images/";
  return (
    <Container>
      <ImageSlide />
      <Viewers />
      <Reccomendations />
      <NewDisney />
      <Originals />
      <Trending />
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
