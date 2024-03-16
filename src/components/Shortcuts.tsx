import {  Drvspace7, Packager, Wordpad, Computer, Bookmark, Mspaint, Shell3241 } from '@react95/icons'
import styled, { css } from 'styled-components';

interface IconProps {
  clickable?: boolean;
}  

const Icon = styled.div<IconProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 80px;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 12px;

  ${(props) =>
    props.clickable &&
    css`
      * {
        cursor: pointer;
      }
    `}
`;

function Shortcuts(openAbout: (event: React.MouseEvent<Element, MouseEvent>) => void,
                   openWebamp: (event: React.MouseEvent<Element, MouseEvent>) => void) {

  const redirect = (href: string) => () => {
    window.open(href, '_blank');
  };
  
  return (
    <>
    <Icon>
      <Computer variant="32x32_4"/>
        My computer
    </Icon>
    <Icon clickable={true}>
      <Wordpad variant="32x32_4" onClick={redirect("https://hukasx0.github.io/portfolio")}/>
        Portfolio.html
    </Icon>
    <Icon clickable={true}>
      <Bookmark variant="32x32_4" onClick={redirect("https://hukasx0.github.io/blog")}/>
        Blog.html
    </Icon>
    <Icon clickable={true}>
      <Shell3241 variant="32x32_4" onClick={openWebamp}/>
        winamp.exe
    </Icon>
    <Icon clickable={true}>
      <Packager variant="32x32_4" onClick={redirect("https://hukasx0.github.io/portfolio/projects")}/>
      Projects.html
    </Icon>
    <Icon clickable={true}>
      <Drvspace7 variant="32x32_4" onClick={openAbout}/>
        About me
    </Icon>
    <Icon clickable={true}>
      <Mspaint variant="32x32_4" onClick={redirect("https://hukasx0.github.io/portfolio")}/>
        Skills.html
    </Icon>
    </>
  )
}

export default Shortcuts
