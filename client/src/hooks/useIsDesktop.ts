import { useState, useEffect } from 'react';
import { defaultMediaQueries } from '../util/defaultTheme';

function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth > defaultMediaQueries.large) {
      setIsDesktop(true);
    }
  }, []);
  return isDesktop;
}

export default useIsDesktop;
