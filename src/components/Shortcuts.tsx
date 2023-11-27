import {  Drvspace7, Packager, Wordpad } from '@react95/icons'
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

function Shortcuts() {
  return (
    <>
    <Icon>
      <Packager variant="32x32_4"/>
        Projects
      </Icon>
        <Icon>
        <Wordpad variant="32x32_4"/>
        CV
      </Icon>
      <Icon>
      <Drvspace7 variant="32x32_4"/>
        About me
      </Icon>
    </>
  )
}

export default Shortcuts
