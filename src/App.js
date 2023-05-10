import './App.css';
import DashboardView from './components/DashboardView';
import LoginView from './components/LoginView';
import Card from './components/Card';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import GoogleMaps from './components/GoogleMaps';


function App() {
  return (
    <main className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/card" element={<Card />} />
          <Route path="/map" element={<GoogleMaps />} />
        </Routes>
      </BrowserRouter>

    </main>
  );
}

export default App;
