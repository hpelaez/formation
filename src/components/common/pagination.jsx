import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = (props) => {
  const { nombreItems, taillePage, pageCourante, onPageChange } = props;
  const nombrePages = Math.ceil(nombreItems / taillePage);
  if (nombrePages === 1) return null;
  const pages = _.range(1, nombrePages + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === pageCourante ? "page-item active" : "page-item"}
            style={{ cursor: "pointer" }}
          >
            <a
              className="page-link"
              href="/#"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  nombreItems: PropTypes.number.isRequired,
  taillePage: PropTypes.number.isRequired,
  pageCourante: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
