import { Divider, Typography } from "@mui/material";

import styled from "@emotion/styled";

export const MainBackground = () => {
  return (
    <div className="relative">
      {/* <Image
          src={main_background}
          sizes="100vw"
          alt="Picture of the author"
        /> */}
      <video
        src={require("/public/assets/videoBg.mp4")}
        autoPlay
        muted
        loop
        className="w-full"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <StlDiv className="absolute transform -translate-y-full text-left">
        <TitleTypo className="text-white font-monument">
          {`THE WORLD'S FIRST`}
        </TitleTypo>
        <TitleTypo className="text-white">PLATFORM FOR TOKENIZING</TitleTypo>
        <TitleTypo className="text-white">AI BLOCKCHAIN PROJECTS</TitleTypo>
        <div style={{ width: "60%" }}>
          <StlDivider
            style={{
              marginTop: "30px",
            }}
          />
          <TextTypo
            className="text-white"
            style={{
              backgroundImage:
                "linear-gradient(101.8deg, rgb(28, 28, 224) -0.2%, rgb(153, 68, 230) 55.2%, rgb(235, 18, 180) 84.4%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hold the Creon Pass NFT and earn passive income from AI Tools
          </TextTypo>
          <StlDivider />
        </div>
      </StlDiv>
    </div>
  );
};

const StlDivider = styled(Divider)`
  height: 5px;
  background: linear-gradient(
    101.8deg,
    rgb(28, 28, 224) -0.2%,
    rgb(153, 68, 230) 55.2%,
    rgb(235, 18, 180) 84.4%
  );
  @media (max-width: 1000px) {
    height: 2px;
  }
`;

const StlDiv = styled.div`
  width: 100%;
  padding-left: 8vw;
`;

export const StlTypo = styled(Typography)`
  word-wrap: break-word;
  font-size: 2rem;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 0.5rem;
  }
`;

export const TitleTypo = styled(Typography)`
  word-wrap: break-word;
  font-size: 30px;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export const TextTypo = styled(Typography)`
  word-wrap: break-word;
  font-size: 20px;
  @media (max-width: 1000px) {
    font-size: 10px;
  }
  @media (max-width: 500px) {
    font-size: 8px;
  }
`;

export const DescTypo = styled(Typography)`
  word-wrap: break-word;
  font-size: 10px;
  @media (max-width: 1000px) {
    font-size: 8px;
  }
  @media (max-width: 500px) {
    font-size: 6px;
  }
`;
