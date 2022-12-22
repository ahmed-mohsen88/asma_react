import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";
// import axios from "axios";

function Trending() {
  const movies = useSelector(selectTrending);

  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => {
            return (
              <Wrap key={key}>
                {movie.id}
                <Link to={`/details/${movie.id}`}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrap>
            );
          })}
        {/* 
        {axios.get("/DisneyPlusMovies.json").then(({ data }) => {
          for (const keys in data) {
            if (!data.hasOwnProperty(keys)) continue;
            const newData = data[keys];
            for (const key in newData) {
              if (!newData.hasOwnProperty(key)) continue;
              <Wrap key={newData[key]["title"]}>
                {newData[key]["title"]}
                <Link to={"/detalil/"}>
                  <img src={newData[key]["cardImg"]} alt={data["title"]} />
                </Link>
              </Wrap>;
            }
          }
        })} */}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0 36px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0);
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 /80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Trending;
