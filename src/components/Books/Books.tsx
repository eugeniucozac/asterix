import { useEffect, useState } from "react";
import { apiBooks } from "../../consts/api";
import { BookType } from "../../type";
import classes from "./Books.styles";

export const Books = () => {
  const [data, setData] = useState<BookType[] | undefined>([]);

  const fetchBooks = async () => {
    const response = await apiBooks();
    setData(response?.data?.items);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <section className={classes.wrapper}>
      <h3 className={classes.title}>Latest Books</h3>
      <ul className={classes.container}>
        {data?.length
          ? data.map((book: BookType, iter: number) => {
              return (
                <li key={iter} className={iter > 3 ? classes.book : ""}>
                  <a href={book.volumeInfo?.infoLink}>
                    {book.volumeInfo?.imageLinks ? (
                      <img
                        src={book.volumeInfo?.imageLinks?.smallThumbnail}
                        alt={book.volumeInfo.title}
                      />
                    ) : (
                      <div className={classes.noImage}>
                        <h5 className={classes.imageTitle}>No image</h5>
                      </div>
                    )}
                  </a>
                </li>
              );
            })
          : null}
      </ul>
    </section>
  );
};
