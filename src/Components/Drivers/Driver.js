import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
// import styles from './Driver.module.css';


const DriverFragment = graphql`
fragment DriversFragment on Result {
        position
        number
        driver{
            dateOfBirth
            nationality
        }
        time{
            time
            millis
        }
}`;

export const Driver = (props) => {

    const { driver } = props;
    const data = useFragment(DriverFragment, driver);

    return (

        <div className=''>
            <p>Number : {data.number}</p>
            <p>Date of Birth : {data.driver.dateOfBirth}</p>
            <p>Time : {data?.time?.time}</p>
            <p>Nationality : {data?.driver?.nationality}</p>
        </div>

    )

}
export default Driver