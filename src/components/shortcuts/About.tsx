import { Button } from '@react95/core';
import { Drvspace7 } from '@react95/icons';
import * as S from '../layoutStyling';

import styled from 'styled-components';

import Avatar from "../../assets/avatar.png";

import GithubSvg from "../../assets/socials/github.svg";
import MisskeySvg from "../../assets/socials/misskey.svg";
import MatrixSvg from "../../assets/socials/matrix.svg";
import TryhackmePng from "../../assets/socials/THMlogo.png";
import HacktheboxWebp from "../../assets/socials/hackthebox.webp";
import LeetcodePng from "../../assets/socials/leetcode.png";

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 300px;
    height: 300px;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%;
  a, img {
    cursor: pointer;
  }
`

const Websites = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`

const contactStyle = {
  marginTop: "30px"
}

interface AboutProps {
  showModal: boolean;
  closeModal: (event: React.MouseEvent<Element, MouseEvent>) => void;
  isMobile: boolean;
}

const About: React.FC<AboutProps> = ({ showModal, closeModal, isMobile }) => {
  return (
    showModal && (
      <>
        <S.layoutMain
          isMobile={isMobile}
          title={"About me"}
          closeModal={closeModal}
          height="100%"
          icon={<Drvspace7 variant="32x32_4" />}
        >
          <S.layoutMainContent bg="white" boxShadow="in">
            <ImageDiv>
              <img src={Avatar} alt="Github avatar" />
            </ImageDiv>
            <S.textModal>
              <h1>Hubert "Hukasx0" Kasperek</h1>
              <span>
             <h2> I am a young programmer with a passion for computers, for years I have been interested in learning new technologies, programming languages, libraries, frameworks, ways to solve problems. </h2>
             <h2>Over the years I have learned many concepts from: Backend (Rust, Actix, C#, ASP .NET, Node.js), Databases (Sql , NoSql), Frontend (React, Angular, Svelte, Solid), Fullstack (Next.js, Astro), Artificial Intelligence (Large Language Models, Stable Diffusion), Low level programming (Assembly AMD64), Cyber Security, Penetration Testing and Bug Bounty (Finding security vulnerabilities in servers, applications and code), backend design and frontend design</h2>
             <h2>My projects are diverse, starting with my own <a href="https://github.com/Hukasx0/HALM-Assembler" target="_blank">Assembler written in Haskell</a>, going through a <a href="https://github.com/Hukasx0/rogger" target="_blank">Content Management System (CMS) for bloggers written in Rust</a> and ending with a <a href="https://github.com/Hukasx0/ai-companion" target="_blank">Backend + API for creation of AI chatbots written in Rust with React WebUI</a> and a <a href="https://github.com/Hukasx0/character-factory" target="_blank">script with Gradio WebUI for creating AI characters.</a> and many more available on my <a href="https://hukasx0.github.io/portfolio/" target='_blank'>Portfolio</a> and <a href="https://github.com/Hukasx0" target='_blank'>GitHub</a></h2>
              </span>
              <h1>My other websites</h1>
              <Websites>
                <h2><a href="https://hukasx0.github.io/portfolio/">Portfolio</a></h2>
                <h2><a href="https://hukasx0.github.io/blog/">Blog</a></h2>
              </Websites>
              <h1>My socials</h1>
              <Socials>
              <a href="https://github.com/Hukasx0" target="_blank">
                <img src={GithubSvg} width="40px" alt='Github' />
              </a>
              <a href="https://misskey.gg/@Hukasx0" target="_blank">
                <img src={MisskeySvg} width="40px" alt='Misskey' />
              </a>
              <a href="https://matrix.to/#/@hukasx0:matrix.org" target="_blank">
                <img src={MatrixSvg} width="35px" alt='Matrix' />
              </a>
              <a href="https://tryhackme.com/p/Hukasx0" target="_blank">
                <img src={TryhackmePng} width="40px" alt='TryHackMe' />
              </a>
              <a href="https://app.hackthebox.com/profile/696093" target="_blank">
                <img src={HacktheboxWebp} width="40px" alt='HackTheBox' />
              </a>
              <a href="https://leetcode.com/Hukasx0/" target="_blank">
                <img src={LeetcodePng} width="40px" alt='Leetcode' />
              </a>
              </Socials>
              <Button onClick={() => {
                window.location.href = `mailto:hubertkasp13@gmail.com`;
              }} style={contactStyle}>Contact me via e-mail</Button>
            </S.textModal>
          </S.layoutMainContent>
        </S.layoutMain>
      </>
    )
  );
}

export default About;
