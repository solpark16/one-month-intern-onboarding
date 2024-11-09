import "./App.css";
import GetUserProvider from "./providers/GetUserProvider";
import { QueryProvider } from "./query/QueryProvider";
import Router from "./routes/Router";

function App() {
  return (
    <div>
      <QueryProvider>
        <GetUserProvider>
          <Router />
        </GetUserProvider>
      </QueryProvider>
    </div>
  );
}

export default App;
