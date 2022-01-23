import { Link } from 'react-router-dom';

const supportedStartYear = 2000;
const supportedEndYear = 2021;


export const Yearselector = () => {

    let supportedYears = [];

    for (let index = supportedStartYear; index <= supportedEndYear; index++) {
        supportedYears.push(`${index}`);
    }

    return (
        <div className="container">

            <div className='row mt-4'>
                <div className='col-12'>
                    <h1>Select a year you wish to see races from</h1>
                </div>
                {supportedYears.map((year, i) => {
                    return (
                        <div key={i} className='col-2 mb-1 p-1'>
                            <div className='card pt-2 pb-2'>
                                <p className='text-center' >
                                    <Link to={`/${year}`}>
                                        {year}
                                    </Link>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )

}
export default Yearselector