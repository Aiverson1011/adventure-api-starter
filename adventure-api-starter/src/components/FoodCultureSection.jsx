import { Activity, useState } from "react";
import ActivityCard from "./ActivityCard";

// SAM
function FoodCultureSection({ activities, onAddActivity }) {
  const [category, setCategory] = useState();
  
 
  // TODO: Filter activities so only food and culture activities are included.
  // Hint: activity.category === "food" || activity.category === "culture"
  const foodCultureActivities = activities.filter((activity) => activity.category === "food" || activity.category === "culture");

 
  // TODO: If category is "all", show all food/culture activities.
  // Otherwise, filter by selected category.
  const filteredActivities = category === "all"

     ? foodCultureActivities
     : foodCultureActivities.filter((activity) => activity.category === category);

  return (
    <section className="adventure-section">
      <h2>Food & Culture Adventures</h2>

      <label htmlFor="food-culture-category">Filter by type: </label>
      <select
        id="food-culture-category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="all">All</option>
        <option value="food">Food</option>
        <option value="culture">Culture</option>
      </select>

      <div className="activity-grid">
        {/* TODO: Map over filteredActivities and render ActivityCard components. */
          filteredActivities.map((activity) => (
            <ActivityCard
              activity={activity}
              onAddActivity={onAddActivity}
            />
          ))
        }
        
      </div>
    </section>
  );
}

export default FoodCultureSection;


{/*
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
*/}