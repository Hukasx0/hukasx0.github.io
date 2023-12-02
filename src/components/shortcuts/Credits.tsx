import { Mailnews20 } from '@react95/icons';
import * as S from '../layoutStyling';

import styled from 'styled-components';

const CenteredCredits = styled.div`
  display: flex;
  justify-content: center;
  gap: 10%;
`;


function Credits(showModal: boolean, closeModal: (event: React.MouseEvent<Element, MouseEvent>) => void, isMobile: boolean) {
  return (
    showModal && (
      <>
        <S.layoutMain
          isMobile={isMobile}
          title={"Credits"}
          closeModal={closeModal}
          height="100%"
          icon={<Mailnews20 variant="32x32_4" />}
        >
          <S.layoutMainContent bg="white" boxShadow="in">
            <S.textModal>
              <h1>Credits</h1>
              <span>
                <h2>This website was created using <a href="https://react.dev/" target='_blank'>React</a> and <a href="https://github.com/React95/React95" target='_blank'>React95</a> (a library with Windows95 components)</h2>
                <h2><a href="https://github.com/captbaritone/webamp" target='_blank'>Webamp</a> (the browser-based equivalent of Winamp 2.9)</h2>
                <h2>Theme for Webamp: <a href="https://skins.webamp.org/skin/5a214ec76a65200aa4c188e5e444b7de/Virtual_Reality.wsz/" target='_blank'>Virtual_Reality.wsz</a></h2>
                <h2>The <a href="https://www.pixelstalk.net/wp-content/uploads/images6/Pink-Aesthetic-Vaporwave-Wallpaper-HD.jpg" target='_blank'>wallpaper</a> you see on the page comes from here: <a href="https://www.pixelstalk.net/" target='_blank'>pixelstalk.net</a></h2>
                <CenteredCredits>
                  <h2><a href="https://github.com/Hukasx0/hukasx0.github.io" target='_blank'>project's GitHub repository</a></h2>
                  <h2>Hubert "Hukasx0" Kasperek</h2>
                </CenteredCredits>
              </span>
            </S.textModal>
          </S.layoutMainContent>
        </S.layoutMain>
      </>
    )
  );
}

export default Credits;
