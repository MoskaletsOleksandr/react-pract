import PropTypes from 'prop-types'
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { formatEventDuration, formatEventStart } from 'utils';
import { Card, EventName, Info, Chip } from './Event.styled';

export const Event = ({ name, location, speaker, type, start, end }) => {
    const formattedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end)
    return (
        <Card>
  <EventName>{name}</EventName>
  <Info>
                <i className="icon"></i>
                <FaMapMarkerAlt size={16} />
    {location}
  </Info>
  <Info>
                <i className="icon"></i>
                <FaUserAlt size={16} />
    {speaker}
  </Info>
  <Info>
                <i className="icon"></i>
                <FaCalendarAlt size={16} />
    {formattedStart}
  </Info>
  <Info>
                <i className="icon"></i>
                <FaClock size={16} />
    {duration}
  </Info>
            <Chip eventType={type}>{type}</Chip>
</Card>
    )
}

Event.propTypes = {
    name: PropTypes.string.isRequired, location: PropTypes.string.isRequired, speaker: PropTypes.string.isRequired, type: PropTypes.string.isRequired, start: PropTypes.string.isRequired, end: PropTypes.string.isRequired
}