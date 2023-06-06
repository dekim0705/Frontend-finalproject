import styled from 'styled-components';


const StyledButton = styled.button`
  width: 90px;
  height: 56px;
  border: none;
  background-color: var(--point-color);
  color: #fff;
  font-size: 1.1em;
  opacity: 100%;
  border-radius: 10px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  &:hover {
    opacity: ${props => props.disabled ? '100%' : '50%'};
  }
`;


const Button = (props) => {
  
  return(
    <StyledButton {...props} />
  );
}
export default Button;