import { FC } from "react";
import { ReusableCard } from "./ReusableCard";
import image from "/public/assets/image.png";
import image_1 from "/public/assets/image_1.png";
import image_2 from "/public/assets/image_2.png";
import styled from "@emotion/styled";

export const FifthLayer: FC = () => {
  return (
    <div className="relative h-full bg-black w-full p-4 flex justify-evenly items-center">
      <ChildDiv>
        <ReusableCard
          imageUrl={image}
          title="TOKEN"
          subtitle="The Gateway token to the world of AI"
          description="Set to debut in the latter half of 2024, the CREON token serves as
            the pioneering link between cutting-edge AI initiatives and
            blockchain technology. This innovative token provides NFT and token
            holders with unparalleled access to our Launchpad, AI tools, and
            exclusive pre-launch investment prospects."
        />
      </ChildDiv>
      <ChildDiv>
        <ReusableCard
          imageUrl={image_1}
          title="REVENUE"
          subtitle="Driving income and growth through decentralization"
          description="CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support."
        />
      </ChildDiv>
      <ChildDiv>
        <ReusableCard
          imageUrl={image_2}
          title="LAUNCHPAD"
          subtitle="Driving the future of AI Innovation"
          description="The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors."
        />
      </ChildDiv>
    </div>
  );
};

const ChildDiv = styled.div`
  width: 25%;
  color: white;
  height: 80vh;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  padding-top: 5vh;
  @media (max-width: 1000px) {
    height: 50vh;
  }
  @media (max-width: 500px) {
    height: 45vh;
  }
`;
