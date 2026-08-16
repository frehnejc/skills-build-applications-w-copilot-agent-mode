import { apiUrl } from '../config/api';
import { useApiCollection } from '../hooks/useApiCollection';

function Teams() {
  const { items: teams, loading, error } = useApiCollection(apiUrl('teams'));

  if (loading) return <p>Loading teams...</p>;
  if (error) return <p className="text-danger">Error loading teams: {error}</p>;

  return (
    <div>
      <h1>Teams</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Members</th>
            <th>Weekly Goal (min)</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id ?? team.name}>
              <td>{team.name}</td>
              <td>{team.city}</td>
              <td>{team.memberCount}</td>
              <td>{team.weeklyGoalMinutes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
