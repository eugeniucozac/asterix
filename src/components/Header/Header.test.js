import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

const props = {};

const renderHeader = () => {
  return render(<Header {...props} />);
};

describe("COMPONENTS › Header", () => {
  it("renders without crashing", () => {
    // arrange
    const { container } = renderHeader();

    // assert
    expect(container).toBeInTheDocument();
  });

  it("renders title", () => {
    // arrange
    renderHeader();

    // assert
    expect(screen.getByText("Photo Book")).toBeInTheDocument();
  });

  it("renders cog button", () => {
    // arrange
    renderHeader();

    // assert
    expect(screen.getByRole("button", { name: "" })).toBeInTheDocument();
  });
});
