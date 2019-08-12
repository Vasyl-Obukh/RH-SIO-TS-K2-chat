import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 0;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 25px;
  width: 300px;
  border-radius: 25px;
  border: 4px solid ${props => props.theme.primaryColor || '#000000'};
  color: ${props => props.theme.primaryReverseColor || '#ffffff'};
`;

export const Input = styled.input<any>`
  box-sizing: border-box;
  margin: 15px 0;
  padding: 10px 15px;
  width: 250px;
  border: 2px solid ${props => props.theme.primaryColor || '#000000'};
  outline: none;
  border-radius: 25px;
`;

export const Button = styled.button<any>`
  margin: 0 auto;
  padding: 10px 0;
  width: 250px;
  border: none;
  outline: none;
  border-radius: 25px;
  background-color: ${props => props.theme.primaryColor || '#000000'};
  color: ${props => props.theme.primaryReverseColor || '#ffffff'};
  text-align: center;
  transition: all .2s;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
    opacity: .85;
  }
`;

export const Close = styled.span`
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 50px;
  line-height: 45px;
  color: ${props => props.theme.primaryColor || '#000000'};
  cursor: pointer;
  transition: all .2s;
  
  &:hover {
    transform: scale(1.2);
    opacity: .75;
  }
`;