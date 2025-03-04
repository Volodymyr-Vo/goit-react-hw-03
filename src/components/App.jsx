import "./App.css";
import Description from "../components/Description/Description";
import Feedback from "../components/Feedback/Feedback";
import Options from "../components/Options/Options";
import Notification from "./Notification/Notification";
import { useState, useEffect } from "react";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const saveFeedback = window.localStorage.getItem("saved-feedback");
    if (saveFeedback !== null) {
      return JSON.parse(saveFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const reset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        reset={reset}
      />
      {totalFeedback > 0 && (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback <= 0 && <Notification />}
    </>
  );
}

export default App;
