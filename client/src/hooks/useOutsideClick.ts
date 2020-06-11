import { useEffect, RefObject, useCallback } from 'react';

type EventType = MouseEvent | TouchEvent;

const useOutsideClick = (ref: RefObject<any>, callback: (event: EventType) => void) => {
  const handleClickOutside = useCallback(
    event => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    },
    [callback, ref],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, callback, handleClickOutside]);
};

export default useOutsideClick;
