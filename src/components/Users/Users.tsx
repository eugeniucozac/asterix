import { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { UserType } from "../../type";
import { apiUsers } from "../../consts/api";
import classes from "./Users.styles";

export const Users = () => {
  const [data, setData] = useState<UserType[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUsers = async () => {
    setLoading(true);
    const response = await apiUsers();
    setLoading(false);
    setData(response?.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className={classes.wrapper}>
      <div className={classes.header}>
        <h3 className={classes.title}>Latest Users</h3>
        <button onClick={() => fetchUsers()}>
          <BiRefresh size={36} />
        </button>
      </div>
      {loading ? <div>Loading</div> : null}
      <ul className={classes.users}>
        {data?.length
          ? data.map((user: UserType, iter: number) => {
              return (
                <li key={iter} className={classes.user}>
                  <span>{user.name}</span>
                  <span>{user.address.city}</span>
                </li>
              );
            })
          : null}
      </ul>
    </section>
  );
};
