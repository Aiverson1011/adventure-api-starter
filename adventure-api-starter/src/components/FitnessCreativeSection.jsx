import { useState } from "react";
import ActivityCard from "./ActivityCard";

// ROMAIN

function FitnessCreativeSection({ activities, onAddActivity }) {
  const [searchTerm, setSearchTerm] = useState("");

  // TODO: Filter activities so only fitness and creative activities are included.
  // Hint: activity.category === "fitness" || activity.category === "creative"
  const fitnessCreativeActivities = activities;

  // TODO: Filter activities by searchTerm.
  // Hint: activity.title.toLowerCase().includes(searchTerm.toLowerCase())
  const filteredActivities = fitnessCreativeActivities;

  return (
    <section className="adventure-section">
      <h2>Fitness & Creative Adventures</h2>

      <label htmlFor="fitness-creative-search">Search activities: </label>
      <input
        id="fitness-creative-search"
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search by title"
      />

      <div className="activity-grid">
        {/* TODO: Map over filteredActivities and render ActivityCard components. */}
      </div>
    </section>
  );
}

export default FitnessCreativeSection;