import "./App.css";
import { AuthService } from "./services/authService";
function App() {
  const authService = new AuthService();

  return (
    <div className="App">
      <button onClick={() => authService.login()}>Login </button>
    </div>
  );
}

export default App;
