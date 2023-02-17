import PropTypes from 'prop-types';
import {
  FeedbackButtonList,
  FeedbackButtonListItem,
} from 'components/FeedbackOptions/FeedbackOptions.styled.jsx';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackButtonList>
      {options.map(option => {
        return (
          <FeedbackButtonListItem
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackButtonListItem>
        );
      })}
    </FeedbackButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
