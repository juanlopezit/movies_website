import { useState } from "react";
import Movie from "./Movie";
import PageWrapper from "./PageWrapper";
import moviesJson from "../movies.json";
import Pagination from "./Pagination";

function ListOfMovies() {
  const [actualPage, setActualPage] = useState(1);
  const totalPerPage = 3;
  let movies = moviesJson;

  const loadingMovies = () => {
    movies = movies.slice(
      (actualPage - 1) * totalPerPage,
      actualPage * totalPerPage
    );
  };

  loadingMovies();

  return (
    <PageWrapper>
      {movies.map((movie) => (
        <Movie
          key={movie.key}
          title={movie.title}
          rating={movie.rating}
          director={movie.director}
          cast={movie.cast}
          release={movie.release}
          runtime={movie.runtime}
          img={movie.img}
          description={movie.description}
        ></Movie>
      ))}

      <Pagination
        page={actualPage}
        total={4}
        onChange={(page) => {
          setActualPage(page);
        }}
      />
    </PageWrapper>
  );
}

export default ListOfMovies;
