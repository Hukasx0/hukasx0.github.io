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
             <h2>Over the years I have learned many concepts from: Backend (Rust, Actix, C#, ASP .NET, Node.js), Database (Sql , NoSql), Frontend (React, Angular, Svelte, Solid), Fullstack, Artificial Intelligence (Large Language Models, Stable Diffusion), Low level programming (Assembly AMD64), cyber security and penetration testing (use of nmap, hashcat, burp suite) and backend design. </h2>
             <h2>My projects are diverse, starting with my own <a href="https://github.com/Hukasx0/HALM-Assembler" target="_blank">Assembler written in Haskell</a>, going through a <a href="https://github.com/Hukasx0/rogger" target="_blank">fullstack application for bloggers</a> and ending with a <a href="https://github.com/Hukasx0/ai-companion" target="_blank">program for simple creation of AI chatbots</a> or a <a href="https://github.com/Hukasx0/character-factory" target="_blank">script with WebUI for creating AI characters.</a> and MANY MORE!</h2>
              </span>
            </S.textModal>
          </S.layoutMainContent>
        </S.layoutMain>
      </>
    )
  );
}

export default About;
