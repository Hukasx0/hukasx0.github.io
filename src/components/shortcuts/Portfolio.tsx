import { Packager } from '@react95/icons';
import * as S from '../layoutStyling';

function Portfolio(showModal: boolean, closeModal: (event: React.MouseEvent<Element, MouseEvent>) => void, isMobile: boolean) {
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
              <h1>TODO</h1>
            </S.textModal>
          </S.layoutMainContent>
        </S.layoutMain>
      </>
    )
  );
}

export default Portfolio;
