import React from "react";
import { ReactComponent as Arrow } from "assets/arrow.svg";

import "./pagination.css";
import { MoviePage } from "types/Movie";

type Props = {
  page: MoviePage;
  onChange: Function;
};

const Pagination = ({ page, onChange }: Props) => {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button
          className="dsmovie-pagination-button"
          disabled={page.first}
          onClick={() => onChange(page.number - 1)}
        >
          <Arrow />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button
          className="dsmovie-pagination-button"
          disabled={page.last}
          onClick={() => onChange(page.number + 1)}
        >
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;