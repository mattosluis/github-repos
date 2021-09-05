import { StyledButton } from './styles';

type ButtonProps = {
  onSearch: () => void
}

const Button: React.FC<ButtonProps> = ({ onSearch, children }) => {
  return (
    <StyledButton onClick={() => onSearch()}>
      { children }
    </StyledButton>
  );
}

export default Button;
