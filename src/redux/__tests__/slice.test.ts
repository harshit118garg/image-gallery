import { initialState, manageImageGalleryDataSlice } from "../slice"

const { reducer, actions } = manageImageGalleryDataSlice

describe("Image Gallery Slice", () => {
    test("setImagesPerPage", () => {
        const nextState = reducer(initialState, actions.setImagesPerPage({
            imagesPerPage: 10
        }))
        expect(nextState.imagesPerPage).toEqual(10)
    })
    test("setCurrentPage", () => {
        const nextState = reducer(initialState, actions.setCurrentPage({
            currPageNum: 1
        }))
        expect(nextState.currPageNum).toEqual(1)
    })
    test("setSearchQuery", () => {
        const nextState = reducer(initialState, actions.setSearchQuery({
            searchQuery: "query"
        }))
        expect(nextState.searchQuery).toEqual("query")
    })
})