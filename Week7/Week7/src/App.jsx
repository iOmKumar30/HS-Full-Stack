import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notifications, total } from "./store/atoms/li_atoms";
import "./App.css"; // Assuming you have a CSS file for styling
import { Suspense } from "react";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback="Loading...">
        <MyApp />
      </Suspense>
    </RecoilRoot>
  );
}

function MyApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(total);

  return (
    <div className="top-bar">
      <ButtonWithNotification
        label="My Network"
        count={networkCount.network >= 100 ? "99+" : networkCount.network}
      />
      <ButtonWithNotification label="Jobs" count={networkCount.jobs} />
      <ButtonWithNotification label="Messages" count={networkCount.messaging} />
      <ButtonWithNotification
        label="Notifications"
        count={networkCount.notifications}
      />
      <ButtonWithNotification label="Me" count={totalNotificationCount} />
    </div>
  );
}

function ButtonWithNotification({ label, count }) {
  return (
    <button className="notification-button">
      {label}
      {count > 0 && <span className="notification-count">{count}</span>}
    </button>
  );
}

export default App;
