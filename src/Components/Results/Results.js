import styles from './Results.module.css'

//graphql specific
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';
import Driver from '../Drivers/Driver';

const ResultsFragment = graphql`
fragment ResultsFragment on Race{
    results{
        position
        number
        grid
        laps
        status
        driver{
            givenName
            familyName
            code
        }
        ...DriversFragment
    }
}
`;

export const Results = (props) => {

    const { result } = props;
    const data = useFragment(ResultsFragment, result);

    return (
        <div className="row">
            <h3 className='mb-3'>Results:</h3>
            {data?.results.map((result, index) => {
                return (
                    <div className='col-6 mb-4' key={index}>
                        <div className={`${styles.totalHeight} card`}>
                            <div className='card-header'>
                                <div className='row'>
                                    <h4 className='col-12'>{result.position} ({result?.driver?.code})</h4>
                                    <p className={`${styles.driverName} col-12`}>{result.driver.givenName} {result.driver.familyName}</p>
                                </div>
                            </div>
                            <div className='card-body'>
                                <Driver driver={result} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}
export default Results