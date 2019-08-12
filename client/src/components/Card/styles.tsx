import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.li`
  margin: 15px 10px;
  height: 125px;
  width: 250px;
  list-style: none;
  border-radius: 25px;
  border: 4px solid ${props => props.theme.primaryColor || '#000000'};
  background-color: ${props => props.theme.primaryReverseColor || '#ffffff'};
  color: ${props => props.theme.primaryColor || '#000000'};
  transition: all .2s;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-decoration: none;
  color: inherit;
  font-size: 24px;
  font-weight: bold;
`;