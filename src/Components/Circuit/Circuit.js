import { useRef, useEffect, useContext } from 'react';
import styles from './Circuit.module.css'


//graphql specifics
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';

const CircuitFragment = graphql`
fragment CircuitFragment on Race{
    circuit{
        circuitName
        location{
            long
            lat
            locality
            country
        }
    }
}`;

export const Circuit = (props) => {

    const { circuit } = props;
    const data = useFragment(CircuitFragment, circuit);

    return (
        <div className="col-12">
            <h3 className='mb-3'>Circuit:</h3>
            <div className='card'>
                <div className='card-header'>
                    <h4>{data.circuit.circuitName}</h4>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <p className='col-6'>Country : {data.circuit.location.country}</p>
                        <p className='col-6'>City : {data.circuit.location.locality}</p>
                        <p className='col-6'>Longtitude : {data.circuit.location.long}</p>
                        <p className='col-6'>latitude : {data.circuit.location.lat}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Circuit