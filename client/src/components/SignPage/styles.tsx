import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  grid-row-start: 0;
  grid-row-end: 3;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  padding: 50px;
  flex-direction: column;
  border-radius: 25px;
  border: 5px solid ${props => props.theme.primaryColor || '#000000'};
  color: ${props => props.theme.primaryColor || '#ffffff'};
`;

export const Label = styled.label`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const Input = styled.input<any>`
  padding: 10px 15px;
  border-radius: 25px;
  border: 2px solid ${props => props.theme.primaryColor || '#000000'};
  outline: none;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 0;
  border: none;
  outline: none;
  border-radius: 25px;
  background-color: ${props => props.theme.primaryColor || '#000000'};
  color: ${props => props.theme.primaryReverseColor || '#ffffff'};
  text-align: center;
  transition: all .2s;
  cursor: pointer;
  
  &:hover {
    opacity: .85;
  }
`;