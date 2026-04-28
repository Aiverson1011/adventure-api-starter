import { useState } from "react";
import ActivityCard from "./ActivityCard";

// NOA
function OutdoorSection({ activities, onAddActivity }) {
  const [difficulty, setDifficulty] = useState("all");

  // TODO: Filter activities so only outdoor activities are shown.
  // Hint: activity.category === "outdoors"
  const outdoorActivities = activities;

  // TODO: If difficulty is "all", show all outdoor activities.
  // Otherwise, filter by activity.difficulty.
  const filteredActivities = outdoorActivities;

  return (
    <section className="adventure-section">
      <h2>Outdoor Adventures</h2>

      <label htmlFor="outdoor-difficulty">Filter by difficulty: </label>
      <select
        id="outdoor-difficulty"
        value={difficulty}
        onChange={(event) => setDifficulty(event.target.value)}
      >
        <option value="all">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <div className="activity-grid">
        {/* TODO: Map over filteredActivities and render ActivityCard components. */}
      </div>
    </section>
  );
}

export default OutdoorSection;