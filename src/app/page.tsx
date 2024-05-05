"use client";

import { FifthLayer } from "../components/FifthLayer/FifthLayer";
import { FourthLayer } from "../components/FourthLayer/FourthLayer";
import { Header } from "../components/FirstLayer/Header";
import Image from "next/image";
import { MainBackground } from "../components/FirstLayer/MainBackground";
import { SecondLayer } from "../components/SecondLayer/SecondLayer";
import { SixthLayer } from "../components/SixthLayer/SixthLayer";
import { ThirdLayer } from "../components/ThirdLayer/ThirdLayer";
import copyrights from "/public/assets/copyrights.png";
import frameIcons from "/public/assets/frameIcons.png";
import niftables from "/public/assets/niftables.png";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <div>
      <Header />
      <MainBackground />
      <SecondLayer />
      <ThirdLayer />
      <FourthLayer />
      <FifthLayer />
      <SixthLayer />
      <StyledFooter>
        <OutterDiv className="relative ">
          <InnerDiv>
            <Image src={copyrights} height={15} alt="photo" />
            <Image
              src={frameIcons}
              height={20}
              alt="photo"
              className="ml-12"
              loading="lazy"
              // style={{ marginLeft: "15%" }}
            />
          </InnerDiv>
          <ImageWrapper>
            <Image src={niftables} height={20} alt="photo" loading="lazy" />
          </ImageWrapper>
        </OutterDiv>
      </StyledFooter>
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
        }

        ::-webkit-scrollbar-thumb {
          background: purple;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #ff6347;
        }
      `}</style>
    </div>
  );
}

const StyledFooter = styled.footer`
  height: 40px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const OutterDiv = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const InnerDiv = styled.div`
  width: 40%;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const ImageWrapper = styled.div`
  width: 35%;
  color: white;
  display: flex;
  justify-content: flex-end;
`;
