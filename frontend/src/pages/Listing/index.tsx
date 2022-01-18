import React, { useEffect, useState } from "react";
import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard/index";
import axios from "axios";
// import { Container } from './styles';

import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/Movie";

const Listing: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}`)
      .then((response) => {
        const data = response.data as MoviePage; //Types
        setPage(data);
      });
  }, [pageNumber]);

  const handlePageNumber = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  return (
    <>
      <Pagination page={page} onChange={handlePageNumber} />

      <div className="container">
        <div className="row">
          {page.content.map((movie) => (
            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />;
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Listing;