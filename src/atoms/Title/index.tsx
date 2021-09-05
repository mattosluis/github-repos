import { StyledDiv, StyledText } from './styles';

const Title: React.FC = ({ children }) => {
  return (
    <StyledDiv>
      <StyledText>
        { children }
      </StyledText>
    </StyledDiv>
  );
}

export default Title;
