import { FC } from "react";
import { ReusableLayer } from "./ReusableLayer";
import image_5 from "/public/assets/image_5.png";
import image_6 from "/public/assets/image_6.png";
import image_7 from "/public/assets/image_7.png";
import styled from "@emotion/styled";

export const SixthLayer: FC = () => {
  return (
    <div
      className="relative h-full bg-black w-full flex justify-evenly items-center flex-col"
      style={{
        paddingBottom: "10vh",
      }}
    >
      <div
        className="text-white flex justify-center flex-row items-center"
        style={{
          width: "85%",
        }}
      >
        <ReusableLayer
          imageUrl={image_5}
          title="AI PROSPECTS, MARKET SIZE AND DEVELOPMENT PACE"
          description="The AI market is one of the most dynamically growing areas of
            technology. According to reports, the global AI market is expected
            to reach $190.61 billion by 2025, with a CAGR(Compound Annual Growth
            Rate) of 36.6%. The key drivers behind this growth include
            advancements in machine learning, increasing demand for big data
            analytics, and growing adoption of AI technology across various
            sectors such a healthcare, finance and transportation."
        />
      </div>
      <StyledDiv
        className="text-white flex justify-center flex-row items-center"
        style={{
          width: "85%",
        }}
      >
        <ReusableLayer
          imageUrl={image_6}
          title="AI TOOLS AND MARKET"
          description="AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision and robotics. With a wide range of applications, AI tools are becoming icreasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others."
        />
      </StyledDiv>
      <StyledDiv
        className="text-white flex flex-row items-center justify-centerl"
        style={{
          width: "85%",
        }}
      >
        <ReusableLayer
          imageUrl={image_7}
          title="AI, CRYPTO, AND NFT MARKET"
          description="Artifical Intelligence and blockchaing technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilites. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction effiecency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilites."
        />
      </StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div`
  margin-top: 5vh;
  @media (max-width: 1000px) {
    margin-top: 3vh;
  }
  @media (max-width: 500px) {
    margin-top: 1vh;
  }
`;
