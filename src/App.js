import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {
  loadQuery,
  usePreloadedQuery,
  useFragment,
  useLazyLoadQuery
} from 'react-relay/hooks';
import Drivers from './Components/Drivers/Drivers';
import { Route, Routes } from 'react-router-dom'
import Yearselector from './Pages/YearSelector.js';

const RacesQuery = graphql`
query AppRacesQuery($series: String!, $season: String) {
  specificRace(series: $series, season: $season){
    series
    season
    round
    url
    raceName
    date
    results{
      ...DriversResultsFragment
    }
  }
}`;

function App() {
  //const data = useLazyLoadQuery(RacesQuery, { series: "f1", season: "2020" });


  return (
    <div>
      {/* {data?.specificRace?.map((r, i) => {
        return (
          <div className='card col-4' key={i}>
            <div className='card-body'>
              <h5 className='card-title'>
                <span className='p-2'>
                  Series: {r.series}
                </span>
                <span className='p-2'>
                  Season: {r.season}
                </span>
                <span className='p-2'>
                  Round: {r.round}
                </span>
              </h5>
              <h5 className='card-subtitle'>Race: {r.raceName}</h5>
            </div>
            <ul className='row '>
              {r?.results?.map(res => <Drivers result={res} />)}
            </ul>
          </div>
        )
      })} */}
      <Routes>
        <Route exact path="/" element={<Yearselector />} />
        <Route path=":season" element={<Yearselector />} />
      </Routes>

    </div>
  );
}

export default App;
