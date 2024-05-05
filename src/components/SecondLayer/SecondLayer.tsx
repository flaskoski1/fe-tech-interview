import { DescTypo, TextTypo, TitleTypo } from "../FirstLayer/MainBackground";

import { Button } from "@mui/material";
import { FC } from "react";
import styled from "@emotion/styled";

export const SecondLayer: FC = () => {
  return (
    <div className="relative h-full bg-black w-full flex justify-evenly items-center">
      <ResponsiveContainer className="w-2/5 text-white flex justify-center flex-col">
        <TitleTypo className="text-white">CREON PASS NFT</TitleTypo>
        <TextTypo
          className="text-white"
          style={{
            marginTop: "2rem",
            backgroundImage:
              "linear-gradient(101.8deg, rgb(28, 28, 224) -0.2%, rgb(153, 68, 230) 55.2%, rgb(235, 18, 180) 84.4%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </TextTypo>
        <DescTypo className="text-white" style={{ marginTop: "1rem" }}>
          Pre-launch investment opportunities for upcoming AI-projects
        </DescTypo>
        <DescTypo className="text-white" style={{ marginTop: "0.75rem" }}>
          Free and early access to Creon built AI projects
        </DescTypo>
        <DescTypo className="text-white" style={{ marginTop: "0.75rem" }}>
          Higher allocation limits on the Creon AI Launchpad
        </DescTypo>
        <DescTypo className="text-white" style={{ marginTop: "0.75rem" }}>
          Revenue share distribution from Creon built AI projects
        </DescTypo>
        <Button
          variant="outlined"
          fullWidth
          style={{
            marginTop: "4rem",
            border: "none",
            color: "white",
            textTransform: "none",
            fontWeight: "bold",
            background:
              "linear-gradient( 101.8deg, rgb(28, 28, 224) -0.2%,rgb(153, 68, 230) 55.2%, rgb(235, 18, 180) 84.4% )",
          }}
        >
          Buy Creon Pass
        </Button>
      </ResponsiveContainer>
      <div
        className="h-4/5 text-white"
        style={{
          width: "35%",
        }}
      >
        <video
          src={require("/public/assets/nft-video.mp4")}
          autoPlay
          muted
          loop
          className="w-full"
          style={{ width: "auto", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

const ResponsiveContainer = styled.div`
  height: 80vh;
  word-wrap: break-word;
  @media (max-width: 1000px) {
    height: 60vh;
  }
  @media (max-width: 500px) {
    height: 50vh;
  }
`;
