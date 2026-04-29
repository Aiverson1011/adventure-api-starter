import { useEffect, useReducer, useState } from "react";
import OutdoorSection from "./components/OutdoorSection";
import FoodCultureSection from "./components/FoodCultureSection";
import FitnessCreativeSection from "./components/FitnessCreativeSection";
import AdventurePlan from "./components/AdventurePlan";
import "./App.css";




const API_URL =
  "https://my-json-server.typicode.com/Aiverson1011/adventure-api/activities";

const initialPlanState = {
  plannedActivities: []
};

function planReducer(state, action) {
  switch (action.type) {
    case "ADD_ACTIVITY": {
      const alreadyAdded = state.plannedActivities.some(
        (activity) => activity.id === action.payload.id
      );

      if (alreadyAdded) {
        return state;
      }

      return {
        ...state,
        plannedActivities: [...state.plannedActivities, action.payload]
      };
    }

    case "REMOVE_ACTIVITY":
      return {
        ...state,
        plannedActivities: state.plannedActivities.filter(
          (activity) => activity.id !== action.payload
        )
      };

    case "CLEAR_PLAN":
      return {
        ...state,
        plannedActivities: []
      };

    default:
      return state;
  }
}

function App() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [planState, dispatch] = useReducer(planReducer, initialPlanState);

  useEffect(() => {
    async function getActivities() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch activities.");
        }

        const data = await response.json();
        setActivities(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getActivities();
  }, []);

  function handleAddActivity(activity) {
    dispatch({ type: "ADD_ACTIVITY", payload: activity });
  }

  function handleRemoveActivity(id) {
    dispatch({ type: "REMOVE_ACTIVITY", payload: id });
  }

  function handleClearPlan() {
    dispatch({ type: "CLEAR_PLAN" });
  }

  if (loading) {
    return (
      <main className="app">
        <h1>Adventure Explorer</h1>
        <p>Loading activities...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="app">
        <h1>Adventure Explorer</h1>
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>Adventure Explorer</h1>
        <p>Explore activities and build your own adventure plan.</p>
      </header>

      <AdventurePlan
        plannedActivities={planState.plannedActivities}
        onRemoveActivity={handleRemoveActivity}
        onClearPlan={handleClearPlan}
      />

      <OutdoorSection
        activities={activities}
        onAddActivity={handleAddActivity}
      />

      <FoodCultureSection
        activities={activities}
        onAddActivity={handleAddActivity}
      />

      <FitnessCreativeSection
        activities={activities}
        onAddActivity={handleAddActivity}
      />
    </main>
  );
}

export default App;