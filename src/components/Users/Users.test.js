import { render, screen } from "@testing-library/react";
import axios from "axios";
import { apiUsers } from "../../consts/api";
import { Users } from "./Users";

jest.mock("axios");

const props = {};

const renderUsers = () => {
  return render(<Users {...props} />);
};

describe("COMPONENTS › Users", () => {
  it("renders without crashing", () => {
    // arrange
    const { container } = renderUsers();

    // assert
    expect(container).toBeInTheDocument();
  });

  it("renders title", () => {
    // arrange
    renderUsers();

    // assert
    expect(screen.getByText("Latest Users")).toBeInTheDocument();
  });

  it("renders list of users", async () => {
    // given
    const users = [
      { id: 1, name: "Tom" },
      { id: 2, name: "Tod" },
    ];
    axios.get.mockResolvedValueOnce(users);

    // when
    const result = await apiUsers();

    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
    expect(result).toEqual(users);
  });
});
