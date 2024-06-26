import { ExpandableList } from "../ReusableComponents/ExpandableList";
import { FC } from "react";
import Image from "next/image";
import { TitleTypo } from "../FirstLayer/MainBackground";
import creonImage from "/public/assets/creonImage.png";
import styled from "@emotion/styled";

export const FourthLayer: FC = () => {
  const textCombined = (
    <TitleTypo>
      OUR VISION IS TO SUPPORT THE INNOVATION OF AI BLOCKCHAIN PROJECTS{" "}
      <span
        className="text-white"
        style={{
          backgroundImage:
            "linear-gradient(101.8deg, rgb(28, 28, 224) -0.2%, rgb(153, 68, 230) 55.2%, rgb(235, 18, 180) 84.4%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        WHILE PRIORITIZING COMMUNITIES AND DEMOCRATIZING PROFITS
      </span>
    </TitleTypo>
  );

  return (
    <div className="relative h-full bg-black w-full flex justify-evenly">
      <LeftContainer className="text-white flex justify-center flex-col w-2/5">
        {textCombined}
        <Image
          src={creonImage}
          sizes="40vw"
          alt="Picture of the author"
          loading="lazy"
        />
      </LeftContainer>
      <RightContainer className="text-white h-full">
        <ResponsiveContainer>
          <ExpandableList />
        </ResponsiveContainer>
      </RightContainer>
    </div>
  );
};

const LeftContainer = styled.div`
  @media (max-width: 1000px) {
    display: flex;
    justify-content: start;
    align-content: flex-start;
    padding-top: 10%;
  }
`;

const RightContainer = styled.div`
  width: 35%;
`;

const ResponsiveContainer = styled.div`
  height: 60vh;
`;
