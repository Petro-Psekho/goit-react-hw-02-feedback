import PropTypes from 'prop-types';
import {
  StatList,
  StatListItem,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatList>
      <StatListItem>Good: {good}</StatListItem>
      <StatListItem>Neutral: {neutral}</StatListItem>
      <StatListItem>Bad: {bad}</StatListItem>
      <StatListItem>Total: {total}</StatListItem>
      <StatListItem>Positive feedback: {positivePercentage}%</StatListItem>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
