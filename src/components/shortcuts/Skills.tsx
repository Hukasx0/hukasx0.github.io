import { Mspaint } from '@react95/icons';
import * as S from '../layoutStyling';
import styled from 'styled-components';

import RustSvg from "../../assets/skills/rust.svg";
import TypescriptSvg from "../../assets/skills/typescript.svg";
import JavascriptSvg from "../../assets/skills/javascript.svg";
import PythonSvg from "../../assets/skills/python.svg";
import CsharpSvg from "../../assets/skills/csharp.svg";
import HaskellSvg from "../../assets/skills/haskell.svg";

import ActixPng from "../../assets/skills/actix.png";
import NodePng from "../../assets/skills/nodejs.png";
import DotnetSvg from "../../assets/skills/dotnet.svg";
import ExpressSvg from "../../assets/skills/express.svg";
import FlaskSvg from "../../assets/skills/flask.svg";
import NextjsSvg from "../../assets/skills/nextjs.svg";

import ReactSvg from "../../assets/skills/react.svg";
import AngularSvg from "../../assets/skills/angular.svg";
import SvelteSvg from "../../assets/skills/svelte.svg";
import SolidSvg from "../../assets/skills/solid.svg";

import MysqlSvg from "../../assets/skills/mysql.svg";
import PostgresSvg from "../../assets/skills/postgres.svg";
import MssqlSvg from "../../assets/skills/mssql.svg";
import SqliteSvg from "../../assets/skills/sqlite.svg";
import RedisSvg from "../../assets/skills/redis.svg";

import Html5Svg from "../../assets/skills/html5.svg";
import Css3svg from "../../assets/skills/css3.svg";
import Scsssvg from "../../assets/skills/scss.svg";
import Bootstrapsvg from "../../assets/skills/bootstrap.svg";
import TailwindSvg from "../../assets/skills/tailwind.svg";

import GitSvg from "../../assets/skills/git.svg";
import DockerSvg from "../../assets/skills/docker.svg";
import figmaSvg from "../../assets/skills/figma.svg";
import JupyterSvg from "../../assets/skills/jupyter-notebook.svg";
import LinuxSvg from "../../assets/skills/linux.svg";

const SkillRow = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
`

const Skill = styled.div`
   margin: 10px 0;
   align-items: center;
   display: flex;
   gap: 5%;
