function AdventurePlan({ plannedActivities, onRemoveActivity, onClearPlan }) {
  return (
    <section className="adventure-plan">
      <h2>My Adventure Plan</h2>

      {plannedActivities.length === 0 ? (
        <p>No activities added yet. Choose an activity to start planning.</p>
      ) : (
        <>
          <ul>
            {plannedActivities.map((activity) => (
              <li key={activity.id}>
                <span>{activity.title}</span>

                <button onClick={() => onRemoveActivity(activity.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button onClick={onClearPlan}>Clear Plan</button>
        </>
      )}
    </section>
  );
}

export default AdventurePlan;