function ActivityCard({ activity, onAddActivity }) {
  return (
    <article className="activity-card">
      <img src={activity.image} alt={activity.title} />

      <div className="activity-card-content">
        <h3>{activity.title}</h3>
        <p>{activity.description}</p>

        <p>
          <strong>Category:</strong> {activity.category}
        </p>

        <p>
          <strong>Difficulty:</strong> {activity.difficulty}
        </p>

        <p>
          <strong>Duration:</strong> {activity.duration}
        </p>

        <p>
          <strong>Location:</strong> {activity.location}
        </p>

        <button onClick={() => onAddActivity(activity)}>
          Add to Adventure Plan
        </button>
      </div>
    </article>
  );
}

export default ActivityCard;