import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notifications, total } from "./store/atoms/li_atoms";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <RecoilRoot>
      <MyApp />
    </RecoilRoot>
  );
}

function MyApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(total);
 

  return (
    <>
      <button>
        My Network(
        {networkCount.network >= 100 ? "99+" : networkCount.network})
      </button>
      <button>Jobs({networkCount.jobs})</button>
      <button>Messages({networkCount.messaging})</button>
      <button>Notifications({networkCount.notifications})</button>

      <button>Me({totalNotificationCount})</button>
    </>
  );
}
export default App;
