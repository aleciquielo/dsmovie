import { ReactComponent as StarFull } from 'recursos/IMG/Star-full.svg';
import { ReactComponent as StarHalf } from 'recursos/IMG/Star-half.svg';
import { ReactComponent as StarEmpty } from 'recursos/IMG/Star-empty.svg';
import './styles.css';

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    )
}

export default MovieStars;
