import { FC } from "react";
import List from "@mui/material/List";
import { ReusableCollapsableItem } from "./ReusableCollapsableItem";
import firstIcon from "/public/assets/firstIcon.png";
import fourthIcon from "/public/assets/fourthIcon.png";
import secondIcon from "/public/assets/secondIcon.png";
import thirdIcon from "/public/assets/thirdIcon.png";

export const ExpandableList: FC = () => {
  return (
    <List
      sx={{ width: "100%" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ReusableCollapsableItem
        icon={firstIcon}
        title="Profitabillity and Growth"
      />
      <ReusableCollapsableItem
        icon={secondIcon}
        title="Transparent & Fair Decentralized Earnings"
      />
      <ReusableCollapsableItem icon={thirdIcon} title="Launching the future" />
      <ReusableCollapsableItem
        icon={fourthIcon}
        title="Limitless Possibilities of AI & Crypto"
      />
    </List>
  );
};
