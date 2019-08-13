import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 50px;
  background-color: ${props => props.theme && props.theme.primaryColor ? props.theme.primaryColor : '#000000'};
  color: ${props => props.theme && props.theme.primaryReverseColor ? props.theme.primaryReverseColor : '#ffffff'};
`;

export const Link = styled(RouterLink)<any>`
  color: inherit;
  font-size: 24px;
  font-weight: ${props => props.as === 'span' ? 'normal' : 'bold'};
  font-style: ${props => props.as === 'span' ? 'italic' : 'initial'};
  text-decoration: none;
  transition: all .2s;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;