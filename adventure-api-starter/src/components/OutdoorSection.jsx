import { useState } from "react";
import ActivityCard from "./ActivityCard";

// NOA
function OutdoorSection({ activities, onAddActivity }) {
  const [difficulty, setDifficulty] = useState("all");

  // STEP 1: Filter activities so only outdoor activities are shown.
  const outdoorActivities = activities.filter((activity => activity.category === "outdoors"));

  // STEP 2: If difficulty is "all", show all outdoor activities (uses useState to 
  // track the selected difficulty)

  const filteredActivities = difficulty === "all" ? outdoorActivities : outdoorActivities.filter(
    (activity) => activity.difficulty === difficulty
  );

  return (
    <section className="adventure-section">
      <h2>Outdoor Adventures</h2>

      {/* Step 3: Filter by: "All", "Easy", "Medium", "Hard" */}
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
        
        {/* Step 4: Map over filteredActivities and render ActivityCard components. */}
        {/* Step 5: Pass onAddActivity into ActivityCard so Add to Adventure Plan button works*/}

        {filteredActivities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onAddActivity={onAddActivity}
          />

        ))}
      </div>
    </section>
  );
}

export default OutdoorSection;