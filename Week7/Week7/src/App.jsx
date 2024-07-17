import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  networkAtom,
  notifications,
  jobsAtom,
  messages,
  total,
} from "./store/atoms/li_atoms";

function App() {
  return (
    <RecoilRoot>
      <MyApp />
    </RecoilRoot>
  );
}

function MyApp() {
  const networkCount = useRecoilValue(networkAtom);
  const networkNotficationCount = useRecoilValue(notifications);
  const jobCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(messages);
  const totalCount = useRecoilValue(total);
  return (
    <>
      <button>Home</button>
      <button>
        My Network(
        {networkCount >= 100 ? "99+" : networkCount})
      </button>
      <button>Jobs({jobCount})</button>
      <button>Messaging({messageCount})</button>
      <button>
        Notifications(
        {networkNotficationCount >= 100 ? "99+" : networkNotficationCount})
      </button>
      <button>Me({totalCount})</button>
    </>
  );
}
export default App;
