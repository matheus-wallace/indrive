import { styled } from 'styled-components';

const SubtitleLogin = styled.h2`
  font-size: 3.125rem;
  font-weight: normal;
  color: #431500;
  &:after {
    content: '';
    /* width: 4.375rem;
    height: 0.125rem; */
    width: 70px;
    height: 2px;
    background-color: #f57053;
    border-radius: 2px;
  }
`;

const Subtitle = ({ content }) => {
  return <SubtitleLogin>{content}</SubtitleLogin>;
};

export default Subtitle;
