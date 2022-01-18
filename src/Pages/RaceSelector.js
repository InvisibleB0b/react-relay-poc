import { useParams } from 'react-router-dom';
import RaceForSelection from '../Components/RaceForSelection/RaceForSelection';

//graphql relevant
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';

const RacesQuery = graphql`
query RaceSelectorQuery($series: String!, $season: String) {
  specificRace(series: $series, season: $season){
    ...RaceForSelectionFragment
  }
}`;

export const RaceSelector = () => {
    const params = useParams();
    const data = useLazyLoadQuery(RacesQuery, { series: "f1", ...params });


    return (
        <div className="container">
            <div className='row'>
                <h1 className='col-12'>Select A Round from year : {params.season}</h1>
                <div className='row'>
                    {data?.specificRace?.map((race, i) => {
                        return (
                            <RaceForSelection key={i} race={race} />
                        )
                    })}
                </div>

            </div>
        </div>
    )

}

export default RaceSelector