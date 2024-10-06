import './styles/App.css';
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import NavigationBar from "./components/UI/navbar/NavigationBar";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar/>
          <AppRouter/>
        </div>
      </BrowserRouter>

  );
}

export default App;
