import css from "./Options.module.css";
export default function Options({ updateFeedback, totalFeedback, reset }) {
  return (
    <div className={css.buttonBox}>
      <button
        className={css.button}
        type="button"
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} type="button" onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
}
