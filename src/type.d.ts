export interface UserType {
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  email: string;
  company: Object;
  address: {
    city: string;
    geo: Object;
    street: string;
    suite: string;
    zipcode: string;
  };
}

export interface BookType {
  id: string;
  etag: string;
  kind: string;
  saleInfo: Object;
  searchInfo: Object;
  selfLin: string;
  volumeInfo: {
    title: string;
    infoLink: string;
    imageLinks?: {
      smallThumbnail: string;
    };
  };
}

export type BookTypeResponse = {
  items: BookType[];
};

export type ErrorResponse = {
  error: string;
};
