import styled from "styled-components";
import Paper from "@mui/material/Paper";

export const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 90%;
  padding: ${({ theme }) => theme.spacing(2)};
`

export const StyledFooter = styled.footer`
    margin-top:calc(5% + 60px);
    bottom: 0;
`

export const StyledPaper = styled(Paper)`
  margin: ${({ theme }) => theme.spacing(3)} 0;
  padding: ${({ theme }) => theme.spacing(3)};
`