import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

import styled from "@emotion/styled";

interface CollapsibleListItemProps {
  icon: StaticImageData;
  title: string;
}

export const ReusableCollapsableItem: React.FC<CollapsibleListItemProps> = ({
  icon,
  title,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const exampleDescription = (
    <ListItemButton sx={{ pl: 4 }}>
      <StlText>
        At Creon, we handpick cutting-edge AI projects and offer our community
        and token holders early access and investment opportunities. Our
        community actively contributes to the growth and profitability of these
        projects, creating a dynamic ecosystem of innovation and shared success.
      </StlText>
    </ListItemButton>
  );

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <StlImage src={icon} alt="photo" />
        </ListItemIcon>
        <ListItemText>
          <StlTitle>{title}</StlTitle>
        </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {exampleDescription}
        </List>
      </Collapse>
    </>
  );
};

const StlTitle = styled(Typography)`
  margin-left: 10px;
  font-size: 14px;
  @media (max-width: 1000px) {
    font-size: 10px;
    margin-left: 5px;
  }
  @media (max-width: 500px) {
    font-size: 8px;
    margin-left: 0;
  }
`;

const StlImage = styled(Image)`
  width: 60px;
  height: 60px;
  @media (max-width: 1000px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 500px) {
    width: 30px;
    height: 30px;
  }
`;

const StlText = styled(Typography)`
  font-size: 10px;
  @media (max-width: 1000px) {
    font-size: 6px;
  }
  @media (max-width: 500px) {
    font-size: 8px;
  }
`;
