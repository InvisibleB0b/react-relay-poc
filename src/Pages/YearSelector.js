import { useRef, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
// import Styles from './Yearselector.module.css'

const supportedStartYear = 1950;
const supportedEndYear = 2021;

export const Yearselector = (props) => {

    let supportedYears = [];

    for (let index = supportedStartYear; index <= supportedEndYear; index++) {
        supportedYears.push(`${index}`);
    }

    const season = useParams();

    //REMOVE:
    console.log('props', props, season);


    return (
        <div className="container-fluid">
            <div className='row'>
                <input id="slider1" type="range" min={supportedStartYear} max={supportedEndYear} step="1" />
                {supportedYears.map((year, i) => {
                    return (
                        <p className='col-2' key={i}>
                            <Link to={`/${year}`}>
                                {year}
                            </Link>
                        </p>
                    )
                })}
            </div>
        </div >
    )

}
export default Yearselector