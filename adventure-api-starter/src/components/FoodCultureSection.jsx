import { useState } from "react";
import ActivityCard from "./ActivityCard";

function FoodCultureSection({ activities, onAddActivity }) {
  const [category, setCategory] = useState("all");

  // TODO: Filter activities so only food and culture activities are included.
  // Hint: activity.category === "food" || activity.category === "culture"
  const foodCultureActivities = activities;

  // TODO: If category is "all", show all food/culture activities.
  // Otherwise, filter by selected category.
  const filteredActivities = foodCultureActivities;

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
        {/* TODO: Map over filteredActivities and render ActivityCard components. */}
      </div>
    </section>
  );
}

export default FoodCultureSection;