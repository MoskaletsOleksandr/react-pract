import { Event } from '../Event/Event';
import PropTypes from 'prop-types'
import { Board } from './EventBoard.styled';


export const EventBoard = ({ events }) => {
    console.log(events)
    return <Board>
        {events.map(({name, location, speaker, type, time}) => (<Event key={name} name={name} location={location} speaker={speaker} type={type} start={time.start} end={time.end} />) )}
    </Board>;
}

Event.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired, location: PropTypes.string.isRequired, speaker: PropTypes.string.isRequired, type: PropTypes.string.isRequired, time: {
                start: PropTypes.string.isRequired,
                end: PropTypes.string.isRequired
            }
        })
    )
}