`

interface SkillsProps {
  showModal: boolean;
  closeModal: (event: React.MouseEvent<Element, MouseEvent>) => void;
  isMobile: boolean;
}

const Skills: React.FC<SkillsProps> = ({ showModal, closeModal, isMobile }) => {
  return (
    showModal && (
      <>
        <S.layoutMain
          isMobile={isMobile}
          title={"Skills"}
          closeModal={closeModal}
          height="100%"
          icon={<Mspaint variant="32x32_4" />}
        >
          <S.layoutMainContent bg="white" boxShadow="in">
            <S.textModal>
              <h1>My skills</h1>
              <h2>You can find my professional skills on <a href="https://hukasx0.github.io/portfolio">my Portfolio website</a></h2>
              <h2>Programming languages</h2>
               <SkillRow>
                <Skill>
                 <img src={RustSvg} width="50px" alt="Rustlang logo" />
                 <h3>Rust</h3>
                </Skill>
                <Skill>
                 <img src={TypescriptSvg} width="50px" alt="TypeScript logo" />
                 <h3>TypeScript</h3>
                </Skill>
                <Skill>
                 <img src={JavascriptSvg} width="50px" alt="JavaScript logo" />
                 <h3>JavaScript</h3>
                </Skill>
                <Skill>
                 <img src={PythonSvg} width="50px" alt="Python logo" />
                 <h3>Python</h3>
                </Skill>
                <Skill>
                 <img src={CsharpSvg} width="50px" alt="C# logo" />
                 <h3>C#</h3>
                </Skill>
                <Skill>
                 <img src={HaskellSvg} width="50px" alt="Haskell logo" />
                 <h3>Haskell</h3>
                </Skill>
               </SkillRow>
              <h2>Backend</h2>
               <SkillRow>
               <Skill>
                    <img src={ActixPng} width="50px" alt="Actix logo" />
                    <h3>Actix</h3>
                    </Skill>
                    <Skill>
                    <img src={NodePng} width="50px" alt="Node.js logo" />
                    <h3>Node.js</h3>
                    </Skill>
               <Skill>
                    <img src={DotnetSvg} width="50px" alt=".NET logo" />
                    <h3>ASP .NET</h3>
                    </Skill>
                    <Skill>
                    <img src={ExpressSvg} width="50px" alt="Express.js logo" />
                    <h3>Express.js</h3>
                    </Skill>
                    <Skill>
                    <img src={NextjsSvg} width="50px" alt="Next.js logo" />
                    <h3>Next.js</h3>
                    </Skill>
                    <Skill>
                    <img src={FlaskSvg} width="50px" alt="Flask logo" />
                    <h3>Flask</h3>
                    </Skill>
               </SkillRow>
               <h2>Frontend</h2>
                <SkillRow>
                    <Skill>
                    <img src={ReactSvg} width="50px" alt="React logo" />
                    <h3>React</h3>
                    </Skill>
                    <Skill>
                    <img src={AngularSvg} width="50px" alt="Angular logo" />
                    <h3>Angular</h3>
                    </Skill>
                    <Skill>
                    <img src={SvelteSvg} width="40px" alt="Svelte logo" />
                    <h3>Svelte</h3>
                    </Skill>
                    <Skill>
                    <img src={SolidSvg} width="50px" alt="Solid logo" />
                    <h3>Solid.js</h3>
                    </Skill>
                </SkillRow>
               <h2>Databases</h2>
               <SkillRow>
                    <Skill>
                    <img src={MysqlSvg} width="50px" alt="MySql logo" />
                    <h3>MySql</h3>
                    </Skill>
                    <Skill>
                    <img src={PostgresSvg} width="40px" alt="MySql logo" />
                    <h3>PostgreSQL</h3>
                    </Skill>
                    <Skill>
                    <img src={MssqlSvg} width="50px" alt="MySql logo" />
                    <h3>Microsoft Sql Server</h3>
                    </Skill>
                    <Skill>
                    <img src={SqliteSvg} width="50px" alt="Sqlite logo" />
                    <h3>Sqlite</h3>
                    </Skill>
                    <Skill>
                    <img src={RedisSvg} width="50px" alt="Redis logo" />
                    <h3>Redis</h3>
                    </Skill>
                </SkillRow>
                <h2>Design</h2>
               <SkillRow>
               <Skill>
                    <img src={Html5Svg} width="50px" alt="HTML5 logo" />
                    <h3>HTML5</h3>
                    </Skill>
                    <Skill>
                    <img src={Css3svg} width="40px" alt="CSS logo" />
                    <h3>CSS3</h3>
                    </Skill>
                    <Skill>
                    <img src={Scsssvg} width="50px" alt="SCSS logo" />
                    <h3>SCSS</h3>
                    </Skill>
                    <Skill>
                    <img src={Bootstrapsvg} width="50px" alt="Bootstrap logo" />
                    <h3>Bootstrap</h3>
                    </Skill>
                    <Skill>
                    <img src={TailwindSvg} width="50px" alt="Tailwind logo" />
                    <h3>Tailwind</h3>
                    </Skill>
                </SkillRow>
                <h2>Tools</h2>
               <SkillRow>
               <Skill>
                    <img src={GitSvg} width="50px" alt="Git logo" />
                    <h3>Git</h3>
                    </Skill>
                    <Skill>
                    <img src={DockerSvg} width="50px" alt="Docker logo" />
                    <h3>Docker</h3>
                    </Skill>
                    <Skill>
                    <img src={figmaSvg} width="40px" alt="Figma logo" />
                    <h3>Figma</h3>
                    </Skill>
                    <Skill>
                    <img src={JupyterSvg} width="40px" alt="Figma logo" />
                    <h3>Jupyter Notebook</h3>
                    </Skill>
                    <Skill>
                    <img src={LinuxSvg} width="50px" alt="Linux logo" />
                    <h3>Linux</h3>
                    </Skill>
                </SkillRow>
            </S.textModal>
          </S.layoutMainContent>
        </S.layoutMain>
      </>
    )
  );
}

export default Skills;
