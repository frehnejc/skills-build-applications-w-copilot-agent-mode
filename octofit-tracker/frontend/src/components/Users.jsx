import { apiUrl } from '../config/api';
import { useApiCollection } from '../hooks/useApiCollection';

function Users() {
  const { items: users, loading, error } = useApiCollection(apiUrl('users'));

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-danger">Error loading users: {error}</p>;

  return (
    <div>
      <h1>Users</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Display Name</th>
            <th>Email</th>
            <th>Team</th>
            <th>Fitness Goal</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id ?? user.username}>
              <td>{user.username}</td>
              <td>{user.displayName}</td>
              <td>{user.email}</td>
              <td>{user.teamId}</td>
              <td>{user.fitnessGoal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
