import { http, HttpResponse } from "msw";
import mockData from "./mock.json";

export const handlers = [
  http.get("'/curated?page=1&per_page=10'", () => {
    return HttpResponse.json(mockData, { status: 200 });
  }),
  http.get("'/curated?query=moon&page=1&per_page=10'", () => {
    return HttpResponse.json(mockData, { status: 200 });
  }),
];
