import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  background-color: '#431500';
  font-size: 6.125rem;
  font-family: 'SpectralSC';
`;

const LoginTitle = ({ content }) => {
  return <Title>{content}</Title>;
};

LoginTitle.propTypes = {
  content: PropTypes.string,
};

export default LoginTitle;
