import { DescTypo, TextTypo, TitleTypo } from "./MainBackground";

import { FC } from "react";
import styled from "@emotion/styled";

export const ThirdLayer: FC = () => {
  return (
    <div
      className="bg-black w-full h-full"
      style={{
        paddingTop: "5vh",
      }}
    >
      <div style={{ marginLeft: "20vw" }}>
        <TitleTypo className="text-white">PROFITING THROUGH</TitleTypo>
      </div>
      <div style={{ marginLeft: "30vw" }}>
        <TitleTypo
          className="text-white"
          style={{
            backgroundImage:
              "linear-gradient(101.8deg, rgb(28, 28, 224) -0.2%, rgb(153, 68, 230) 55.2%, rgb(235, 18, 180) 84.4%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          AI INNOVATION & DECENTRALIZATION
        </TitleTypo>
      </div>
      <ResponsiveContainer className="relative h-full bg-black w-full flex justify-evenly items-center">
        <div className="w-6/12 bg-white flex justify-center flex-col h-4/5">
          <video
            src={require("/public/assets/creon-logo.mp4")}
            autoPlay
            muted
            loop
            className="w-full"
            style={{ width: "auto", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          className="flex items-center flex-col w-3/12 h-4/5"
          style={{
            marginTop: "10vh",
          }}
        >
          <TextTypo className="text-white" style={{ marginTop: "0.75rem" }}>
            The dynamic community driven business model of the future
          </TextTypo>
          <DescTypo
            variant="caption"
            className="text-white"
            style={{ marginTop: "0.75rem" }}
          >
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitabillity. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </DescTypo>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

const ResponsiveContainer = styled.div`
  height: 65vh;
  @media (max-width: 1000px) {
    height: 40vh;
  }
  @media (max-width: 500px) {
    height: 40vh;
  }
`;
