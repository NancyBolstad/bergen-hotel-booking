import { useState, useEffect } from 'react';
import { defaultMediaQueries } from '../util/defaultTheme';

function useIsTablet(): boolean {
  const [isTablet, setIsMobile] = useState(window.innerWidth < defaultMediaQueries.medium);

  useEffect(() => {
    function handleWindowSizeChange(): void {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < defaultMediaQueries.medium);
      }
    }

    window.addEventListener('resize', handleWindowSizeChange, true);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange, true);
    };
  }, []);

  return isTablet;
}

export default useIsTablet;
