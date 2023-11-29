import { Button } from '@react95/core';
import { Drvspace7 } from '@react95/icons';
import * as S from '../layoutStyling';

import styled from 'styled-components';

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

const contactStyle = {
  "margin-top": "30px"
}

function About(showModal: boolean, closeModal: (event: React.MouseEvent<Element, MouseEvent>) => void, isMobile: boolean) {
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
              <img src="https://avatars.githubusercontent.com/u/82332291?v=4" alt="Github avatar" />
            </ImageDiv>
            <S.textModal>
              <h1>Hubert "Hukasx0" Kasperek</h1>
              <span>
             <h2> I am a young programmer with a passion for computers, for years I have been interested in learning new technologies, programming languages, libraries, frameworks, ways to solve problems. </h2>
             <h2>Over the years I have learned many concepts from: Backend (Rust, Actix, C#, ASP .NET, Node.js), Databases (Sql , NoSql), Frontend (React, Angular, Svelte, Solid), Fullstack, Artificial Intelligence (Large Language Models, Stable Diffusion), Low level programming (Assembly AMD64), Cyber Security, Penetration Testing and Bug Bounty (Finding security vulnerabilities in servers, applications and code), backend design and frontend design</h2>
             <h2>My projects are diverse, starting with my own <a href="https://github.com/Hukasx0/HALM-Assembler" target="_blank">Assembler written in Haskell</a>, going through a <a href="https://github.com/Hukasx0/rogger" target="_blank">Content Management System (CMS) for bloggers written in Rust</a> and ending with a <a href="https://github.com/Hukasx0/ai-companion" target="_blank">Backend + API for creation of AI chatbots written in Rust with React WebUI</a> and a <a href="https://github.com/Hukasx0/character-factory" target="_blank">script with Gradio WebUI for creating AI characters.</a> and many more available on my <a href="https://github.com/Hukasx0" target='_blank'>GitHub</a></h2>
              </span>
              <h1>My socials</h1>
              <Socials>
              <a href="https://github.com/Hukasx0" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" width="40px" />
              </a>
              <a href="https://misskey.gg/@Hukasx0" target="_blank">
                <img src="https://raw.githubusercontent.com/misskey-dev/assets/main/icon.png" width="40px" />
              </a>
              <a href="https://matrix.to/#/@hukasx0:matrix.org" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Matrix_icon.svg" width="35px" />
              </a>
              <a href="https://tryhackme.com/p/Hukasx0" target="_blank">
                <img src="https://assets.tryhackme.com/img/THMlogo.png" width="40px" />
              </a>
              <a href="https://app.hackthebox.com/profile/696093" target="_blank">
                <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/l72z2dydduvghanfmvgz" width="40px" />
              </a>
              <a href="https://leetcode.com/Hukasx0/" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" width="40px" />
              </a>
              </Socials>
              <Button onClick={() => {
                window.location.href = `mailto:hubertkasp13@gmail.com`;
              }} style={contactStyle}>Contact me</Button>
            </S.textModal>
          </S.layoutMainContent>
        </S.layoutMain>
      </>
    )
  );
}

export default About;
