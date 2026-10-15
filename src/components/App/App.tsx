import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions />
      <VoteStats />
      <Notification />
    </div>
  );
}
