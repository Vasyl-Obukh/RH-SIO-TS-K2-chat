import styled from 'styled-components';

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  padding-top: 15px;
  grid-gap: 15px;
`;

export const Input = styled.input`
  padding: 10px 25px;
  border-radius: 15px;
  border: 2px solid ${props => props.theme.primaryColor || '#000000'};
  outline: none;
`;

export const Button = styled.button`
  margin: 0 auto;
  padding: 10px 0;
  width: 150px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: ${props => props.theme.primaryColor || '#000000'};
  color: ${props => props.theme.primaryReverseColor || '#ffffff'};
  text-align: center;
  transition: all .2s;
  cursor: pointer;
  
  &:hover {
    opacity: .85;
  }
`;