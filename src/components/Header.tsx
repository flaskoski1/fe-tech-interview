"use client";

import { FC, useState } from "react";

import { Button } from "@mui/material";
import CREON from "/public/assets/CREON.png";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { ReusableMenuItem } from "./ReusableMenuItem";
import Vector from "/public/assets/Vector.png";
import frameIcons from "/public/assets/frameIcons.png";
import styled from "@emotion/styled";

const MobileMenu: FC<{ isOpen: boolean; toggleMenu: () => void }> = ({
  isOpen,
  toggleMenu,
}) => (
  <div
    style={{
      height: isOpen ? "100vh" : "auto",
      position: isOpen ? "fixed" : "relative",
      width: "60%",
      top: 0,
      right: 0,
    }}
    className={`lg:hidden flex flex-col justify-between ${
      isOpen ? "block" : "hidden"
    } ${isOpen ? "bg-black h-screen" : ""} text-white`}
  >
    <div className="flex flex-col flex-grow">
      <div className="flex items-center p-4">
        <Button
          variant="outlined"
          style={{
            color: "white",
            borderColor: "white",
            textTransform: "none",
            fontWeight: "1000",
          }}
        >
          Connect
        </Button>
        <Button
          style={{ marginLeft: "30px" }}
          variant="contained"
          className="text-white"
          onClick={toggleMenu}
        >
          <CloseIcon />
        </Button>
      </div>
      <ul className="flex flex-col space-y-2 p-4 font-satoshi text-base font-medium">
        <ReusableMenuItem text="Creon Pass" />
        <ReusableMenuItem text="Token" isSoon />
        <ReusableMenuItem text="AI Revenue" isSoon />
        <ReusableMenuItem text="AI Launchpad" isSoon />
      </ul>
    </div>
    <div className="p-4 ml-8">
      <Image src={frameIcons} alt="photo" />
    </div>
  </div>
);

const DesktopMenu: FC = () => (
  <ul className="hidden lg:flex flex-row text-white items-center font-satoshi text-base font-medium">
    <ReusableMenuItem text="Creon Pass" />
    <ReusableMenuItem text="Token" isSoon />
    <ReusableMenuItem text="AI Revenue" isSoon />
    <ReusableMenuItem text="AI Launchpad" isSoon />
    <li className="ml-4">
      <StyledButton className="font-monument" variant="outlined">
        Connect
      </StyledButton>
    </li>
  </ul>
);

export const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`header absolute top-0 left-0 w-full flex justify-between ${
        menuOpen ? "p-0" : "p-4"
      } bg-opacity-70 z-50`}
    >
      <div
        className={`flex items-center ${menuOpen ? "flex-col" : "flex-row"} ${
          menuOpen && "p-4"
        }`}
      >
        <div className="flex items-center">
          <Image src={Vector} width={25} height={15} alt="Vector" />
          <div className="ml-2">
            <Image src={CREON} width={60} height={60} alt="CREON" />
          </div>
        </div>
      </div>

      <div className="menu flex items-center">
        <button
          className={`menu-toggle ${menuOpen && "hidden"} lg:hidden text-white`}
          onClick={toggleMenu}
        >
          Menu
        </button>
        <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
        <DesktopMenu />
      </div>
    </div>
  );
};

const StyledButton = styled(Button)`
  color: white;
  border-color: white;
  text-transform: none;
  padding: 0px;
  margin-left: 15px;
  width: 6rem;
  height: 2rem;
  font-weight: bold;
  border-width: 2px;
`;
