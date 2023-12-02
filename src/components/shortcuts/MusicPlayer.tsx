import { useEffect } from 'react';
import Webamp from 'webamp';

const WebampComponent = (webampDisplay: boolean, setWebampDisplay: React.Dispatch<React.SetStateAction<boolean>>) => {

  useEffect(() => {
    if (webampDisplay) {
      const wa = new Webamp({
        initialTracks: [],
        initialSkin: { url: "/Virtual_Reality_webamp_theme.wsz"},
      });

      wa.onClose(() => {
        setWebampDisplay(false);
        wa.dispose();
      });

      const winampContainer = document.getElementById('winamp-container');
      if (winampContainer) {
        wa.renderWhenReady(winampContainer);
      }

      return () => {
        setWebampDisplay(false);
      };
    }
  }, [webampDisplay]);

  return (
    <>
      {webampDisplay && <div id="winamp-container"></div>}
    </>
  );
};

export default WebampComponent;
