import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    const anchorId = location.hash; // Ex: "#about"

    if (anchorId) {
      // Si un hash est présent, on défile directement vers l'élément correspondant
      const element = document.querySelector(anchorId);
      if (element) {
        console.log('Scrolling to:', anchorId, element);
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      // Sinon, on remet la page en haut
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}
