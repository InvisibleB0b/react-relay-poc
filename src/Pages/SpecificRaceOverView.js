import { useParams } from 'react-router-dom';
import SpecificRace from '../Components/SpecificRace/SpecificRace';

//graphql relevant
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';


const SpecificRaceQuery = graphql`
query SpecificRaceOverViewQuery($series: String!, $season: String, $round: String) {
  specificRace(series: $series, season: $season, round: $round){
    ...SpecificRaceFragment
  }
}`;


export const SpecificRaceOverView = () => {

  const params = useParams();
  const data = useLazyLoadQuery(SpecificRaceQuery, { series: "f1", ...params });

  return (
    <div className="container">
      <div className='row'>
        {data?.specificRace?.map((race, index) => <SpecificRace key={index} race={race} />)}
      </div>
    </div>
  )

}
export default SpecificRaceOverView