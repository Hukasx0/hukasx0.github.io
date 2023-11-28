import {  Drvspace7, Packager, Wordpad, WindowsExplorer, Shell3233, Computer, Mspaint } from '@react95/icons'
import styled from 'styled-components';

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 80px;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 12px;
  * {
    cursor: pointer;
  }
`

function Shortcuts(openAbout: (event: React.MouseEvent<Element, MouseEvent>) => void,
                   openCv: (event: React.MouseEvent<Element, MouseEvent>) => void,
                   openPortfolio: (event: React.MouseEvent<Element, MouseEvent>) => void,
                   openSkills: (event: React.MouseEvent<Element, MouseEvent>) => void) {
  return (
    <>
    <Icon>
      <WindowsExplorer variant="32x32_4"/>
        Explorer
    </Icon>
    <Icon>
      <Computer variant="32x32_4" />
        My computer
    </Icon>
    <Icon>
      <Packager variant="32x32_4" onClick={openPortfolio}/>
        Projects
      </Icon>
        <Icon>
        <Wordpad variant="32x32_4" onClick={openCv}/>
        CV
      </Icon>
      <Icon>
      <Drvspace7 variant="32x32_4" onClick={openAbout}/>
        About me
      </Icon>
      <Icon>
      <Mspaint variant="32x32_4" onClick={openSkills}/>
        Skills
      </Icon>
      <Icon>
      <Shell3233 variant="32x32_4" />
        Trash
      </Icon>
    </>
  )
}

export default Shortcuts
