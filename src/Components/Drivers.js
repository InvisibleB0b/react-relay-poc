import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';

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
        <li className='col-4'>
            {data.position}
            {data.driver.givenName}
        </li>
    )

}
export default Drivers