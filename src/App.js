import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './pages/RocketsPage';
import Missions from './pages/MissionsPage';
import MyProfile from './pages/MyProfilePage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
