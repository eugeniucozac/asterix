import { render, screen } from "@testing-library/react";
import axios from "axios";
import { apiBooks } from "../../consts/api";
import { Books } from "./Books";

jest.mock("axios");

const props = {};

const renderBooks = () => {
  return render(<Books {...props} />);
};

describe("COMPONENTS › Books", () => {
  it("renders without crashing", () => {
    // arrange
    const { container } = renderBooks();

    // assert
    expect(container).toBeInTheDocument();
  });

  it("renders title", () => {
    // arrange
    renderBooks();
    // assert
    expect(screen.getByText("Latest Books")).toBeInTheDocument();
  });

  it("renders list of books", async () => {
    // given
    const books = [
      { id: 1, name: "Plants and Flowers" },
      { id: 2, name: "Andrew" },
    ];
    axios.get.mockResolvedValueOnce(books);

    // when
    const result = await apiBooks();

    expect(axios.get).toHaveBeenCalledWith(
      "https://www.googleapis.com/books/v1/volumes?q=flowers"
    );
    expect(result).toEqual(books);
  });
});
