import styled from '@emotion/styled';
import bodytilebottomTall from '../images/bodytilebottomTall.jpg'
import circlepattern from '../images/circlepattern.png';

export const PhonebookSection = styled.section`
  background: url(${bodytilebottomTall}) repeat-x left bottom;
`;

export const PhonebookWrap = styled.div`
  background: url(${circlepattern}) fixed repeat-x -275px bottom;
`;

export const Phonebook = styled.div`
  width: 550px;
  // background: #e2e1e6;
  background-color: #1b1e21;
  margin: 0 auto;
  padding: 20px;
  min-height: 2000px;
`;

export const PhonebookTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const ContactsTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  color: #ffffff;
`;
