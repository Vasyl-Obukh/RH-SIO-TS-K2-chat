import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

export const Title = styled.h2`
  margin: 0 0 10px 20px;
  color: ${props => props.theme.primaryColor || '#000000'}
`;