import { useState, useCallback } from 'react';
import Taskbar from './taskbar/Taskbar';
import Shortcuts from './Shortcuts';
import About from './shortcuts/About';
import CV from './shortcuts/CV';
import Portfolio from './shortcuts/Portfolio';
import Skills from './shortcuts/Skills';
import Credits from './shortcuts/Credits';
import WebampComponent from './shortcuts/MusicPlayer';

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
        { About(aboutModal, closeAboutModal, isMobile) }
        { CV(cvModal, closeCvModal, isMobile) }
        { Portfolio(portfolioModal, closePortfolioModal, isMobile) }
        { Skills(skillsModal, closeSkillsModal, isMobile) }
        { Credits(creditsModal, closeCreditsModal, isMobile) }
        { WebampComponent(webampDisplay, setWebampDisplay)}
        { Shortcuts(openAboutModal, openCvModal, openPortfolioModal, openSkillsModal, openWebamp) }
        { Taskbar(openAboutModal, openCvModal, openPortfolioModal, openSkillsModal, openCreditsModal) }
    </>
  )
}

export default Desktop
