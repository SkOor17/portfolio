import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    // 1. Réinitialiser la position du défilement à 0,0 lors du changement de page
    window.scrollTo(0, 0);

    // 2. Vérifier s'il y a un hash dans l'URL (ex: /#about)
    const anchorId = location.hash;
    if (anchorId) {
      const element = document.querySelector(anchorId);
      if (element) {
        // Défilement fluide vers l'élément
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start', // Alignement au début de l'élément
        });
      }
    }
  }, [location]); // Effectuer ce code à chaque changement de route

  return null;
}

