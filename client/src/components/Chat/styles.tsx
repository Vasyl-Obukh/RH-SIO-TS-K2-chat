import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 25px;
  border: 2px solid ${props => props.theme.primaryColor || '#000000'}
`;