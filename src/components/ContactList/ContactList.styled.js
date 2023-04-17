import styled from '@emotion/styled';

export const ContactSet = styled.ul`
  padding: 0 20px;
`;

export const ContactElement = styled.li`
  padding: 4px 0;
  color: #ffffff;
`;

export const ContactElSpan = styled.span`
  display: inline-block;
  width: 200px;
`;

export const ContactBtn = styled.button`
  font-size: 14px;
  line-height: 1.1;
  padding: 2px 10px;
  border-radius: 4px;
  border: none;
  background-color: #ffffff;
  color: #000000;
  transition: background-color 250ms linear, color 250ms linear;
  cursor: pointer;
  &:hover {
    background-color: rgba(59, 144, 235, 1);
    color: #ffffff;
  }
`;
