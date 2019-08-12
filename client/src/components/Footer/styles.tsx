import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 50px;
  background-color: ${props => props.theme && props.theme.primaryColor ? props.theme.primaryColor : '#000000'};
  color: ${props => props.theme && props.theme.primaryReverseColor ? props.theme.primaryReverseColor : '#ffffff'};
`;

export const Copyright = styled.p`
  text-align: center;
  color: inherit;
  font-style: italic;
  font-size: 14px;
`;