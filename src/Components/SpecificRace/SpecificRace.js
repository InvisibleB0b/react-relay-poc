import styles from './SpecificRace.module.css'

//graphql relevant
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';
import Results from '../Results/Results';

const SpecificRaceFragment = graphql`
fragment SpecificRaceFragment on Race{
    series
    season
    round
    raceName
    date
    url
  ...ResultsFragment
}
`;

export const SpecificRace = (props) => {
    const { race } = props;
    const data = useFragment(SpecificRaceFragment, race);

    return (
        <div className="col-12">
            <div className='card'>
                <div className='card-header'>
                    <div className={`${styles.alignMiddle} row`}>
                        <h1 className='col-5'>
                            {data.raceName}
                        </h1>
                        <h3 className='col-2'>
                            Series: {data.series}
                        </h3>
                        <h3 className='col-2'>
                            Season: {data.season}
                        </h3>
                        <h3 className='col-2'>
                            Round: {data.round}
                        </h3>
                    </div>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-6'>
                            <Results result={data} />
                        </div>
                        <div className='col-6'>
                            <div className='row'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default SpecificRace