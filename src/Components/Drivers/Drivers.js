import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import styles from './Drivers.module.css';
import { DriversResultsFragment$key } from './__generated__/DriversResultsFragment.graphql'

const DriversResultFragment = graphql`
fragment DriversResultsFragment on Result {
        number
        position
        driver{
            givenName
            familyName
            dateOfBirth
            nationality
        }
}`;

export const Drivers = (props) => {




    const data = useFragment(DriversResultFragment, props.result);

    return (
        <li className={`${styles.list} col-4 card`}>
            <div className='card-body'>
                <h5 className='card-title'>
                    {data.position}
                </h5>
                <p className='card-text'>
                    {data.driver.givenName}
                </p>
                <p className='card-text'>
                    {data.driver.familyName}
                </p>
            </div>
        </li>
    )

}
export default Drivers