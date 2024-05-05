import { DescTypo, TextTypo, TitleTypo } from "./MainBackground";
import Image, { StaticImageData } from "next/image";

import { FC } from "react";
import comingSoon from "/public/assets/comingSoon.png";
import styled from "@emotion/styled";

interface ReusableComponentProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: StaticImageData;
}

export const ReusableCard: FC<ReusableComponentProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
}) => {
  return (
    <>
      <div className="flex justify-end w-full">
        <StyledImage src={comingSoon} alt="photo" loading="lazy" />
      </div>
      <div>
        <TitleTypo>{title}</TitleTypo>
        <TextTypo
          className="text-white"
          style={{
            backgroundImage:
              "linear-gradient(101.8deg, rgb(28, 28, 224) -0.2%, rgb(153, 68, 230) 55.2%, rgb(235, 18, 180) 84.4%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            paddingTop: "1vh",
          }}
        >
          {subtitle}
        </TextTypo>
      </div>
      <div style={{ paddingTop: "3vh" }}>
        <Image src={imageUrl} alt="photo" loading="lazy" />
        <DescTypo style={{ paddingTop: "2vh" }}>{description}</DescTypo>
      </div>
    </>
  );
};

const StyledImage = styled(Image)`
  @media (max-width: 1000px) {
    width: 40px;
  }
`;
