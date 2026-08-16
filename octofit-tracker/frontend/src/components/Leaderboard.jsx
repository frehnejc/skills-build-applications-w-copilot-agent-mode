import { apiUrl } from '../config/api';
import { useApiCollection } from '../hooks/useApiCollection';

function Leaderboard() {
  const { items: entries, loading, error } = useApiCollection(apiUrl('leaderboard'));

  if (loading) return <p>Loading leaderboard...</p>;
  if (error) return <p className="text-danger">Error loading leaderboard: {error}</p>;

  return (
    <div>
      <h1>Leaderboard</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.userId}>
              <td>{entry.rank}</td>
              <td>{entry.displayName}</td>
              <td>{entry.teamName}</td>
              <td>{entry.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
