import { useApiCollection } from '../hooks/useApiCollection';

// VITE_CODESPACE_NAME must be defined (e.g. in .env.local); falls back to localhost otherwise.
const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
const activitiesUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/';

function Activities() {
  const { items: activities, loading, error } = useApiCollection(activitiesUrl);

  if (loading) return <p>Loading activities...</p>;
  if (error) return <p className="text-danger">Error loading activities: {error}</p>;

  return (
    <div>
      <h1>Activities</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User</th>
            <th>Type</th>
            <th>Duration (min)</th>
            <th>Calories Burned</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.userId}</td>
              <td>{activity.type}</td>
              <td>{activity.durationMinutes}</td>
              <td>{activity.caloriesBurned}</td>
              <td>{activity.activityDate ? new Date(activity.activityDate).toLocaleDateString() : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
