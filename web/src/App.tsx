
import Feed from "./components/layout/feed";
import { $router } from "./lib/router";
import { useStore } from '@nanostores/react';
import Info from "./components/pages/info";
import { redirectPage } from "@nanostores/router";
import Feedback from "./components/pages/feedback";

function App() {
  const page = useStore($router)

  if (!page) {
    redirectPage($router, "home");
  }

  return (
    <div className="flex flex-col">
      {page?.route === "home" && <Feed />}
      {page?.route === "info" && <Info />}
      {page?.route === "feedback" && <Feedback />}
    </div>
  );
}

export default App;