import { CircularProgress } from "@mui/material";
import styled from "@emotion/styled";

export const CenteredSpinner = () => {
  return (
    <StyledContainer>
      <LoadingComponent size={50} color="primary" />
    </StyledContainer>
  );
};

const LoadingComponent = styled(CircularProgress)`
  margin: 20px;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;
