import { render, screen } from "@testing-library/react";
import { JoinNow } from "./JoinNow";

const props = {};

const renderJoinNow = () => {
  return render(<JoinNow {...props} />);
};

describe("COMPONENTS › JoinNow", () => {
  it("renders without crashing", () => {
    // arrange
    const { container } = renderJoinNow();

    // assert
    expect(container).toBeInTheDocument();
  });

  it("renders title and label", () => {
    // arrange
    renderJoinNow();
    const title = screen.getByRole("heading", { level: 3 });
    const label = screen.getByRole("heading", { level: 5 });

    // assert
    expect(title).toHaveTextContent(
      "Read you latest photo books and get inspired!"
    );
    expect(label).toHaveTextContent("Don't miss out on the magic");
  });

  it("renders button", () => {
    // arrange
    renderJoinNow();

    // assert
    expect(
      screen.getByRole("button", { name: "Join Now" })
    ).toBeInTheDocument();
  });
});
