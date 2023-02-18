import { HashRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import Routes from "@/routes";

function App() {
  return (
      <Suspense fallback={<p>Loading...</p>}>
        <Router>
          <Routes />
        </Router>
      </Suspense>
  );
}

export default App;
