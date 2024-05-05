import { DescTypo, TitleTypo } from "./MainBackground";
import Image, { StaticImageData } from "next/image";

import { FC } from "react";

interface ReusableComponentProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
}

export const ReusableLayer: FC<ReusableComponentProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <>
      <div style={{ width: "65%", height: "100%" }}>
        <TitleTypo>{title}</TitleTypo>
        <DescTypo>{description}</DescTypo>
      </div>
      <div
        style={{
          width: "30%",
          height: "100%",
          marginLeft: "5%",
        }}
      >
        <Image src={imageUrl} height={200} alt="photo" loading="lazy" />
      </div>
    </>
  );
};
