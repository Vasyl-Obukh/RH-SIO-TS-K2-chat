import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 25px 50px;
  background-color: ${props => props.theme && props.theme.primaryColor ? props.theme.primaryColor : '#000000'};
  color: ${props => props.theme && props.theme.primaryReverseColor ? props.theme.primaryReverseColor : '#ffffff'};
`;

export const HomeLink = styled(Link)`
  color: inherit;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  transition: all .2s;
  
  &:hover {
    text-decoration: underline;
  }
`;