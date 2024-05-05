import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react/jsx-runtime";
import { IMAGESPERPAGE } from "../../definations/constants";
import { setCurrentPage, setImagesPerPage } from "../../redux/slice";
import { RootState } from "../../redux/store";
import Icon from "../../shared/Icon";
import "./index.scss";
import { useParams } from "react-router-dom";

export const Pagination = () => {
  const dispatch = useDispatch();
  const { currPageNum, imagesPerPage } = useSelector(
    (state: RootState) => state?.galleryState
  );

  const { page: page = currPageNum, per_page: per_page = imagesPerPage } =
    useParams();
  console.log("from parama", { page, per_page });

  const goToNextPage = () => {
    const nextPage = currPageNum + 1;
    dispatch(setCurrentPage(nextPage));
  };

  const goToPrevPage = () => {
    const prevPage = currPageNum - 1;
    dispatch(setCurrentPage(prevPage));
  };

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setImagesPerPage(Number(event.target.value)));
  };

  return (
    <div className="pagination-wrapper">
      <div className="pageChange">
        {currPageNum !== 1 && (
          <button className="prev-page page-change" onClick={goToPrevPage}>
            <span>
              <Icon name="arrow-left" />
            </span>
          </button>
        )}
        <span className="curr-page">{currPageNum}</span>
        <button className="next-page page-change" onClick={goToNextPage}>
          <span>
            <Icon name="arrow-right" />
          </span>
        </button>
      </div>
      <div className="page-size-wrapper">
        <select onChange={handlePageSizeChange} value={imagesPerPage}>
          <option>Images Per Page</option>
          {IMAGESPERPAGE.map((pageSize, index) => {
            return (
              <Fragment key={index}>
                <option value={pageSize.value}>{pageSize.label}</option>
              </Fragment>
            );
          })}
        </select>
      </div>
    </div>
  );
};