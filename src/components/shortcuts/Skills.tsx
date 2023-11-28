import { Mspaint } from '@react95/icons';
import * as S from '../layoutStyling';
import styled from 'styled-components';

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

function Skills(showModal: boolean, closeModal: (event: React.MouseEvent<Element, MouseEvent>) => void, isMobile: boolean) {
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
              <h2>Programming languages</h2>
               <SkillRow>
                <Skill>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg" width="50px" alt="Rustlang logo" />
                 <h3>Rust</h3>
                </Skill>
                <Skill>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="50px" alt="TypeScript logo" />
                 <h3>TypeScript</h3>
                </Skill>
                <Skill>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" width="50px" alt="JavaScript logo" />
                 <h3>JavaScript</h3>
                </Skill>
                <Skill>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" width="50px" alt="Python logo" />
                 <h3>Python</h3>
                </Skill>
                <Skill>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg" width="50px" alt="C# logo" />
                 <h3>C#</h3>
                </Skill>
                <Skill>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg" width="50px" alt="Haskell logo" />
                 <h3>Haskell</h3>
                </Skill>
               </SkillRow>
              <h2>Backend</h2>
               <SkillRow>
               <Skill>
                    <img src="https://actix.rs/img/logo.png" width="50px" alt="Actix logo" />
                    <h3>Actix</h3>
                    </Skill>
                    <Skill>
                    <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" width="50px" alt="Node.js logo" />
                    <h3>Node.js</h3>
                    </Skill>
               <Skill>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg" width="50px" alt=".NET logo" />
                    <h3>ASP .NET</h3>
                    </Skill>
                    <Skill>
                    <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" width="50px" alt="Express.js logo" />
                    <h3>Express.js</h3>
                    </Skill>
                    <Skill>
                    <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" width="50px" alt="Flask logo" />
                    <h3>Flask</h3>
                    </Skill>
               </SkillRow>
               <h2>Frontend</h2>
                <SkillRow>
                    <Skill>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="50px" alt="React logo" />
                    <h3>React</h3>
                    </Skill>
                    <Skill>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" width="50px" alt="Angular logo" />
                    <h3>Angular</h3>
                    </Skill>
                    <Skill>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" width="40px" alt="Svelte logo" />
                    <h3>Svelte</h3>
                    </Skill>
                    <Skill>
                    <img src="https://www.solidjs.com/assets/logo-123b04bc.svg" width="50px" alt="Solid logo" />
                    <h3>Solid.js</h3>
                    </Skill>
                </SkillRow>
               <h2>Databases</h2>
               <SkillRow>
               <Skill>
                    <img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" width="50px" alt="MySql logo" />
                    <h3>MySql</h3>
                    </Skill>
                    <Skill>
                    <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" width="50px" alt="Sqlite logo" />
                    <h3>Sqlite</h3>
                    </Skill>
                    <Skill>
                    <img src="https://www.vectorlogo.zone/logos/redis/redis-icon.svg" width="50px" alt="Redis logo" />
                    <h3>Redis</h3>
                    </Skill>
                </SkillRow>
                <h2>Design</h2>
               <SkillRow>
               <Skill>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" width="50px" alt="HTML5 logo" />
                    <h3>HTML5</h3>
                    </Skill>
                    <Skill>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" width="40px" alt="CSS logo" />
                    <h3>CSS</h3>
                    </Skill>
                    <Skill>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" width="50px" alt="SCSS logo" />
                    <h3>SCSS</h3>
                    </Skill>
                    <Skill>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" width="50px" alt="Bootstrap logo" />
                    <h3>Bootstrap</h3>
                    </Skill>
                    <Skill>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" width="50px" alt="Tailwind logo" />
                    <h3>Tailwind</h3>
                    </Skill>
                </SkillRow>
                <h2>Tools</h2>
               <SkillRow>
               <Skill>
                    <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg" width="50px" alt="Git logo" />
                    <h3>Git</h3>
                    </Skill>
                    <Skill>
                    <img src="https://www.svgrepo.com/show/349342/docker.svg" width="50px" alt="Docker logo" />
                    <h3>Docker</h3>
                    </Skill>
                    <Skill>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" width="40px" alt="Figma logo" />
                    <h3>Figma</h3>
                    </Skill>
                    <Skill>
                    <img src="https://www.vectorlogo.zone/logos/jupyter/jupyter-icon.svg" width="40px" alt="Figma logo" />
                    <h3>Jupyter Notebook</h3>
                    </Skill>
                    <Skill>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" width="50px" alt="Linux logo" />
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
