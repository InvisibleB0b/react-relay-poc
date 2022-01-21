import { Route, Routes } from 'react-router-dom'
import Yearselector from './Pages/YearSelector.js';
import RaceSelector from './Pages/RaceSelector.js';
import SpecificRaceOverView from './Pages/SpecificRaceOverView.js';
import { Suspense } from 'react';



function App() {
  return (

    <Suspense fallback={"loading..."}>

      <Routes>
        <Route exact path="/" element={<Yearselector />} />
        <Route path=":season" element={<RaceSelector />} />
        <Route exact path=":season/:round" element={<SpecificRaceOverView />} />
      </Routes>

    </Suspense>
  );
}

export default App;
