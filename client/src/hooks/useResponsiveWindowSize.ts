import { useState, useEffect, useCallback } from 'react';
import { defaultMediaQueries } from '../util/defaultTheme';

function useResponsiveWindowSize(): { isMobile: boolean; isTablet: boolean } {
  const [isTablet, setIsTablet] = useState(window.innerWidth < defaultMediaQueries.medium);
  const [isMobile, setIsMobile] = useState(window.innerWidth < defaultMediaQueries.large);

  const handleWindowSizeChange = useCallback(() => {
    if (typeof window !== 'undefined') {
      setIsTablet(window.innerWidth < defaultMediaQueries.medium);
      setIsMobile(window.innerWidth < defaultMediaQueries.large);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange, true);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange, true);
    };
  });

  return { isMobile, isTablet };
}

export default useResponsiveWindowSize;
