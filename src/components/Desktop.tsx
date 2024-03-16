import { useState, useCallback, lazy, Suspense } from 'react';
import Taskbar from './taskbar/Taskbar';
import Shortcuts from './Shortcuts';

import About from './shortcuts/About';
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
      <About showModal={aboutModal} closeModal={closeAboutModal} isMobile={isMobile} />
      <Suspense>
          <Credits showModal={creditsModal} closeModal={closeCreditsModal} isMobile={isMobile} />
        </Suspense>
        <Suspense>
          { webampDisplay && <WebampComponent webampDisplay={webampDisplay} setWebampDisplay={setWebampDisplay} /> }
        </Suspense>
        { Shortcuts(openAboutModal, openWebamp) }
        { Taskbar(openAboutModal, openCreditsModal) }
    </>
  )
}

export default Desktop
