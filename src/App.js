import { Route, Routes } from 'react-router-dom'
import Yearselector from './Pages/YearSelector.js';
import RaceSelector from './Pages/RaceSelector.js';



function App() {
  return (
    <div>

      <Routes>
        <Route exact path="/" element={<Yearselector />} />
        <Route path=":season" element={<RaceSelector />} />
        <Route exact path=":season/:round" element={<RaceSelector />} />
      </Routes>

    </div>
  );
}

export default App;
