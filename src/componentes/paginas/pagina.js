import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Paginas = ({ numPag, info, establecerNumPag }) => {
  let cambiarPag = (data) => {
    establecerNumPag(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Siguiente"
        forcePage={numPag === 1 ? 0 : numPag - 1}
        previousLabel="Anterior"
        previousClassName="btn btn-primary fs-5 shadow"
        nextClassName="btn btn-primary fs-5 shadow"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={cambiarPag}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  );
};

export default Paginas;