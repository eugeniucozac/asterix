import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

const props = {};

const renderFooter = () => {
  return render(<Footer {...props} />);
};

describe("COMPONENTS › Footer", () => {
  it("renders without crashing", () => {
    // arrange
    const { container } = renderFooter();

    // assert
    expect(container).toBeInTheDocument();
  });

  it("renders title", () => {
    // arrange
    renderFooter();
    // assert
    expect(screen.getByText("Get in touch")).toBeInTheDocument();
  });
});
