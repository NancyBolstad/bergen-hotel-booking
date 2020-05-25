import { useEffect, RefObject } from 'react';

const useOutsideClick = (ref: RefObject<any>, callback: () => void) => {
  const handleClick = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);
};

export default useOutsideClick;
