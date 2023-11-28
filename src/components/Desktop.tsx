import { useState, useCallback } from 'react';
import Taskbar from './taskbar/Taskbar';
import Shortcuts from './Shortcuts';
import About from './shortcuts/About';
import CV from './shortcuts/CV';
import Portfolio from './shortcuts/Portfolio';

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

  return (
    <>
        { About(aboutModal, closeAboutModal, isMobile) }
        { CV(cvModal, closeCvModal, isMobile) }
        { Portfolio(portfolioModal, closePortfolioModal, isMobile) }
        { Shortcuts(openAboutModal, openCvModal, openPortfolioModal) }
        { Taskbar(openAboutModal, openCvModal, openPortfolioModal) }
    </>
  )
}

export default Desktop
