import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox({ onSearch }) {
  return (
    <div className={css.container}>
      <label className="{css.label}">Find contacts by name</label>
      <input
        className="{css.input}"
        type="text"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
