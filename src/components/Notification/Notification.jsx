import PropTypes from 'prop-types';
import { NotificationMessage } from 'components/Notification/Notification.styled.jsx';

export const Notification = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
