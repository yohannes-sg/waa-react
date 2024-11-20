import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard";

import { PostProvider } from "./PostContext";

function App() {
  return (
    <PostProvider>
      <div className="App">
        <Dashboard />
      </div>
    </PostProvider>
  );
}

export default App;
