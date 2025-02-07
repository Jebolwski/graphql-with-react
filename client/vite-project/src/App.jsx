import "./App.css";
import { useQuery, useMutation, gql } from "@apollo/client";

const get_users = gql`
  query GetUsers {
    getUsers {
      id
      age
      name
      isMarried
    }
  }
`;

const get_user_by_id = gql`
  query GetUserById($id: ID) {
    getUserById(id: $id) {
      id
      age
      name
      isMarried
    }
  }
`;

function App() {
  const { data, error, loading } = useQuery(get_users);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error: {error.message}</p>;
  }

  return (
    <>
      <h1>Users</h1>
      {data && data.getUsers ? (
        data.getUsers.map((user, key) => {
          return (
            <div key={key}>
              <p>name : {user.name}</p>
              <p>age : {user.age}</p>
              <p>is this user married : {user.isMarried ? "yes" : "no"}</p>
            </div>
          );
        })
      ) : (
        <p>messi</p>
      )}
    </>
  );
}

export default App;
