import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
  overflow-x: hidden;
  font-family: ${props => props.theme && props.theme.fontFamily ? props.theme.fontFamily : 'Arial, sans-serif'};
`;