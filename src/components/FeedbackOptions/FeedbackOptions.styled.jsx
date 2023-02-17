import styled from '@emotion/styled';

export const FeedbackButtonList = styled.div`
  display: flex;
  margin: 20px 0 15px;
`;

export const FeedbackButtonListItem = styled.button`
  cursor: pointer;

  width: 90px;
  height: 35px;

  font-size: 20px;

  color: #304350;
  background-color: #fff;

  border: 0;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);

  :not(:last-child) {
    margin-right: 20px;
  }

  :hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    background-color: #aaa;
    color: #fff;
  }
`;
