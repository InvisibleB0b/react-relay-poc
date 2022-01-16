import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {
  loadQuery,
  usePreloadedQuery,
  useFragment,
  useLazyLoadQuery
} from 'react-relay/hooks';
import Drivers from './Components/Drivers';

const RacesQuery = graphql`
query AppRacesQuery {
  races{
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
  const data = useLazyLoadQuery(RacesQuery);

  return (
    <div className='row'>
      {data?.races?.map((r, i) => {
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
              <h5>Race: {r.raceName}</h5>
            </div>
            <ul className='row '>
              {r?.results?.map(res => <Drivers result={res} />)}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default App;
