import css from "./Feedback.module.css";

export default function Feedback({
  feedback,
  positiveFeedback,
  totalFeedback,
}) {
  return (
    <div className={css.feedback}>
      <ul className={css.FeedbackList}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
}
