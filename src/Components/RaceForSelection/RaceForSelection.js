import styles from './RaceForSelection.module.css'
import { useNavigate, useParams } from 'react-router-dom';
//graphql relevant
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';

const RaceForSelectionFragment = graphql`
fragment RaceForSelectionFragment on Race{
    raceName
    round
}
`;

export const RaceForSelection = (props) => {
    const params = useParams();
    const data = useFragment(RaceForSelectionFragment, props.race);
    const navigate = useNavigate();

    const selectRace = () => {
        navigate(`/${params.season}/${data?.round}`);
    }

    return (
        <div className="col-3 mb-2">
            <div className={`card ${styles.card}`} onClick={(e) => { e.preventDefault(); selectRace(); }}>
                <div className='card-header'>
                    <h2>
                        Round:  {data?.round}
                    </h2>
                    <h4>
                        {data?.raceName}
                    </h4>
                </div>
            </div>
        </div>
    )

}
export default RaceForSelection