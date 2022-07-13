import { render } from "@testing-library/react";
import { App } from "./App";

const props = {};

const renderApp = () => {
  return render(<App {...props} />);
};

describe("COMPONENTS › App", () => {
  it("renders without crashing", () => {
    // arrange
    const { container } = renderApp();

    // assert
    expect(container).toBeInTheDocument();
  });
});
