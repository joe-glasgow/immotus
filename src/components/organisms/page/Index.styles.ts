import styled from "styled-components";

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing(2)} 0;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
`