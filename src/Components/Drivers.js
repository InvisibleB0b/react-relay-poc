import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import styles from './Drivers.module.css';

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
        <li className={`${styles.list} col-4`}>
            <h5>
                {data.position}
            </h5>
            <p>
                {data.driver.givenName}
            </p>
            <p>
                {data.driver.familyName}
            </p>
        </li>
    )

}
export default Drivers