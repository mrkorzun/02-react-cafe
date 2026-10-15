import CafeInfo from "../CofeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStat/VoteStats";
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
