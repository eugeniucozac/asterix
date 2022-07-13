import { render, screen } from "@testing-library/react";
import { TermsContext } from "../../context/TermsContext";
import { Terms } from "./Terms";
import { terms } from "../../data/data";

const props = {};

const renderTerms = () => {
  return render(<Terms {...props} />);
};

describe("COMPONENTS › Terms", () => {
  it("renders without crashing", () => {
    // arrange
    const { container } = renderTerms();

    // assert
    expect(container).toBeInTheDocument();
  });

  it("renders title", () => {
    // arrange
    renderTerms();

    // assert
    expect(screen.getByText("Terms")).toBeInTheDocument();
  });

  it("renders terms", () => {
    // arrange
    render(
      <TermsContext.Provider value={terms}>
        <Terms {...props} />
      </TermsContext.Provider>
    );

    // assert
    terms.forEach((term) => expect(screen.getByText(term)).toBeInTheDocument());
  });
});
