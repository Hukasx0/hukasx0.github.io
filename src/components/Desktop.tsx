import { useState, useCallback, lazy, Suspense } from 'react';
import Taskbar from './taskbar/Taskbar';
import Shortcuts from './Shortcuts';

const About = lazy(() => import('./shortcuts/About'));
const CV = lazy(() => import('./shortcuts/CV'));
const Portfolio = lazy(() => import('./shortcuts/Portfolio'));
const Skills = lazy(() => import('./shortcuts/Skills'));
const Credits = lazy(() => import('./shortcuts/Credits'));
const WebampComponent = lazy(() => import('./shortcuts/MusicPlayer'));

function Desktop() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    const [aboutModal, setAboutModal] = useState(true);

    const openAboutModal = useCallback(() => {
      setAboutModal(true);
    }, []);

    const closeAboutModal = useCallback(() => {
      setAboutModal(false);
    }, []);

    const [cvModal, setCvModal] = useState(false);

    const openCvModal = useCallback(() => {
      setCvModal(true);
    }, []);

    const closeCvModal = useCallback(() => {
      setCvModal(false);
    }, []);

    const [portfolioModal, setPortfolioModal] = useState(false);

    const openPortfolioModal = useCallback(() => {
      setPortfolioModal(true);
    }, []);

    const closePortfolioModal = useCallback(() => {
      setPortfolioModal(false);
    }, []);

    const [skillsModal, setSkillsModal] = useState(false);

    const openSkillsModal = useCallback(() => {
      setSkillsModal(true);
    }, []);

    const closeSkillsModal = useCallback(() => {
      setSkillsModal(false);
    }, []);

    const [creditsModal, setCreditsModal] = useState(false);

    const openCreditsModal = useCallback(() => {
      setCreditsModal(true);
    }, []);

    const closeCreditsModal = useCallback(() => {
      setCreditsModal(false);
    }, []);

    const [webampDisplay, setWebampDisplay] = useState(false);

    const openWebamp = useCallback(() => {
      setWebampDisplay(true);
    }, []);

  return (
    <>
      <Suspense>
          <About showModal={aboutModal} closeModal={closeAboutModal} isMobile={isMobile} />
          <CV showModal={cvModal} closeModal={closeCvModal} isMobile={isMobile} />
          <Portfolio showModal={portfolioModal} closeModal={closePortfolioModal} isMobile={isMobile} />
          <Skills showModal={skillsModal} closeModal={closeSkillsModal} isMobile={isMobile} />
          <Credits showModal={creditsModal} closeModal={closeCreditsModal} isMobile={isMobile} />
        </Suspense>
        <Suspense>
          { webampDisplay && <WebampComponent webampDisplay={webampDisplay} setWebampDisplay={setWebampDisplay} /> }
        </Suspense>
        { Shortcuts(openAboutModal, openCvModal, openPortfolioModal, openSkillsModal, openWebamp) }
        { Taskbar(openAboutModal, openCvModal, openPortfolioModal, openSkillsModal, openCreditsModal) }
    </>
  )
}

export default Desktop
