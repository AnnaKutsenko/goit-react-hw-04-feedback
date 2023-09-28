import { OptionList, OptionButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <OptionList>
        {options.map(option => {
        return (
            <li key={option}>
            <OptionButton
                type="button"
                onClick={() => onLeaveFeedback(option)}
            >
                {option}
            </OptionButton>
            </li>
        );
        })}
    </OptionList>
    );
    };