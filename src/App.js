import { Route, Routes } from 'react-router-dom'
import Yearselector from './Pages/YearSelector.js';
import RaceSelector from './Pages/RaceSelector.js';
import SpecificRaceOverView from './Pages/SpecificRaceOverView.js';



function App() {
  return (
    <div>

      <Routes>
        <Route exact path="/" element={<Yearselector />} />
        <Route path=":season" element={<RaceSelector />} />
        <Route exact path=":season/:round" element={<SpecificRaceOverView />} />
      </Routes>

    </div>
  );
}

export default App;
