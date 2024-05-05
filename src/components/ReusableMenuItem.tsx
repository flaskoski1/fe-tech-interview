import { Typography } from "@mui/material";
import styled from "@emotion/styled";

interface MenuItemProps {
  text: string;
  isSoon?: boolean;
}

export const ReusableMenuItem: React.FC<MenuItemProps> = ({
  text,
  isSoon = false,
}) => (
  <li className="ml-4">
    {text}
    {isSoon && (
      <StlSup>
        <StlTypo>SOON</StlTypo>
      </StlSup>
    )}
  </li>
);

const StlSup = styled.sup`
  margin-left: 10px;
  background-color: black;
  border-radius: 18px;
  width: 40px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
`;

const StlTypo = styled(Typography)`
  color: purple;
  font-size: 10px;
  padding: 4px 0;
`;
