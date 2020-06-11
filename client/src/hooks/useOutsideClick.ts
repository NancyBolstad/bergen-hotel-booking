import { useEffect, RefObject, useCallback } from 'react';

type EventType = MouseEvent | TouchEvent;

const useOutsideClick = (
  ref: RefObject<any>,
  callback: (event: EventType) => void,
  stopDefault?: boolean,
) => {
  const handleClickOutside = useCallback(
    event => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (stopDefault) {
          event.preventDefault();
          event.stopPropagation();
        }
        callback(event);
      }
    },
    [callback, ref, stopDefault],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, callback, handleClickOutside]);
};

export default useOutsideClick;
