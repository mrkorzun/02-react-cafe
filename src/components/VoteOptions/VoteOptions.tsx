import css from "./VoteOptions.module.css";

export default function VoteOptions() {
  const handleClick = () => {
    console.log("I am a button");
  };
  return (
    <div className={css.container}>
      <button className={css.button} onClick={handleClick}>
        Good
      </button>
      <button className={css.button}>Neutral</button>
      <button className={css.button}>Bad</button>
      <button className={`${css.button} ${css.reset}`}>Reset</button>
    </div>
  );
}
