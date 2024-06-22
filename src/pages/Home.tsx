import { useDispatch, useSelector } from "react-redux";
import Gallery from "../components/Gallery";
import { Pagination } from "../components/Pagination";
import { SearchBar } from "../components/SearchBar";
import { PhotosResponse } from "../definations/types";
import {
  setCurrentPage,
  setImagesPerPage,
  setSearchQuery,
  useGetImagesDataQuery,
  useGetSearchImageDataQuery,
} from "../redux/slice";
import { AppDispatch, RootState } from "../redux/store";
import { Loading } from "../shared/Loading";
import { useState } from "react";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const { currPageNum, imagesPerPage, searchQuery } = useSelector(
    (state: RootState) => state?.galleryState
  );

  const { data, isLoading } = !searchQuery
    ? useGetImagesDataQuery({
        currPageNum,
        imagesPerPage,
      })
    : useGetSearchImageDataQuery({
        searchQuery,
        currPageNum,
        imagesPerPage,
      });

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const clearSearchTerm = () => {
    setSearchTerm("");
    dispatch(setSearchQuery({ searchQuery: "" }));
    dispatch(setCurrentPage({ currPageNum: 1 }));
    dispatch(setImagesPerPage({ imagesPerPage: 10 }));
  };

  const handleSearch = () => {
    if (searchTerm) {
      dispatch(setSearchQuery({ searchQuery: searchTerm }));
      dispatch(setCurrentPage({ currPageNum: 1 }));
      dispatch(setImagesPerPage({ imagesPerPage: 10 }));
    }
  };

  const setSuggestionQuery = (suggestion: string) => {
    setSearchTerm(suggestion);
    dispatch(setSearchQuery({ searchQuery: suggestion }));
    dispatch(setCurrentPage({ currPageNum: 1 }));
    dispatch(setImagesPerPage({ imagesPerPage: 10 }));
  };

  // for local
  // const photos: PhotosResponse[] =
  //   data && Array.isArray(data) && data.length > 0 ? data[0]?.photos : [];

  // prod access of data
  const photos: PhotosResponse[] = data?.photos ?? [];

  return (
    <>
      <div className="app">
        <header>
          <h1>Image Gallery</h1>
        </header>
        <section id="gallery">
          <div className="container">
            <SearchBar
              searchTerm={searchTerm}
              onChange={handleSearchTermChange}
              clearSearchTerm={clearSearchTerm}
              setSuggestionQuery={setSuggestionQuery}
              handleSearch={handleSearch}
            />
            <Pagination />
            {isLoading && <Loading />}
            <Gallery images={photos} />
            <Pagination />
          </div>
        </section>
      </div>
    </>
  );
};
