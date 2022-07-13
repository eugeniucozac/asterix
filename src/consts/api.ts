import axios from "axios";
import request from "axios";
import { BookTypeResponse, ErrorResponse, UserType } from "../type";

export const apiBooks = async () => {
  try {
    return await axios.get<BookTypeResponse>(
      "https://www.googleapis.com/books/v1/volumes?q=flowers"
    );
  } catch (err) {
    if (request.isAxiosError(err) && err.response) {
      console.log((err.response?.data as ErrorResponse).error);
    }
  }
};

export const apiUsers = async () => {
  try {
    return await axios.get<UserType[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
  } catch (err) {
    if (request.isAxiosError(err) && err.response) {
      console.log((err.response?.data as ErrorResponse).error);
    }
  }
};
