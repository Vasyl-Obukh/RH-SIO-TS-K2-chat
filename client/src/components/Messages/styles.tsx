import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  margin: 0;
  padding: 25px;
  flex-direction: column;
`;

export const Message = styled.li`
  display: grid;
  padding-bottom: 5px;
  grid-template-columns: auto 1fr;
  grid-column-gap: 10px;
  font-size: 20px;
  list-style: none;
`;

export const User = styled.span`
  padding: 2.5px;
  border-radius: 5px;
  background-color: ${props => props.theme.primaryColor || '#000000'};
  color: ${props => props.theme.primaryReverseColor || '#000000'};
  font-weight: bold;
  
  &::after {
    content: ':';
  }
`;

export const Text = styled.span`
  padding: 2.5px;
  font-style: italic;
`;