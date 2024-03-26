import { usersGetAll } from "../../services/store/slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Header from "../common/Header";

const Home = () => {
  const users = useSelector((state) => state.users?.getAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersGetAll());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <button onClick={() => dispatch(usersGetAll())}>Refresh</button>
      {users?.isLoading && <p>Loading...</p>}
      {users?.error && <pre>error : {users?.error}</pre>}
      <ul>
        {users?.data &&
          users.data.map((user) => (
            <li key={user._id}>
              {user.username} - {user.fullname} - {user.role}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
