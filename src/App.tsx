import "./App.css";
import GetUserProvider from "./providers/GetUserProvider";
import Router from "./routes/Router";

function App() {
  return (
    <div>
      <GetUserProvider>
        <Router />
      </GetUserProvider>
    </div>
  );
}

export default App;
