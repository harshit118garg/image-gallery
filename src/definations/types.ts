import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

export interface GalleryTypes {
  images: PhotosResponse[];
}

export interface GridWrapperTypes {
  images: PhotosResponse[];
  index: number;
}

export interface ImageTypes {
  id: number;
  imgPath: string;
  alt: string;
}

export interface CounterState {
  value: number;
}

export interface SliceInitialState {
  imagesPerPage: number;
  currPageNum: number;
  searchQuery: string;
}

export interface ApiResponse {
  page: number;
  per_page: number;
  photos: PhotosResponse[];
  total_results: number;
  next_page: string;
}

export interface PhotosResponse {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: Src;
  liked: boolean;
  alt: string;
}

export interface Src {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

export interface SearchBarProps {
  searchTerm: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearSearchTerm: () => void;
  setSuggestionQuery: (suggestion:string) => void;
  handleSearch: () => void;
}