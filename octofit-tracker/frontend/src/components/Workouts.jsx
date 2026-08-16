import { apiUrl } from '../config/api';
import { useApiCollection } from '../hooks/useApiCollection';

function Workouts() {
  const { items: workouts, loading, error } = useApiCollection(apiUrl('workouts'));

  if (loading) return <p>Loading workouts...</p>;
  if (error) return <p className="text-danger">Error loading workouts: {error}</p>;

  return (
    <div>
      <h1>Workouts</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Level</th>
            <th>Focus Area</th>
            <th>Duration (min)</th>
            <th>Suggested Goal</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout) => (
            <tr key={workout.id}>
              <td>{workout.title}</td>
              <td>{workout.level}</td>
              <td>{workout.focusArea}</td>
              <td>{workout.durationMinutes}</td>
              <td>{workout.suggestedForGoal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
