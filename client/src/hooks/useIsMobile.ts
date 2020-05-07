import { useState, useEffect } from 'react';
import { defaultMediaQueries } from '../util/defaultTheme';

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(window.innerWidth < defaultMediaQueries.large);

  function handleWindowSizeChange(): void {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < defaultMediaQueries.large);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange, true);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange, true);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
