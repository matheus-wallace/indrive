import Subtitle from './Subtitle';
import Title from './Title';
import { styled } from 'styled-components';
import CardLogin from './CardLogin';
import Input from '../Form/Input';

const Main = styled.main`
  padding: 13.125rem 5.625rem 0 5.625rem;
  display: flex;
  gap: 30rem;
`;

const Login = () => {
  return (
    <Main>
      <div className="highlights">
        <Subtitle content="Destaques" />
        <CardLogin />
      </div>
      <div>
        <Title content="Indrive" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, in
          rerum perferendis eaque est consequatur voluptate temporibus nobis
          cumque maxime ratione? Soluta repellat iusto quo!
        </p>
        <Input type="email" />
      </div>
    </Main>
  );
};

export default Login;
