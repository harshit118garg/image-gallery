import { Home } from "../pages/Home";
import { screen, render } from "../utils/test-utils";

describe("Home tests", () => {
  it("should render the header", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Image Gallery");
  });

  it("should render pagination", () => {
    render(<Home />);
    const paginationElements = screen.getAllByTestId("pagination");
    expect(paginationElements.length).toBeGreaterThanOrEqual(1);
  });
});
