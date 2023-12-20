import { Packager } from '@react95/icons';
import * as S from '../layoutStyling';
import styled from 'styled-components';

import CharacterFactoryImage from "../../assets/projects_imgs/character-factory.png";
import AiCompanionImage from "../../assets/projects_imgs/ai-companion.png"
import RoggerImage from "../../assets/projects_imgs/rogger.png"
import Zsp2WagrowiecWebsiteImage from "../../assets/projects_imgs/zsp2-wagrowiec-website.png"
import HomeMiddlemanImage from "../../assets/projects_imgs/home-middleman.png"

const SkillContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10%;
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
      max-width: 500px;
      max-height: 300px;
    }
`

interface PortfolioProps {
  showModal: boolean;
  closeModal: (event: React.MouseEvent<Element, MouseEvent>) => void;
  isMobile: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ showModal, closeModal, isMobile }) => {
  return (
    showModal && (
      <>
        <S.layoutMain
          isMobile={isMobile}
          title={"Projects"}
          closeModal={closeModal}
          height="100%"
          icon={<Packager variant="32x32_4" />}
        >
          <S.layoutMainContent bg="white" boxShadow="in">
            <S.textModal>
              <h1>My projects</h1>
              <SkillContainer>
                <h2><a href="https://github.com/Hukasx0/character-factory" target='_blank'>Character factory</a></h2>
                <img src={CharacterFactoryImage} alt="character factory webui screenshot" />
                <h2>Python, Jupyter Notebook, Google Colab, Gradio, Large Language Models, Stable Diffusion</h2>
                <h3>Python script with Gradio WebUI to automate/help create characters for SillyTavern, TavernAI, TextGenerationWebUI using artificial intelligence (Large Language Models and Stable Diffusion). This project also uses the <a href="https://github.com/Hukasx0/aichar" target='_blank'>aichar</a> library I wrote earlier for Python in the Rust language to create, parse and export AI characters/character files in different formats</h3>
                <h3></h3>
              </SkillContainer>
              <SkillContainer>
                <h2><a href="https://github.com/Hukasx0/ai-companion" target='_blank'>AI Companion</a></h2>
                <img src={AiCompanionImage} alt="AI Companion webui screenshot" />
                <h2>Rust, Actix, TypeScript, React, SCSS, SQLite, Large Language Models</h2>
                <h3>Backend + API + Frontend for running large language models of artificial intelligence on the local computer, with the addition of short-term memory, long-term memory, ai learning by chatting with the user and the ability to add your own custom data. Can be used as a easy to use and fast chat interface with AI chatbots or can be used as an API/Backend to other projects</h3>
              </SkillContainer>
              <SkillContainer>
                <h2><a href="https://github.com/Hukasx0/rogger" target='_blank'>Rogger</a></h2>
                <img src={RoggerImage} alt="Rogger admin panel screenshot" />
                <h2>Rust, Actix, JavaScript, SQLite, Docker</h2>
                <h3>Very lightweight, efficient, secure and easy to use Fullstack Blog Content Management System (CMS)</h3>
              </SkillContainer>
              <SkillContainer>
                <h2><a href="https://github.com/Hukasx0/zsp2wagrowiec-strona" target='_blank'>ZSP2 Wagrowiec website</a></h2>
                <img src={Zsp2WagrowiecWebsiteImage} alt="ZSP2 Wagrowiec website" />
                <h2>HTML5, Bootstrap, CSS, JavaScript, JQuery</h2>
                <h3>The website that won the school contest, the website automatically fetches the latest data from the school backend API</h3>
                <h3><a href="https://hukasx0.github.io/zsp2wagrowiec-strona/" target='_blank'>website preview</a></h3>
              </SkillContainer>
              <SkillContainer>
                <h2><a href="https://github.com/Hukasx0/Home_Middleman" target='_blank'>Home Middleman</a></h2>
                <img src={HomeMiddlemanImage} alt="Home Middleman admin panel screenshot" />
                <h2>HTML5, Bootstrap, Node.js, Express.js, Python, LaTeX</h2>
                <h3>A fullstack application that I wrote in Node.js to manage cyclic boring server tasks in your browser in a few clicks</h3>
              </SkillContainer>
              <h2>For the rest of the other, smaller projects or ones in which I only contributed, please visit my <a href="https://github.com/Hukasx0?tab=repositories" target='_blank'>GitHub</a></h2>
            </S.textModal>
          </S.layoutMainContent>
        </S.layoutMain>
      </>
    )
  );
}

export default Portfolio;
